# Gestão do Projeto e Ciclo de Desenvolvimento

## Plataforma de Gestão

**Plataforma:** GitHub Projects
**URL / Acesso:** Ainda não definido
**Como solicitar acesso:** Ainda não definido; depende da formalização do time e da configuração do repositório no GitHub

---

## Modelo de Organização do Trabalho

| Nível | Nome utilizado | O que representa | Exemplo |
|---|---|---|---|
| 1 — mais alto | Módulo / Epic | Agrupa grandes frentes do produto orientadas a um objetivo funcional amplo | Gestão de mascotas |
| 2 | Feature | Agrupa uma capacidade funcional concreta dentro de um módulo | Cadastro de mascota |
| 3 | História / PBI | Representa uma entrega pequena e implementável que descreve valor para o usuário | Como tutor, quero subir uma foto da minha mascota |
| 4 — mais baixo | Subtarefa | Representa uma atividade técnica específica necessária para concluir uma história | Criar endpoint de upload de imagem |

---

## Tamanho e Critérios de um PBI

**Tamanho máximo:** Um PBI deve ser pequeno o suficiente para ser concluído em poucos dias de trabalho contínuo por uma pessoa, sem depender de um ciclo formal de sprint

**Um bom PBI deve:**
- Ter um critério de aceite claro e verificável
- Poder ser desenvolvido e testado de forma independente
- Ser pequeno o suficiente para fluir no Kanban sem ficar parado por longos períodos
- Ter valor funcional ou técnico identificável dentro do escopo do produto

**Um PBI deve ser quebrado quando:**
- Levar tempo demais para ser concluído por uma única pessoa
- Tiver mais de uma responsabilidade principal
- Depender de outra entrega para poder ser validado adequadamente

---

## Modelo de Desenvolvimento

**Metodologia:** Kanban

**Duração do ciclo:** Fluxo contínuo, sem sprints fixas

**Início do ciclo:** Não se aplica; os itens entram em execução conforme priorização e disponibilidade

---

## Cerimônias e Rituais

| Cerimônia | Frequência | Duração | Objetivo |
|---|---|---|---|
| Refinamento pontual | Conforme necessário | Curta, a definir | Preparar e detalhar novas histórias antes de execução |

---

## Fluxo de Status

| Status | Descrição | Quem move para cá |
|---|---|---|
| Backlog | Item criado, mas ainda não preparado para execução | Responsável de produto ou quem estiver organizando o trabalho |
| Ready | Item detalhado o suficiente para ser iniciado | Responsável de produto ou desenvolvedor após refinamento |
| In Progress | Item em desenvolvimento | Desenvolvedor responsável |
| Review | Item implementado, aguardando revisão ou validação | Desenvolvedor responsável |
| Done | Item concluído, validado e pronto no ambiente correspondente | Desenvolvedor responsável ou responsável de produto |

---

## Definição de Pronto (Definition of Done)

- Código funcionando de acordo com o que foi descrito no item
- Sem quebrar fluxos existentes do produto
- Revisado pelo próprio desenvolvedor ou por outra pessoa do time, se houver mais de um colaborador
- Testado no nível adequado para a entrega
- Disponibilizado ou validado no ambiente correspondente antes de marcar como Done

---

## Acompanhamento e Monitoramento

**Responsável pelo acompanhamento:** Responsável de produto, ainda sem definição formal de estrutura de time

**Métricas acompanhadas:**

| Métrica | O que mede | Onde é acompanhada | Frequência |
|---|---|---|---|
| Itens concluídos por semana | Volume de entregas realizadas em uma janela simples de acompanhamento | GitHub Projects | Semanal |
| Itens em progresso | Quantidade de trabalho simultâneo aberto | GitHub Projects | Contínua |
| Tempo parado em uma coluna | Possíveis gargalos no fluxo | GitHub Projects | Semanal |

**Reporte para stakeholders:** Ainda não definido formalmente; como proposta inicial, acompanhamento simples por atualização no board e revisão periódica do progresso com o responsável de produto
