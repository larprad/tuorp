import { useGridContext } from "../state/GridContext";
import { authKeys, settings } from "../config/ini";
import { authKey } from "../utils";

export const useGrid = () => {
  const { grid, setGrid, activeRow, activeCol, setActiveCol, setActiveRow } =
    useGridContext();

  const deleteKey = () => {
    if (activeCol > 0) {
      grid[activeRow][activeCol - 1] = "";
      setGrid([...grid]);
      setActiveCol(activeCol - 1);
    }
  };

  const valideKey = () => {
    if (activeCol === settings.wordLength) {
      console.log("validate");
      setActiveRow(activeRow + 1);
      setActiveCol(0);
    }
  };

  const writeKey = (keyCaps) => {
    if (activeCol < settings.wordLength && authKey(keyCaps, authKeys)) {
      grid[activeRow][activeCol] = keyCaps;
      setGrid([...grid]);
      setActiveCol(activeCol + 1);
    }
  };

  return { deleteKey, valideKey, writeKey };
};
