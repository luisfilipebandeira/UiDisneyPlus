import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {Feather} from '@expo/vector-icons'

import Home from '../pages/Home'

const Tab = createMaterialTopTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      swipeEnabled={false}
      tabBarOptions={{
        indicatorStyle: {backgroundColor: '#fff'},
        showIcon: true,
        activeTintColor: '#FFF',
        inactiveTintColor: '#333',
        style: {
          height: 64,
          justifyContent: 'center',
          backgroundColor: "#161616",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
          focused ? (
                <Feather name="home" size={20} color='#fff' />
            ) : (
                <Feather name="home" size={20} color='#fff' />
            ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Home}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ focused }) =>
          focused ? (
              <Feather name="search" size={20} color='#fff' />
            ) : (
              <Feather name="search" size={20} color='#fff' />
            ),
        }}
      />

      <Tab.Screen
        name="Series"
        component={Home}
        options={{
          tabBarLabel: "Séries",
          tabBarIcon: ({ focused }) =>
          focused ? (
              <Feather name="download" size={20} color='#fff' />
            ) : (
              <Feather name="download" size={20} color='#fff' />
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused }) =>
          focused ? (
              <Feather name="user" size={20} color='#fff' />
            ) : (
              <Feather name="user" size={20} color='#fff' />
            ),
        }}
      />
    </Tab.Navigator>
  )
}

export default AppRoutes
