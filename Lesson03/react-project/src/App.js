/* eslint-disable no-unused-vars */
import React from 'react';
import GlobalStyle from './Components/GlobalStyle';
import styled from 'styled-components';
import NavBar from './Components/NavBar';
import { Menu } from './Components/Menu';


function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Menu/>
    </>
  );
}

export default App;
