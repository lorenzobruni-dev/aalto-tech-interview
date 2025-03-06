import "./footerStyle.css";
import { Box } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box className={"footer-container"}>
      <Box className={"footer-content"}>
        © lorenzobruni-dev. Questo software è stato creato principalmente per
        un colloquio tecnico e non ha finalità promozionali. Tutti i diritti
        riservati.
      </Box>
    </Box>
  );
};
