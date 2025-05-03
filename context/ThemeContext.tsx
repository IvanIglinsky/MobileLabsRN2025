import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemColorScheme = useColorScheme();
const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const theme = useMemo(() => {
    const baseTheme = themeMode === 'dark' ? DarkTheme : DefaultTheme;

    return {
      dark: themeMode === 'dark',
      colors: {
        ...baseTheme.colors,
        ...Colors[themeMode],
      },
      fonts: {
        regular: { fontFamily: 'System', fontWeight: 'normal' },
        medium: { fontFamily: 'System', fontWeight: '500' },
        light: { fontFamily: 'System', fontWeight: '300' },
        thin: { fontFamily: 'System', fontWeight: '200' },
      },
    };
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
