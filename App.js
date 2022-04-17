import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AppRotas from './src/rotas/AppRotas';

export default function App() {
  return (
    <SafeAreaView style={styleApp.container}>
      <StatusBar />
      <AppRotas />
    </SafeAreaView>
  );
}

const styleApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
