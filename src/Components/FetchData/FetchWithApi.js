import { SocialDistanceOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

export const FetchWithApi = () => {
  const products = "https://api.escuelajs.co/api/v1/products";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(products, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setData(result);
      })
      .catch((error) => {
        console.error("Error:", error);
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
