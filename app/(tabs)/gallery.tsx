import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function GalleryScreen() {
  const images = [
    require('@/assets/images/image1.jpg'),
    require('@/assets/images/image2.jpg'),
    require('@/assets/images/image3.jpg'),
    require('@/assets/images/image4.jpg'),
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Photo Gallery</ThemedText>
      </ThemedView>
      <View style={styles.galleryContainer}>
        {images.map((img, index) => (
          <Image
            key={index}
            source={img}
            contentFit="cover"
            style={styles.galleryImage}
          />
        ))}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
    paddingHorizontal: 8,
  },
  galleryImage: {
    width: '48%',
    height: 200,
    borderRadius: 8,
  },
});
