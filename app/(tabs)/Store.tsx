import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { GameCard } from '@/components/GameCard';
import { useThemeContext } from '@/context/ThemeContext';
import { useTheme } from '@react-navigation/native';
const initialGames = [
  {
    id: '1',
    image: require('@/assets/images/gta.jpg'),
    title: 'Grand Theft Auto V',
    platform: 'Windows',
    oldPrice: '$20',
    price: '$10',
    discount: '-50%',
  },
  {
    id: '2',
    image: require('@/assets/images/bf.jpg'),
    title: 'Battlefield 4',
    platform: 'Windows',
    price: '$35',
  },
  {
    id: '3',
    image: require('@/assets/images/factorio.jpg'),
    title: 'Factorio',
    platform: 'Windows, Mac',
    price: '$7',
  },
  {
    id: '4',
    image: require('@/assets/images/hzd.jpg'),
    title: 'Horizon Zero Dawn',
    platform: 'Windows',
    price: '$38',
  },
];

export default function StoreScreen() {
  const [games, setGames] = useState(initialGames);
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const { colors } = useTheme();
  const loadMoreGames = () => {
    const moreGames = games.map((game) => ({
      ...game,
      id: `${game.id}-${Math.random()}`,
    }));
    setGames([...games, ...moreGames]);
  };

  const renderTab = (label: string, active: boolean) => (
    <TouchableOpacity
      style={[styles.tab, { backgroundColor: active ? colors.activeTab : colors.tabBackground }]}
    >
      <Text style={[styles.tabText, { color: active ? '#fff' : colors.inactiveTabText }]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.logo, { color: colors.text }]}>🌀 Store</Text>
        <TouchableOpacity>
          <Image source={require('@/assets/icons/search.png')} style={[styles.searchIcon, { tintColor: colors.text }]} />
        </TouchableOpacity>
      </View>

      <View style={styles.featured}>
        <Image source={require('@/assets/images/feature.jpg')} style={styles.featuredImage} />
        <Text style={[styles.featuredTitle, { color: colors.text }]}>Dead by Daylight</Text>
        <Text style={[styles.featuredSubtitle, { color: colors.subtitle }]}>
          Recommended by your friend, Player
        </Text>
        <View style={styles.featuredPrices}>
          <Text style={styles.discountBox}>-70%</Text>
          <Text style={[styles.strikethrough, { color: colors.subtitle }]}>$18</Text>
          <Text style={[styles.price, { color: colors.text }]}>$5</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        {renderTab('Top Sellers', true)}
        {renderTab('Free to play', false)}
        {renderTab('Early Access', false)}
      </View>

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard {...item} />}
        onEndReached={loadMoreGames}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingHorizontal: 16 }}
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
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  featured: {
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 16,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 180,
    borderRadius: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  featuredSubtitle: {
    fontSize: 12,
  },
  featuredPrices: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 8,
  },
  discountBox: {
    backgroundColor: '#00ff88',
    color: '#000',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: 'bold',
    fontSize: 12,
  },
  strikethrough: {
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  tabText: {
    fontSize: 12,
  },
});
