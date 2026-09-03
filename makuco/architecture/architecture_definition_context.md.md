# Definição de Arquitetura

## Padrão Arquitetural Adotado

**Padrão:** Aplicação cliente-servidor com backend central e app móvel como canal principal

**Justificativa:** Este é o padrão dominante mais adequado para o contexto atual do EventPETS porque o produto nasce com foco mobile, uso cotidiano pelo celular e necessidade de dados compartilhados entre múltiplos usuários autorizados sobre a mesma mascota. A solução precisa de persistência central para suportar compartilhamento, histórico único por mascota e geração consistente de recordatórios. Microserviços seriam excessivos para a v1, já que o escopo é pequeno, o time ainda está em fase conceitual e não há integrações complexas ou demanda comprovada de escala operacional. Um modelo puramente local no dispositivo também não atende o requisito de compartilhamento entre pessoas e dispositivos diferentes.

---

## Como o Sistema está Organizado

O sistema será organizado em dois blocos principais: um aplicativo móvel, responsável pela experiência do tutor, e um backend central, responsável por autenticação, regras de negócio, persistência e compartilhamento de dados. O app consome uma API para cadastrar mascotas, registrar eventos, consultar o carnê virtual e obter os próximos cuidados. O backend concentra as entidades principais do domínio, como tutor, mascota, evento de cuidado e acesso compartilhado, e se comunica com uma base de dados central. Nesta primeira versão, não há painel web nem divisão em múltiplos serviços especializados.

---

## Decisões Arquiteturais Importantes

| Decisão | O que foi decidido | Justificativa |
|---|---|---|
| Forma geral da solução | A solução será composta por app móvel + backend central + base de dados compartilhada | Essa composição atende o uso mobile-first e permite que múltiplas pessoas acessem a mesma mascota com consistência de dados |
| Estratégia de arquitetura | Priorizar simplicidade sobre escalabilidade avançada na v1 | O produto está em fase conceitual, com escopo funcional reduzido e sem necessidade atual de arquitetura distribuída complexa |
| Canal principal | O produto será mobile-first | O contexto de uso já definido mostra que o tutor consulta e registra informações principalmente pelo celular |
| Persistência dos dados | Os dados do produto ficarão centralizados na nuvem | O compartilhamento entre usuários e dispositivos exige uma fonte única e persistente de verdade |
| Compartilhamento entre usuários | O acesso compartilhado fará parte da arquitetura desde o início | O recurso de compartilhar mascota já faz parte do escopo funcional inicial e impacta autenticação, autorização e modelo de dados |
| Painel administrativo/web | Não contemplado na primeira versão | Não existe evidência de necessidade de operação web no escopo atual e adicionaria complexidade desnecessária |
| Estilo de implantação | Não usar microserviços na primeira versão | O domínio ainda é pequeno e a adoção prematura de microserviços elevaria custo operacional sem benefício claro |

---

## Diagramas

**C1 — Contexto:** `architecture/diagrams/c4/c1-context.png` — pendente de criação
**C2 — Containers:** `architecture/diagrams/c4/c2-containers.png` — pendente de criação
**C3 — Componentes:** `architecture/diagrams/c4/c3-components.png` — pendente de criação

---

> **Lembrete:** este documento descreve a intenção arquitetural. Quando houver divergência entre o que está aqui e o que está no código, o código deve ser corrigido — ou este documento deve ser atualizado com um ADR justificando a mudança.
