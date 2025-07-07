import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { FavoritesProvider } from './src/contexts/FavoritesContext';

export default function App() {
  return (
    <NavigationContainer>
      <FavoritesProvider>
        <RootNavigator />
      </FavoritesProvider>
    </NavigationContainer>
  );
}
