import React, { useState } from "react";

function Counter() {
  // Initialise State by using useState Hook
  const [count, setcount] = useState(0);
  return (
    <>
      <p>Counter {count}</p>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </>
  );
}

export default Counter;
