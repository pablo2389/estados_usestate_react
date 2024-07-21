
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


return (
    <div className="counter">
      <h2>Contador: <span className="count-display">{count}</span></h2>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount} disabled={count < 1}>-</button>
    </div>
  );
}

export default Counter;