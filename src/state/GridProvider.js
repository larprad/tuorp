import { useState } from "react";
import { initGrid } from "../config/ini";
import { GridContext } from "./GridContext";

const GridProvider = ({ children }) => {
  const [grid, setGrid] = useState([initGrid]);
  const value = {
    grid,
    setGrid,
  };
  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};

export default GridProvider;
