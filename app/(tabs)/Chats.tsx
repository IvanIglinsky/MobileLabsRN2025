import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { ChatItem } from '@/components/ChatItem';
import { useThemeContext } from '@/context/ThemeContext';
import { useTheme } from '@react-navigation/native';

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
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
 const { colors } = useTheme();
  const loadMoreChats = () => {
    const newChats = chats.map(chat => ({
      ...chat,
      id: `${chat.id}-${Math.random()}`,
    }));
    setChats(prev => [...prev, ...newChats]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.headerText }]}>💬 Chat</Text>
        <TouchableOpacity>
          <Image source={require('@/assets/icons/search.png')} style={[styles.searchIcon, { tintColor: colors.icon }]} />
        </TouchableOpacity>
      </View>

      <View style={[styles.tabs, { backgroundColor: colors.tabBackground }]}>
        <TouchableOpacity style={[styles.tab, { backgroundColor: colors.activeTab }]}>
          <Text style={[styles.tabText, { color: colors.activeTabText, fontWeight: 'bold' }]}>Open chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={[styles.tabText, { color: colors.tabText }]}>My friends</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 18,
    height: 18,
  },
  tabs: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
  },
});
