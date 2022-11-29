import React, { useState } from "react";

export const Counter1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCount(count + 1)}> + 1</button>
      <strong> {count} </strong>
      <button onClick={() => setCount(count - 1)}> - 1</button>
    </div>
  );
};
