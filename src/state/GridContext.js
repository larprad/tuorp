import { createContext, useContext } from "react";

const gridState = {
  grid: [],
  activeRow: 0,
  activeCol: 0,
  setGrid: () => null,
  setActiveCol: () => null,
  setActiveRow: () => null,
};

export const GridContext = createContext(gridState);
export const useGridContext = () => useContext(GridContext);
