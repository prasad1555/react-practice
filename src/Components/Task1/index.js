import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

export const Task1 = ({ post }) => {
  console.log(post.postalCode);
  const [postalInfo, setPostalInfoy] = useState(post.postalCode);

  const ListData = postalInfo.map((v, i) => {
    return (
      <Grid item xs={2} sm={4} md={4} key={i}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }} key={i}>
          <ListItem style={{ width: "100%" }}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={v.city} secondary={v.postalcode} />
            <Button variant="contained">
              <EditIcon /> Edit
            </Button>
          </ListItem>
        </List>
      </Grid>
    );
  });

  return (
    <div>
      <div style={{ paddingTop: "3rem", width: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            {ListData}
          </Grid>
        </Box>
      </div>
      ;
    </div>
  );
};
