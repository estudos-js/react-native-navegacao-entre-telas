import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({
  aoPressionar,
  desabilitada = true,
  preenchida,
  grande = false,
}) {
  const styleEstrela = functionStyleEstrela(grande);

  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={aoPressionar} disabled={desabilitada}>
      <Image source={getImagem()} style={styleEstrela.estrela} />
    </TouchableOpacity>
  );
}

const functionStyleEstrela = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
