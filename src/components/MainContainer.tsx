import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/customHooks';
import { getUsers } from '../redux/reducer/usersReducers';
import { num_word } from '../Utils/numWord';
import Main from './Main';

const MainContainer = () => {
  const dispatch = useAppDispatch();
  const [userCount, setUserCount] = useState(0);
  const [userNumerals, setUserNumerals] = useState<any>(null);
  const users = useAppSelector(state => state.users);

  useEffect(() => {
    dispatch<any>(getUsers());
    setUserCount(users.users.length);
    setUserNumerals(num_word(userCount, ['пользователь', 'пользователя', 'пользователей']));
  }, []);

  return (
    <Main
      users={users.users}
      userCount={userCount}
      userNumerals={userNumerals}
      isPending={users.isPending}
    />
  );
};

export default MainContainer;
