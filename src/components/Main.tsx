import React, { FC } from 'react';

import { Box, MainLayout } from './UI/mainComponents';
import CardUser from './CardUser';
import Preloader from '../Utils/Preloader';
import { MainType } from '../types/componentsType';

const Main: FC<MainType> = ({ users, userCount, userNumerals, isPending }) => {
  return (
    <MainLayout>
      <h2 className={'main__title'}>Список пользователей</h2>
      {isPending ? (
        <Preloader />
      ) : (
        <Box className='list-users'>
          {users.map(user => (
            <CardUser
              key={user.id}
              id={user.id}
              name={user.name}
              city={user.address.city}
              company={user.company.name}
            />
          ))}
          <Box className='users-count'>
            Найдено {userCount} {userNumerals}
          </Box>
        </Box>
      )}
    </MainLayout>
  );
};

export default Main;
