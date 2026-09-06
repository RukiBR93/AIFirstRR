# Spec: Cadastro de mascota

## Contexto
Feature do módulo "Gestão de mascotas". Permite ao tutor criar o perfil de
uma mascota com dados básicos e foto, dando início ao carnê virtual
individual do animal. Sem esse cadastro, nenhuma outra funcionalidade do
sistema (histórico, eventos, recordatórios) pode operar.

## User Story
Como tutor, quero cadastrar uma mascota com seus dados básicos e uma foto,
para que eu possa começar a registrar seu histórico de cuidados no carnê
virtual.

## Pré-condições
- O usuário está autenticado no sistema.
- O usuário ainda não atingiu nenhum limite de mascotas (não há limite
  definido na v1 — sem restrição).

## Fluxo principal
1. O tutor acessa a opção de cadastrar nova mascota.
2. O tutor informa: nome, tipo de animal, raça, sexo, idade.
3. O tutor anexa uma foto da mascota (opcional).
4. O tutor confirma o cadastro.
5. O sistema cria a mascota com status `ativa`, vinculada ao tutor como
   dono original.
6. O sistema exibe a mascota na lista principal.

## Fluxos alternativos / exceções
- **Campo obrigatório vazio (nome, tipo de animal, raça, sexo ou idade):**
  o sistema bloqueia o envio e sinaliza o campo faltante.
- **Falha no upload da foto:** o cadastro prossegue sem foto; o tutor pode
  adicioná-la depois via edição.
- **Perda de conexão durante o envio:** o sistema não persiste dados
  parciais; o tutor deve reenviar o formulário completo.

## Regras de negócio
- Cada mascota pertence a exatamente um dono original (o tutor que a
  cadastrou).
- O dono original é o único autorizado a compartilhar a mascota
  posteriormente.
- A mascota nasce sempre com status `ativa`.
- Não há mistura de histórico entre mascotas diferentes — cada uma tem
  seu próprio carnê desde a criação.

## Critérios de aceite (Given/When/Then)
- **Dado** que o tutor está autenticado, **quando** ele preenche todos os
  campos obrigatórios e confirma, **então** a mascota é criada com status
  `ativa` e aparece na lista principal.
- **Dado** que o tutor deixa um campo obrigatório vazio, **quando** tenta
  confirmar o cadastro, **então** o sistema impede o envio e indica o
  campo pendente.
- **Dado** que o tutor não anexa foto, **quando** confirma o cadastro,
  **então** a mascota é criada normalmente, sem foto.

## Dados envolvidos
Entidade `Mascota`: id, dono_id (FK), nome, tipo_animal, raça, sexo,
idade, foto_url (opcional), status.

## Fora de escopo
- Limite de quantidade de mascotas por tutor.
- Validação de raça/tipo de animal contra uma lista fechada (campo livre
  na v1).
- Compartilhamento no mesmo fluxo de cadastro (é outra feature).