import Key from "../Key";
import { initKeyboard } from "../../config/ini";

const Keyboard = () => {
  return (
    <div className="d-flex justify-content-center my-5">
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
