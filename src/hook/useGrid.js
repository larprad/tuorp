import { useGridContext } from "../state/GridContext";
import { authKeys, settings, wordToBeFound } from "../config/ini";
import { authKey } from "../utils";

export const useGrid = () => {
  const {
    grid,
    setGrid,
    activeRow,
    activeCol,
    setActiveCol,
    setActiveRow,
    victory,
    setVictory,
    setLetterFound,
    setLetterOut,
  } = useGridContext();

  const currentWord = grid[activeRow].join("").toLowerCase();

  const initGame = () => {
    setGrid([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ]);
    setActiveCol(0);
    setActiveRow(0);
    setVictory(0);
    setLetterFound([]);
    setLetterOut([]);
  };

  const checkVictory = () => {
    if (currentWord === wordToBeFound.toLocaleLowerCase()) {
      setVictory(true);
    }
  };

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
