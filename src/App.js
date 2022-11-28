import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Crud } from "./Components/Crud";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl" style={{ padding: "0px" }}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Crud />
        </Box>
      </Container>
    </div>
  );
}

export default App;
