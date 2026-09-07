import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../auth/supabase.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';

@Injectable()
export class MascotasService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(donoId: string, dto: CreateMascotaDto) {
    const { data, error } = await this.supabase.client
      .from('mascotas')
      .insert({ ...dto, dono_id: donoId, status: 'ativa' })
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async findAllByDono(donoId: string) {
    const { data, error } = await this.supabase.client
      .from('mascotas')
      .select('id, nome, tipo_animal, raca, sexo, idade, foto_url, status')
      .eq('dono_id', donoId);

    if (error) throw error;
    return data;
  }
}
