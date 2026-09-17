import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xmafdbruxaegougiqugr.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_CK9HF20CWqzaNAqtPUMZgw_3Rwg10m6';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
