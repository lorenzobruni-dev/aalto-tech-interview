import { Box } from "@mui/material";
import "./filtersStyle.css";
import { TextInputCustom } from "../../../components/filtersComponents/textInput/TextInputCustom";
import { SwitchCustom } from "../../../components/filtersComponents/switch/SwitchCustom";
import {
  useFilterApplied,
  useResetFilters,
  useSize,
} from "../../../utils/zustandUtils";
import React, { useState } from "react";
import { DropdownCustom } from "../../../components/filtersComponents/dropdown/DropdownCustom";
import { TypeFieldsTable } from "../../../utils/types";
import { EMPTY_STRING } from "../../../utils/emptyState";

export const Filters = () => {
  const [nameValue, setNameValue] = useState<string>(EMPTY_STRING);
  const { isStretched } = useSize();
  const { isClickResetFilterButton, setIsClickResetFilterButtonToTrue } =
    useResetFilters();
  const { resetFilterApplied, setFilterApplied } = useFilterApplied();

  const onSubmitAction = () =>
    setFilterApplied({ title: nameValue } as TypeFieldsTable);
  const handleReset = () => {
    setIsClickResetFilterButtonToTrue();
    resetFilterApplied();
  };

  return (
    <Box className={"filters-container"}>
      {!isStretched && <Box className={"title-section"}>Filters</Box>}
      <Box className={"inner-filters-container"}>
        <TextInputCustom
          isResetAction={isClickResetFilterButton}
          actionTextInput={onSubmitAction}
          textValue={nameValue}
          setTextValue={setNameValue}
          placeholder={"Search..."}
        />
        <SwitchCustom isResetAction={isClickResetFilterButton} />
        <DropdownCustom isResetAction={isClickResetFilterButton} />
      </Box>
      <Box
        onClick={handleReset}
        component={"h1"}
        className={"reset-filters-button"}
      >
        Reset filters
      </Box>
    </Box>
  );
};
