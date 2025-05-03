import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useThemeContext } from '@/context/ThemeContext'; // Імпортуємо кастомний контекст теми

interface ChatItemProps {
  avatar: any;
  name: string;
  message: string;
  date: string;
  online?: boolean;
  unread?: boolean;
}

export const ChatItem: React.FC<ChatItemProps> = ({
  avatar, name, message, date, online, unread,
}) => {
  const { theme } = useThemeContext(); // Отримуємо поточну тему

  return (
    <View style={[styles.container, { borderBottomColor: theme.colors.border }]}>
      <View>
        <Image source={avatar} style={styles.avatar} />
        {online && <View style={[styles.onlineIndicator, { backgroundColor: theme.colors.onlineIndicator }]} />}
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.name, { color: theme.colors.text }]}>{name}</Text>
        <Text style={[styles.message, { color: theme.colors.textMuted }]}>
          {message} • {date}
        </Text>
      </View>

      {unread && <View style={[styles.unreadDot, { backgroundColor: theme.colors.primary }]} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  onlineIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 2,
    right: 2,
    borderWidth: 2,
    borderColor: '#111827',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  message: {
    fontSize: 12,
    marginTop: 2,
  },
  unreadDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
