import React, { useEffect, useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import { OperationType, TypeFieldsTable } from "../../../../utils/types";
import { DropdownCustom } from "../../../../components/filtersComponents/dropdown/DropdownCustom";
import { SwitchCustom } from "../../../../components/filtersComponents/switch/SwitchCustom";
import "./modalStyle.css";
import { useMenuUserId } from "../../../../utils/zustandUtils";

type ModalCustomProps = {
  opType: OperationType;
  open: boolean;
  handleClose: () => void;
  fieldsToEdit?: TypeFieldsTable;
};

export const ModalCustom = ({
  open,
  handleClose,
  opType,
  fieldsToEdit,
}: ModalCustomProps) => {
  const [textValue, setTextValue] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const { menuItemUserId } = useMenuUserId;

  useEffect(() => {
    if (opType === OperationType.EDIT && fieldsToEdit) {
      setTextValue(fieldsToEdit.title || "");
      setCompleted(fieldsToEdit.completed || false);
      setUserId(fieldsToEdit.userId?.toString() || "");
    } else {
      setTextValue("");
      setCompleted(false);
      setUserId("");
    }
  }, [opType, fieldsToEdit]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={"modal-container"}>
        <Box className={"title-section"} sx={{ fontSize: 24 }}>
          {opType === OperationType.EDIT ? "Edit" : "Create"}
        </Box>
        <Box className={"modal-content"}>
          <TextField
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            placeholder={"Enter a title"}
            className={"textfield"}
            fullWidth
          />
          <DropdownCustom
            isResetAction={false}
            menuItemUserId={menuItemUserId}
          />
          <SwitchCustom isResetAction={false} />
        </Box>
        <Button
          variant={"contained"}
          fullWidth
          className={"save-button"}
          onClick={handleClose}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};
