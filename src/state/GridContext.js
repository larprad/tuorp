import { createContext, useContext } from "react";

const gridState = {
  grid: [],
  activeRow: 0,
  activeCol: 0,
  victory: false,
  letterOut: [],
  letterFound: [],
  setGrid: () => null,
  setActiveCol: () => null,
  setActiveRow: () => null,
  setLetterFound: () => null,
  setLetterOut: () => null,
  setVictory: () => null,
};

export const GridContext = createContext(gridState);
export const useGridContext = () => useContext(GridContext);
