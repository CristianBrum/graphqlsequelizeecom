#! /bin/bash
PATH=$(npm bin):$PATH
export NODE_ENV=development

function initialize_back_end () {
  printf "\n> ASYNC: Instalando o back-end e inicializando o banco de dados com o ORM em modo de desenvolvimento\n"
  (
    cacheFolderBack="/tmp/graphqlsequilizeecom-dev-cache"
    rm -rf $cacheFolderBack
    npm_config_loglevel=silent npm install --cache $cacheFolderBack
    npm install
    npx sequelize-cli db:drop
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
  )
}

initialize_back_end

printf "\n> Script terminado\n\n"
