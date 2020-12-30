# inPocket_TG
## Trabalho e graduação - Curso de Análise e desenvolvimento de Sistemas em FATEC São José dos Campos 
## Coordenador do Trabalho de Graduação Prof.Me.Emanuel Mineda Carneiro
## Orintador do Trabalho de graduação Prof.Me.Giuliano Araujo Bertoti

### O que é o inPocket_TG?
- Estamos falando de um Bot, que faz uso do aplicativo mobile de mensageria, Telegram, para auxiliar na gestão de micro empresas através de uma tecnologia fácil e barata, onde o usuário pouca informação e recursos tecnológicos precisa dispor para ter a gestão de sua pequena empresa em suas mãos, ou como o nome sugere, em seu bolso, de forma fácil e acessível. Tudo que precisa dispor é um aparelho de celular com o App Telegran instalado, e cada um de seus colaboradores, da mesma forma faram uso de um celular com o App Telegram instalado, onde através do Bot farão o ciclo da tarefa ser distribuído, executado e contabilizado sem maiores dificuldades.
Neste módulo desenvolvemos uma OS digital, ou seja, a OS (ordem de serviço) até então manual passa a ser um "comando" via bot, disparando a tarefa a quem for de competência e acumulando as informações do processo para a gestão do mesmo. 
Usamos como exemplo a OS de um salão de beleza, salão eeste que se disponibilizou pronta e gentilmente a nos ajudar no levantamento de informações, requisitos e regras para o desenvolvimento do Bot.

Agora ao ambiente:
Falamos de um desenvolvimento em backend em JavaScript em ambiente Node.js, fazendo uso da API do Telegram e módulo do Node.js Telegraf
Portanto, para que a aplicação possa ser instalada e rodar, precisamos preparar o ambiente:
Instale o Node.js
Instale o pacote do Node NPM
Instale o módulo do Node Telegraf através do npm
  npm i --save telegraf@3.17.3 -E (está foi a versão utilizada no desenvolvimento)
A IDE usada foi o VSCode, mas qualquer editor é satisfatório
Teremos nesse repositório o arquivo sample das variáveis de ambiente, que por motivo de segurança não são expostas nesse arquivo, lembre-se de renomear o arquvo .env.sample para .env e relacionar o token do seu bot criado em tokenkey neste arquivo.


