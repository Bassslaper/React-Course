/* eslint-disable no-unused-vars */
import React from 'react';
import GlobalStyle from './Components/GlobalStyle';
import styled from 'styled-components';
import NavBar from './Components/NavBar';
import { Order } from './Components/Order';
import { Menu } from './Components/Menu';
import { ModalItem } from './Components/ModalItem';


function App() {

  const [openItem, setOpenItem] = React.useState(null);

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem 
          openItem={openItem}
          setOpenItem={setOpenItem}    
      />
    </>
  );
}

export default App;
