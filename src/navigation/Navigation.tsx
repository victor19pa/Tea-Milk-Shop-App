import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Location, Order, OrderDetail } from '../screens';
import Tabs from './Tabs';

export type RootStackParams = {
  Home: undefined;
  Location: undefined;
  Order: undefined;
  OrderDetail: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{
          // backgroundColor: 'white',
        }
      }}
      initialRouteName={'Home'}
    >
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
    </Stack.Navigator>
  );
}

export default Navigation;