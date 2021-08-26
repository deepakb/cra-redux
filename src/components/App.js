import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Wallet from './Wallet';

import '../App.css';

const App = () => {
  return (
    <Container>
      <Header />
      <Wallet />
    </Container>
  );
};

export default App;
