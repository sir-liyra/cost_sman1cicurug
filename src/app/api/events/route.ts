import { dbConnect } from '@/lib/db';
import { eventSchema } from '@/lib/validations';
import Event from '@/models/Event';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    await dbConnect();

    const events = await Event.find({})
      .populate('createdBy', 'nama email')
      .sort({ date: 1 });

    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !['admin', 'pengurus'].includes((session.user as any).role)) {
      return NextResponse.json(
        { error: 'Only admin or pengurus can create events' },
        { status: 403 }
      );
    }

    const body = await req.json();

    // Validation
    const validation = eventSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    await dbConnect();

    const event = await Event.create({
      ...validation.data,
      createdBy: (session.user as any).id,
    });

    const populatedEvent = await Event.findById(event._id).populate(
      'createdBy',
      'nama email'
    );

    return NextResponse.json(populatedEvent, { status: 201 });
  } catch (error) {
    console.error('Event creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
}
