import React from 'react';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import ListScreen from '../screens/list/ListScreen';
import DetailsScreen from '../screens/details/DetailsScreen';
import FavoritesScreen from '../screens/favorites/FavoritesScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={({ navigation }) => ({
          title: 'Rick and Morty Personajes',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Favorites')}
              title="Favoritos"
            />
          ),
        })}
      />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalle del Personaje' }} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Personajes Favoritos' }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
