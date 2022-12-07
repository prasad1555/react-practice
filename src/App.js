import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { FetchWithApi } from "./Components/FetchData/FetchWithApi";
import { FetchWithAxios } from "./Components/FetchData/FetchWithAxios";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl" style={{ padding: "0px" }}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", overflowY: "scroll" }}>
          <FetchWithAxios />
        </Box>
      </Container>
    </div>
  );
}

export default App;
