import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Pagination, Stack } from "@mui/material";

export default function BasicTable(props) {
  const { totalPosts, postsPerPage, paginate } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  //   console.log(pageNumbers);

  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
      >
        <Grid item xs={10}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>body</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.posts.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.id}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.body}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <ul style={{ listStyle: "none" }}>
          {pageNumbers.map((v, key) => {
            return (
              <li
                style={{ padding: "5px", border: "1px solid" }}
                key={key}
                onClick={() => paginate(v)}
              >
                {v}
              </li>
            );
          })}
        </ul>
      </Grid>
    </>
  );
}
