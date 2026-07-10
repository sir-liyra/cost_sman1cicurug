import mongoose from 'mongoose';
import type { IUser } from '@/types';

const userSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    nama: {
      type: String,
      required: [true, 'Nama is required'],
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ['admin', 'pengurus', 'anggota', 'guest'],
      default: 'anggota',
    },
    tahunAnjak: {
      type: String,
      enum: ['X', 'XI', 'XII'],
    },
    profilePicture: String,
    joinDate: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);
