import React, { useState } from "react";
import Hoc from "./Hoc";

const Increment1 = ({ count, incrementBy1 }) => {
  return (
    <div>
      <p>
        increment by {count} <button onClick={incrementBy1}> + </button>
      </p>
    </div>
  );
};

export default Hoc(Increment1);
