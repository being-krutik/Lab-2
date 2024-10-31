import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsListScreen from './TransactionsListScreen';
import TransactionDetailScreen from './TransactionDetailScreen';

const Stack = createStackNavigator();

export default function TransactionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TransactionsList" 
        component={TransactionsListScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetailScreen} 
        options={{ 
          headerShown: true, 
          tabBarStyle: { display: 'none' }, 
        }} 
      />
    </Stack.Navigator>
  );
}
