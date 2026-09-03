# Detalhamento do Escopo Macro do Projeto

## Visão Geral do Produto

EventPETS é um aplicativo móvel de carnê virtual para mascotas que permite aos tutores registrar e consultar, pelo celular, os principais eventos recorrentes de cuidado. O produto resolve a perda do carnê físico e a falta de organização do histórico de vacinas, desparasitações e medicamentos. Quando o projeto estiver completo, o tutor poderá centralizar o cuidado de uma ou mais mascotas, visualizar o histórico por animal, receber lembretes antecipados e compartilhar o acompanhamento com outras pessoas responsáveis.

---

## Roadmap

| Ordem | Módulo | O que entrega ao negócio |
|---|---|---|
| 1 | Gestão de mascotas | Permite cadastrar e organizar uma ou mais mascotas por usuário, criando a base para todo o controle posterior |
| 2 | Carnê virtual e histórico | Substitui o carnê físico por uma visão digital do histórico de cuidados de cada mascota |
| 3 | Registro de eventos de cuidado | Permite lançar e manter atualizados os eventos relevantes de saúde e rotina preventiva |
| 4 | Recordatórios | Reduz esquecimentos e atrasos ao avisar com antecedência sobre próximos eventos |

---

## Módulos e Features

---

### Módulo: Gestão de mascotas

Resolve a necessidade de o tutor manter organizadas as informações básicas de uma ou mais mascotas dentro da mesma conta. É usado pelo dono principal e por pessoas com acesso compartilhado para identificar corretamente cada animal antes de consultar o carnê ou registrar eventos. Entrega a base estrutural do produto, já que todo o restante do histórico depende do cadastro correto da mascota.

#### Feature: Cadastro de mascota

Permite criar o perfil de uma mascota com seus dados básicos e foto, para que ela possa passar a ter um carnê virtual individual dentro do aplicativo. Essa feature atende principalmente tutores com uma ou várias mascotas, evitando mistura de informações entre animais diferentes. Os dados iniciais incluem nome, tipo de animal, raça, sexo, idade e foto, formando a identificação mínima para uso das demais funções do sistema.

#### Feature: Edição de dados da mascota

Permite atualizar os dados cadastrais de uma mascota sempre que houver necessidade de correção ou mudança, como idade, foto ou outras informações básicas. Essa feature garante que o carnê virtual permaneça confiável ao longo do tempo e útil para consulta rápida pelo tutor. A edição afeta apenas o cadastro da mascota, preservando o histórico de eventos já registrados.

#### Feature: Arquivamento de mascota

Permite retirar uma mascota da lista principal sem apagar seu histórico, mantendo os registros disponíveis para consulta futura. Essa feature é útil quando o tutor não precisa mais acompanhar a rotina ativa do animal, mas ainda deseja manter a rastreabilidade dos eventos já lançados. A regra de negócio é que uma mascota arquivada deixa de aparecer na visão principal, porém conserva integralmente seu carnê e histórico.

#### Feature: Compartilhamento de mascota

Permite que o dono original de uma mascota compartilhe seu registro com outras pessoas, como familiares ou cuidadores, para que acompanhem o cuidado do animal. O compartilhamento pode ser feito por link ou por e-mail, sempre iniciado pelo responsável original da mascota. Na primeira versão, quem recebe o compartilhamento também poderá editar a mascota e seus registros, mas apenas o dono original pode conceder esse acesso.

---

### Módulo: Carnê virtual e histórico

Resolve a dificuldade de consultar rapidamente o histórico de uma mascota sem depender do carnê em papel. É usado por tutores e pessoas com acesso compartilhado para visualizar as informações principais de cada animal e acompanhar sua linha do tempo de cuidados. Entrega o núcleo de consulta do produto, transformando registros dispersos em um histórico acessível pelo celular.

#### Feature: Lista de mascotas

Apresenta a lista de mascotas cadastradas com informações básicas para facilitar a identificação e a navegação até o carnê individual. Essa lista mostra ao menos nome, tipo de animal, raça, sexo e idade, ajudando o usuário a localizar rapidamente a mascota correta quando possui mais de uma. A feature funciona como ponto de entrada para a consulta do histórico e para ações posteriores de cuidado.

#### Feature: Visualização do carnê virtual

Permite acessar o carnê virtual de uma mascota específica a partir da lista principal, concentrando seu histórico de eventos em uma única visão. Essa consulta substitui o uso do carnê físico e fornece ao tutor uma fonte confiável de informação a qualquer momento pelo celular. O foco desta feature é a leitura organizada do histórico individual de cada animal, sem misturar eventos de outras mascotas.

#### Feature: Histórico de eventos por mascota

Exibe os eventos registrados de cada mascota com os campos essenciais para acompanhamento recorrente, incluindo data, tipo de evento, peso, próximo evento e notas. Essa feature ajuda o tutor a entender o histórico já realizado e o que precisa acontecer em seguida, apoiando o cuidado preventivo. O histórico deve estar vinculado exclusivamente à mascota selecionada e organizado de forma clara para consulta contínua.

---

### Módulo: Registro de eventos de cuidado

Resolve a necessidade de registrar de forma estruturada os cuidados recorrentes realizados com cada mascota. É usado por tutores e usuários compartilhados no momento em que um cuidado acontece ou quando desejam manter o histórico atualizado. Entrega a capacidade operacional central do produto, pois sem o registro o carnê virtual não gera valor prático.

#### Feature: Registro de evento de cuidado

Permite lançar um novo evento vinculado a uma mascota específica, consolidando no aplicativo informações que hoje costumam ficar no papel ou na memória. Na primeira versão, os tipos válidos de evento são vacina, desparasitação e medicamento, refletindo o foco do produto em rotina preventiva. Cada evento deve conter data, tipo de evento, peso, próximo evento e notas, garantindo um mínimo de contexto para consulta futura.

#### Feature: Manutenção do histórico de eventos

Permite manter o histórico confiável ao longo do tempo por meio da edição dos registros já inseridos quando houver erro, atualização ou necessidade de complementação. Essa feature é importante porque o valor do carnê virtual depende de o histórico estar correto e utilizável no dia a dia. Toda alteração deve permanecer associada à mascota correta e respeitar os tipos de evento válidos definidos para a primeira versão.

---

### Módulo: Recordatórios

Resolve o problema de esquecimento de eventos recorrentes de cuidado, principalmente vacinas, desparasitações e medicamentos. É usado por tutores e pessoas com acesso compartilhado para acompanhar próximos compromissos sem depender da memória ou do carnê em papel. Entrega valor preventivo ao produto ao transformar o histórico registrado em avisos úteis para a rotina.

#### Feature: Aviso de próximos eventos

Permite que o aplicativo avise antecipadamente quando um evento futuro estiver se aproximando, ajudando o usuário a se preparar e reduzir atrasos nos cuidados da mascota. Na primeira versão, os avisos são baseados nos próximos eventos informados no registro e utilizam uma antecedência predefinida pela própria aplicação. A feature se aplica aos tipos de evento válidos do sistema e tem foco em lembretes simples, sem configuração avançada pelo usuário nesta etapa inicial.

---

## Fora do Escopo

| Item excluído | Motivo |
|---|---|
| Integração com veterinárias | A primeira versão foca no uso direto pelos tutores, sem depender de sistemas externos |
| Compras online de alimento | Não faz parte do problema principal atacado no escopo inicial |
| Agenda de turnos e consultas | O foco atual é carnê virtual e eventos recorrentes, não gestão de agenda |
| Ficha clínica completa | O produto inicial registra eventos de cuidado, sem cobrir prontuário veterinário amplo |
| Multiusuário com permissões avançadas | O compartilhamento existirá, mas sem modelo complexo de papéis e permissões |
| Controle de stock de alimento | Embora tenha surgido no conceito inicial, não foi incluído nos módulos macro definidos para a primeira versão |
| Eventos de higiene e controle fora dos tipos definidos | A primeira versão restringe os eventos a vacina, desparasitação e medicamento para manter o escopo inicial viável |
