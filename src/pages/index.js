import React from 'react';
import {Text, StyleSheet, View, FlatList } from 'react-native';

import Header from '../components/Header';
import Balance from '../components/Balance';
import Moviment from '../components/Moviments';
import Actions from '../components/Actions';
const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: '300,50',
    date: "10/11/2022",
    type: 0 //despesas
  },
  {
    id: 2,
    label: "Transferência Pix",
    value: '2.500,00',
    date: "09/11/2022",
    type: 1 //transferencias
  },
  {
    id: 3,
    label: "Salário",
    value: '7.300,00',
    date: "08/11/2022",
    type: 2 //salario
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Fernando Almeida"/>
        <Balance saldo="10.000,00" gastos="190,00"/>
        <Actions/>
        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator = {false}
        renderItem = {({item}) => <Moviment data={item} /> }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
