import { Box } from "@mui/material";
import React from "react";
import "./bodyStyle.css";
import { Filters } from "./filter/Filters";
import { TableTodo } from "./table/Table";
import { UserIDType } from "../../utils/types";

export const BodyApplication = ({ menuItemUserId }: UserIDType) => {
  return (
    <Box className={"body-container"}>
      <Box className={"filter-content"}>
        <Filters menuItemUserId={menuItemUserId} />
      </Box>
      <Box className={"table-content"}>
        <TableTodo />
      </Box>
    </Box>
  );
};
