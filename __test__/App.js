import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigation from "./src/navigation/MainStackNavigation";
import { ApolloProvider } from "@apollo/client";
import client from "./src/config/apollo";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
}
