import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Child } from "./Components/Child";
import { Child1 } from "./Components/Child1";
import { Input } from "./Components/Input";

function App() {
  const [val, setVal] = useState(0);

  const sum = (num) => {
    setVal(num);
  };

  return (
    <div className="App">
      <Container maxWidth="xl" style={{ padding: "0px" }}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          {/* <Child value={val} sum={sum} /> */}
          {/* value is: {val !== 0 ? val : 0} */}
          {/* <Child1 val={val} /> */}
          <Input />
        </Box>
      </Container>
    </div>
  );
}

export default App;
