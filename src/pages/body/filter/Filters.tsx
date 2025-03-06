import { Box } from "@mui/material";
import "./filtersStyle.css";
import { TextInputCustom } from "../../../components/filtersComponents/textInput/TextInputCustom";
import { SwitchCustom } from "../../../components/filtersComponents/switch/SwitchCustom";

export const Filters = () => {
  return (
    <Box className={"filters-container"}>
      <Box className={"filters-title"}>Filters</Box>

      <Box className={"inner-filters-container"}>
        <TextInputCustom
          placeholder={"Search..."}
          hasButton
          actionTextInput={() => console.log("Ho cliccato")}
        />
        <SwitchCustom />
        <TextInputCustom placeholder={"Select user ID"} />
      </Box>
      <Box
        onClick={() => console.log("reset filters")}
        component={"h1"}
        className={"reset-filters-button"}
      >
        Reset filters
      </Box>
    </Box>
  );
};
