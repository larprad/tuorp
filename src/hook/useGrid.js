import { useGridContext } from "../state/GridContext";
import { authKeys, settings, wordToBeFound } from "../config/ini";
import { authKey, wordIsExisting } from "../utils";
import { useEffect } from "react";

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
    setGame,
    setModal,
    game,
    setWarning,
  } = useGridContext();

  const currentWord = grid[activeRow]?.join("").toLowerCase();

  const initGame = () => {
    setGame("init");
    setModal(false);
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
    setVictory(false);
    setLetterFound([]);
    setLetterOut([]);
  };

  const checkVictory = () => {
    if (currentWord === wordToBeFound.toLocaleLowerCase()) {
      setVictory(true);
      setGame("end");
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
      if (activeRow < grid.length - 1) {
        if (wordIsExisting(currentWord)) {
          setActiveRow(activeRow + 1);
          setActiveCol(0);
        } else {
          setWarning(true);
          setTimeout(() => setWarning(false), 1000);
        }
      } else {
        setActiveRow(activeRow + 1);
        setActiveCol(0);
        setGame("end");
      }
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

  useEffect(() => {
    if (victory) {
      setGame("end");
    }
  });

  useEffect(() => {
    if (game === "end") {
      setTimeout(() => {
        setModal(true);
      }, 500);
    }
  });

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
