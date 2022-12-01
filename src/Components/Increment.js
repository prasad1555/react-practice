import React, { useState } from "react";
import Hoc from "./Hoc";

const Increment = ({ count, incrementBy1 }) => {
  return (
    <div>
      <p>
        increment by {count} <button onClick={incrementBy1}> + </button>
      </p>
    </div>
  );
};

export default Hoc(Increment);
