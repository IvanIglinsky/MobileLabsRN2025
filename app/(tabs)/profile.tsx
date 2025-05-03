import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import avatar from '@/assets/avatars/avatar1.png';
import { useTheme } from '@/context/ThemeContext'; // підключення контексту

export default function ProfileScreen() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  const colors = {
    background: isDark ? '#121e2b' : '#fff',
    card: isDark ? '#1f2e3c' : '#e0e0e0',
    text: isDark ? '#fff' : '#000',
    subtext: isDark ? '#aaa' : '#555',
    border: isDark ? '#121e2b' : '#fff',
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

      <View style={styles.avatarContainer}>
        <View style={styles.avatarWrapper}>
          <Image source={avatar} style={styles.avatar} />
          <View style={[styles.statusIndicator, { borderColor: colors.background }]} />
        </View>
        <Text style={[styles.name, { color: colors.text }]}>Firstname Lastname</Text>
        <Text style={[styles.group, { color: colors.subtext }]}>Group</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={[styles.menuItem, { backgroundColor: colors.card }]} onPress={toggleTheme}>
          <Text style={[styles.menuText, { color: colors.text }]}>Change Theme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, { backgroundColor: colors.card }]}>
          <Text style={[styles.menuText, { color: colors.text }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#333',
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 16,
    height: 16,
    backgroundColor: '#2ecc71',
    borderRadius: 8,
    borderWidth: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  group: {
    fontSize: 14,
  },
  menu: {
    width: '90%',
    gap: 15,
  },
  menuItem: {
    padding: 16,
    borderRadius: 10,
  },
  menuText: {
    fontSize: 16,
  },
});
