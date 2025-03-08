import { Box, TextField } from "@mui/material";
import iconSearch from "../../../../assets/icon-search.svg";
import "./textInputStyle.css";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { EMPTY_STRING } from "../../../utils/emptyState";

type TextInputProps = {
  placeholder: string;
  isResetAction: boolean;
  textValue: string;
  setTextValue: Dispatch<SetStateAction<string>>;
  actionTextInput?: () => void;
};
export const TextInputCustom: React.FC<TextInputProps> = ({
  actionTextInput,
  placeholder,
  isResetAction,
  textValue,
  setTextValue,
}) => {
  useEffect(() => {
    if (isResetAction) setTextValue(EMPTY_STRING);
  }, [isResetAction]);

  return (
    <Box className={"text-input-container"}>
      <Box className={"wrapper-img"} onClick={actionTextInput}>
        <Box className={"search-img"} component={"img"} src={iconSearch} />
      </Box>

      <TextField
        value={textValue}
        onChange={(textValue) => setTextValue(textValue.target.value)}
        placeholder={placeholder}
        id={"outlined-basic"}
        className={"textfield"}
      />
    </Box>
  );
};
