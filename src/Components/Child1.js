import React from "react";

export const Child1 = ({ val }) => {
  return <div>Child1: {val !== 0 ? val + 10 : 0}</div>;
};
