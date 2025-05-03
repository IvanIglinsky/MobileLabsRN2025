import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Title, Paragraph, PaperProvider } from 'react-native-paper';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const news = [
  {
    id: '1',
    title: 'Новий запуск додатку',
    summary: 'Ми щойно запустили новий мобільний застосунок!',
    image: require('@/assets/images/image1.jpg'),
  },
  {
    id: '2',
    title: 'Оновлення функцій',
    summary: 'Додано нові функції для покращення користування.',
    image: require('@/assets/images/image2.jpg'),
  },
  {
    id: '3',
    title: 'Безпека даних',
    summary: 'Ми оновили політику конфіденційності.',
    image: require('@/assets/images/image3.jpg'),
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
       <PaperProvider>
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Новини
      </ThemedText>

      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('NewsDetail', { id: item.id })}>
            <Card style={styles.card}>
              <Card.Cover source={item.image} />
              <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.summary}</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </ThemedView>
     </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  header: {
    marginBottom: 12,
  },
  card: {
    marginBottom: 16,
  },
});
