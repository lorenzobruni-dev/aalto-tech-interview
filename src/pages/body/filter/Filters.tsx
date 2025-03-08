import {Box} from "@mui/material";
import "./filtersStyle.css";
import {TextInputCustom} from "../../../components/filtersComponents/textInput/TextInputCustom";
import {SwitchCustom} from "../../../components/filtersComponents/switch/SwitchCustom";
import {
  useFilterApplied,
  useResetFilters,
  useSize,
} from "../../../utils/zustandUtils";
import React, {useState} from "react";
import {DropdownCustom} from "../../../components/filtersComponents/dropdown/DropdownCustom";
import {FilterAppliedType, UserIDType} from "../../../utils/types";
import {EMPTY_STRING} from "../../../utils/emptyState";

export const Filters = ({menuItemUserId}: UserIDType) => {

  const [nameValue, setNameValue] = useState<string>(EMPTY_STRING);
  const {isStretched} = useSize();
  const {isClickResetFilterButton, setIsClickResetFilterButtonToTrue} =
      useResetFilters();
  const {resetFilterApplied, setFilterApplied} = useFilterApplied();

  const onSubmitAction = () =>
      setFilterApplied({title: nameValue} as FilterAppliedType);
  const handleReset = () => {
    setIsClickResetFilterButtonToTrue();
    resetFilterApplied();
  };

  return (
      <Box className={"filters-container"}>
        {!isStretched && <Box className={"filters-title"}>Filters</Box>}
        <Box className={"inner-filters-container"}>
          <TextInputCustom
              isResetAction={isClickResetFilterButton}
              actionTextInput={onSubmitAction}
              textValue={nameValue}
              setTextValue={setNameValue}
              placeholder={"Search..."}
          />
          <SwitchCustom isResetAction={isClickResetFilterButton}/>
          <DropdownCustom
              isResetAction={isClickResetFilterButton}
              menuItemUserId={menuItemUserId}
          />
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
