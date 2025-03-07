import { Box } from "@mui/material";
import React from "react";
import "./bodyStyle.css";
import { Filters } from "./filter/Filters";
import { TableTodo } from "./table/Table";
import { StretchedCommonType } from "../../utils/types";

export const BodyApplication = ({ isStretched }: StretchedCommonType) => {
  return (
    <Box className={"body-container"}>
      <Box className={"filter-content"}>
        <Filters isStretched={isStretched} />
      </Box>
      <Box className={"table-content"}>
        <TableTodo />
      </Box>
    </Box>
  );
};
