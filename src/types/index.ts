export interface Program {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  schedule: string;
  trainer: string;
  benefits: string[];
  idealFor: string[];
  image: string;
  icon: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  certifications: string[];
  specialization: string[];
  languages: string[];
  bio: string;
  image: string;
  availableClasses: string[];
  personalTraining: boolean;
}

export interface ClassSchedule {
  id: string;
  day: string;
  time: string;
  name: string;
  trainer: string;
  duration: string;
  difficulty: string;
  capacity: number;
  booked: number;
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  quarterly: number;
  halfYearly: number;
  annual: number;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  goal: string;
  duration: string;
  text: string;
  rating: number;
  memberSince: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Gym' | 'Equipment' | 'Training' | 'Classes' | 'Events';
  image: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  enabled: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  discount: string;
  code: string;
  active: boolean;
}
