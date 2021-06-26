import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import AppRoutes from './src/routes/app.routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#131212ed" />
      <AppRoutes />
    </NavigationContainer>
  );
}
