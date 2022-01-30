import { createContext, useContext } from 'react';

const gridState = {
  grid: [],
  activeRow: 0,
  activeCol: 0,
  letterOut: [],
  letterFound: [],
  setGrid: () => null,
  setActiveCol: () => null,
  setActiveRow: () => null,
  setLetterFound: () => null,
  setLetterOut: () => null,
};

export const GridContext = createContext(gridState);
export const useGridContext = () => useContext(GridContext);
