/* eslint-disable no-unused-vars */
import React from 'react';
import GlobalStyle from './Components/Style/GlobalStyle';
import styled from 'styled-components';
import NavBar from './Components/NavBar/NavBar';
import { Order } from './Components/Order/Order';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';

function App() {

  const openItem = useOpenItem();
  const orders = useOrders();


  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders} {...openItem}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/> } 
    </>
  );
}

export default App;
