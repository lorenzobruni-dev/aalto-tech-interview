import React, { Fragment, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Button,
} from "@mui/material";
import { OperationType, TodoType } from "../../../utils/types";
import "./tableStyle.css";
import { useDataFetch, useFilterApplied } from "../../../utils/zustandUtils";
import { filter, includes, pickBy, toLower } from "lodash";
import { EMPTY_STATE_DATA, ROWS_PER_PAGE } from "../../../utils/emptyState";
import { ModalCustom } from "./modal/ModalCustom";

export const TableTodo = () => {
  const { data } = useDataFetch();
  const { filterApplied } = useFilterApplied();
  const [open, setOpen] = useState<boolean>(false);
  const [fieldsToEdit, setFieldsToEdit] = useState<TodoType | undefined>(
    EMPTY_STATE_DATA,
  );
  const [operationType, setOperationType] = useState<OperationType>(
    OperationType.EDIT,
  );
  const [page, setPage] = useState<number>(1);
  const handleClose = () => setOpen(false);
  const handleOpen = (opType: OperationType, fields?: TodoType) => {
    if (fields) setFieldsToEdit(fields);
    else setFieldsToEdit(undefined);
    setOperationType(opType);
    setOpen(true);
  };
  const startIndex: number = (page - 1) * ROWS_PER_PAGE;
  const selectedTodos: TodoType[] = data.slice(
    startIndex,
    startIndex + ROWS_PER_PAGE,
  );
  const activeFilters = pickBy(filterApplied, Boolean);
  const filteredData = filter(data, (item) =>
    Object.entries(activeFilters).every(([key, value]) => {
      if (key === "title") {
        return includes(toLower(item.title), toLower(value));
      }
      return item[key] === value;
    }),
  );

  const contentToRenderInRow =
    filteredData.length == 1 ? filteredData : selectedTodos;
  return (
    <Paper
      sx={{
        backgroundColor: "transparent",
        boxShadow: 0,
        padding: 2,
      }}
    >
      <Button
        sx={{
          fontFamily: '"Karbon Regular" , sans serif',
          boxShadow: 0,
          fontWeight: "bold",
          marginBottom: 1,
        }}
        variant={"contained"}
        onClick={() => handleOpen(OperationType.CREATE)}
      >
        Create Row
      </Button>

      <ModalCustom
        dataLength={data.length}
        opType={operationType}
        fieldsToEdit={fieldsToEdit}
        handleClose={handleClose}
        open={open}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b className={"title-row"}>User ID</b>
              </TableCell>
              <TableCell>
                <b className={"title-row"}>Title</b>
              </TableCell>
              <TableCell>
                <b className={"title-row"}>Completed</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.length === 0 ? (
              <TableRow className={"table-row-no-matches"}>
                <TableCell
                  className={"cell-content"}
                  sx={{
                    fontFamily: '"Karbon Regular" , sans serif',
                  }}
                  colSpan={3}
                  align="left"
                >
                  No matches found
                </TableCell>
              </TableRow>
            ) : (
              contentToRenderInRow.map((todo) => (
                <Fragment key={todo.id}>
                  <TableRow className={"padding-between-rows"} />
                  <TableRow
                    className={"table-row-todo"}
                    onClick={() => handleOpen(OperationType.EDIT, todo)}
                  >
                    <TableCell
                      className={"cell-content"}
                      sx={{
                        fontFamily: '"Karbon Regular" , sans serif',
                      }}
                    >
                      {todo.userId}
                    </TableCell>
                    <TableCell
                      className={"cell-content"}
                      sx={{
                        fontFamily: '"Karbon Regular" , sans serif',
                      }}
                    >
                      {todo.title}
                    </TableCell>
                    <TableCell
                      className={"cell-content"}
                      sx={{
                        fontFamily: '"Karbon Regular" , sans serif',
                      }}
                    >
                      {todo.completed ? "✅" : "❌"}
                    </TableCell>
                  </TableRow>
                  <TableRow className={"padding-between-rows"} />
                </Fragment>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {filteredData.length > 0 && (
        <Pagination
          count={Math.ceil(data.length / ROWS_PER_PAGE)}
          page={page}
          onChange={(event, value) => setPage(value)}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 2,
          }}
        />
      )}
    </Paper>
  );
};
