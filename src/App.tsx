import "./styles/App.css";
import "./styles/gridStyle.css";
import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Topbar } from "./pages/topbar/Topbar.tsx";

const App = () => {
  const isResizedScreen = useMediaQuery("(min-width: 700px)");
  return (
    <Box className={"grid-container"}>
      <Topbar />
      <Box className={"body-container"}></Box>
      {isResizedScreen && <Box className={"footer-container"}></Box>}
    </Box>
  );
};

export default App;
