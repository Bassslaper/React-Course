/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

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

export function Choices({ openItem, choice, changeChoices}) {

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