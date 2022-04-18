import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Texto({children, style}) {
  let estilo = styleTexto.texto;

  if (style?.fontWeight === 'bold') {
    estilo = styleTexto.textoNegrito;
  }
  return <Text style={[style, estilo]}>{children}</Text>;
}

const styleTexto = StyleSheet.create({
  texto: {
    // fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textoNegrito: {
    // fontFamily: 'MontserratBold',
    fontWeight: 'bold',
  },
});
