const books = [
  {
    id: 1,
    title: "The Awakening",
    author: "Kate Chopin",
    price: 1000,
  },
  {
    id: 2,
    title: "City of Glass",
    author: "Paul Auster",
    price: 1000,
  },
];

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID
    title: String
    author: String
    price: Int
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (_, args) => {
      return books.find((book) => book.id === +args.id);
    },
  },
};

module.exports = {
  bookTypeDefs: typeDefs,
  bookResolvers: resolvers,
};
