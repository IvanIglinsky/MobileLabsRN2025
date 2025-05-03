import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useThemeContext } from '@/context/ThemeContext';

export function GameCard({
  title, price, oldPrice, discount, platform, image
}: {
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  platform: string;
  image: any;
}) {
  const { theme } = useThemeContext();

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.cardBackground }]}>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
        <Text style={[styles.platform, { color: theme.colors.textMuted }]}>{platform}</Text>
        <View style={styles.priceRow}>
          {oldPrice && <Text style={[styles.oldPrice, { color: theme.colors.textMuted }]}>{oldPrice}</Text>}
          <Text style={[styles.price, { color: theme.colors.text }]}>{price}</Text>
          {discount && <Text style={[styles.discount, { color: theme.colors.discount }]}>{discount}</Text>}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 12,
    padding: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  platform: {
    fontSize: 12,
    marginVertical: 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    marginRight: 6,
  },
  price: {
    fontWeight: 'bold',
    marginRight: 6,
  },
  discount: {
    fontWeight: 'bold',
  },
});
