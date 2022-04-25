import React, { FC } from 'react';
import MainContainer from './components/MainContainer';
import Sidebar from './components/Sidebar';
import { Container } from './components/UI/mainComponents';

const App: FC = () => {
  return (
    <Container>
      <Sidebar />
      <MainContainer />
    </Container>
  );
};

export default App;
