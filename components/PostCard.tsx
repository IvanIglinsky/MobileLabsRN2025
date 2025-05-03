import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useThemeContext } from '@/context/ThemeContext'; // Імпортуємо кастомний контекст теми

interface PostCardProps {
  user: string;
  time: string;
  tag?: string;
  image: any;
  title: string;
  description: string;
  likes: number;
  comments: number;
}

export const PostCard: React.FC<PostCardProps> = ({
  user, time, tag, image, title, description, likes, comments,
}) => {
  const { theme } = useThemeContext(); // Отримуємо поточну тему

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.cardBackground }]}>
      <View style={styles.header}>
        <Text style={[styles.user, { color: theme.colors.text }]}>{user}</Text>
        {tag && <Text style={[styles.tag, { backgroundColor: theme.colors.tagBackground }]}>{tag}</Text>}
        <Text style={[styles.time, { color: theme.colors.textMuted }]}>{time}</Text>
      </View>

      <Image source={image} style={styles.image} />

      <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
      <Text style={[styles.description, { color: theme.colors.textMuted }]}>{description}</Text>

      <View style={styles.footer}>
        <Text style={[styles.like, { color: theme.colors.like }]} >👍 {likes}</Text>
        <Text style={[styles.comment, { color: theme.colors.textMuted }]}>💬 {comments}</Text>
        <Text style={[styles.share, { color: theme.colors.textMuted }]}>↗️</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    flexWrap: 'wrap',
    gap: 6,
  },
  user: {
    fontWeight: 'bold',
    marginRight: 6,
  },
  tag: {
    color: '#fff',
    fontSize: 10,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  time: {
    fontSize: 12,
    marginLeft: 'auto',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginVertical: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  like: {
    fontSize: 12,
  },
  comment: {
    fontSize: 12,
  },
  share: {
    fontSize: 12,
  },
});
