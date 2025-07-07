import { useState, useEffect } from 'react';
import rickAndMortyApi from '../api/rickAndMortyApi';
import { Character } from '../types/api';

/**
 * Hook for getting information about an specific character
 * @param characterId Number, character id
 * @returns 
 */
export const useCharacter = (characterId: number) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await rickAndMortyApi.get<Character>(`/character/${characterId}`);
        setCharacter(response.data);
      } catch (err) {
        setError('Failed to fetch character details');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [characterId]);

  return { character, loading, error };
};
