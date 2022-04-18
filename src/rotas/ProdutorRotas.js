import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Produtor from '../telas/Produtor';
import Home from '../telas/Home';
import Cesta from '../telas/Cesta';

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({ComponentPrincipal = Home}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={ComponentPrincipal} />
      <Stack.Screen name="Produtor" component={Produtor} />
      <Stack.Screen name="Cesta" component={Cesta} />
    </Stack.Navigator>
  );
}
