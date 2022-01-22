const { ApolloServer } = require('apollo-server');
require('dotenv').config();
const { typeDefs, resolvers } = require('./src/graphql');
const { verifyToken } = require('./src/middlewares/auth');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 3000;

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
