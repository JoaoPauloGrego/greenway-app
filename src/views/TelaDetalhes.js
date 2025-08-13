import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { buscarBikePorId } from '../controller/BikeController';

export default function TelaDetalhes({ route }) {
  const { bikeId } = route.params;
  const bike = buscarBikePorId(bikeId);

  if (!bike) {
    return <Text style={styles.alert}>Bicicleta não encontrada.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{bike.nome}</Text>
      <Text style={styles.desc}>{bike.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  nome: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  desc: { fontSize: 18 },
  alert: { fontSize: 18, color: 'red' },
});