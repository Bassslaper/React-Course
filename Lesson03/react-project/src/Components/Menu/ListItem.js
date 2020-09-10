/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../Functions/secondartFuncrion';


const List = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   
`;

const Item = styled.li`
  height: 155px;
  width: 400px;
  background-image: ${({ img }) => `url(${img})`};
  position: relative;
  background-position: center;
  background-size: cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  font-size: 30px;
  color: #fff;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #000;
    opacity: 25%;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px black;
    &:after {
      opacity: 0;
    }
  }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map(item => (
      <Item 
          key={item.id}
          img={item.img}
          onClick={() => setOpenItem(item)}
      >

        <div>{item.name}</div>
        <div>{formatCurrency(item.price)}</div>

      </Item>
    ))}
  </List>
);