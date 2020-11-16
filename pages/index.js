import React from 'react';

import Header from '../components/Header';
import Body from '../components/Body';

import GlobalStyles from '../styles/reset';
// import { Container } from './styles';

function Home() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Body />
    </div>
  );
}

export default Home;