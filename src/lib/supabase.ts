import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export const WHATSAPP_NUMBER = '919876543210';
export const GYM_PHONE = '+91 98765 43210';
export const GYM_EMAIL = 'hello@vyrafitness.in';
export const GYM_ADDRESS = '123 Main Road, Whitefield, Bengaluru, Karnataka 560066';
export const GYM_MAPS_URL = 'https://maps.google.com/?q=Whitefield+Bengaluru';

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
