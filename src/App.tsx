import React, { useState } from 'react';
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModel() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModel() {
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionModel} />

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModel}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}