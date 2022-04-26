import React, { FC, useState } from 'react';
import Profile from './Profile';

const ProfileContainer: FC = () => {
  const [edit, setEdit] = useState(false);
  return <Profile edit={edit} setEdit={setEdit} />;
};

export default ProfileContainer;
