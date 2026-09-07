import { BadRequestException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthGuard } from '../auth/auth.guard';
import { MascotasController } from './mascotas.controller';
import { MascotasService } from './mascotas.service';

describe('MascotasController', () => {
  let controller: MascotasController;
  let service: { create: jest.Mock; findAllByDono: jest.Mock };

  beforeEach(async () => {
    service = { create: jest.fn(), findAllByDono: jest.fn() };

    const moduleRef = await Test.createTestingModule({
      controllers: [MascotasController],
      providers: [{ provide: MascotasService, useValue: service }],
    })
      // O guard é testado isoladamente em auth.guard.spec.ts; aqui só
      // precisamos que a rota fique acessível para testar o controller.
      .overrideGuard(AuthGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = moduleRef.get(MascotasController);
  });

  describe('create', () => {
    const body = {
      nome: 'Rex',
      tipo_animal: 'perro',
      raca: 'Labrador',
      sexo: 'macho',
      idade: 3,
    };
    const req = { user: { id: 'tutor-1' } };

    it('delega ao service quando o body é válido', async () => {
      service.create.mockResolvedValue({ id: 'mascota-1', ...body });

      const resultado = await controller.create(body, req);

      expect(service.create).toHaveBeenCalledWith('tutor-1', body);
      expect(resultado).toEqual({ id: 'mascota-1', ...body });
    });

    it('lança BadRequestException e não chama o service quando falta um campo obrigatório', async () => {
      const { nome: _omitido, ...bodyInvalido } = body;

      await expect(controller.create(bodyInvalido, req)).rejects.toThrow(BadRequestException);
      expect(service.create).not.toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('delega ao service usando o usuário autenticado da requisição', async () => {
      const mascotas = [{ id: 'mascota-1' }];
      service.findAllByDono.mockResolvedValue(mascotas);

      const resultado = await controller.findAll({ user: { id: 'tutor-1' } });

      expect(service.findAllByDono).toHaveBeenCalledWith('tutor-1');
      expect(resultado).toEqual(mascotas);
    });
  });
});
