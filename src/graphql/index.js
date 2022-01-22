const { join } = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const typesArray = loadFilesSync(join(__dirname, 'modules', '**', '*.gql'));
const resolversArray = loadFilesSync(join(__dirname, 'modules', '**', 'resolvers.js'));

const typeDefs = mergeTypeDefs(typesArray);
const resolvers = mergeResolvers(resolversArray);

module.exports = {
  typeDefs,
  resolvers,
};
