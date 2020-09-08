/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';

export const useTitle = openItem => {
  useEffect(() => {
    document.title = openItem ? openItem.name : `MrDonald's`;
  }, [openItem])
}