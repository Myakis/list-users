import React, { FC } from 'react';
import { SidebarType } from '../types/componentsType';
import { Box, Button, SidebarLayout } from './UI/mainComponents';

const Sidebar: FC<SidebarType> = ({ sortCities, sortCompany }) => {
  return (
    <SidebarLayout>
      <h3 className='title'>Сортировка</h3>
      <Box className='sort'>
        <Button onClick={sortCities}>По городу</Button>
        <Button onClick={sortCompany}>По компании</Button>
      </Box>
    </SidebarLayout>
  );
};

export default Sidebar;
