import mongoose from 'mongoose';
import type { IAnnouncement } from '@/types';

const announcementSchema = new mongoose.Schema<IAnnouncement>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    priority: {
      type: String,
      enum: ['high', 'medium', 'low'],
      default: 'medium',
    },
    image: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    expiryDate: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Announcement ||
  mongoose.model<IAnnouncement>('Announcement', announcementSchema);
