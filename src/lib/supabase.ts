import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xmafdbruxaegougiqugr.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_anon_placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
