import { Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

export const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (data) => {
          setData(data);
        },
        [data]
      );
  }, []);

  console.log(data);

  return (
    <div>
      <Grid container spacing={2}>
        {data &&
          data.map((v, k) => {
            return (
              <Grid item xs={4} md={4} key={k}>
                <Card>
                  <CardContent>
                    <h1>{v.id}</h1>
                    <h3>
                      {v.title.length > 35
                        ? v.title.slice(0, 35) + "..."
                        : v.title}
                    </h3>
                    <h5>
                      {v.body.length > 35
                        ? v.title.slice(0, 35) + "..."
                        : v.title}
                    </h5>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};
