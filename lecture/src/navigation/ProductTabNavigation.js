import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from '../screen/ProductList';
import ProductForm from '../screen/ProductForm';
import { AntDesign } from '@expo/vector-icons';
import color from '../styling/color';

const Tab = createBottomTabNavigator();

export default function ProductTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          let style = {};

          if (focused) {
            style.color = 'blue';
            style.opacity = 0.7;
          } else {
            style.color = 'lightgray';
          }
          if (route.name === 'ProductList') {
            iconName = 'bars';
          } else if (route.name === 'ProductForm') {
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
      <Tab.Screen
        name='ProductList'
        component={ProductList}
        options={{
          headerShown: false,
        }}
      ></Tab.Screen>
      <Tab.Screen name='ProductForm' component={ProductForm}></Tab.Screen>
    </Tab.Navigator>
  );
}
