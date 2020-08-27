/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

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
  margin-bottom: 20px;
`;

const Container = styled.div`
  max-width: 540px;
  padding-left: 7px;
  padding-right: 7px;
  margin: 0 auto;
`;

const ModalTitleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 26px;
  margin-bottom: 222px;
`;

const ModalAddButton = styled.button`
  display: block;
  padding: 20px 80px 20px 73px;
  background: #299B01;
  border: none;
  outline: none;
  color: #fff;
  font-size: 21px;
  margin: 0 auto;
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
            <span style={{fontFamily: 'Pacifico'}}>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</span>
         </ModalTitleBlock>
         <ModalAddButton>
           Добавить
         </ModalAddButton>
     
      </Container>  
   
    </Modal>

    </Overlay>
  );
};