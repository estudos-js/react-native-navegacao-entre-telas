import React from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Texto from './Texto';
import Gradiente from '../assets/gradiente.svg';
import topo from '../assets/topo.png';
import VoltarSVG from '../assets/voltar.svg';
import {useNavigation} from '@react-navigation/native';

const largura = Dimensions.get('screen').width;
const ALTURA_PADRAO = 270;

export default function Topo({titulo, imagem = topo, altura = ALTURA_PADRAO}) {
  const navigation = useNavigation();
  const styleTopo = functionStyleTopo(altura);
  return (
    <>
      <Image source={imagem} style={styleTopo.topo} />
      <Gradiente
        width={largura}
        height={(130 / 360) * largura}
        style={styleTopo.gradiente}
      />
      <Texto style={styleTopo.titulo}>{titulo}</Texto>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styleTopo.botaoVoltar}>
        <VoltarSVG color="white" style={styleTopo.voltar} />
      </TouchableOpacity>
    </>
  );
}

const functionStyleTopo = altura =>
  StyleSheet.create({
    topo: {
      width: '100%',
      height: altura,
    },
    gradiente: {
      position: 'absolute',
    },
    titulo: {
      width: '100%',
      position: 'absolute',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 26,
      color: 'white',
      fontWeight: 'bold',
      padding: 16,
    },
    botaoVoltar: {
      position: 'absolute',
      padding: 17,
    },
    voltar: {
      width: 24,
      height: 24,
    },
  });
