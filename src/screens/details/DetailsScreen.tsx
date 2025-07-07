import React from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { useCharacter } from '../../hooks/useCharacter';
import { useFavorites } from '../../contexts/FavoritesContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen = ({ navigation, route }: Props) => {
  const { characterId } = route.params;
  const { character, loading, error } = useCharacter(characterId);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  // Displaying loading indicator
  if (loading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Displaying an error if needed or character not found
  if (error || !character) {
    return (
      <View style={styles.centeredContainer}>
        <Text>{error || 'Character not found'}</Text>
        <Button title="Go to Home" onPress={() => navigation.popToTop()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.detail}>Status: {character.status}</Text>
      <Text style={styles.detail}>Species: {character.species}</Text>
      <Text style={styles.detail}>Origin: {character.origin.name}</Text>
      <Button
        title={character && isFavorite(character.id) ? 'Remove from Favorites' : 'Add to Favorites'}
        onPress={() => {
          if (character) {
            if (isFavorite(character.id)) {
              removeFavorite(character.id);
            } else {
              addFavorite(character);
            }
          }
        }}
      />
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default DetailsScreen;
