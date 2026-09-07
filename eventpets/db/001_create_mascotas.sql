-- Já aplicado no projeto Supabase "EventPet" (zsdzxqbccnpyabhmfjrl)
-- via Supabase:apply_migration. Mantido aqui como referência versionada.

create table mascotas (
  id uuid primary key default gen_random_uuid(),
  dono_id uuid not null references auth.users(id),
  nome text not null,
  tipo_animal text not null check (tipo_animal in ('perro', 'gato', 'ave')),
  raca text not null,
  sexo text not null check (sexo in ('macho', 'femea')),
  idade integer not null,
  foto_url text,
  status text not null default 'ativa' check (status in ('ativa', 'arquivada')),
  created_at timestamp with time zone default now()
);

alter table mascotas enable row level security;

create policy "Tutor ve suas proprias mascotas"
  on mascotas for select
  using (auth.uid() = dono_id);

create policy "Tutor cria suas proprias mascotas"
  on mascotas for insert
  with check (auth.uid() = dono_id);
