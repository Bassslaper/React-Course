/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from'react';
import styled from 'styled-components';
import LogoImg from '../image/logo.svg';
import SignImg from '../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: #fff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const ButtonHeader = styled.button`
  background-color: #299B01;
  color: #fff;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
`;
const ImgSign = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`;


const NavBar = () => {

  return (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={SignImg} alt="logo"/>
      <H1>MrDonald's</H1>
    </Logo>
    <ButtonHeader>
        <ImgSign src={SignImg} alt="sign icon"/>
        <div>Войти</div>
    </ButtonHeader>
  </NavBarStyled>
  );
};


export default NavBar;
