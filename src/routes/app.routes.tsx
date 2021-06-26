import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {MaterialIcons} from '@expo/vector-icons'

import Home from '../pages/Home'

const Tab = createMaterialTopTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      swipeEnabled={false}
      tabBarOptions={{
        indicatorStyle: {backgroundColor: '#fff'},
        showLabel: false,
        showIcon: true,
        activeTintColor: '#FFF',
        inactiveTintColor: '#333',
        labelStyle: {fontSize: 10},
        style: {
          height: 50,
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
                <MaterialIcons name="home" size={25} color='#fff' />
            ) : (
                <MaterialIcons name="home" size={25} color='#fff' />
            ),
        }}
      />

      <Tab.Screen
        name="search"
        component={Home}
        options={{
          tabBarLabel: "Pesquisar",
          tabBarIcon: ({ focused }) =>
          focused ? (
              <MaterialIcons name="search" size={25} color='#fff' />
            ) : (
              <MaterialIcons name="search" size={25} color='#fff' />
            ),
        }}
      />

      <Tab.Screen
        name="Series"
        component={Home}
        options={{
          tabBarLabel: "Download",
          tabBarIcon: ({ focused }) =>
          focused ? (
              <MaterialIcons name="get-app" size={25} color='#fff' />
            ) : (
              <MaterialIcons name="get-app" size={25} color='#fff' />
            ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Home}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused }) =>
          focused ? (
              <MaterialIcons name="account-circle" size={25} color='#fff' />
            ) : (
              <MaterialIcons name="account-circle" size={25} color='#fff' />
            ),
        }}
      />
    </Tab.Navigator>
  )
}

export default AppRoutes
