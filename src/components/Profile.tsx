import React, { FC } from 'react';
import { ProfileType } from '../types/componentsType';
import FormContainer from './FormContainer';
import { Box, Button, MainLayout } from './UI/mainComponents';

const Profile: FC<ProfileType> = ({ edit, setEdit }) => {
  return (
    <MainLayout>
      <Box className='main__header'>
        <h2 className={'main__title'}>Профиль пользователя</h2>
        <Button disabled={edit} onClick={() => setEdit(true)}>
          Редактировать
        </Button>
      </Box>
      <FormContainer disabled={!edit} setEdit={setEdit} />
    </MainLayout>
  );
};

export default Profile;
