import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import "./dropdownStyle.css";
import { useFilterApplied, useSize } from "../../../utils/zustandUtils";
import { FilterAppliedType } from "../../../utils/types";
import { EMPTY_STRING } from "../../../utils/emptyState";

type DropdownCustomType = {
  menuItemUserId: number[];
  isResetAction: boolean;
};
export const DropdownCustom = ({
  isResetAction,
  menuItemUserId,
}: DropdownCustomType) => {
  const [userId, setUserId] = useState<string>(EMPTY_STRING);
  const { isStretched } = useSize();
  const { setFilterApplied } = useFilterApplied();
  const handleChange = (event: SelectChangeEvent) => {
    setUserId(event.target.value as string);
    setFilterApplied({ userId: event.target.value } as FilterAppliedType);
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
            {menuItemUserId.map((item) => (
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
