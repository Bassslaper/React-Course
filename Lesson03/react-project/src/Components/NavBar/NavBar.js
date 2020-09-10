/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useContext} from'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';
import { Context } from '../Functions/context';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
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

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  padding: 10px 12px;
  &:hover {
    padding: 10px 10px;
    border: 2px solid green;
    box-shadow: 3px 1px 10px rgba(0,0,0, 0.2);
  }
`;

const Figure = styled.figure`
  margin: 0 30px;

`;

const NavBar = () => {

  const { auth } = useContext(Context);

  const {authentication, logIn, logOut } = auth;


  return (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo"/>
      <H1>MrDonald's</H1>
    </Logo>
    { authentication ? 
    <User>
        <Figure>
          <ImgSign src={signImg} alt={authentication.displayName}/>
          <figcaption>{authentication.displayName}</figcaption>
        </Figure>
        <LogOut title="Выйти" onClick={logOut}>Выйти</LogOut>
    </User> : 
    <ButtonLogin onClick={logIn}>
        <Figure>
          <ImgSign src={signImg} alt="sign icon"/>
          <figcaption>Войти</figcaption>
        </Figure>
    </ButtonLogin> }
  </NavBarStyled>
  );
};


export default NavBar;
