import { createContext, useContext } from "react";

const gridState = {
  grid: [],
  setGrid: () => null,
};

export const GridContext = createContext(gridState);
export const useGridContext = () => useContext(GridContext);
