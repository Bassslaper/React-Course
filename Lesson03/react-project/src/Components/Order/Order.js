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


export const Order = ({ orders, setOrders, setOpenItem, logIn, authentication}) => {

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

  const checkLogIn = () => {
    console.log({authentication});

    const getToppings = (item) => item.topping.filter(item => item.checked)
            .map(item => item.name)
            .join(', ');
       

    const totalOrders = () => { 

      orders.map((item, index) => {
        return  (
          console.log(`${index + 1}. Наименование: ${item.name} ${item.choice ? item.choice : ''}
   Кол-во: ${item.count}
   Добавки:  ${getToppings(item)}
   Цена: ${formatCurrency(totalPrice(item))}
   `)
          
        );
          
       
      });

      console.log('Итого к оплате: ', formatCurrency(total));
    }

    if(authentication) {
      console.log('Заказ пользователья:');
      totalOrders();
    } else {
      logIn();
    }
    
  };

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
          <OrderTotal>
            <span>Итого:</span>
            <span>{totalCounter}</span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
          </OrderTotal>

          <ButtonCheckout onClick={checkLogIn}>Оформить</ButtonCheckout>
      </OrderStyled>
    </>
  );
}