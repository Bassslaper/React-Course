/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import garbageCanImg from '../../image/garbage_can.svg';
import { totalPrice } from '../Functions/secondartFuncrion';
import { formatCurrency } from '../Functions/secondartFuncrion';
import { totalTopping } from '../Functions/secondartFuncrion';

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
  align-items: flex-start;
  flex-direction:column;
  margin-bottom: 27px;
`;
const OrderBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 7px;
`;

const ToppingsItem = styled.div`
    display: flex;  
    align-items: center;
    font-size: 14px;
    color: #9A9A9A;
    max-width: 178px;

`;

const ItemName = styled.span`
  flex-grow: 1;
`;


const ItemPrice = styled.span `
  margin-left: 20px;
  margin-right: 10px;
  min-width: 95px;
  text-align: right;
`;




export const OrderListItem = ({ order }) => (

  <OrderItemStyled>
    <OrderBox>
      <ItemName>{order.name}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPrice(order))}</ItemPrice>
      <GarbageButton/>
    </OrderBox>
    <ToppingsItem>{totalTopping(order)}</ToppingsItem>
  </OrderItemStyled>
    


);
