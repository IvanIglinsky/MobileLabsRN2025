import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GameScreen from '@/app/(tabs)/GameScreen';
import TasksScreen from '@/app/(tabs)/TaskScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Game" component={GameScreen} />
      <Tab.Screen name="Tasks" component={TasksScreen} />
    </Tab.Navigator>
  );
}
