/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

const getTopping = toppings => {

  // if(!toppings) {
  //   return [];
  // }


   return toppings.map(item => ({
     name: item,
     checked: false
   }));
};


export function useToppings(openItem) {

  const reddyTopping = openItem.topping ? openItem.topping : openItem.toppings ? getTopping(openItem.toppings) : [];

  const [toppings, setToppings] = useState(reddyTopping);

 
  const checkToppings = index => {
    setToppings(toppings.map((item, i) => {
      if(i === index) {
        item.checked = !item.checked;
      }
      return item;
    }))
  }
  return {toppings, checkToppings};
}