import React from 'react';
import { useAppDispatch } from '../hooks/customHooks';
import { actions } from '../redux/reducer/usersReducers';
import Sidebar from './Sidebar';

const SidebarContainer = () => {
  const dispatch = useAppDispatch();

  const sortCities = () => {
    dispatch<any>(actions.sortOnCities());
  };
  const sortCompany = () => {
    dispatch<any>(actions.sortOnCompany());
  };
  return <Sidebar sortCities={sortCities} sortCompany={sortCompany}></Sidebar>;
};

export default SidebarContainer;
