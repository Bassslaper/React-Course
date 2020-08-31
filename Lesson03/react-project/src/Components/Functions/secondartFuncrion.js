/* eslint-disable no-unused-vars */
import React from 'react';

export const totalPrice = order => order.price * order.count;

export function formatCurrency( data ) {

  return data.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});

} 