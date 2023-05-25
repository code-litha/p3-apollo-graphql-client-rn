import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from "./ProductList";
import { AntDesign } from "@expo/vector-icons";
import color from '../styling/color';
import ProductForm from './ProductForm';

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          let style = {};

          if (focused) {
            style.color = "blue";
            style.opacity = 0.7;
          } else {
            style.color = "lightgray";
          }
          if (route.name === 'Product List') {
            iconName = 'bars';
          } else if (route.name === 'Add Product') {
            iconName = 'pluscircle';
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={24} style={style} />;
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: color.main,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Product List" component={ProductList} options={{
        headerShown: false
      }} />
      <Tab.Screen name="Add Product" component={ProductForm} />
    </Tab.Navigator>
  );
}