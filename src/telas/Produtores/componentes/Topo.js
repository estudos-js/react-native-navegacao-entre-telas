import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from '../../../assets/logo.png';
import useTextos from '../../../hooks/useTextos';

export default function Topo({melhoresProdutores}) {
  const {boasVindas, legenda, legendaMelhoresProdutores} = useTextos();

  return (
    <>
      <View style={styleTopo.topo}>
        <Image source={logo} style={styleTopo.imagem} />
        <Text style={styleTopo.boasVindas}>
          {melhoresProdutores ? '' : boasVindas}
        </Text>
        <Text style={styleTopo.legenda}>
          {melhoresProdutores ? legendaMelhoresProdutores : legenda}
        </Text>
      </View>
    </>
  );
}

const styleTopo = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  compra: {
    backgroundColor: '#EAF5F3',
    padding: 16,
  },
  compraMensagem: {
    fontSize: 16,
    lineHeight: 26,
    color: '#464646',
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});
