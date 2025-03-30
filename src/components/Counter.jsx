// state

import { useState } from "react";

const Counter = () => {
  // hook
  const [count, setCount] = useState(0);

  const handleAdd = (amount = 1) => {
    setCount(count + amount);
  };

  const handleMinus = () => {
    if (count % 2 === 1) {
      setCount(count - 1);
    }
  };

  const getColor = () => {
    if(count < 5) {
        return 'green'
    }

    if(count >= 5 && count < 8) {
        return 'yellow'
    }

    return 'red'
  }

  return (
    <>
      <h1>Counter: <span style={{color: getColor()}}>{count}</span></h1>
      <button onClick={() => handleAdd(1)}>ADD</button>
      <button onClick={() => handleAdd(2)}>ADD Multiple</button>
      <button onClick={handleMinus}>Minus When Odd</button>
    </>
  );
};

export default Counter;
