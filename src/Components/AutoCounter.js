import React, { useEffect, useState } from "react";

export const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const [countInterval, setCountInterval] = useState();

  useEffect(() => {
    const counter = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    setCountInterval(counter);
    return () => {
      clearInterval(counter);
    };
  }, [count]);

  const stopCounter = () => {
    setCount(count);
    clearInterval(countInterval);
  };

  const startCounter = () => {
    setCountInterval(() => {
      setCount(count + 1);
    });
  };
  return (
    <>
      <div>AutoCounter</div>
      count: {count}
      <button onClick={stopCounter}> Stop </button>
      <button onClick={startCounter}> Start </button>
    </>
  );
};
