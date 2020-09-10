/* eslint-disable no-unused-vars */
import React from'react';
import styled from 'styled-components';

export const Overlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 150;
  overflow-y: auto;
`;

export const TotalPriceItem = styled.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-weight: bold;
`;

export const OrderTitle = styled.h2 `
  text-align: center;
  text-transform: uppercase;
  font-size: 39px;
  line-height: 68px;
  margin-bottom: 30px;
`;

export const OrderTotal = styled.div `
  display: flex;
  margin: 0 35px 63px 30px;
  & span:first-child {
    flex-grow: 1;
  }
  & span {
    font-weight: bold;
  }
`;
