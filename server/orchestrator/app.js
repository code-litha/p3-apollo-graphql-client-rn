const { ApolloServer } = require("@apollo/server");
const { bookTypeDefs, bookResolvers } = require("./schemas/books");
const { productResolvers, productTypeDefs } = require("./schemas/products");
const { startStandaloneServer } = require("@apollo/server/standalone");
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs: [bookTypeDefs, productTypeDefs],
  resolvers: [bookResolvers, productResolvers],
  introspection: true,
});

startStandaloneServer(server, {
  listen: {
    port: PORT,
  },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
