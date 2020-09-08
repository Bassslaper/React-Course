/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

export function useChoices(openItem) {


  const [choice, setChoice] = useState();

  function changeChoices(e) {
    setChoice(e.target.value);
  }

  return {choice, changeChoices}
}