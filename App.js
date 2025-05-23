import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(prev => prev + 1);

  const decrementar = () => {
    if (contador > 0) {
      setContador(prev => prev - 1);
    }
  };

  const resetar = () => setContador(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <Text style={styles.numero}>{contador}</Text>

      <View style={styles.botoesContainer}>
        <TouchableOpacity style={[styles.botao, styles.botaoIncrementar]} onPress={incrementar}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoDecrementar]} onPress={decrementar}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoResetar]} onPress={resetar}>
          <Text style={styles.textoBotao}>Resetar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  numero: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 40,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  botao: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  botaoIncrementar: {
    backgroundColor: '#4CAF50', // Verde
  },
  botaoDecrementar: {
    backgroundColor: '#F44336', // Vermelho
  },
  botaoResetar: {
    backgroundColor: '#2196F3', // Azul
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
