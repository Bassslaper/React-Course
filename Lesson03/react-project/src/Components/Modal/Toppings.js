/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useContext} from'react';
import styled from 'styled-components';
import { ContextItem } from '../Functions/context';

const ToppingWrap = styled.div`
  max-width: 500px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;


`;

const ToppingLabel = styled.label`
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  margin-right: 50px;
  
`;

const ToppingCheckbox = styled.input`
  cursor: pointer;
  margin-right: 13px;
  width: 24px;
  height: 24px;
  min-width: 24px;
  background-color: #f6f6f6;
`;

export function Toppings() {

  const { 
    toppings: { toppings, checkToppings}
  } = useContext(ContextItem);

  return (
      <ToppingWrap>
        {toppings.map((item, i) => (
            <ToppingLabel key={i}>
              <ToppingCheckbox 
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => checkToppings(i)}
              />
                {item.name}
            </ToppingLabel>
          ))
        }
      </ToppingWrap> 
  )
}