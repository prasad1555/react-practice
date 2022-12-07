import React, { useEffect, useState } from "react";
import axios from "axios";

export const FetchWithAxios = () => {
  const products = "https://api.escuelajs.co/api/v1/products";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(products).then((res) => {
      const filteredData = res.data.slice(0, 8);
      setData(filteredData);
    });
  }, []);

  return (
    <div>
      <ul>
        {data.map((value, key) => {
          return (
            <li key={key} style={{ listStyle: "none" }} className="card">
              <img src={value.category.image} alt={value.category.image} />
              <p>
                {value.id}{" "}
                <span>
                  {value.description.length > 25
                    ? value.description.slice(0, 25) + "..."
                    : value.description}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
