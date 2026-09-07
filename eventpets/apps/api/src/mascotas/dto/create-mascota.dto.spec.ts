import { validateCreateMascotaDto } from './create-mascota.dto';

describe('validateCreateMascotaDto', () => {
  const mascotaValida = {
    nome: 'Rex',
    tipo_animal: 'perro',
    raca: 'Labrador',
    sexo: 'macho',
    idade: 3,
  };

  it('retorna null quando todos os campos são válidos', () => {
    expect(validateCreateMascotaDto(mascotaValida)).toBeNull();
  });

  it.each(['nome', 'tipo_animal', 'raca', 'sexo', 'idade'] as const)(
    'retorna erro quando falta o campo obrigatório "%s"',
    (campo) => {
      const body: Record<string, unknown> = { ...mascotaValida };
      delete body[campo];
      expect(validateCreateMascotaDto(body)).toBe(
        `Campo obrigatório ausente: ${campo}`,
      );
    },
  );

  it('retorna erro quando tipo_animal não é um valor aceito', () => {
    const erro = validateCreateMascotaDto({ ...mascotaValida, tipo_animal: 'dragón' });
    expect(erro).toMatch(/tipo_animal inválido/);
  });

  it('retorna erro quando sexo não é um valor aceito', () => {
    const erro = validateCreateMascotaDto({ ...mascotaValida, sexo: 'indefinido' });
    expect(erro).toMatch(/sexo inválido/);
  });

  it('retorna erro quando idade não é um número', () => {
    const erro = validateCreateMascotaDto({ ...mascotaValida, idade: 'três' });
    expect(erro).toBe('idade deve ser um número maior ou igual a 0');
  });

  it('retorna erro quando idade é negativa', () => {
    const erro = validateCreateMascotaDto({ ...mascotaValida, idade: -1 });
    expect(erro).toBe('idade deve ser um número maior ou igual a 0');
  });

  it('aceita idade igual a 0', () => {
    expect(validateCreateMascotaDto({ ...mascotaValida, idade: 0 })).toBeNull();
  });
});
