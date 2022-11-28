import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

export const Crud = () => {
  const [username, setUserName] = useState("");
  const [list, setList] = useState([]);

  const addItems = () => {
    setList([...list, username]);
  };

  console.log(list);
  const updateItem = () => {
    console.log("updated..!");
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Crud Operation
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
        />
      </Box>
      <Button variant="contained" onClick={() => addItems()}>
        ADD
      </Button>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        style={{ width: "30%", margin: "auto" }}
      >
        <List>
          {list &&
            list.map((item) => {
              return (
                <ListItem disablePadding style={{ border: "1px solid" }}>
                  <ListItemButton>
                    <ListItemText primary={item} />
                    <Button variant={"outlined"} onClick={() => updateItem()}>
                      Update
                    </Button>
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
      </Box>
    </div>
  );
};
