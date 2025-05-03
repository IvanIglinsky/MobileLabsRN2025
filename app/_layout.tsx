import React from 'react';
import { useFonts } from 'expo-font';
import { Stack, useNavigationContainerRef } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as CustomThemeProvider, useThemeContext } from '@/context/ThemeContext';
import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <CustomThemeProvider>
      <ThemedNavigation />
    </CustomThemeProvider>
  );
}

function ThemedNavigation() {
  const { theme } = useThemeContext();
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </NavigationThemeProvider>
  );
}
