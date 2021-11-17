import React, { useState, useContext } from 'react'
import { api } from '../../services/api'
import { useEffect } from 'react'

import { Container } from './styles'

import { useTransactions } from '../../hooks/useTransactions'

export function TransactionsTable() {
  const { transactions } = useTransactions();
  
  return (
    <Container>
      <table>
        <thead>
          <th>Títulos</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}</td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}