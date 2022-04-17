import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import useProdutores from './src/hooks/useProdutores';
import Cesta from './src/telas/Cesta';

export default function App() {
  const produtores = useProdutores(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar />
      {/*<Home melhoresProdutores={false} />*/}
      {produtores.length > 0 && (
        <Cesta
          produtor={{
            nome: produtores[0].nome,
            imagem: produtores[0].imagem,
          }}
          {...produtores[0].cestas[0]}
        />
      )}
    </SafeAreaView>
  );
}
