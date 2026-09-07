## Tecnologias Proibidas

| O que não usar | Motivo | Alternativa recomendada |
|---|---|---|
| Microserviços em v1 | Contradiz a diretriz de simplicidade sobre escalabilidade e aumenta complexidade operacional para um produto ainda em fase conceitual | Backend centralizado em arquitetura cliente-servidor |
| Contêineres em v1 | Não agregam valor relevante para a escala e maturidade atuais do projeto | Deploy simples da API e serviços gerenciados na nuvem |
| Bancos de dados NoSQL | O domínio é predominantemente relacional, com vínculos claros entre tutor, mascota, eventos e acessos compartilhados | PostgreSQL |

---

## Restrições de Ambiente

| Restrição | Descrição | Impacto no projeto |
|---|---|---|
| Web-first obrigatório | O produto foi migrado de mobile-first para web-first (React/Next.js), para simplificar testes na fase inicial | As decisões de UX, autenticação, navegação e priorização funcional devem partir do app web como canal principal |
| Dados centralizados na nuvem | O acesso compartilhado da mascota exige que múltiplos usuários e dispositivos consultem o mesmo dado persistido | A solução precisa de backend/API central e base de dados acessível de forma remota |
| Ambientes de dev / homologação / produção ainda não definidos | Os documentos-base registram explicitamente que as URLs e definições desses ambientes ainda não foram estabelecidas | Não se deve inventar estratégia detalhada de ambientes até haver definição formal |