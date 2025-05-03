import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeContext } from '@/context/ThemeContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useThemeContext();

  // Отримуємо правильні кольори для вкладок залежно від активної теми
  const activeTintColor = theme === 'dark' ? Colors.dark.tint : Colors.light.tint;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeTintColor,  // Використовуємо динамічний колір для активної вкладки
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="Store"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="photo.fill.on.rectangle.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.crop.circle.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="people.fill" color={color} />,  // New icon
        }}
      />
      <Tabs.Screen
        name="Chats"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="chat.fill" color={color} />,  // New icon
        }}
      />
      <Tabs.Screen
        name="Guards"
        options={{
          title: 'Guards',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="shield.fill" color={color} />,  // New icon
        }}
      />
    </Tabs>
  );
}
