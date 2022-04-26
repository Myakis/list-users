import React, { FC, Profiler } from 'react';
import MainContainer from './components/MainContainer';
import ProfileContainer from './components/ProfileContainer';
import SidebarContainer from './components/SidebarContainer';
import { Container } from './components/UI/mainComponents';

const App: FC = () => {
  return (
    <Container>
      <SidebarContainer />
      {/* <MainContainer /> */}
      <ProfileContainer />
    </Container>
  );
};

export default App;
