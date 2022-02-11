import { useGrid } from "../../hook/useGrid";
import { useGridContext } from "../../state/GridContext";
import cn from "classnames";
import "./key.scss";

const Key = ({ keyCaps }) => {
  const { deleteKey, valideKey, writeKey } = useGrid();
  const { letterFound, letterOut } = useGridContext();

  const handleKey = () => {
    if (keyCaps === "DEL") {
      deleteKey();
      return;
    }
    if (keyCaps === "OK") {
      valideKey();
      return;
    }
    writeKey(keyCaps);
  };

  const keyClass = cn("tuorp-key px-sm-3 py-3 px-2 rounded", {
    "tuorp-key--found": letterFound.includes(keyCaps.toLowerCase()),
    "tuorp-key--out": letterOut.includes(keyCaps.toLowerCase()),
  });

  return (
    <div className={keyClass} role="button" onClick={handleKey}>
      <h6 className="m-0 align-middle text-white">{keyCaps}</h6>
    </div>
  );
};

export default Key;
