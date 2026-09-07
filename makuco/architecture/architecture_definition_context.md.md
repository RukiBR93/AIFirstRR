# Definição de Arquitetura

## Padrão Arquitetural Adotado

**Padrão:** Aplicação cliente-servidor com backend central e app web como canal principal

**Justificativa:** Este é o padrão dominante mais adequado para o contexto atual do EventPETS porque o produto precisa de dados compartilhados entre múltiplos usuários autorizados sobre a mesma mascota. A solução precisa de persistência central para suportar compartilhamento, histórico único por mascota e geração consistente de recordatórios. Microserviços seriam excessivos para a v1, já que o escopo é pequeno, o time ainda está em fase conceitual e não há integrações complexas ou demanda comprovada de escala operacional. Um modelo puramente local no dispositivo também não atende o requisito de compartilhamento entre pessoas e dispositivos diferentes.

> **ADR — 2026-09-07:** o canal principal foi alterado de app móvel (Flutter) para app web (React/Next.js), para simplificar testes e iteração durante a fase inicial de desenvolvimento. Um app mobile nativo permanece como possível evolução futura, fora do escopo da v1.

---

## Como o Sistema está Organizado

O sistema será organizado em dois blocos principais: uma aplicação web, responsável pela experiência do tutor, e um backend central, responsável por autenticação, regras de negócio, persistência e compartilhamento de dados. O app consome uma API para cadastrar mascotas, registrar eventos, consultar o carnê virtual e obter os próximos cuidados. O backend concentra as entidades principais do domínio, como tutor, mascota, evento de cuidado e acesso compartilhado, e se comunica com uma base de dados central. Nesta primeira versão, não há divisão em múltiplos serviços especializados.

---

## Decisões Arquiteturais Importantes

| Decisão | O que foi decidido | Justificativa |
|---|---|---|
| Forma geral da solução | A solução será composta por app web + backend central + base de dados compartilhada | Essa composição permite que múltiplas pessoas acessem a mesma mascota com consistência de dados |
| Estratégia de arquitetura | Priorizar simplicidade sobre escalabilidade avançada na v1 | O produto está em fase conceitual, com escopo funcional reduzido e sem necessidade atual de arquitetura distribuída complexa |
| Canal principal | O produto será **web-first** (React/Next.js) | Facilita testes e iteração rápida na fase inicial, sem depender de builds mobile/emuladores |
| Persistência dos dados | Os dados do produto ficarão centralizados na nuvem | O compartilhamento entre usuários e dispositivos exige uma fonte única e persistente de verdade |
| Compartilhamento entre usuários | O acesso compartilhado fará parte da arquitetura desde o início | O recurso de compartilhar mascota já faz parte do escopo funcional inicial e impacta autenticação, autorização e modelo de dados |
| App mobile nativo | Não contemplado na primeira versão | O canal principal passou a ser web; um app mobile fica como evolução futura, não como parte da v1 |
| Estilo de implantação | Não usar microserviços na primeira versão | O domínio ainda é pequeno e a adoção prematura de microserviços elevaria custo operacional sem benefício claro |

---

## Diagramas

**C1 — Contexto:** feito (PlantUML + visualização)
**C2 — Containers:** feito (PlantUML + visualização) — container "App web" (React/Next.js) substitui "App móvel"
**C3 — Componentes:** feito (PlantUML + visualização)
**C4 — Código:** pendente — gerado quando existir código maduro que justifique

---

> **Lembrete:** este documento descreve a intenção arquitetural. Quando houver divergência entre o que está aqui e o que está no código, o código deve ser corrigido — ou este documento deve ser atualizado com um ADR justificando a mudança.