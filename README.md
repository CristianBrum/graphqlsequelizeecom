# GraphQLSequelizeEcom

# Habilidades

Nesse projeto, foi utilizado:

  - NodeJS
  - GraphQL
  - Sequelize
  - MySQL
  - Joi
  - Sqlite
  - Apollo Server
---


## O QUE FOI DESENVOLVIDO

Esta é Uma Api de E-commerce. Ela foi escrito em Node js, utilizando GraphQL com Apollo server e Sequelize ORM como principais dependências.


### Antes de começar:

1. Clone o repositório
  * `git clone git@github.com:CristianBrum/graphqlsequelizeecom.git`.


2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm run dev`

3. comandos do Sequelize
  * Para criar o Banco de dados:
    * `npx sequelize db:create`
  * Para subir as tabelas no banco de dados:
    * `npx sequelize db:migrate`
    * Para polular o banco de dados:(opcional)
    * `npx sequelize-cli db:seed:all`

4. Para Facilitar a manipulaçao das queries e mutation, recomendo importar o arquivo `postman_collection.json` no programa [**Postman**](https://www.postman.com/downloads/).

 * Clique em `import` na barra superior esquerda.
 *  selecione o arquivo dentro da pasta do projeto.
 
   <img src="./postmanQueries.png">
