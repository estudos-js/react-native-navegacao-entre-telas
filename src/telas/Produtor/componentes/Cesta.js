import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Texto from '../../../componentes/Texto';

export default function Cesta({detalhes, itens, produtor}) {
  const navigation = useNavigation();
  const {nome, imagem, descricao, preco} = detalhes;

  return (
    <TouchableOpacity
      style={styleCesta.cesta}
      onPress={() => navigation.navigate('Cesta', {detalhes, itens, produtor})}>
      <View>
        <Image source={imagem} style={styleCesta.imagem} />
        <View>
          <Texto style={styleCesta.nome}>{nome}</Texto>
          <Texto style={styleCesta.descricao}>{descricao}</Texto>
          <Texto style={styleCesta.preco}>{preco}</Texto>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styleCesta = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
  },
  conteudo: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
  },
  imagem: {
    width: 62,
    height: 62,
    borderRadius: 6,
  },
  textos: {
    flex: 1,
    marginLeft: 8,
  },
  nome: {
    color: '#464646',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 14,
    lineHeight: 22,
  },
  preco: {
    color: '#2A9F85',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
