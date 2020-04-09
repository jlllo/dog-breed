**Dog Breed** é um app desenvolvido em **React Native** com **Expo** utilizando **TypeScript**, para _authenticação_ e _visualização de fotos_ de cães de diferentes raças _via API externa_.

### Funcionalidades

- _Autenticação_

O usuário informa um e-mail e se registra. Uma requisição é feita à API. Caso a requisição retorne sucesso, é retornado um objeto com informações do usuário autenticado, incluindo o _token_ que é armazenado no estado da aplicação _via Redux_.

- _Galeria de Fotos_

Depois de autenticado, o usuário é redirecionado para uma galeria de fotos com um menu superior em forma de _tabs_, com a possibilidade de seleção da _breed_ desejada. Tomei a liberdade de criar uma interface que proporcionasse uma melhor experiência de usuário, sendo possível alterar a _breed_ arrastando para o lado ou selecionando a raça desejada no menu superior.

Para a exibição das fotos utilizei um pouco de _CSS Grid Layout_ para melhor disposição das miniaturas na tela. No _scroll_, para não afetar o desempenho do app, apenas uma quantidade de miniaturas é carregada inicialmente, sendo as demais exibidas à medida que o usuário rolar a listagem para baixo. Na galeria também é possível ampliar qualquer foto listada com um efeito _overlay_.

- _Logout_

Optei por utilizar uma forma simples de _logout_ também para uma melhor experiência de usuário na visualização da galeria. Com apenas um botão no canto superior direito é possível acessar a funcionalidade. Sendo acionado, _o token é removido do estado da aplicação_ e o _usuário é redirecionado_ imediatamente para a tela de autenticação novamente.

### Tecnologias e impressões

- _Redux, Redux Saga e Estado Global_

Para este projeto, como um extra, também achei interessante aplicar os conceitos de _estado global_ e _Arquitetura Flux_ com _Redux_, pois penso que é uma prática que vale muito a pena em projetos escaláveis, permitindo uma visão muito mais ampla da aplicação.

- _TypeScript, Tipos e Estruturas_

TypeScript também foi uma escolha que fiz por pensar que a prática permite aperfeiçoar cada vez mais. E neste caso, tipos e estruturas de dados de toda a aplicação bem definidos evitou que eu tivesse que lidar com demasiada depuração de código na parte de implementação das funcionalidades.

- _React Hooks_

Adotei React Hooks nesse projeto, como nos projetos recentes, por acreditar que o código fica muito mais legível com _Functional Componentes_ e porque o próprio _Redux_ possui hooks que podem ser utilizados em sua implementação.

- _Jest, Unit e Validação_

Utilizei _Jest_ para testes unitários em algumas _actions_ do _Redux_, além de testes de requisição à _API_.

### Telas

<p align="center">
  <img      src="https://raw.githubusercontent.com/jlllo/dog-breed/master/tela1.jpg" 
    height="500" 
  />
  <img      src="https://raw.githubusercontent.com/jlllo/dog-breed/master/tela2.jpg" 
    height="500" 
  />
  <img      src="https://raw.githubusercontent.com/jlllo/dog-breed/master/tela3.jpg" 
    height="500" 
  />
</p>
