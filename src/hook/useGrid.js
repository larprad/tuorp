import { useCallback, useState } from "react";
import { useGridContext } from "../state/GridContext";
import { authKeys, initGrid, settings, wordToBeFound } from "../config/ini";
import { authKey } from "../utils";

export const useGrid = () => {
  const { grid, setGrid, activeRow, activeCol, setActiveCol, setActiveRow } =
    useGridContext();

  const currentWord = grid[activeRow].join("").toLowerCase();
  const [victory, setVictory] = useState(false);

  const initGame = () => {
    setGrid(initGrid);
    setActiveCol(0);
    setActiveRow(0);
    setVictory(0);
  };

  const checkVictory = useCallback(() => {
    if (currentWord === wordToBeFound.toLocaleLowerCase()) {
      setVictory(true);
      console.log("Victory");
    }
  }, [currentWord]);

  const deleteKey = () => {
    if (activeCol > 0) {
      grid[activeRow][activeCol - 1] = "";
      setGrid([...grid]);
      setActiveCol(activeCol - 1);
    }
  };

  const valideKey = () => {
    if (activeCol === settings.wordLength) {
      checkVictory();
      setActiveRow(activeRow + 1);
      setActiveCol(0);
    }
  };

  const writeKey = (keyCaps) => {
    if (
      activeCol < settings.wordLength &&
      authKey(keyCaps, authKeys) &&
      !victory
    ) {
      grid[activeRow][activeCol] = keyCaps;
      setGrid([...grid]);
      setActiveCol(activeCol + 1);
    }
  };

  return {
    deleteKey,
    valideKey,
    writeKey,
    currentWord,
    checkVictory,
    victory,
    initGame,
  };
};
