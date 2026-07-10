import mongoose from 'mongoose';
import type { IEvent } from '@/types';

const eventSchema = new mongoose.Schema<IEvent>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    date: {
      type: Date,
      required: [true, 'Date is required'],
    },
    time: {
      type: String,
      required: [true, 'Time is required'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
    },
    image: String,
    category: {
      type: String,
      enum: ['workshop', 'meetup', 'kompetisi', 'seminar'],
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
      min: 1,
    },
    registeredUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['upcoming', 'ongoing', 'completed'],
      default: 'upcoming',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Event || mongoose.model<IEvent>('Event', eventSchema);
