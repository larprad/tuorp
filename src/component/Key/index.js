import { useGrid } from "../../hook/useGrid";
import "./key.scss";

const Key = ({ keyCaps }) => {
  const { deleteKey, valideKey, writeKey } = useGrid();

  const handleKey = () => {
    if (keyCaps === "ANNULER") {
      deleteKey();
      return;
    }
    if (keyCaps === "VALIDER") {
      valideKey();
      return;
    }
    writeKey(keyCaps);
  };

  return (
    <div className="tuorp-key p-3 rounded" role="button" onClick={handleKey}>
      <h6 className="m-0 align-middle">{keyCaps}</h6>
    </div>
  );
};

export default Key;
