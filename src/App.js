import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Task1 } from "./Components/Task1";
import { useState } from "react";

function App() {
  const postalData = {
    postalCode: [
      {
        city: "Dresden",
        postalcode: "01156",
        postalCodeType: "UNKNOWN",
      },
      {
        city: "Dresden Gompitz, Ockerwitz",
        postalcode: "01157",
        postalCodeType: "UNKNOWN",
      },
      {
        city: "Dresden Gompitz",
        postalcode: "01158",
        postalCodeType: "UNKNOWN",
      },
      {
        city: "Dresden Altfranken",
        postalcode: "01159",
        postalCodeType: "UNKNOWN",
      },
      {
        city: "Dresden Gompitz, Gompitz",
        postalcode: "01160",
        postalCodeType: "UNKNOWN",
      },
      {
        city: "Dresden Gompitz, Unkersdorf",
        postalcode: "01161",
        postalCodeType: "UNKNOWN",
      },
      {
        city: "Dresden Gompitz, Pennrich",
        postalcode: "01162",
        postalCodeType: "UNKNOWN",
      },
      {
        city: "Dresden Gompitz, Roitzsch",
        postalcode: "01163",
        postalCodeType: "UNKNOWN",
      },
      {
        city: "Dresden Gompitz, Zöllmen",
        postalcode: "01164",
        postalCodeType: "UNKNOWN",
      },
      {
        city: "Dresden Gompitz, Steinbach",
        postalcode: "01165",
        postalCodeType: "UNKNOWN",
      },
    ],
  };

  const [postalInfo, setPostalInfoy] = useState(postalData);

  return (
    <div className="App">
      <Container maxWidth="xl" style={{ padding: "0px" }}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Task1 post={postalInfo} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
