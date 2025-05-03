import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { PostCard } from '@/components/PostCard';

const initialPosts = [
  {
    id: '1',
    user: 'Eurogamer',
    time: 'yesterday • 2:20 pm',
    tag: 'NEWS',
    image: require('@/assets/images/kingdom.jpg'),
    title: 'Florida tourist attraction sues Fortnite, seeks removal of in-game castle',
    description: 'Coral Castle Museum, a tourist attraction near Miami, is suing Fortnite maker Epic Games for trademark infringement and unfair competition.',
    likes: 324,
    comments: 12,
  },
  {
    id: '2',
    user: 'Eurogamer',
    time: '2 days ago',
    image: require('@/assets/images/sample.jpg'),
    title: 'Steam sale kicks off with deep discounts',
    description: 'Thousands of games discounted including AAA and indie hits.',
    likes: 110,
    comments: 8,
  },
];

export default function CommunityScreen() {
  const [posts, setPosts] = useState(initialPosts);

  const loadMorePosts = () => {
    const newPosts = posts.map(post => ({
      ...post,
      id: `${post.id}-${Math.random()}`,
    }));
    setPosts(prev => [...prev, ...newPosts]);
  };

  const renderTab = (label: string, active: boolean) => (
    <TouchableOpacity style={[styles.tab, active && styles.tabActive]}>
      <Text style={[styles.tabText, active && styles.tabTextActive]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🗨 Community</Text>
        <Text style={styles.subtitle}>
          Community and official content for all games and software
        </Text>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.search}>
          <Image source={require('@/assets/icons/search.png')} style={styles.searchIcon} />
        </TouchableOpacity>
        {renderTab('All', true)}
        {renderTab('Screenshots', false)}
        {renderTab('Artwork', false)}
      </View>

      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PostCard {...item} />}
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111827',
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 8,
  },
  search: {
    backgroundColor: '#1f2937',
    padding: 8,
    borderRadius: 8,
  },
  searchIcon: {
    width: 16,
    height: 16,
    tintColor: '#aaa',
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#1f2937',
  },
  tabActive: {
    backgroundColor: '#3b82f6',
  },
  tabText: {
    color: '#aaa',
    fontSize: 12,
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
