# AIFirstRR

Repositório de estudo/prática do fluxo **AI-first de desenvolvimento**: da
ideação (Makuco) ao diagrama de arquitetura (C4 + ER) até a implementação
(EventPETS), passando por indicadores de equipe e um servidor MCP auxiliar.

## Estrutura

```
AIFirstRR/
├── makuco/       → Documentação de discovery/produto do projeto EventPETS
├── diagrams/     → Diagramas de arquitetura (C4) e modelo de dados (ER)
├── eventpets/    → Implementação: monorepo web (Next.js) + API (NestJS) + Supabase
├── evidencia/    → Prints de indicadores/métricas de equipe (OTD, throughput, SLA)
└── mcp/          → Servidor MCP local para inspecionar containers Docker
```

### `makuco/` — Discovery do produto

Documentação conceitual do **EventPETS**, um carnê virtual de cuidados para
mascotas (vacinas, desparasitações, medicamentos e lembretes), organizada por
tema:

- `overview/` — objetivo do projeto e glossário de domínio
- `product/` — escopo e features
- `architecture/` — stack técnica e restrições
- `managment/` — modelo de gestão do trabalho (Kanban, PBIs, DoD)

### `diagrams/`

- `C1.txt`, `C2.txt`, `C3.txt` — diagramas C4 (Contexto, Container, Componente)
  em PlantUML do EventPETS
- `erdiagram.txt` — diagrama entidade-relacionamento (Mermaid) do domínio
  (Usuário, Mascota, Evento de Cuidado, Acesso Compartilhado)
- `spec_feature.md` — spec funcional detalhada da feature "Cadastro de mascota"

### `eventpets/` — Implementação

Monorepo (npm workspaces) com:

- `apps/web` — frontend Next.js/React
- `apps/api` — backend NestJS, com módulos `auth`, `mascotas`, `carne`,
  `eventos`, `recordatorios` (1:1 com o diagrama C3)
- `db/` — scripts SQL de referência

Persistência e autenticação via **Supabase** (Postgres + Auth).

Ver [`eventpets/README.md`](eventpets/README.md) para instruções de setup e
execução (`npm install`, `npm run dev:api`, `npm run dev:web`).

**Status atual:** login e o fluxo de "Cadastro de mascota" / "Lista de
mascotas" estão implementados ponta a ponta; as demais features do roadmap
ainda não têm código.

### `evidencia/`

Capturas de tela de indicadores de equipe (OTD, throughput, SLA) por período,
usadas como evidência/registro de acompanhamento.

### `mcp/`

`mcp_docker_local.py` — servidor MCP ([FastMCP](https://github.com/jlowin/fastmcp))
que expõe ferramentas para listar containers, consultar logs, reiniciar
containers e inspecionar consumo de CPU/memória via o daemon Docker local.

## Como navegar o fluxo

1. Comece por `makuco/overview/project_goal_context.md.md` para entender o
   problema e o objetivo do produto.
2. Veja os diagramas em `diagrams/` para a visão arquitetural (C4) e de dados
   (ER).
3. Explore `eventpets/` para o código correspondente à primeira fatia
   implementada.
