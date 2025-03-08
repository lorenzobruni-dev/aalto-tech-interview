import "./styles/App.css";
import "./styles/gridStyle.css";
import React, { useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Topbar } from "./pages/topbar/Topbar.tsx";
import { Footer } from "./pages/footer/Footer.tsx";
import { BodyApplication } from "./pages/body/BodyApplication.tsx";
import {
  useDataFetch,
  useMenuUserId,
  useResetFilters,
  useSize,
} from "./utils/zustandUtils";
import { map, uniq } from "lodash";

const App = () => {
  const { isClickResetFilterButton, setIsClickResetFilterButtonToFalse } =
    useResetFilters();
  const { setData, data } = useDataFetch();
  const { setIsStretched } = useSize();
  const { setMenuItemUserId } = useMenuUserId();
  const isStretched = useMediaQuery("(max-width: 700px)");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    setIsStretched(isStretched);
  }, [isStretched]);

  useEffect(() => {
    setTimeout(() => {
      if (isClickResetFilterButton) setIsClickResetFilterButtonToFalse();
    }, 1500);
  }, [isClickResetFilterButton]);

  useEffect(() => {
    setMenuItemUserId(uniq(map(data, "userId")));
  }, [data]);

  return (
    <Box className={"grid-container"}>
      <Topbar />
      <BodyApplication />
      <Footer />
    </Box>
  );
};

export default App;
