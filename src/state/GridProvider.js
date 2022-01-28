import { useState } from "react";
import { initGrid } from "../config/ini";
import { GridContext } from "./GridContext";

const GridProvider = ({ children }) => {
  const [grid, setGrid] = useState(initGrid);
  const [activeRow, setActiveRow] = useState(0);
  const [activeCol, setActiveCol] = useState(0);
  const value = {
    grid,
    setGrid,
    activeRow,
    setActiveRow,
    activeCol,
    setActiveCol,
  };
  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};

export default GridProvider;
