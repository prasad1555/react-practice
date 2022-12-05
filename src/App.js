import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Crud } from "./Components/Crud";
import { FormComponent } from "./Components/FormComponent";
import { useState } from "react";
import Increment from "./Components/Increment";
import Increment1 from "./Components/Increment1";
import { Pagination } from "./Components/Pagination";
import { FetchData } from "./Components/FetchData";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl" style={{ padding: "0px" }}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          {/* <Pagination /> */}
          <FetchData />
        </Box>
      </Container>
    </div>
  );
}

export default App;
