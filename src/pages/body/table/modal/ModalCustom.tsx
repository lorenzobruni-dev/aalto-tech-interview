import React, { useEffect, useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import {
  OperationType,
  TodoType,
  TypeFieldsTable,
} from "../../../../utils/types";
import { DropdownCustom } from "../../../../components/filtersComponents/dropdown/DropdownCustom";
import { SwitchCustom } from "../../../../components/filtersComponents/switch/SwitchCustom";
import "./modalStyle.css";
import { useDataFetch, useMenuUserId } from "../../../../utils/zustandUtils";

type ModalCustomProps = {
  opType: OperationType;
  open: boolean;
  handleClose: () => void;
  fieldsToEdit?: TodoType;
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
  const { addRowToDataStructure, editRowDataStructure } = useDataFetch();
  const { menuItemUserId } = useMenuUserId;
  useEffect(() => {
    if (opType === OperationType.EDIT && fieldsToEdit) {
      setTextValue(fieldsToEdit.title || "");
      setCompleted(fieldsToEdit.completed || false);
      setUserId(fieldsToEdit.userId?.toString() || "");
    } else resetFields();
  }, [opType, fieldsToEdit]);

  const handleSave = () => {
    const content = {
      title: textValue,
      completed: completed,
      userId: userId,
      id: fieldsToEdit?.id,
    } as TypeFieldsTable;
    if (opType === OperationType.CREATE) addRowToData(content);
    else editRowData(content);
    resetFields();
    handleClose();
  };

  const addRowToData = (rowToEdit: TypeFieldsTable) =>
    addRowToDataStructure(rowToEdit);
  const editRowData = (rowToCreate: TypeFieldsTable) =>
    editRowDataStructure(rowToCreate);

  const resetFields = () => {
    setTextValue("");
    setCompleted(true);
    setUserId("");
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
            modelAction={setUserId}
            userIdToEdit={userId}
            isResetAction={false}
            menuItemUserId={menuItemUserId}
          />
          <SwitchCustom
            modalAction={setCompleted}
            completedToEdit={completed}
            isResetAction={false}
          />
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
