import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  // uri: 'https://flyby-router-demo.herokuapp.com/',
  uri: "https://ba14-2001-448a-20a0-4059-c487-7ba7-b15b-b2a6.ap.ngrok.io",
  cache: new InMemoryCache(),
});

export default client;
