import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GameObject from '@/components/GameObject';
import { useGame } from '@/context/GameContext';

export default function GameScreen() {
  const { score } = useGame();
  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
      <GameObject />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  score: {
    fontSize: 24,
    textAlign: 'center',
  },
});