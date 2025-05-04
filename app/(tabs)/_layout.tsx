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
  );
}
