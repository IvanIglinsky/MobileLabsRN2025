import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.user}>{user}</Text>
        {tag && <Text style={styles.tag}>{tag}</Text>}
        <Text style={styles.time}>{time}</Text>
      </View>

      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.footer}>
        <Text style={styles.like}>👍 {likes}</Text>
        <Text style={styles.comment}>💬 {comments}</Text>
        <Text style={styles.share}>↗️</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1f2937',
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
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 6,
  },
  tag: {
    backgroundColor: '#9333ea',
    color: '#fff',
    fontSize: 10,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  time: {
    color: '#aaa',
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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  description: {
    color: '#ccc',
    fontSize: 12,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  like: {
    color: '#10b981',
    fontSize: 12,
  },
  comment: {
    color: '#ccc',
    fontSize: 12,
  },
  share: {
    color: '#ccc',
    fontSize: 12,
  },
});
