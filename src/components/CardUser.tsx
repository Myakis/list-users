import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { CardUserType } from '../types/componentsType';
import { Button, Item, List, UserCard } from './UI/mainComponents';

const CardUser: FC<CardUserType> = ({ name, city, company, id }) => {
  return (
    <UserCard>
      <List>
        <Item>
          ФИО: <span>{name}</span>
        </Item>
        <Item>
          Город: <span>{city}</span>
        </Item>
        <Item>
          Компания: <span>{company}</span>
        </Item>
      </List>
      <Button variant='outline' color='blue'>
        <Link to={`user/${id}`}> Подробнее</Link>
      </Button>
    </UserCard>
  );
};

export default CardUser;
