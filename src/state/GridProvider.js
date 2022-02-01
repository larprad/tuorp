import { useState } from "react";
import { initGrid } from "../config/ini";
import { GridContext } from "./GridContext";

const GridProvider = ({ children }) => {
  const [grid, setGrid] = useState(initGrid);
  const [letterFound, setLetterFound] = useState([]);
  const [letterOut, setLetterOut] = useState([]);
  const [activeRow, setActiveRow] = useState(0);
  const [activeCol, setActiveCol] = useState(0);
  const [victory, setVictory] = useState(false);
  const value = {
    grid,
    setGrid,
    activeRow,
    setActiveRow,
    activeCol,
    setActiveCol,
    letterFound,
    setLetterFound,
    letterOut,
    setLetterOut,
    victory,
    setVictory,
  };
  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};

export default GridProvider;
