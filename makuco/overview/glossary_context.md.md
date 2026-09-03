# Glossário do Projeto

## Termos do Domínio

| Termo | Tradução EN | Definição | Evitar (sinônimos incorretos) |
|---|---|---|---|
| Tutor | Pet guardian | Pessoa responsável principal pelo cuidado de uma ou mais mascotas. No contexto do EventPETS, é quem cadastra mascotas, registra eventos de cuidado, consulta o carnê virtual e recebe lembretes sobre próximos cuidados. Pode ter várias mascotas sob sua responsabilidade dentro da mesma conta. | Cliente, paciente |
| Dono original | Original owner | Tutor que criou o registro de uma mascota específica no sistema. É a única pessoa com permissão para conceder ou revogar o compartilhamento dessa mascota com terceiros, mantendo a autoridade principal sobre o acesso. | Proprietário técnico, administrador geral |
| Familiar/cuidador compartilhado | Shared family member/caregiver | Pessoa que recebeu acesso a uma mascota por meio do recurso de compartilhar mascota. Na primeira versão, esse usuário pode consultar e também editar os dados da mascota e seus registros de cuidado, embora não possa compartilhar a mascota com outras pessoas. | Dono secundário, convidado temporário |
| Mascota | Pet | Animal registrado no sistema com dados básicos como nome, tipo, raça, sexo, idade e foto. Cada mascota possui seu próprio carnê virtual e histórico de eventos, que não deve ser misturado com o de outras mascotas. Seu ciclo de vida na primeira versão é ativa ou arquivada. | Pet genérico, ficha |
| Compartilhar mascota | Share pet | Ação realizada exclusivamente pelo dono original para conceder acesso de outra pessoa ao registro de uma mascota, por link ou por e-mail. Esse compartilhamento cria um acesso compartilhado que permite acompanhamento colaborativo do cuidado do animal. | Convidar tutor, transferir posse |
| Carnê virtual | Digital pet care card | Vista digital que concentra o histórico de eventos de cuidado de uma mascota específica, substituindo o carnê físico entregue por clínicas veterinárias. É o principal ponto de consulta do produto para acompanhar o que já foi feito e o que deverá ocorrer depois. | Prontuário completo, agenda |
| Evento de cuidado | Care event | Registro de um cuidado realizado para uma mascota, restrito na primeira versão aos tipos vacina, desparasitação e medicamento. Cada evento contém data, tipo de evento, peso, próximo evento e notas, compondo o histórico consultado no carnê virtual. O evento representa um fato já registrado e não possui estados próprios na v1. | Consulta, tarefa |
| Próximo evento | Next event | Data informada dentro de um evento de cuidado para indicar quando o próximo cuidado do mesmo contexto deve ocorrer. Não é uma entidade independente na primeira versão, mas sim um dado usado como base para geração de lembretes antecipados. | Agendamento, evento futuro |
| Recordatório | Reminder | Aviso gerado pela aplicação com antecedência predefinida a partir do campo próximo evento registrado em um evento de cuidado. Seu objetivo é reduzir esquecimentos e atrasos em cuidados recorrentes. Mascotas arquivadas não geram recordatórios ativos. | Alarme livre, notificação genérica |
| Tipo de evento | Event type | Classificação fechada dos eventos de cuidado permitidos na primeira versão do produto. Os valores válidos são vacina, desparasitação e medicamento, e cada evento deve pertencer a exatamente um desses tipos. | Categoria aberta, etiqueta |

---

## Status e Ciclos de Vida

### Mascota

Representa o ciclo básico de disponibilidade de uma mascota dentro do sistema. A mascota pode estar ativa para uso operacional ou arquivada quando sai da lista principal, sempre preservando seu histórico.

| Status | Descrição | Transições permitidas |
|---|---|---|
| Ativa | Mascota disponível na lista principal, com histórico acessível e geração normal de recordatórios baseada em próximos eventos. | Pode ser arquivada |
| Arquivada | Mascota removida da lista principal, mas com histórico preservado para consulta futura. Não gera recordatórios ativos enquanto estiver arquivada. | Pode voltar para ativa, se o produto permitir desarquivamento no futuro |

### Acesso compartilhado

Representa a situação do acesso concedido pelo dono original a outra pessoa para acompanhar uma mascota específica. O controle desse acesso pertence exclusivamente ao dono original.

| Status | Descrição | Transições permitidas |
|---|---|---|
| Ativo | O acesso compartilhado está vigente e a pessoa convidada pode consultar e editar a mascota e seus registros na primeira versão. | Pode ser revogado |
| Revogado | O acesso anteriormente concedido deixou de valer por decisão do dono original. | Não volta automaticamente para ativo; exige novo compartilhamento |

### Evento de cuidado

Na primeira versão, o evento de cuidado não possui ciclo de vida próprio. Ele representa um registro já realizado no histórico da mascota e contém um campo de próximo evento usado para lembretes.

| Status | Descrição | Transições permitidas |
|---|---|---|
| Sem estados | O evento é apenas um registro histórico de cuidado realizado e não opera com fluxo de status na v1. | Não se aplica |

---

## Relações Entre Termos

- Um tutor pode ter uma ou mais mascotas cadastradas no sistema.
- Uma mascota pertence a exatamente um dono original.
- Uma mascota pode ser compartilhada com uma ou mais pessoas por iniciativa do dono original.
- Um familiar/cuidador compartilhado acessa uma mascota por meio de um acesso compartilhado concedido pelo dono original.
- Um carnê virtual pertence a exatamente uma mascota e concentra seu histórico de eventos de cuidado.
- Um evento de cuidado pertence a exatamente uma mascota.
- Um evento de cuidado possui exatamente um tipo de evento válido na primeira versão.
- Um recordatório é gerado a partir do campo próximo evento registrado dentro de um evento de cuidado.
- Uma mascota arquivada preserva seu histórico de eventos, mas deixa de gerar recordatórios ativos.

---

## Siglas e Abreviações

No momento, o produto não possui siglas de negócio consolidadas. Como o projeto ainda está em fase conceitual, optou-se por não introduzir abreviações artificiais para evitar ambiguidade futura.

| Sigla | Significado | Contexto de uso |
|---|---|---|
| Nenhuma por enquanto | Não se aplica | O glossário permanece sem siglas até que surjam naturalmente no contexto do produto |

---

## Histórico de Alterações

| Data | Termo | Alteração | Motivo |
|---|---|---|---|
| 2026-09-03 | Compartilhar mascota | Adicionado | Formalizar o termo principal de produto para o ato de conceder acesso a outra pessoa |
| 2026-09-03 | Recordatório | Adicionado | Registrar explicitamente a regra de aviso antecipado baseado em próximo evento |
| 2026-09-03 | Mascota | Redefinido | Consolidar os estados ativa/arquivada e a regra de preservação do histórico |
| 2026-09-03 | Evento de cuidado | Redefinido | Esclarecer que o evento não possui estados próprios na primeira versão |
