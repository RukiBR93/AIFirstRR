# Restrições e Decisões Técnicas

## Tecnologias Proibidas

| O que não usar | Motivo | Alternativa recomendada |
|---|---|---|
| Microserviços em v1 | Contradiz a diretriz de simplicidade sobre escalabilidade e aumenta complexidade operacional para um produto ainda em fase conceitual | Backend centralizado em arquitetura cliente-servidor |
| Contêineres em v1 | Não agregam valor relevante para a escala e maturidade atuais do projeto | Deploy simples da API e serviços gerenciados na nuvem |
| Bancos de dados NoSQL | O domínio é predominantemente relacional, com vínculos claros entre tutor, mascota, eventos e acessos compartilhados | PostgreSQL |
| Frameworks nativos separados por plataforma (Kotlin puro / Swift puro) | Contradiz a decisão de manter uma única base de código para Android e iOS | Flutter |

---

## Restrições de Ambiente

| Restrição | Descrição | Impacto no projeto |
|---|---|---|
| Sem painel web em v1 | A definição atual de arquitetura não contempla interface web administrativa ou de uso final | O escopo técnico e funcional deve se concentrar exclusivamente no app móvel |
| Mobile-first obrigatório | O contexto de uso descrito para o produto acontece principalmente pelo celular | As decisões de UX, autenticação, navegação e priorização funcional devem partir do app móvel como canal principal |
| Dados centralizados na nuvem | O acesso compartilhado da mascota exige que múltiplos usuários e dispositivos consultem o mesmo dado persistido | A solução precisa de backend/API central e base de dados acessível de forma remota |
| Ambientes de dev / homologação / produção ainda não definidos | Os documentos-base registram explicitamente que as URLs e definições desses ambientes ainda não foram estabelecidas | Não se deve inventar estratégia detalhada de ambientes até haver definição formal |

---

## Restrições de Segurança e Compliance

| Requisito | Descrição | Como é atendido |
|---|---|---|
| Compliance regulatório específico ainda não definido | Nenhum documento-fonte menciona LGPD, GDPR ou outro marco regulatório obrigatório até o momento | Tratar como ponto pendente de validação com responsáveis do produto |
| Autenticação obrigatória para acesso aos dados das mascotas | Como há dados pessoais de tutores, fotos e histórico de cuidados, o acesso não deve ser público | Proposta técnica inicial: exigir autenticação para qualquer operação de leitura ou escrita |
| Controle de compartilhamento pelo tutor original | Apenas o dono original da mascota deve conceder ou revogar acesso compartilhado | Implementar regras de autorização alinhadas ao modelo de negócio já definido |
| Criptografia em trânsito | Todo tráfego entre app e backend deve ser protegido | Usar HTTPS como padrão mínimo de comunicação |

> Observação: os itens de segurança acima representam um mínimo razoável proposto com base no domínio, mas ainda precisam de confirmação formal, pois não aparecem explicitamente como decisão fechada nos documentos de origem.

---

## Decisões Tomadas e Não Reverter

| Decisão | Contexto | Por que não reverter |
|---|---|---|
| Acesso compartilhado obrigatório desde o início | Já está refletido no modelo de domínio e nas regras de negócio do produto | Remover ou redesenhar isso depois exigiria refatoração do núcleo do domínio e das regras de autorização |
| PostgreSQL como base de dados | O domínio depende fortemente de relações entre tutor, mascota, eventos e acessos | Migrar depois para abordagem não relacional teria alto custo de modelagem e migração |
| Tipos de evento fechados em vacina, desparasitação e medicamento na v1 | O escopo funcional atual e o glossário já trabalham com esse conjunto inicial | Alterar essa premissa mudaria regras, formulários, relatórios e estrutura dos dados centrais da v1 |
| Sem integrações externas em v1 | O escopo atual exclui veterinárias, agenda externa, compras e outros serviços terceiros | Introduzir integrações agora mudaria complexidade técnica, fluxo de dados e fronteiras do sistema |
