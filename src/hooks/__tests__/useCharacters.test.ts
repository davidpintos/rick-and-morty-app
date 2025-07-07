import { renderHook, waitFor } from '@testing-library/react-native';
import rickAndMortyApi from '../../api/rickAndMortyApi';
import { useCharacters } from '../useCharacters';

// Mock the API module
jest.mock('../../api/rickAndMortyApi');
const mockedApi = rickAndMortyApi as jest.Mocked<typeof rickAndMortyApi>;

describe('useCharacters', () => {
  // Reset mocks before each test
  beforeEach(() => {
    mockedApi.get.mockClear();
  });

  it('fetches and returns a list of characters on success', async () => {
    // Mock a successful API response
    const mockCharacters = [{
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      origin: { name: 'Earth' },
      image: 'http://localhost:3000/image.jpg',
    },
    {
      id: 2,
      name: 'Jerry Smith',
      status: 'Alive',
      species: 'Human',
      origin: { name: 'Mars' },
      image: 'http://localhost:3000/image2.jpg',
    },
    ];
    mockedApi.get.mockResolvedValue({ data: {results: mockCharacters }});

    // Render the hook
    const { result } = renderHook(() => useCharacters());

    // Wait for the hook to finish loading
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Check results
    expect(result.current.characters).toEqual(mockCharacters);
    expect(result.current.error).toBeNull();
  });

  it('handles and returns an error on failure', async () => {
    // Mock a failed API response
    const errorMessage = 'Request failed with status code 404';
    mockedApi.get.mockRejectedValue(new Error(errorMessage));

    // Render the hook with "invalid" character id
    const { result } = renderHook(() => useCharacters());

    // Wait for the hook to finish loading
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Check results
    expect(result.current.characters).toEqual([]);
    // This error is the one we are sending from the hook when the API call fails
    expect(result.current.error).toBe('Failed to fetch characters');
  });
});
