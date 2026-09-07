# EventPETS

Monorepo com npm workspaces: `apps/web` (Next.js) e `apps/api` (NestJS),
conectados a um projeto Supabase (Postgres + Auth).

## Estrutura

```
eventpets/
├── apps/
│   ├── web/    → App web (React / Next.js) — Tutor e Familiar/cuidador
│   └── api/    → Backend / API (NestJS) — regras de negócio e persistência
├── db/         → Scripts SQL / migrations de referência
└── package.json
```

Cada módulo do backend (`api/src/*`) corresponde 1:1 aos componentes do
diagrama C3: `auth`, `mascotas`, `carne`, `eventos`, `recordatorios`.

## Setup

1. Copiar `apps/web/.env.local.example` → `apps/web/.env.local`
2. Copiar `apps/api/.env.example` → `apps/api/.env`
3. Preencher as 3 chaves do Supabase (Project Settings → API):
   - `SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (frontend)
   - `SUPABASE_SERVICE_ROLE_KEY` (backend apenas — nunca expor no frontend)
4. Instalar dependências:
   ```
   npm install
   ```
5. Rodar em dois terminais:
   ```
   npm run dev:api
   npm run dev:web
   ```

## Testes

- **API** (Jest + `@nestjs/testing`): `npm test --workspace=apps/api`
- **Web** (Vitest + Testing Library): `npm test --workspace=apps/web`

Cobrem a validação do DTO de mascota, o `MascotasService`/`MascotasController`
(com o Supabase mockado), o `AuthGuard`, e as páginas de login e lista de
mascotas do frontend (Supabase e `next/navigation` mockados).

## Status desta v1

Implementado de ponta a ponta: login (Supabase Auth), "Cadastro de
mascota" e "Lista de mascotas" (spec, contrato de API, tabela
`mascotas`, telas e endpoints). As demais features do roadmap ainda
não têm código — devem ser adicionadas seguindo o mesmo padrão de spec
já usado nestas primeiras.
