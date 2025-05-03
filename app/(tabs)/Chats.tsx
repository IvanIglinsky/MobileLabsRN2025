import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { ChatItem } from '@/components/ChatItem';

const avatars = {
  red: require('@/assets/avatars/avatar1.png'),
  orange: require('@/assets/avatars/avatar2.png'),
  unknown: require('@/assets/avatars/avatar3.jpg'),
  expressa: require('@/assets/avatars/avatar4.png'),
};

const initialChats = [
  {
    id: '1',
    avatar: avatars.orange,
    name: 'Mark Dyson',
    message: 'I\'m already starting to play',
    date: '14 Jun',
    online: true,
    unread: true,
  },
  {
    id: '2',
    avatar: avatars.orange,
    name: 'Mark Dyson',
    message: 'You: Ok',
    date: '14 Jun',
  },
  {
    id: '3',
    avatar: avatars.red,
    name: 'Player123',
    message: 'You: Ok',
    date: '14 Jun',
  },
  {
    id: '4',
    avatar: avatars.red,
    name: 'Player123',
    message: 'You: Ok',
    date: '14 Jun',
  },
  {
    id: '5',
    avatar: avatars.unknown,
    name: 'Player',
    message: 'Hello!',
    date: '12 Jun',
  },
  {
    id: '6',
    avatar: avatars.unknown,
    name: 'Player',
    message: 'Hello!',
    date: '12 Jun',
  },
  {
    id: '7',
    avatar: avatars.expressa,
    name: '💎 Exprêsso #=_=#',
    message: 'Ok',
    date: '11 Jun',
  },
  {
    id: '8',
    avatar: avatars.expressa,
    name: '💎 Exprêsso #=_=#',
    message: 'Ok',
    date: '11 Jun',
  },
];

export default function ChatScreen() {
  const [chats, setChats] = useState(initialChats);

  const loadMoreChats = () => {
    const newChats = chats.map(chat => ({
      ...chat,
      id: `${chat.id}-${Math.random()}`,
    }));
    setChats(prev => [...prev, ...newChats]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>💬 Chat</Text>
        <TouchableOpacity>
          <Image source={require('@/assets/icons/search.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Open chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>My friends</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={chats}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ChatItem {...item} />}
        onEndReached={loadMoreChats}
        onEndReachedThreshold={0.3}
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
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 18,
    height: 18,
    tintColor: '#aaa',
  },
  tabs: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: '#1f2937',
    borderRadius: 10,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#3b82f6',
  },
  tabText: {
    color: '#aaa',
    fontSize: 12,
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
