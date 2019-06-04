# AprendendoGit-DesafioUmbler
Desafio da Umbler para aprender GIT - Instruções


O Git é um DVCS (Distributed Version Control System), que é um nome bonito para controlador de versão, e é disparado o mais popular de todos.
Um coisa legal: Ele começou a ser criado em 2005 pelo Linus Torvalds (criador do Linux), após uma treta entre a comunidade do Linux e o versionador de código que eles usavam antes, que era o BitKeeper. 

Mas por que usar um versionador de código???
Como o nome já diz ele mantém cópias de versões anteriores do teu código, histórico de alterações, além de facilitar muito o trabalho em equipes de desenvolvimento. Os devs da Umbler por exemplo usam o Git e as alterações feitas por eles são enviadas para o BitBucket, onde os projetos são mantidos.

E por qual motivo os clientes usam Git na Umbler?
Na Umbler o Git é usado como ferramenta de deploy. Você usa o Git para publicar uma aplicação local (PC local => Umbler), ou de um repositório remoto (GitHub => Umbler, por exemplo). 
O Git é uma alternativa de deploy mais rápida e simples do que o gerenciador de arquivos, FTP ou SSH.

Step 1 - Abrindo o Git e inicializando um repositório Git

O primeiro passo é ter o Git-SCM baixado em seu PC. Caso não tenha, você pode conseguir ele aqui: https://git-scm.com/
Uma vez instalado você pode abrir o Git Bash, que é a interface do Git via linha de comando. Existe o Git GUI também, que é uma interface gráfica para manipular o Git, mas ninguém usa ela pois é mais hipster usar a linha de comando.
Dentro do Git Bash vamos até o Desktop do seu PC, e criaremos um diretório novo.


- cd ~/Desktop - Vai até o Desktop.
- mkdir exercicioGit - Cria uma pasta exercicioGit.
- cd exercicioGit - Acessa a pasta.

Dentro da pasta correta, você deve inicializar um repositório git com o comando git init 

Step 2 - Clonando um repositório remoto e subindo uma alteração

O próximo passo é acessar o GitHub da Umbler (com os dados lá do início). Uma vez logado no GitHub, você precisa acessar o repositório aprendendoGit, copiar a URL do repositório, e clonar ele no Git Bash. Você faz isso com um:

git clone URL_DO_REPOSITORIO
Pronto, agora você vai conseguir ver o conteúdo do repositório clonado. 

Acesse o arquivo README.md e dentro do arquivo adicione uma nova linha com o seu primeiro nome.
Assim que adicionado o seu nome, salve o arquivo e rode um git status

Você vai ver que o arquivo alterado vai estar em vermelho. Isso é o Git avisando você que o seu repositório local tem uma alteração que ainda não foi commitada.aprendendoGitgit 

Você precisa adicionar essa alteração na staging area do Git com um git add nome_do_arquivo (ou “git add .” para adicionar todos os arquivos alterados). A staging area é uma área separada onde ficam os arquivos que você quer commitar. Depois você vai usar um git commit -m “mensagem de commit” para criar um commit.  O commit é um comando que salva as alterações que você fez nos arquivos, para que você possa fazer o envio dessas alterações para o servidor remoto. A mensagem do commit geralmente explica o que foi mudado no código. Exemplo, git commit -m “alterei o método tal, e agora ele faz café”, coisas desse tipo.

Feito o commit, você vai conseguir subir a alteração com o comando:

git push origin master

Ok, mas o que esse comando faz?
Esse comando está dizendo: Git, faça um push para o remote chamado origin, do conteúdo da branch master.

push - É o comando Git que envia o conteúdo para o repositório remoto.

remote - O remote nada mais é do que um nome que aponta para um repositório remoto (por isso remote). No exemplo acima, o nome do remote é origin (esse é o nome mais default para os remotes). Você consegue ver os remotes inclusos no seu repositório local com um git remote -v.

branch - É uma cópia do seu repositório. Por default a branch master é a principal, onde fica o código que está em produção. Geralmente os usuários trabalham no código em uma branch separada, e depois únem essa branch com a branch de produção (através de um git merge). 

Se o push foi feito com sucesso, você vai conseguir ver o seu nome lá no arquivo através da interface do GitHub.

Beleza, você alterou o código da branch master, mas in real life você nunca altera o código da master direto. Por isso vamos fazer algo diferente. Crie uma branch local com o seu nome, e dentro dessa nova branch edite o arquivo README.md novamente, adicionando o seu sobrenome ao lado do seu nome, e suba essa alteração para o GitHub.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_D27263CD071BFDF56B6E526EE34EE8262D4916BFF13BB6832730D0FF5524327C_1532367548252_testcode.jpg)


P.s.: O desafio aí em cima é justamente descobrir como criar uma nova branch. ⬆️ 

Novamente dê uma olhada lá no GitHub para ver se a sua branch está criada e o arquivo está alterado. Perceba que na branch master o arquivo ainda não tem a alteração do teu sobrenome. Vamos resolver isso fazendo o merge da sua branch com a branch master. O merge basicamente mescla o conteúdo de uma branch com a outra, ou seja, você vai adicionar na branch master o conteúdo que está diferente em sua branch própria.

Volte ao terminal e troque para a branch master, e execute um git merge sua_branch. Esse comando vai fazer o merge da sua branch com a branch em que você está atualmente, que é a master. Feito isso, faça um push da branch master novamente para subir o update que você fez. Agora tanto a branch master quanto a sua branch vão estar com o mesmo conteúdo no README.md.

Step 3 - Publicando o conteúdo na Umbler

Agora vamos publicar na Umbler o conteúdo do seu repositório. Dentro dele já existem alguns arquivos que exibem uma página estática em Node.js. 

O primeiro passo é criar a hospedagem Node na Umbler, e pegar a GIT URL que vai aparecer na parte de deploy do site. Essa GIT URL é semelhante a que foi clonada do Github, é um remote. 
git remote -v

Mas no caso do GitHub, ao clonarmos o repositório existente já baixamos as configurações de Git dele, inclusive os remotes. No caso da Umbler como se trata de um repositório vazio, você precisa criar um remote novo. A sintaxe é git remote add nomedoseuremote GIT_URL

Com um git remote -v você pode ver que o remote foi criado. E basta fazer um push para o novo remote, e você vai iniciar o deploy para a Umbler :)

Se tudo der certo, você vai conseguir ver o resultado no endereço temporário da hospedagem.

Detalhe: Na Umbler apenas a branch master é reproduzida no site. Deploys em branches diferentes não geram nenhum resultado.

DESAFIO:

Com o conhecimento que você adquiriu sobre Git até o momento, crie um novo diretório no seu computador inicializando o Git dentro dele, e faça o deploy para um site PHP na Umbler. O site tem que ter uma index com a função phpinfo.


 FIM!!!

Você oficialmente manja um pouco de Git, parabéns.



