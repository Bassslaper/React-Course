/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import garbageCanImg from '../image/garbage_can.svg';

const GarbageButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${garbageCanImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const OrderItemStyled = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 27px;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;


const ItemPrice = styled.span `
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;


export const OrderListItem = () => (

  <OrderItemStyled>
    <ItemName>JS Burger</ItemName>
    <span>2</span>
    <ItemPrice>750 Р</ItemPrice>
    <GarbageButton/>
  </OrderItemStyled>
    


);
