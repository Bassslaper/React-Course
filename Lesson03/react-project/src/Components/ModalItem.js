/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import {ButtonCheckout} from './ButtonCheckout';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 20;
  overflow-y: auto;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 30px 20px;
  justify-content: space-between;
  height: calc(100% - 200px);
`;

const ModalTitleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-family: 'Pacifico', cursive;
`;



export const ModalItem = ({ openItem , setOpenItem}) => { 

  function closeModal(e) {
    if(e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if(!openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
    <Modal>
      <Banner img={openItem.img}/>
      <Container>
         <ModalTitleBlock>
            <h2>{openItem.name}</h2>
            <span>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</span>
         </ModalTitleBlock>
         <ButtonCheckout>
           Добавить
         </ButtonCheckout>
     
      </Container>  
   
    </Modal>

    </Overlay>
  );
};