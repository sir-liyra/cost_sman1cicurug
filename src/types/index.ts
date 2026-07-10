export interface IUser {
  _id: string;
  email: string;
  nama: string;
  password: string;
  role: 'admin' | 'pengurus' | 'anggota' | 'guest';
  tahunAnjak?: string;
  profilePicture?: string;
  joinDate: Date;
  isActive: boolean;
}

export interface IEvent {
  _id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  image?: string;
  category: 'workshop' | 'meetup' | 'kompetisi' | 'seminar';
  capacity: number;
  registeredUsers: string[];
  createdBy: string;
  createdAt: Date;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface IBlog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
}

export interface IGallery {
  _id: string;
  title: string;
  images: string[];
  event?: string;
  uploadedBy: string;
  uploadedAt: Date;
  category: string;
}

export interface IAnnouncement {
  _id: string;
  title: string;
  content: string;
  priority: 'high' | 'medium' | 'low';
  image?: string;
  createdBy: string;
  createdAt: Date;
  expiryDate?: Date;
}

export interface IMember {
  _id: string;
  nama: string;
  jabatan: string;
  divisi: string;
  profilePicture?: string;
  bio?: string;
  social?: {
    github?: string;
    instagram?: string;
    linkedin?: string;
  };
  year: number;
}
