import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
  return (
    <View style={styles.container}>
      <View>
        <Image source={avatar} style={styles.avatar} />
        {online && <View style={styles.onlineIndicator} />}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message} • {date}</Text>
      </View>

      {unread && <View style={styles.unreadDot} />}
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
    borderBottomColor: '#1f2937',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  onlineIndicator: {
    width: 10,
    height: 10,
    backgroundColor: '#10b981',
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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  message: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 2,
  },
  unreadDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#3b82f6',
  },
});
