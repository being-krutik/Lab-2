

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Grocery Shopping', amount: 50, date: '2024-10-25' },
  { id: '2', name: 'Electricity Bill', amount: 100, date: '2024-10-26' },
  { id: '2', name: 'Food', amount: 400, date: '2024-10-27' },
  { id: '2', name: 'College Fees', amount: 500, date: '2024-10-20' },
  { id: '2', name: 'Mobile Bill', amount: 500, date: '2024-10-19' },
  
];

export default function TransactionsListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
            <Text style={styles.itemText}>{item.name} - ${item.amount} on {item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#343a40',
  },
});
