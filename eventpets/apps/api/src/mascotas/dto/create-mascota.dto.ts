export const TIPOS_ANIMAL_VALIDOS = ['perro', 'gato', 'ave'] as const;
export const SEXOS_VALIDOS = ['macho', 'femea'] as const;

export interface CreateMascotaDto {
  nome: string;
  tipo_animal: (typeof TIPOS_ANIMAL_VALIDOS)[number];
  raca: string;
  sexo: (typeof SEXOS_VALIDOS)[number];
  idade: number;
  foto_url?: string;
}

// Validação manual simples (v1 sem class-validator para manter o
// esqueleto enxuto). Retorna a mensagem de erro ou null se válido.
export function validateCreateMascotaDto(body: any): string | null {
  const camposObrigatorios = ['nome', 'tipo_animal', 'raca', 'sexo', 'idade'];
  for (const campo of camposObrigatorios) {
    if (body[campo] === undefined || body[campo] === null || body[campo] === '') {
      return `Campo obrigatório ausente: ${campo}`;
    }
  }
  if (!TIPOS_ANIMAL_VALIDOS.includes(body.tipo_animal)) {
    return `tipo_animal inválido. Valores aceitos: ${TIPOS_ANIMAL_VALIDOS.join(', ')}`;
  }
  if (!SEXOS_VALIDOS.includes(body.sexo)) {
    return `sexo inválido. Valores aceitos: ${SEXOS_VALIDOS.join(', ')}`;
  }
  if (typeof body.idade !== 'number' || body.idade < 0) {
    return 'idade deve ser um número maior ou igual a 0';
  }
  return null;
}
