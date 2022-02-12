import Key from "../Key";
import { initKeyboard } from "../../config/ini";
import { useKeyListener } from "../../hook/useKeyListener";
import { useGrid } from "../../hook/useGrid";
import { useEffect } from "react";

const Keyboard = () => {
  const { keyPressed } = useKeyListener();
  const { deleteKey, valideKey, writeKey } = useGrid();

  useEffect(() => {
    if (keyPressed === "Backspace") {
      deleteKey();
      return;
    }
    if (keyPressed === "Enter") {
      valideKey();
      return;
    }
    writeKey(keyPressed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPressed]);

  return (
    <div className="d-flex justify-content-center mb-5 mt-1">
      <div className="d-flex flex-column gap-2">
        {initKeyboard.map((row, index) => (
          <div className="d-flex gap-1 justify-content-center" key={index}>
            {row.map((key, index) => (
              <Key key={index} keyCaps={key} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
