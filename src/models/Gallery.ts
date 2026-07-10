import mongoose from 'mongoose';
import type { IGallery } from '@/types';

const gallerySchema = new mongoose.Schema<IGallery>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Gallery || mongoose.model<IGallery>('Gallery', gallerySchema);
