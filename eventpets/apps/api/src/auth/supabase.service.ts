import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import ws from 'ws';

@Injectable()
export class SupabaseService {
  public readonly client: SupabaseClient;

  constructor(config: ConfigService) {
    // Usa a service_role key: o backend confia nas próprias regras de
    // negócio/autorização, além das policies de RLS já existentes.
    //
    // Node.js < 22 não tem WebSocket nativo, e o cliente Realtime do
    // Supabase exige um transport explícito nesse caso (não usamos
    // Realtime nesta v1, mas o client sempre o instancia internamente).
    this.client = createClient(
      config.get<string>('SUPABASE_URL')!,
      config.get<string>('SUPABASE_SERVICE_ROLE_KEY')!,
      {
        realtime: {
          transport: ws as any,
        },
      },
    );
  }
}
