import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Character } from '../types/api';

interface CharacterCardProps {
  character: Character;
  onPress: () => void;
}

const CharacterCard = ({ character, onPress }: CharacterCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CharacterCard;
