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
  Box,
} from "@mui/material";
import { TodoType } from "../../../utils/types";
import "./tableStyle.css";
import { useDataFetch, useFilterApplied } from "../../../utils/zustandUtils";
import { filter, includes, pickBy, toLower } from "lodash";
import { ROWS_PER_PAGE } from "../../../utils/emptyState";

export const TableTodo = () => {
  const { data } = useDataFetch();
  const { filterApplied } = useFilterApplied();

  const [page, setPage] = useState<number>(1);

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
            {filteredData.length === 0 ? (
              <Box sx={{ padding: 2 }}>No matches found</Box>
            ) : (
              contentToRenderInRow.map((todo, key) => (
                <Fragment key={key}>
                  <TableRow className={"padding-between-rows"} />
                  <TableRow className={"table-row-todo"}>
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
      {contentToRenderInRow.length > 1 && filteredData.length !== 0 && (
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
