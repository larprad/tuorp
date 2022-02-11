import { createContext, useContext } from "react";

const gridState = {
  grid: [],
  activeRow: 0,
  activeCol: 0,
  game: "",
  victory: false,
  letterOut: [],
  letterFound: [],
  setGrid: () => null,
  setActiveCol: () => null,
  setActiveRow: () => null,
  setLetterFound: () => null,
  setLetterOut: () => null,
  setGame: () => null,
  setVictory: () => null,
  modal: false,
  setModal: () => null,
  setWarning: () => null,
  warning: false,
  wordToBeFound: "",
  setWordToBeFound: () => null,
};

export const GridContext = createContext(gridState);
export const useGridContext = () => useContext(GridContext);
