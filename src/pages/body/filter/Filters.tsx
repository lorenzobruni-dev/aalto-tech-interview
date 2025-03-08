import { Box } from "@mui/material";
import "./filtersStyle.css";
import { TextInputCustom } from "../../../components/filtersComponents/textInput/TextInputCustom";
import { SwitchCustom } from "../../../components/filtersComponents/switch/SwitchCustom";
import { useResetFilters, useSize } from "../../../utils/zustandUtils";
import React, { useState } from "react";
import { DropdownCustom } from "../../../components/filtersComponents/dropdown/DropdownCustom";

export const Filters = () => {
  const EMPTY_STRING = "";
  const [nameValue, setNameValue] = useState<string>(EMPTY_STRING);
  const { isStretched } = useSize();

  const setIsClickResetFilterButtonToTrue = useResetFilters(
    (state) => state.setIsClickResetFilterButtonToTrue,
  );
  const isResetFiltersClicked = useResetFilters(
    (state) => state.isClickResetFilterButton,
  );

  return (
    <Box className={"filters-container"}>
      {!isStretched && <Box className={"filters-title"}>Filters</Box>}
      <Box className={"inner-filters-container"}>
        <TextInputCustom
          isResetAction={isResetFiltersClicked}
          textValue={nameValue}
          setTextValue={setNameValue}
          placeholder={"Search..."}
        />
        <SwitchCustom isResetAction={isResetFiltersClicked} />
        <DropdownCustom />
        {/*<TextInputCustom
                    isResetAction={isResetFiltersClicked}
                    textValue={idValue}
                    setTextValue={setIdValue}
                    placeholder={"Select user ID"}
                />*/}
      </Box>
      <Box
        onClick={setIsClickResetFilterButtonToTrue}
        component={"h1"}
        className={"reset-filters-button"}
      >
        Reset filters
      </Box>
    </Box>
  );
};
