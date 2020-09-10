/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useContext} from'react';
import styled from 'styled-components';
import { ContextItem } from '../Functions/context';

const ChoicesWrap = styled.div`
  max-width: 500px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;

`;

const ChoicesRadio = styled.input `
  cursor: pointer;
  margin-right: 13px;
  width: 24px;
  height: 24px;
  min-width: 24px;
  background-color: #f6f6f6;
`;

const ChoicesLabel = styled.div `
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  margin-right: 50px;
`;

export function Choices() {

  const { 
    openItem: {
      setOpenItem,
      openItem
    },
    choices: {
      choice,
      changeChoices
    },

  } = useContext(ContextItem);


  return (
      <>
        <h3>Выбирайте:</h3>
         <ChoicesWrap>
            {openItem.choices.map((item, i) => (
               <ChoicesLabel key={i}>
                  <ChoicesRadio 
                    type="radio"
                    name="choices"
                    checked={choice === item}
                    value={item}
                    onChange={changeChoices}
                  />
                {item}
              </ChoicesLabel>
              ))
            }
      </ChoicesWrap> 
      </> 
  )
}