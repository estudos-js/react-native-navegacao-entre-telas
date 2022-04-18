import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import Produtor from './componentes/Produtor';
import Topo from './componentes/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Produtores({melhoresProdutores}) {
  const navigation = useNavigation();
  const route = useRoute();
  const lista = useProdutores(melhoresProdutores);
  const {tituloProdutores, mensagemCompra} = useTextos();
  const nomeCompra = route.params?.compra.nome;
  const messagemCompleta = mensagemCompra?.replace('$NOME', nomeCompra);

  const TopoLista = () => {
    return (
      <>
        <Topo melhoresProdutores={melhoresProdutores} />
        {!!nomeCompra && (
          <Text style={styleProdutores.compra}>{messagemCompleta}</Text>
        )}
        <Text style={styleProdutores.titulo}>{tituloProdutores}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({item}) => (
        <Produtor
          {...item}
          aoPressionar={() => navigation.navigate('Produtor', item)}
        />
      )}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
      style={styleProdutores.lista}
    />
  );
}

const styleProdutores = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  compra: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    fontSize: 16,
    lineHeight: 26,
  },
});
