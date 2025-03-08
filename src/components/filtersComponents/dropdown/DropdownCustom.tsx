import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import "./dropdownStyle.css";
import {
  useFilterApplied,
  useMenuUserId,
  useSize,
} from "../../../utils/zustandUtils";
import { TypeFieldsTable } from "../../../utils/types";
import { EMPTY_STRING } from "../../../utils/emptyState";

type DropdownCustomType = {
  isResetAction: boolean;
  userIdToEdit?: string;
  modelAction?: (value: string) => void;
};
export const DropdownCustom = ({
  isResetAction,
  userIdToEdit,
  modelAction,
}: DropdownCustomType) => {
  const { menuItemUserId } = useMenuUserId();
  const [userId, setUserId] = useState<string>(userIdToEdit ?? EMPTY_STRING);
  const { isStretched } = useSize();
  const { setFilterApplied } = useFilterApplied();
  const handleChange = (event: SelectChangeEvent) => {
    const userId = event.target.value as string;
    setUserId(userId);
    if (modelAction) modelAction(userId);
    else setFilterApplied({ userId: userId } as TypeFieldsTable);
  };

  useEffect(() => {
    if (isResetAction) setUserId(EMPTY_STRING);
  }, [isResetAction]);
  return (
    <Box className={"dropdown-container"}>
      {!isStretched && (
        <Box component="span" className={"span-dropdown"}>
          Select user ID
        </Box>
      )}
      <Box className={"dropdown-box"}>
        <FormControl fullWidth>
          <Select
            sx={{
              fontSize: "14px",
              padding: "4px 8px",
              minHeight: "32px",
              fontWeight: "bold",
              fontFamily: "'Karbon Semibold', sans-serif",
              color: "gray",
              borderRadius: 0,
            }}
            className={"dropdown-select"}
            value={userId}
            onChange={handleChange}
          >
            {menuItemUserId?.map((item) => (
              <MenuItem
                key={item}
                sx={{
                  fontSize: "12px",
                  padding: "4px 8px",
                  minHeight: "32px",
                  fontWeight: "bold",
                  fontFamily: "'Karbon Semibold', sans-serif",
                  color: "gray",
                }}
                value={item}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
