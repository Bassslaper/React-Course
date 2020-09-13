/* eslint-disable no-unused-vars */
import React, { useContext} from'react';
import styled from 'styled-components';
import { OrderTitle, OrderTotal, TotalPriceItem, Overlay } from '../Style/ModalStyle';
import {ButtonCheckout} from '../Style/ButtonCheckout';
import { projection } from '../Functions/secondartFuncrion';
import { totalPrice } from '../Functions/secondartFuncrion';
import { formatCurrency } from '../Functions/secondartFuncrion';
import { Context } from '../Functions/context';

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  padding: 30px 50px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const ButtonBox=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const rulesData = {
  itemName: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
    arr => arr.length ? arr : 'no toppings'
  ],
  choice: ['choice', item => item ? item : 'no choices']
}

const sendOrder = (dataBase, orders, authentication) => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
      nameClient: authentication.displayName,
      email: authentication.email,
      order: newOrder
    });
  
};

const btnStyles = {
  background: '#c49a27', 
  marginLeft: '10px',
  padding: '20px 50px 20px 50px'
}

export const OrderConfirm = () => {

  
const {
    auth: {authentication}, 
    orderConfirm: {setOpenOrderConfirm}, 
    orders: { 
      orders,
      setOrders
    },
    dataBase,
    openModal: {
      setOpenModal
    }
   } = useContext(Context);

  const total = orders.reduce((result, order) => {
    return totalPrice(order) + result;
  }, 0);

  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName.split(' ')[0]},</OrderTitle>
        <Text>
          Осталось подтвердить Ваш заказ: 
        </Text>
        <TotalPriceItem>
           <span>Итого:</span>
           <span>{formatCurrency(total)}</span>      
        </TotalPriceItem>
        <ButtonBox>
          <ButtonCheckout
          onClick={() => {
            sendOrder(dataBase, orders, authentication);
            setOrders([]);
            setOpenOrderConfirm(false);
            setOpenModal(authentication);
          }}
        >
          Подтвердить
        </ButtonCheckout>
        < ButtonCheckout style = {btnStyles}
          onClick={() => {
            setOpenOrderConfirm(false);
          }}
        >
          Отменить
        </ButtonCheckout>
        </ButtonBox>
      </Modal>
    </Overlay>
  );


};