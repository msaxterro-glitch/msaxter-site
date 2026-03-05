import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: 'nunta' | 'corporate' | 'club' | 'festival';
  description?: string;
  image?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  event_type: string;
  message: string;
  rating: number;
  date: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: 'nunta' | 'corporate' | 'club' | 'portrait';
  featured: boolean;
}
