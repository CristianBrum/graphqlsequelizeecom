const { ApolloServer } = require('apollo-server');
require('dotenv').config();
const typeDefs = require('./src/graphql/typeDefs');
const resolvers = require('./src/graphql/resolvers');
const { verifyToken } = require('./src/middlewares/auth');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.get('Authorization') || '';
    return { auth: verifyToken(token.replace('Bearer ', '')) };
  },
});

const PORT = process.env.PORT || 4000;

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
