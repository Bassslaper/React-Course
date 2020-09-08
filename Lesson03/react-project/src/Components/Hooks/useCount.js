/* eslint-disable no-unused-vars */
import { useState } from 'react';

export function useCount (startCount) {
  const [count, setCount] = useState(startCount || 1);
  
  const onChange = e => setCount(parseFloat(e.target.value));

  return { count, setCount, onChange}
}