import Home from '../screen/Home';
import ProductDetail from '../screen/ProductDetail';
import ProductTabNavigation from './ProductTabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='ProductTab'
        component={ProductTabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='ProductDetail'
        component={ProductDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
