// components/GameCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function GameCard({ title, price, oldPrice, discount, platform, image }: {
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  platform: string;
  image: any;
}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.platform}>{platform}</Text>
        <View style={styles.priceRow}>
          {oldPrice && <Text style={styles.oldPrice}>{oldPrice}</Text>}
          <Text style={styles.price}>{price}</Text>
          {discount && <Text style={styles.discount}>{discount}</Text>}
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
    color: '#fff',
  },
  platform: {
    color: '#aaa',
    fontSize: 12,
    marginVertical: 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    marginRight: 6,
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 6,
  },
  discount: {
    color: '#0f0',
    fontWeight: 'bold',
  },
});
