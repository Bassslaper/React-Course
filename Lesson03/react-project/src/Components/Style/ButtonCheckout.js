/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';


export const ButtonCheckout = styled.button `
  display: block;
  padding: 20px 80px 20px 73px;
  background: #299B01;
  border-color: transparent;
  outline: none;
  font-size: inherit;
  color: #fff;
  font-size: 21px;
  cursor: pointer;
  margin: 0 auto;
  transition-property: color, background-color, border-color;
  transition-duration: .3s;
  &:hover {
    background-color: #fff;
    color: #299B01;
    border-color: #299B01;
  }
  &:disabled {
    color: #bbb;
    background-color: #ccc;
    border-color: #aaa;
  }
`;