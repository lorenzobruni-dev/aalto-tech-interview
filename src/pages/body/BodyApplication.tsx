import { Box } from "@mui/material";
import React from "react";
import "./bodyStyle.css";
import { Filters } from "./filter/Filters";

export const BodyApplication = () => {
  return (
    <Box className={"body-container"}>
      <Box className={"filter-content"}>
        <Filters />
      </Box>
      <Box className={"table-content"}></Box>
    </Box>
  );
};
