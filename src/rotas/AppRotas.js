import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import Home from '../assets/home.svg';
import Coracao from '../assets/coracao.svg';

const Tab = createBottomTabNavigator();
const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: '#2A9F85',
  tabBarInactiveTintColor: '#C7C7C7',
  tabBarLabelStyle: {
    fontSize: 15,
  },
  tabBarIcon: ({color}) => {
    let Icon = Home;

    if (route.name === 'Melhores Produtores') {
      Icon = Coracao;
    }
    return <Icon color={color} width={20} height={20} />;
  },
});

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen
          name="Melhores Produtores"
          component={MelhoresProdutoresRotas}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
