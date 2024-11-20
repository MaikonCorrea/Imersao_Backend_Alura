# Projeto de Estudos de Backend

## Imersão Dev Back-end - ALURA

Este repositório é dedicado a um projeto de estudos com o objetivo de reforçar os conceitos e o uso de backend. Atualmente, o projeto inclui:

- Estrutura básica de um servidor backend utilizando Express.
- Conexão com banco de dados MongoDB Atlas.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

### Descrição dos Diretórios e Arquivos

- `server.js`: Arquivo principal que inicializa o servidor Express e define a porta de escuta.

- `src/controllers/controllers.js`: Contém a lógica dos controladores, como a função `listPosts` que lida com a requisição para listar posts.

- `src/dataBase/dbConfig.js`: Configuração e conexão com o banco de dados MongoDB Atlas.

- `src/models/models.js`: Define os modelos e funções para interagir com o banco de dados, como a função `getAllPosts`.

- `src/routes/routes.js`: Define as rotas da aplicação, como a rota `/posts` que utiliza o controlador `listPosts`.

## Dependências

As principais dependências do projeto são:

- `express`: Framework para construção de aplicações web e APIs.
- `mongodb`: Driver oficial do MongoDB para Node.js.

## Próximos Passos
- Implementação de mais rotas

## Contato

Para mais informações, entre em contato pelo email: [maikonacorrea@gmail.com](mailto:maikonacorrea@gmail.com).
