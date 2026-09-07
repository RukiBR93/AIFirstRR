## Frameworks e Bibliotecas Principais

| Camada | Framework / Biblioteca | Versão | Finalidade |
|---|---|---|---|
| Backend | NestJS | 10.4.22 | Estruturar a API em módulos, controllers e services para a v1 |
| Frontend | React (Next.js) | ^14.2.0 | Desenvolver a aplicação web, compartilhando TypeScript com o backend |
| ORM / Acesso a dados | Supabase client (@supabase/supabase-js) | ^2.45.0 | Acesso aos dados persistidos e apoio à integração com serviços gerenciados da plataforma |
| Testes (backend) | Jest + `@nestjs/testing` | ^29.7.0 | Testes unitários de services, controllers e guards do backend, com o cliente Supabase mockado |
| Testes (frontend) | Vitest + Testing Library | ^1.6.1 | Testes de componentes das páginas Next.js, com Supabase e `next/navigation` mockados |

## Ferramentas de Desenvolvimento

| Ferramenta | Finalidade |
|---|---|
| VS Code | IDE principal para desenvolvimento do frontend Next.js e backend NestJS |
| Postman | Testes manuais da API |
| Insomnia | Alternativa para testes manuais da API |
| Git + GitHub | Versionamento de código e colaboração |