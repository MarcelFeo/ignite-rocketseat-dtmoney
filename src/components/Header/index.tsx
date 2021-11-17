import React from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionsModal: () => void;
}

export function Header({ onOpenNewTransactionsModal }: HeaderProps) {
  return (
    <Container>
      <Content>
       <img src={logoImg} alt="dt money" />
       <button type="button" onClick={onOpenNewTransactionsModal}>
          Nova transação
       </button>

      </Content>
    </Container>
  )
}