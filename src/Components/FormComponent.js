import React from "react";

export const FormComponent = ({ getValues }) => {
  return (
    <div>
      <h1> Daily Status </h1>
      <form>
        {/* <input type="text" name="username" onChange={()}/> */}
        <button onClick={getValues}> submit </button>
      </form>
    </div>
  );
};
