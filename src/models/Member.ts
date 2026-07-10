import mongoose from 'mongoose';
import type { IMember } from '@/types';

const memberSchema = new mongoose.Schema<IMember>(
  {
    nama: {
      type: String,
      required: [true, 'Nama is required'],
      trim: true,
    },
    jabatan: {
      type: String,
      required: true,
    },
    divisi: {
      type: String,
      required: true,
    },
    profilePicture: String,
    bio: String,
    social: {
      github: String,
      instagram: String,
      linkedin: String,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Member || mongoose.model<IMember>('Member', memberSchema);
