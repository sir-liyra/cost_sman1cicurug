import { dbConnect } from '@/lib/db';
import { hashPassword } from '@/lib/utils';
import { registerSchema } from '@/lib/validations';
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validation
    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { nama, email, password, tahunAnjak } = validation.data;

    await dbConnect();

    // Check if user exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email sudah terdaftar' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await User.create({
      nama,
      email: email.toLowerCase(),
      password: hashedPassword,
      tahunAnjak,
      role: 'anggota',
    });

    return NextResponse.json(
      {
        message: 'Registrasi berhasil. Silakan login.',
        user: {
          id: user._id,
          email: user.email,
          nama: user.nama,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat registrasi' },
      { status: 500 }
    );
  }
}
