import React from "react";

export const Child = ({ passText, setText }) => {
  return (
    <>
      <div onClick={passText}>Child</div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </>
  );
};
