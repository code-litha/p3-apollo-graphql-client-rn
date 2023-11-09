const { ApolloServer, gql } = require("apollo-server");
const axios = require("axios");
const PRODUCT_SERVICE_URL = "http://localhost:4002/products/";

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

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID
    title: String
    author: String
    price: Int
  }

  type Category {
    id: ID
    name: String
  }

  type ProductImage {
    id: ID
    productId: ID
    imgUrl: String
  }

  type Product {
    id: ID
    name: String
    slug: String
    description: String
    price: Int
    mainImg: String
    categoryId: ID
    authorId: ID
    createdAt: String
    updatedAt: String
    Category: Category
    Images: [ProductImage]
  }

  input ProductInput {
    name: String!
    description: String!
    price: Int!
    mainImg: String!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    products: [Product]
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(newProduct: ProductInput!): Product
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (_, args) => {
      return books.find((book) => book.id === +args.id);
    },
    products: async (_) => {
      try {
        const { data: products } = await axios.get(PRODUCT_SERVICE_URL);
        console.log(products);
        return products;
      } catch (error) {
        console.log("🚀 ~ file: app.js ~ line 88 ~ products: ~ error", error);
        throw error;
      }
    },
    product: async (_, args) => {
      try {
        const { data: product } = await axios.get(
          PRODUCT_SERVICE_URL + args.id
        );
        return product;
      } catch (error) {
        console.log("🚀 ~ file: app.js ~ line 99 ~ product: ~ error", error);
        throw error;
      }
    },
  },
  Mutation: {
    createProduct: async (_, args) => {
      try {
        const { data: product } = await axios.post(
          PRODUCT_SERVICE_URL,
          args.newProduct
        );
        return product;
      } catch (error) {
        console.log(
          "🚀 ~ file: app.js ~ line 113 ~ createProduct: ~ error",
          error
        );
        throw error;
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers, introspection: true });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
