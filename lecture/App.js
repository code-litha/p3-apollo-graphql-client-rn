import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigation from "./src/navigation/MainStackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
}
