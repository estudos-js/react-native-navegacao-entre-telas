import React from 'react';
import Home from '../telas/Home';
import MelhoresProdutores from '../telas/MelhoresProdutores';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
