/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import {ButtonCheckout} from './ButtonCheckout';
import { OrderListItem } from './OrderListItem';

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

`;

const TotalPrice = styled.span `
  text-align: right;
  min-width: 65px;
  margin-left: 20px;

`;




export const Order = () => {
  return (
    <>
      <OrderStyled>
        <OrderTitle>Ваш заказ</OrderTitle>
        <OrderContent>
          <OrderList>
            <OrderListItem></OrderListItem>
            <OrderListItem></OrderListItem>
            <OrderListItem></OrderListItem>
          </OrderList>
        </OrderContent>
          <OrderTotal>
            <span>Итого:</span>
            <span>5</span>
            <TotalPrice>850 Р</TotalPrice>
          </OrderTotal>

          <ButtonCheckout>Оформить</ButtonCheckout>
      </OrderStyled>
    </>
  );
}