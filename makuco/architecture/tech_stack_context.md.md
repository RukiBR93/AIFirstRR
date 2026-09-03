# Stack de Tecnologia

## Linguagem e Runtime

| Item | Tecnologia | Versão | Observação |
|---|---|---|---|
| Linguagem principal | TypeScript | A definir | Linguagem principal do backend, escolhida pela boa estruturação com NestJS |
| Runtime / Plataforma | Node.js | A definir | Plataforma de execução da API backend |
| Gerenciador de pacotes | npm | A definir | Gerenciamento de dependências do backend Node.js |

---

## Frameworks e Bibliotecas Principais

| Camada | Framework / Biblioteca | Versão | Finalidade |
|---|---|---|---|
| Backend | NestJS | A definir | Estruturar a API em módulos, controllers e services para a v1 |
| Frontend | Flutter | A definir | Desenvolver o app móvel com uma base única para Android e iOS |
| ORM / Acesso a dados | Supabase client / acesso PostgreSQL | A definir | Acesso aos dados persistidos e apoio à integração com serviços gerenciados da plataforma |
| Testes | A definir | A definir | Estratégia de testes ainda não definida nesta fase conceitual |

---

## Banco de Dados

| Tipo | Tecnologia | Versão | Uso no sistema |
|---|---|---|---|
| Relacional | PostgreSQL | A definir | Armazenar tutores, mascotas, eventos de cuidado e acessos compartilhados |
| Cache | Não definido para v1 | Não se aplica | Não há necessidade explícita de camada de cache nesta fase |
| Busca | Não definido para v1 | Não se aplica | Não há mecanismo de busca especializado previsto no escopo inicial |

---

## Infraestrutura e Cloud

| Item | Tecnologia | Observação |
|---|---|---|
| Cloud provider | Supabase | Fornece PostgreSQL gerenciado, autenticação e serviços úteis para uma v1 com foco em simplicidade |
| Containers | Não em v1 | Contêineres não agregam valor imediato para o tamanho atual do produto |
| Orquestração | Não em v1 | Não há necessidade de orquestração nesta etapa inicial |
| CI/CD | GitHub Actions | Suficiente para automação simples de build, teste e deploy |
| Monitoramento | A definir | Ferramenta de observabilidade ainda não decidida |

---

## Sistemas e Componentes Externos

> Registre todos os sistemas de terceiros, APIs externas e componentes compartilhados da organização que este sistema consome ou com os quais se integra.

| Sistema / Componente | Tipo | Finalidade | Como integra |
|---|---|---|---|
| Nenhum na v1 | Não se aplica | A primeira versão não terá integrações com veterinárias, compras, agendas ou sistemas externos | Não se aplica |

---

## Ferramentas de Desenvolvimento

| Ferramenta | Finalidade |
|---|---|
| VS Code | IDE principal sugerida para desenvolvimento do app Flutter e backend |
| Android Studio | Suporte ao desenvolvimento e testes do app móvel |
| Postman | Testes manuais da API |
| Insomnia | Alternativa para testes manuais da API |
| Git + GitHub | Versionamento de código e colaboração |
