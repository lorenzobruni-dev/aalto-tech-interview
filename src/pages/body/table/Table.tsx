import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";
import { TodoType } from "../../../utils/types";
import "./tableStyle.css";
import { useDataFetch } from "../../../utils/zustandUtils";

export const TableTodo = () => {
  const { data } = useDataFetch();
  const [page, setPage] = useState<number>(1);
  const ROWS_PER_PAGE = 5;

  const startIndex: number = (page - 1) * ROWS_PER_PAGE;
  console.log(data);
  const selectedTodos: TodoType[] = data.slice(
    startIndex,
    startIndex + ROWS_PER_PAGE,
  );

  return (
    <Paper
      sx={{
        backgroundColor: "transparent",
        boxShadow: 0,
        padding: 2,
      }}
    >
      <TableContainer>
        <Table stickyHeader>
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
            {selectedTodos.map((todo) => (
              <>
                <TableRow className={"padding-between-rows"} />
                <TableRow className={"table-row-todo"} key={todo.id}>
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
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
    </Paper>
  );
};
