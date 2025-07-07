// Type for our Stack Navigator, it defines the possibility of having 
// three different screens: List, Details and Favorites.
export type RootStackParamList = {
  List: undefined;
  Details: { characterId: number };
  Favorites: undefined;
};
