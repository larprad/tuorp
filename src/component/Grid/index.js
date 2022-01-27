import Letter from "../Letter";
import { initGrid } from "../../config/ini";

const Grid = () => {
  return (
    <main className="d-flex justify-content-center my-5">
      <div className="d-flex flex-column gap-2">
        {initGrid.map((row, index) => (
          <div className="d-flex gap-2" key={index}>
            {row.map((letter, index) => (
              <Letter letter={letter} key={index} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Grid;
