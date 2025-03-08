import "./styles/App.css";
import "./styles/gridStyle.css";
import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Topbar } from "./pages/topbar/Topbar.tsx";
import { Footer } from "./pages/footer/Footer.tsx";
import { BodyApplication } from "./pages/body/BodyApplication.tsx";
import { useDataFetch, useResetFilters, useSize } from "./utils/zustandUtils";
import { map, uniq } from "lodash";

const App = () => {
  const { isClickResetFilterButton, setIsClickResetFilterButtonToFalse } =
    useResetFilters();
  const { setData, data } = useDataFetch();
  const { setIsStretched } = useSize();
  const [menuItemUserId, setUserId] = useState<number[]>([]);
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
    setUserId(uniq(map(data, "userId")));
  }, [data]);

  return (
    <Box className={"grid-container"}>
      <Topbar />
      <BodyApplication menuItemUserId={menuItemUserId} />
      <Footer />
    </Box>
  );
};

export default App;
