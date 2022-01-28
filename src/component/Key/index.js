import { useGridContext } from "../../state/GridContext";
import { settings } from "../../config/ini";
import "./key.scss";

const Key = ({ keyCaps }) => {
  const { grid, setGrid, activeRow, activeCol, setActiveCol } =
    useGridContext();
  const handleKey = () => {
    if (activeCol < settings.wordLength) grid[activeRow][activeCol] = keyCaps;
    setGrid([...grid]);
    setActiveCol(activeCol + 1);
  };
  return (
    <div className="tuorp-key p-3 rounded" role="button" onClick={handleKey}>
      {keyCaps}
    </div>
  );
};

export default Key;
