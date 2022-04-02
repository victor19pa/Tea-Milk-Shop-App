import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform } from 'react-native';
import { CustomTabBar, CustomTabBarButton } from '../components/Tabs';
import { COLORS, icons, SIZES } from '../constants';
import { Home, Rewards } from '../screens';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: 'transparent',
          borderTopColor: "transparent",
          height: (Platform.OS == 'android') ? 60 : 80
        }
      }}
      tabBar={(props) => (
        <CustomTabBar 
          props = { props }
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? COLORS.primary : COLORS.black
              }}
            />
          ),
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              containerStyle={{
                borderTopLeftRadius: SIZES.radius * 2.5
              }}
            />
          ),
          
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.bubbleTea}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? COLORS.primary : COLORS.black
              }}
            />
          ),
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              containerStyle={{
                marginRight: 6
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AddOrder"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.add}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: COLORS.white
              }}
            />
          ),
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              isFloat={true}
            />
          )
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.heart}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? COLORS.primary : COLORS.black
              }}
            />
          ),
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              containerStyle={{
                marginLeft: 6
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.profile}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? COLORS.primary : COLORS.black
              }}
            />
          ),
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              containerStyle={{
                borderTopRightRadius: SIZES.radius * 2.5
              }}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs;