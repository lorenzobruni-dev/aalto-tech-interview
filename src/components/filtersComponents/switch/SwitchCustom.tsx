import React, { useEffect, useState } from "react";
import { Box, FormControlLabel, styled, Switch, Theme } from "@mui/material";
import "./switchStyle.css";
import { useFilterApplied } from "../../../utils/zustandUtils";
import { TypeFieldsTable } from "../../../utils/types";

interface SwitchThemeProps {
  theme: Theme;
}

type SwitchCustomType = {
  isResetAction: boolean;
  modalAction?: (value: boolean) => void;
  completedToEdit?: boolean;
};

export const SwitchCustom: React.FC<SwitchCustomType> = ({
  isResetAction,
  completedToEdit,
  modalAction,
}) => {
  const [switchChecked, setSwitchChecked] = useState<boolean>(
    completedToEdit ?? true,
  );
  const { setFilterApplied } = useFilterApplied();
  const SwitchOnOff = styled(Switch)(({ theme }: SwitchThemeProps) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 12,
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "45%",
        transform: "translateY(-40%)",
        width: 16,
        height: 16,
      },
      "&::before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&::after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));

  useEffect(() => {
    if (isResetAction) setSwitchChecked(true);
  }, [isResetAction]);

  useEffect(() => {
    if (modalAction) modalAction(switchChecked);
    else setFilterApplied({ completed: switchChecked } as TypeFieldsTable);
  }, [switchChecked, modalAction, setFilterApplied]);

  return (
    <Box style={{ width: "100%", marginLeft: 2 }}>
      <FormControlLabel
        label={switchChecked ? "Completed" : "Not completed"}
        control={
          <SwitchOnOff
            checked={switchChecked}
            onChange={() => setSwitchChecked(!switchChecked)}
          />
        }
        className={"form-control-label"}
      />
    </Box>
  );
};
