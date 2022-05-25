# Anotações git/github

códigos - git init: Cria repositório

code . - abre vsCode

git add - envia o arquivo para a stading area,no github desktop os arquivos já são direcionados automáticamente. basicamente é uma área antes de ir para o commit, se queremos por o readme nesse local basta digitar git add readme.md

git add . - podemos escrever isso para commitar todos os nossos arquivos

git status - mostra se foram feitos comits e quais foram os arquivos postos na stading area

git commit -m '' - faz o commit,devemos escrever a mensagem nos parênteses

git branch -M 'main' - altera o nome da branch master para main

git remote add origin - linka o repositório remoto ao repositório local, para utilizar basta por o git remote add origin + link do repositório remoto utilizado

obs: caso não funcione tente git remote set-url origin + o seu link 

git push -u origin main - faz o push para o nosso repositório remoto,após o primeiro push não é necessário o -u  basta escrever push origin main

obs: ao criar repositório ao por licença gera bug na hora do push

clear - limpa o nosso git

git checkout -b 'nome da branch' - cria uma nova branch e muda o local de desenvolvimento para o da branch nova 

git merge - para fazer o merge basta ir para a main e escrever git merge + nome do repositório que queremos juntar

git clone - clona repositórios, git clone + link do repositório

git pull - caso alteramos algo em nosso arquivo dentro do github e queremos que essa alteração também funcione no repositório local basta utilizarmos esse comando

cd - serve para abrir uma pasta, para utilizar basta digitar cd + nome da pasta aonde está situado o conteúdo

cd.. - volta uma pasta

fork - é importante ressaltar que se clonarmos um repositório de alguem direto sem fazer um fork ele não irá aparecer no nosso repositório remoto,para isso precisamos dar um fork e a partir do fork fazemos a clonagem

pull request - se caso fizermos um fork em um projeto do vs code e acharmos um erro e concertarmos o erro ou melhorarmos o código podemos enviar um pull request para o pessoal da equipe do vs code,dessa forma eles podem ou não aprovar o meu pull request,caso eles realizem o pull a alteração que eu fiz no código será aplicada no projeto e com isso podemos contribuir com grandes empresas.


Como navegar entre versôes de código

comandos utilizados - git reflog e git reset hard-- numeração do comit 

passo 1 - use o gitlog para ver as versões do código

passo 2 - use o git reset hard-- aqui dentro ponha a numeração do commit e de enter e pronto

