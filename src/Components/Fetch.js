import React, { useEffect, useState } from "react";

export const Fetch = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    // https://fakestoreapi.com/products
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <div>
      <h1> Hello: {data.title}</h1>
    </div>
  );
};
