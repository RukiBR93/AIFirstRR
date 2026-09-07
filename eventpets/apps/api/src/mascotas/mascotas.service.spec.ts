import { Test } from '@nestjs/testing';
import { MascotasService } from './mascotas.service';
import { SupabaseService } from '../auth/supabase.service';

describe('MascotasService', () => {
  let service: MascotasService;
  let single: jest.Mock;
  let insert: jest.Mock;
  let eq: jest.Mock;
  let select: jest.Mock;
  let from: jest.Mock;

  beforeEach(async () => {
    single = jest.fn();
    insert = jest.fn(() => ({ select: jest.fn(() => ({ single })) }));
    eq = jest.fn();
    select = jest.fn(() => ({ eq }));
    from = jest.fn(() => ({ insert, select }));

    const moduleRef = await Test.createTestingModule({
      providers: [
        MascotasService,
        {
          provide: SupabaseService,
          useValue: { client: { from } },
        },
      ],
    }).compile();

    service = moduleRef.get(MascotasService);
  });

  describe('create', () => {
    const dto = {
      nome: 'Rex',
      tipo_animal: 'perro' as const,
      raca: 'Labrador',
      sexo: 'macho' as const,
      idade: 3,
    };

    it('insere a mascota com dono_id e status ativa, e retorna os dados criados', async () => {
      const mascotaCriada = { id: 'mascota-1', ...dto, dono_id: 'tutor-1', status: 'ativa' };
      single.mockResolvedValue({ data: mascotaCriada, error: null });

      const resultado = await service.create('tutor-1', dto);

      expect(from).toHaveBeenCalledWith('mascotas');
      expect(insert).toHaveBeenCalledWith({
        ...dto,
        dono_id: 'tutor-1',
        status: 'ativa',
      });
      expect(resultado).toEqual(mascotaCriada);
    });

    it('propaga o erro quando o Supabase retorna falha', async () => {
      const erroSupabase = new Error('constraint violation');
      single.mockResolvedValue({ data: null, error: erroSupabase });

      await expect(service.create('tutor-1', dto)).rejects.toThrow(erroSupabase);
    });
  });

  describe('findAllByDono', () => {
    it('retorna as mascotas do dono informado', async () => {
      const mascotas = [{ id: 'mascota-1', nome: 'Rex' }];
      eq.mockResolvedValue({ data: mascotas, error: null });

      const resultado = await service.findAllByDono('tutor-1');

      expect(from).toHaveBeenCalledWith('mascotas');
      expect(eq).toHaveBeenCalledWith('dono_id', 'tutor-1');
      expect(resultado).toEqual(mascotas);
    });

    it('propaga o erro quando o Supabase retorna falha', async () => {
      const erroSupabase = new Error('conexão perdida');
      eq.mockResolvedValue({ data: null, error: erroSupabase });

      await expect(service.findAllByDono('tutor-1')).rejects.toThrow(erroSupabase);
    });
  });
});
