import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [
  {
    amount: 250,
    category: 'Entertainment',
    type: 'Expense',
    date: '2022-03-20',
    id: '1d4dd0e6-3a0a-4a07-888b-5c2cfa59e9f0',
  },
  {
    amount: 650,
    category: 'Business',
    type: 'Income',
    date: '2022-03-20',
    id: 'cbdedbb1-f7ab-49f0-9199-f718a202fce3',
  },
  {
    amount: 100,
    category: 'Travel',
    type: 'Expense',
    date: '2022-03-24',
    id: '62c97882-343e-40e1-9107-f4c209d70dc9',
  },
  {
    amount: 150,
    category: 'Savings',
    type: 'Income',
    date: '03-20-2022',
    id: '7',
  },
];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) =>
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });

  const addTransaction = (transaction) =>
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount,
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
