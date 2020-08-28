/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import banner from '../../image/banner.png';


const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px; 
  margin-left: 380px;
`;


const BannerMenu = styled.div `
  height: 210px;
  width: 100%;
  background-image: ${({ img }) => `url(${img})`};
  position: relative;
  background-position: center;
  background-size: cover;
`;


const SectionMenu = styled.section`
padding: 30px;`;

export const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <BannerMenu img={banner}/>
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem 
          itemList={dbMenu.burger}
          setOpenItem={setOpenItem}
      />
    </SectionMenu>

    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItem 
          itemList={dbMenu.other}
          setOpenItem={setOpenItem}
      />
    </SectionMenu>
  </MenuStyled>
);