import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useGame } from '@/context/GameContext';

const TASKS = [
  { key: 'tap', label: "Зробити 10 кліків", done: (t) => t.tap >= 10 },
  { key: 'doubleTap', label: 'Зробити подвійний клік 5 разів', done: (t) => t.doubleTap >= 5 },
  { key: 'longPress', label: "Утримувати об'єкт 3 секунди", done: (t) => t.longPress },
  { key: 'pan', label: "Перетягнути об'єкт", done: (t) => t.pan },
  { key: 'swipeRight', label: 'Зробити свайп вправо', done: (t) => t.swipeRight },
  { key: 'swipeLeft', label: 'Зробити свайп вліво', done: (t) => t.swipeLeft },
  { key: 'pinch', label: "Змінити розмір об'єкта", done: (t) => t.pinch },
  { key: 'score', label: 'Отримати 100 очок', done: (t) => t.score },
];

export default function TasksScreen() {
  const { tasks } = useGame();

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={TASKS}
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <Text style={styles.text}>{item.label}</Text>
          <Text style={styles.status}>{item.done(tasks) ? '✅' : '❌'}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
  status: {
    fontSize: 16,
  },
});
