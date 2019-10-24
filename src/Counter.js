import React, { useState } from 'react';

const Counter = () => {
  // function that returns the inital value
  // callback to return initial value is good for expensive computations
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  return (
    <div>
      <button
        onClick={() =>
          setCount(currentState => ({
            ...currentState,
            count: currentState.count + 1
          }))
        }
      >
        +
      </button>
      <div>count 1: { count }</div>
      <div>count 2: { count2 }</div>
    </div>
  );
};

export default Counter;