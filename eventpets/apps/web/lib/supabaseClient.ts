import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Cliente usado no browser. Usa a chave anon (pública) — a
// autorização real é garantida pelas policies de RLS no Postgres.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
