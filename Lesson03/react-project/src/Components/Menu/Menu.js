/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useContext} from'react';
import styled from 'styled-components';
// import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import banner from '../../image/banner.png';
// import { useFetch} from '../Hooks/useFetch';
import Loader from 'react-loader-spinner';
 import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Context } from '../Functions/context';


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

const LoaderWrap =styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;


const SectionMenu = styled.section`
padding: 30px;`;



export const Menu = () => {

  const { openItem, dbMenu } = useContext(Context);

  const {setOpenItem} = openItem;

//  const res= useFetch();

//  const dbMenu = res.response;

  return (
        <MenuStyled>
          <BannerMenu img={banner}/>

          {dbMenu ?
             <>
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
            </> :
            <LoaderWrap>
              <div>LOADING.....</div>
              <Loader type="ThreeDots" color="#2BAD60" height="100" width="100"/>
            </LoaderWrap>
          }
       
        </MenuStyled>
  );
};