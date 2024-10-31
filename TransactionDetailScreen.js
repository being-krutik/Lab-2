


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetailScreen({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      
      <Text style={styles.detail}>Transaction Name: <Text style={styles.value}>{transaction.name}</Text></Text>
      <Text style={styles.detail}>Amount: <Text style={styles.value}>${transaction.amount}</Text></Text>
      <Text style={styles.detail}>Date: <Text style={styles.value}>{transaction.date}</Text></Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
  },
  detail: {
    fontSize: 18,
    marginVertical: 5,
    color: '#495057',
  },
  value: {
    fontWeight: 'bold',
  },
});
