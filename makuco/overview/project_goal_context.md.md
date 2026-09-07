# Objetivo do Projeto

## Identificação do Sistema

**Nome do sistema:** EventPETS

**Status:** Em desenvolvimento conceitual / Ideia

**Repositório de código:** Ainda não definido

**Última atualização:** 2026-09-07 — Makuco

### Ambientes

| Ambiente | URL |
|---|---|
| Desenvolvimento | Ainda não definido |
| Homologação | Ainda não definido |
| Produção | Ainda não definido |

---

## Problema a Ser Resolvido

**Situação atual:** Clínicas veterinárias e profissionais costumam entregar um carnê físico para registrar vacinas e outros cuidados das mascotas. Na prática, esse documento frequentemente é perdido, esquecido ou guardado em um local que o tutor não consegue localizar quando precisa. Como consequência, o histórico fica disperso e o acompanhamento recorrente da saúde e dos cuidados do animal passa a depender da memória das pessoas.

**Causa raiz:** O controle atual é baseado em papel e em registros manuais descentralizados, sem uma fonte digital única, acessível pela web e fácil de compartilhar entre as pessoas responsáveis pela mascota.

**Impacto:** Tutores de mascotas perdem visibilidade sobre os prazos corretos de vacinação e outros cuidados recorrentes. Isso pode levar a vacinas aplicadas fora do prazo, esquecimentos de desparasitações e medicamentos, dificuldade para consultar o histórico ao visitar o veterinário e menor continuidade no cuidado quando mais de uma pessoa acompanha a mesma mascota.

---

## Objetivo do Projeto

**Onde devemos chegar com o projeto entregue:**

- Permitir que o tutor consulte pela web o carnê virtual e o histórico de cuidados de cada mascota a qualquer momento.
- Centralizar em um único lugar o registro de vacinas, desparasitações, medicamentos e outros eventos recorrentes de cuidado.
- Reduzir esquecimentos e atrasos em eventos importantes por meio de registro organizado e lembretes.
- Permitir que mais de uma pessoa acompanhe a mesma mascota, compartilhando o registro de forma simples.

---

## Visão Geral do Sistema

### Propósito

EventPETS é uma aplicação para transformar o carnê físico de cuidado de mascotas em um registro digital acessível pela web. Seu propósito é ajudar tutores a manter o histórico e o acompanhamento de eventos recorrentes, como vacinas, desparasitações e administração de medicamentos. O sistema busca reduzir perdas de informação, atrasos em cuidados importantes e a dependência de anotações em papel.

### Público-Alvo e Usuários

**Perfil 1 — Tutor de mascota**
Descrição: pessoa responsável pelo cuidado diário de uma ou mais mascotas, que precisa acompanhar vacinas, medicamentos e demais eventos recorrentes.
O que faz e quando faz: cadastra mascotas, consulta o carnê virtual, registra eventos de cuidado e acompanha lembretes no dia a dia.

**Perfil 2 — Familiar ou cuidador compartilhado**
Descrição: pessoa do círculo familiar ou de apoio que também participa do cuidado da mascota, mesmo sem ser o responsável principal.
O que faz e quando faz: consulta o histórico da mascota, verifica próximos eventos e acompanha registros compartilhados quando ajuda no cuidado.

**Perfil 3 — Dono com múltiplas mascotas**
Descrição: tutor que possui mais de uma mascota e precisa organizar rotinas de cuidado separadas para cada uma.
O que faz e quando faz: alterna entre perfis de mascotas, registra eventos individualmente e acompanha o histórico de cada animal sem misturar informações.

### Contexto de Mercado e Posicionamento

**Contexto de mercado:** O sistema se insere no segmento de aplicativos de organização de cuidados para mascotas, com foco em saúde preventiva e rotina de acompanhamento doméstico. Há uma necessidade comum entre tutores de manter registros confiáveis e acessíveis sem depender de documentos físicos.

**Posicionamento:** EventPETS se posiciona como uma solução simples de carnê virtual para mascotas, centrada no registro recorrente de cuidados e no acesso via web ao histórico. Seu diferencial é substituir o carnê em papel por uma experiência digital prática e compartilhável entre responsáveis.

**Público-alvo de mercado:** Tutores individuais, famílias e lares com uma ou mais mascotas que precisam organizar cuidados recorrentes e manter o histórico sempre disponível.

### Contexto de Uso pelo Cliente

O sistema será usado no contexto cotidiano dos tutores, principalmente pelo navegador web, para registrar eventos de cuidado no momento em que acontecem e para consultar rapidamente o histórico quando necessário. Ele apoia processos simples de controle doméstico da saúde preventiva da mascota, como verificar vacinas aplicadas, registrar desparasitações, acompanhar medicamentos e lembrar próximos cuidados. Nesta fase inicial, não há integração prevista com sistemas de clínicas veterinárias, compras, agendamentos ou prontuários externos.

---

## Contexto de Negócio

**Sobre o negócio:** Trata-se de um produto digital em fase de ideação voltado à organização do cuidado recorrente de mascotas. O foco de negócio é oferecer conveniência, continuidade de informação e prevenção de esquecimentos em rotinas que hoje dependem de papel ou memória.

**Domínio e segmento:** Pet care / organização de cuidados preventivos para mascotas.

**Processo atual (como as pessoas fazem hoje):** Hoje os tutores recebem um carnê físico, guardam informações em papel ou confiam na memória para lembrar vacinas e outros eventos. Quando precisam consultar o histórico, nem sempre encontram o documento ou têm todas as informações reunidas. Em lares com mais de um responsável, o acompanhamento também fica fragmentado.

**Restrições e regras de negócio relevantes:**
- O registro deve ser organizado por mascota, sem misturar históricos.
- Uma mesma pessoa pode ter várias mascotas cadastradas.
- Uma mesma mascota pode ser acompanhada por mais de uma pessoa.
- O foco inicial está em eventos recorrentes de cuidado, não em prontuário clínico completo.
- A primeira versão não contempla integração com clínicas veterinárias, agenda de turnos, compras online de alimento nem recursos avançados de operação veterinária.

---

## Escopo Macro do Projeto

| # | Módulo / Epic | Prioridade |
|---|---|---|
| 1 | Gestão de mascotas | Alta |
| 2 | Carnê virtual e histórico | Alta |
| 3 | Registro de eventos de cuidado | Alta |
| 4 | Lembretes e recordatórios | Média |

---

## Escopo Negativo do Projeto

| O que não será feito | Motivo |
|---|---|
| Integração com veterinárias | Fora do foco da primeira versão, que prioriza uso direto pelo tutor |
| Compras online de alimento | Não faz parte do problema principal que o produto resolve inicialmente |
| Agenda de turnos / consultas | Está fora do escopo inicial de carnê virtual e controle de eventos recorrentes |
| Ficha clínica completa / prontuário veterinário | A primeira versão foca em registro recorrente de cuidados, não em gestão clínica abrangente |
| Multiusuário familiar avançado com permissões complexas | O compartilhamento é relevante, mas sem detalhamento inicial de papéis e permissões sofisticadas |

---

## Pessoas e Interesses (Stakeholders)

| Nome | Empresa / Área | Papel no Projeto |
|---|---|---|
| Donos de mascotas | Usuários finais | Usuário final e principal beneficiário do produto |
| Familiares/cuidadores compartilhados | Usuários finais | Pessoas impactadas pelo compartilhamento do registro da mascota |
| Responsável pelo produto | Produto | Definição de escopo e priorização da solução |

---

> **Próximo passo:** com este documento preenchido e revisado, acione o `makuco-specify` referenciando este arquivo para gerar as specs de cada módulo listado no Escopo Macro.