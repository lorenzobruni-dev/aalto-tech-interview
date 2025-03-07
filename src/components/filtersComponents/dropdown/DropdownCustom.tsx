import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useState } from "react";
import "./dropdownStyle.css"; // Importiamo il file CSS
import { useDataFetch, useSize } from "../../../utils/zustandUtils";
import { map, uniq } from "lodash";

export const DropdownCustom = () => {
  const [userId, setUserId] = useState<string>("");
  const { isStretched } = useSize();
  const { data } = useDataFetch();

  const handleChange = (event: SelectChangeEvent) => {
    setUserId(event.target.value as string);
  };

  const menuItemUserId = uniq(map(data, "userId"));

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
