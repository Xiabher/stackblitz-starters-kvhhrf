import React from 'react';
import './style.css';

import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(4);
  /*
    function decrementCount() {
      setCount (count-1)
    }
  */

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <main>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <br></br>
    </main>
  );
}
