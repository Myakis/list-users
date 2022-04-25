import React, { FC } from 'react';
import { useAppDispatch } from '../hooks/customHooks';
import { actions } from '../redux/reducer/usersReducers';
import { Box, Button, SidebarLayout } from './UI/mainComponents';

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();

  // const sortCities = () => {
  //   dispatch<any>(actions.sortOnCities());
  // };
  return (
    <SidebarLayout>
      <h3 className='title'>Сортировка</h3>
      <Box className='sort'>
        <Button>По городу</Button>
        <Button>По компании</Button>
      </Box>
    </SidebarLayout>
  );
};

export default Sidebar;
