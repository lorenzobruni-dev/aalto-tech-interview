import "./styles/App.css";
import "./styles/gridStyle.css";
import React from "react";
import { Box } from "@mui/material";
import { Topbar } from "./pages/topbar/Topbar.tsx";
import { Footer } from "./pages/footer/Footer.tsx";
import { BodyApplication } from "./pages/body/BodyApplication.tsx";

const App = () => {
  /*
  const isResizedScreen = useMediaQuery("(min-width: 700px)");
*/
  return (
    <Box className={"grid-container"}>
      <Topbar />
      <BodyApplication />
      <Footer />
    </Box>
  );
};

export default App;
