import React, { FC } from 'react';
import { CardUserType } from '../types/componentsType';
import { Button, Item, List, UserCard } from './UI/mainComponents';

const CardUser: FC<CardUserType> = ({ name, city, company }) => {
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
        Подробнее
      </Button>
    </UserCard>
  );
};

export default CardUser;
