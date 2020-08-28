/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
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

const ButtonLogin = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
`;

const ImgSign = styled.img`
  height: 28px;
  margin-bottom: 4px;
`;


const NavBar = () => {

  return (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo"/>
      <H1>MrDonald's</H1>
    </Logo>
    <ButtonLogin>
        <ImgSign src={signImg} alt="sign icon"/>
        <div>Войти</div>
    </ButtonLogin>
  </NavBarStyled>
  );
};


export default NavBar;
