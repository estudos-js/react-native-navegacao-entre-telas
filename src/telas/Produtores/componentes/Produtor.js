import React, {useMemo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Estrelas from '../../../componentes/Estrelas';

const distanciaEmMetros = distancia => {
  return `${distancia}m`;
};

export default function Produtor({
  nome,
  imagem,
  distancia,
  estrelas,
  aoPressionar,
}) {
  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia],
  );

  return (
    <TouchableOpacity style={styleProdutor.cartao} onPress={aoPressionar}>
      <Image
        source={imagem}
        style={styleProdutor.imagem}
        accessibilityLabel={nome}
      />
      <View style={styleProdutor.informacoes}>
        <View>
          <Text style={styleProdutor.nome}>{nome}</Text>
          <Estrelas quantidade={estrelas} />
        </View>
        <Text style={styleProdutor.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styleProdutor = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    // Android
    elevation: 4,

    // iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    color: '#000',
    fontWeight: 'bold',
  },
  distancia: {
    color: '#000',
    fontSize: 12,
    lineHeight: 19,
  },
});
