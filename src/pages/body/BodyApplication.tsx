import { Box } from "@mui/material";
import React from "react";

export const BodyApplication = () => {
  return (
    <Box className={"body-container"}>
      <Box className={"flex-cards"}>
        <Box style={{ width: 330, height: 250, backgroundColor: "red" }}>1</Box>
        <Box style={{ width: 330, height: 250, backgroundColor: "purple" }}>
          2
        </Box>
      </Box>
    </Box>
  );
};
