import React from 'react';
import { useFonts } from 'expo-font';
import { Stack, useNavigationContainerRef } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as CustomThemeProvider, useThemeContext } from '@/context/ThemeContext';
import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { GameProvider } from '@/context/GameContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
    <GestureHandlerRootView style={{ flex: 1 }}>
     <GameProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      </Stack>
      </GameProvider>
      <StatusBar style="auto" />
      </GestureHandlerRootView>
    </NavigationThemeProvider>
  );
}
