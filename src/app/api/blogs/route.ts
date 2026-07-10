import { dbConnect } from '@/lib/db';
import { blogSchema } from '@/lib/validations';
import Blog from '@/models/Blog';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    await dbConnect();

    const blogs = await Blog.find({ published: true })
      .populate('author', 'nama email')
      .sort({ createdAt: -1 });

    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !['admin', 'pengurus'].includes((session.user as any).role)) {
      return NextResponse.json(
        { error: 'Only admin or pengurus can create blogs' },
        { status: 403 }
      );
    }

    const body = await req.json();

    // Validation
    const validation = blogSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    await dbConnect();

    const blog = await Blog.create({
      ...validation.data,
      author: (session.user as any).id,
    });

    const populatedBlog = await Blog.findById(blog._id).populate(
      'author',
      'nama email'
    );

    return NextResponse.json(populatedBlog, { status: 201 });
  } catch (error) {
    console.error('Blog creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}
