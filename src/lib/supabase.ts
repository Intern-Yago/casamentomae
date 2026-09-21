import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xmafdbruxaegougiqugr.supabase.co';

// Valid publishable/anon key
const DEFAULT_ANON_KEY = 'sb_publishable_CK9HF20CWqzaNAqtPUMZgw_3Rwg10m6';

// Safety check: Secret keys (sb_secret_...) must never be used in browser client requests.
// If env contains a secret key by mistake, fallback to the publishable key.
const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseAnonKey = (envKey && !envKey.startsWith('sb_secret') && !envKey.startsWith('secret_'))
  ? envKey
  : DEFAULT_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
