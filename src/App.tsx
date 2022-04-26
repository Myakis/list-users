import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import ProfileContainer from './components/ProfileContainer';
import SidebarContainer from './components/SidebarContainer';
import { Container } from './components/UI/mainComponents';

const App: FC = () => {
  return (
    <Container>
      <SidebarContainer />
      <Routes>
        <Route path='/' element={<MainContainer />} />
        <Route path='/user/:name' element={<ProfileContainer />} />
      </Routes>
    </Container>
  );
};

export default App;
