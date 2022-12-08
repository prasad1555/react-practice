import React, { useState } from "react";

export const Child = ({ value, sum }) => {
  const [str, setStr] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setStr(e.target.value)} />
      <button onClick={() => sum(+str)}>Click</button>
      <h1> {value} </h1>
    </div>
  );
};
