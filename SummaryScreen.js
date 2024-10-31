



import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', amount: 50 },
  { id: '2', amount: 100 },
  { id: '3', amount: 100 },
  { id: '4', amount: 100 },
  
];

export default function SummaryScreen() {
  const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Total Expenses: ${totalExpenses}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
  },
});
