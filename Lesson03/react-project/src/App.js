/* eslint-disable no-unused-vars */
import React from 'react';
import GlobalStyle from './Components/Style/GlobalStyle';
import styled from 'styled-components';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

import NavBar from './Components/NavBar/NavBar';
import { Order } from './Components/Order/Order';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { ModalOrderItem } from './Components/Modal/ModalItem';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOpenModal } from './Components/Hooks/useOpenModal';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';

const firebaseConfig = {
  apiKey: "AIzaSyCTrzuLsZiF73QzMPnlroxfDBnrPmFFmqI",
  authDomain: "mrdonalds-ce19f.firebaseapp.com",
  databaseURL: "https://mrdonalds-ce19f.firebaseio.com",
  projectId: "mrdonalds-ce19f",
  storageBucket: "mrdonalds-ce19f.appspot.com",
  messagingSenderId: "486302504810",
  appId: "1:486302504810:web:32478cca337fb8303bb713"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const authFirebase = firebase.auth;
  const auth = useAuth(authFirebase);
  const openItem = useOpenItem();
  const openModal = useOpenModal();
  const orders = useOrders();

  useTitle(openItem.openItem);


  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order 
          {...orders} 
          {...openItem} 
          {...auth}
          {...openModal}
          firebaseDatabase={firebase.database}
      />
      <Menu {...openItem}/>
        {openItem.openItem && <ModalItem {...openItem} {...orders}/> } 
        {openModal.openModal && <ModalOrderItem {...openModal} {...orders} {...auth}/>}
    </>
  );
}

export default App;
