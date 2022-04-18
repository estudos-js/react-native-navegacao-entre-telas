import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useTextos from '../../hooks/useTextos';
import VoltarSVG from '../../assets/voltar.svg';
import sucesso from '../../assets/sucesso.png';

export default function Resumo() {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    mensagemCompra,
    topoCompra,
    tituloCompra,
    botaoHomeCompra,
    botaoProdutorCompra,
  } = useTextos();

  const compra = route.params.compra;
  const mensagem = mensagemCompra?.replace('$NOME', compra.nome);

  return (
    <View style={styleResumo.tela}>
      <View style={styleResumo.topo}>
        <TouchableOpacity
          style={styleResumo.topoVoltar}
          onPress={() => navigation.goBack()}>
          <VoltarSVG />
        </TouchableOpacity>

        <Text style={styleResumo.topoTexto}>{topoCompra}</Text>
      </View>

      <View style={styleResumo.conteudo}>
        <Image source={sucesso} style={styleResumo.sucesso} />

        <View style={styleResumo.textos}>
          <Text style={styleResumo.titulo}>{tituloCompra}</Text>
          <Text style={styleResumo.mensagem}>{mensagem}</Text>

          <TouchableOpacity
            style={styleResumo.botao}
            onPress={
              () =>
                navigation.popToTop() /* para mostrar mensagem na Home: navigation.navigate('HomeScreen', { compra }) */
            }>
            <Text style={styleResumo.textoBotao}>{botaoHomeCompra}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styleResumo.botao, styleResumo.botaoProdutor]}
            onPress={() => navigation.pop(2)}>
            <Text
              style={[styleResumo.textoBotao, styleResumo.textoBotaoProdutor]}>
              {botaoProdutorCompra}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styleResumo = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topo: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: 58,

    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    paddingVertical: 16,
    paddingHorizontal: 40,
  },
  topoTexto: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topoVoltar: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
    top: 17,
  },
  conteudo: {
    zIndex: 0,
  },
  sucesso: {
    width: '100%',
    height: undefined,
    aspectRatio: 360 / 351,
  },
  textos: {
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  mensagem: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  botao: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  botaoProdutor: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ECECEC',
  },
  textoBotaoProdutor: {
    color: '#464646',
  },
});
