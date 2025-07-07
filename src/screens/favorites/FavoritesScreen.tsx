import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFavorites } from '../../contexts/FavoritesContext';
import CharacterCard from '../../components/CharacterCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Favorites'>;

const FavoritesScreen = ({ navigation }: Props) => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <View style={styles.centeredContainer}>
        <Text>No tienes favoritos aún.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard
            character={item}
            onPress={() => navigation.navigate('Details', { characterId: item.id })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
