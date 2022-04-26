import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../hooks/customHooks';
import { getProfile } from '../redux/reducer/usersReducers';
import { RootState } from '../redux/store';
import Preloader from '../Utils/Preloader';
import Profile from './Profile';

const ProfileContainer: FC = () => {
  const userData = useSelector((state: RootState) => state.users.userProfile);
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch<any>(getProfile(id!));
  }, []);

  if (!userData) return <Preloader />;

  return <Profile edit={edit} setEdit={setEdit} />;
};

export default ProfileContainer;
