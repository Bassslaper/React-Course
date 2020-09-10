/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useContext} from'react';
import styled from 'styled-components';
import { ContextItem } from '../Functions/context';



const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
  padding-left: 5px;
  padding-right: 5px;
  touch-action: center;
  border: 2px solid brown;
  border-radius: 5px;
  &:focus {
    border: 2px solid #299B01;
  }
`;


const ButtonCount = styled.button`
  background-color: transparent;
  min-width: 28px;
  margin: 0 5px 0 5px;
  border: 2px solid #299B01;
  border-radius: 5px;
`;

export function CountItem({onChange}) {

  const { 
    counter: { count, setCount}
  } = useContext(ContextItem);


  return (
    <CountWrapper>
      <span>Количество:</span>
      <div>
        <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
        <CountInput type="number" min="1" max="100" value={count < 1 ? 1 : count} onChange={onChange}/>
        <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
      </div>
    </CountWrapper>
  );
}

