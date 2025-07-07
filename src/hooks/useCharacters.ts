import { useState, useEffect } from 'react';
import rickAndMortyApi from '../api/rickAndMortyApi';
import { ApiResponse, Character } from '../types/api';

/**
 * Hook for getting a list of some characters
 * For simplicity we limit the results to 10
 * */ 
export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await rickAndMortyApi.get<ApiResponse>('/character');
        setCharacters(response.data.results.slice(0, 10));
      } catch (err) {
        setError('Failed to fetch characters');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { characters, loading, error };
};
