/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useContext} from'react';
import styled from 'styled-components';
import {ButtonCheckout} from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { OrderTitle, OrderTotal} from '../Style/ModalStyle';
import { totalPrice } from '../Functions/secondartFuncrion';
import { formatCurrency } from '../Functions/secondartFuncrion';
import { Context } from '../Functions/context';



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


const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;


export const TotalPrice = styled.span `
  text-align: right;
  min-width: 95px;
  margin-left: 20px;

`;

const EmptyList = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

export const Order = ({ setOpenModal}) => {

  const { 
    openItem: {setOpenItem}, 
    auth: {
      logIn, authentication
    }, 
    orderConfirm: {
      setOpenOrderConfirm 
    }, 
    orders: { 
      orders,
      setOrders
    }
  } = useContext(Context);


  const deleteItem = index => {

    const newOrders = [...orders];
    newOrders.splice(index, 1);

    /* Второй вариант */
    // const newOrders = orders.filter(( item, index )  => index != i); 

    setOrders(newOrders);
  };

  const total = orders.reduce((result, order) => {
    return totalPrice(order) + result;
  }, 0);

  const totalCounter = orders.reduce((result, order) => {
    return order.count + result;
  }, 0);

  const checkLogIn = () => authentication ? setOpenOrderConfirm(true) : logIn();

  return (
    <>
      <OrderStyled>
        <OrderTitle>Ваш заказ</OrderTitle>
        <OrderContent>
          {orders.length ? <OrderList>
            {orders.map(( order, index ) => <OrderListItem 
                key={index} 
                order={order}
                deleteItem={deleteItem}
                index={index}
                setOpenItem={setOpenItem}
            />)}
          </OrderList> : 
            <EmptyList>Список заказов пуст</EmptyList>
          }
          </OrderContent>
          {orders.length > 0 && <OrderTotal>
            <span>Итого:</span>
            <span>{totalCounter}</span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
          </OrderTotal>} 
          
        <ButtonCheckout  disabled={!orders.length} onClick={checkLogIn}>Оформить</ButtonCheckout>
         
      </OrderStyled>
    </>
  );
}