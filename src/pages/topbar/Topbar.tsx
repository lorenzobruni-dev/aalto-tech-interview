import "./topbarStyle.css";
import { Box } from "@mui/material";
import React from "react";
import aaltoLogo from "../../../assets/aalto_it.png";

export const Topbar = () => {
  return (
    <Box className={"top-bar-container"}>
      <Box
        className={"logo-top-bar"}
        component={"img"}
        alt={"aaltosrl-logo"}
        src={aaltoLogo}
      />
    </Box>
  );
};
