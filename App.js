import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavbar from './src/components/BottomNavbar'; // Import BottomNavbar component

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Integrate BottomNavbar while keeping the navigation */}
      <BottomNavbar /> 
    </NavigationContainer>
  );
}
