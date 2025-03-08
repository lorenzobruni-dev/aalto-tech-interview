import React, { useEffect, useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import { OperationType, TypeFieldsTable } from "../../../../utils/types";
import { DropdownCustom } from "../../../../components/filtersComponents/dropdown/DropdownCustom";
import { SwitchCustom } from "../../../../components/filtersComponents/switch/SwitchCustom";
import "./modalStyle.css";
import { useDataFetch, useMenuUserId } from "../../../../utils/zustandUtils";

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
  const { addRowToDataStructure } = useDataFetch();
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

  const handleSave = () => {
    addRowToDataStructure({
      title: textValue,
      completed: completed,
      userId: userId,
    } as TypeFieldsTable);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={"modal-container"} p={4}>
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
            userIdToEdit={userId}
            isResetAction={false}
            menuItemUserId={menuItemUserId}
          />
          <SwitchCustom completedToEdit={completed} isResetAction={false} />
        </Box>
        <Button
          variant={"contained"}
          fullWidth
          className={"save-button"}
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};
