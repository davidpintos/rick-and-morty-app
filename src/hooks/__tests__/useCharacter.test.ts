import { renderHook, waitFor } from '@testing-library/react-native';
import rickAndMortyApi from '../../api/rickAndMortyApi';
import { useCharacter } from '../useCharacter';

// Mock the API module
jest.mock('../../api/rickAndMortyApi');
const mockedApi = rickAndMortyApi as jest.Mocked<typeof rickAndMortyApi>;

describe('useCharacter', () => {
  // Reset mocks before each test
  beforeEach(() => {
    mockedApi.get.mockClear();
  });

  it('fetches and returns a character on success', async () => {
    // Mock a successful API response
    const mockCharacter = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      origin: { name: 'Earth' },
      image: 'http://localhost:3000/image.jpg',
    };
    mockedApi.get.mockResolvedValue({ data: mockCharacter });

    // Render the hook
    const { result } = renderHook(() => useCharacter(1));

    // Wait for the hook to finish loading
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Checking results
    expect(result.current.character).toEqual(mockCharacter);
    expect(result.current.error).toBeNull();
  });

  it('handles and returns an error on failure', async () => {
    // Mock a failed API response
    const errorMessage = 'Request failed with status code 404';
    mockedApi.get.mockRejectedValue(new Error(errorMessage));

    // Render the hook with "invalid" character id
    const { result } = renderHook(() => useCharacter(999));

    // Wait for the hook to finish loading and check the final error state
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Checking results
    expect(result.current.character).toBeNull();
    expect(result.current.error).toBe('Failed to fetch character details');
  });
});
