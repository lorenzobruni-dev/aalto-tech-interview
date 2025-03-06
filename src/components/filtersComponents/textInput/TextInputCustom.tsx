import { Box, TextField } from "@mui/material";
import iconSearch from "../../../../assets/icon-search.svg";
import "./textInputStyle.css";
import React from "react";

type TextInputProps = {
  placeholder: string;
  actionTextInput?: () => void;
  hasButton?: boolean;
};
export const TextInputCustom: React.FC<TextInputProps> = ({
  actionTextInput,
  hasButton,
  placeholder,
}) => {
  return (
    <Box className={"text-input-container"}>
      {hasButton && (
        <Box className={"wrapper-img"} onClick={actionTextInput}>
          <Box className={"search-img"} component={"img"} src={iconSearch} />
        </Box>
      )}
      <TextField
        placeholder={placeholder}
        id={"outlined-basic"}
        className={"textfield"}
      />
    </Box>
  );
};
