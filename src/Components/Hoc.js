import React, { useState } from "react";

const Hoc = (OriginalComponent) => {
  const Newcomponent = () => {
    const [count, setCount] = useState(0);
    const incrementBy1 = () => {
      setCount(count + 1);
    };
    return <OriginalComponent incrementBy1={incrementBy1} count={count} />;
  };
  return Newcomponent;
};

export default Hoc;
