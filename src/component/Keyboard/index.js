import Key from "../Key";

const keyboardContent = [
  ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
  ["VALIDER", "W", "X", "C", "V", "B", "N", "ANNULER"],
];

const Keyboard = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="d-flex flex-column gap-2">
        {keyboardContent.map((row, index) => (
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
