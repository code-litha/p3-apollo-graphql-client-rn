import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://64ad-27-50-29-117.ngrok-free.app",
  cache: new InMemoryCache(),
});

export default client;
