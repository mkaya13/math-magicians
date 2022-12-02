import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(1);

  const myClick = () => {
    setCount(count + 1);
  };

  const myDecreaseClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>
        You clicked
        {count}
        times
      </p>
      <button type="button" onClick={myClick}>
        Increase
      </button>
      <button type="button" onClick={myDecreaseClick}>
        Decrease
      </button>
    </div>
  );
}

export default Example;
