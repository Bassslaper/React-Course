/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import {ButtonCheckout} from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPrice } from '../Functions/secondartFuncrion';
import { formatCurrency } from '../Functions/secondartFuncrion';

const OrderStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
  background-color: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 1px 10px rgba(0,0,0, 0.2);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 39px;
  line-height: 68px;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const OrderTotal = styled.div `
  display: flex;
  margin: 0 35px 63px 30px;
  & span:first-child {
    flex-grow: 1;
  }
  & span {
    font-weight: bold;
  }

`;

const TotalPrice = styled.span `
  text-align: right;
  min-width: 95px;
  margin-left: 20px;

`;

const EmptyList = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;


export const Order = ({ orders, setOrders, deleteItem}) => {

  const total = orders.reduce((result, order) => {
    return totalPrice(order) + result;
  }, 0);

  const totalCounter = orders.reduce((result, order) => {
    return order.count + result;
  }, 0);


  return (
    <>
      <OrderStyled>
        <OrderTitle>Ваш заказ</OrderTitle>
        <OrderContent>
          {orders.length ? <OrderList>
            {orders.map(order => <OrderListItem key={order.id} order={order}/>)}
          </OrderList> : 
            <EmptyList>Список заказов пуст</EmptyList>
          }
        </OrderContent>
          <OrderTotal>
            <span>Итого:</span>
            <span>{totalCounter}</span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
          </OrderTotal>

          <ButtonCheckout>Оформить</ButtonCheckout>
      </OrderStyled>
    </>
  );
}