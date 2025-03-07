import "./styles/App.css";
import "./styles/gridStyle.css";
import React, { useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Topbar } from "./pages/topbar/Topbar.tsx";
import { Footer } from "./pages/footer/Footer.tsx";
import { BodyApplication } from "./pages/body/BodyApplication.tsx";
import { useResetFilters } from "./utils/zustandUtils";

const App = () => {
  const isResetFiltersClicked = useResetFilters(
    (state) => state.isClickResetFilterButton,
  );
  const setIsClickResetFilterButtonToTrue = useResetFilters(
    (state) => state.setIsClickResetFilterButtonToFalse,
  );

  const isStretched = useMediaQuery("(max-width: 700px)");

  useEffect(() => {
    setTimeout(() => {
      if (isResetFiltersClicked) setIsClickResetFilterButtonToTrue();
    }, 1500);
  }, [isResetFiltersClicked]);

  return (
    <Box className={"grid-container"}>
      <Topbar />
      <BodyApplication isStretched={isStretched} />
      <Footer />
    </Box>
  );
};

export default App;
