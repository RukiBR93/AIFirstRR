import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('supabaseClient', () => {
  beforeEach(() => {
    vi.resetModules();
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://example.supabase.co';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'anon-key';
  });

  it('cria um client do Supabase configurado com a URL e a anon key do ambiente', async () => {
    const { supabase } = await import('./supabaseClient');

    expect(supabase).toBeDefined();
    expect(supabase.auth).toBeDefined();
  });
});
