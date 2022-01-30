import Letter from "../Letter";
import { useGridContext } from "../../state/GridContext";

const Grid = () => {
  const { grid } = useGridContext();
  return (
    <main className="d-flex justify-content-center my-5">
      <div className="d-flex flex-column gap-2">
        {grid?.map((row, indexRow) => (
          <div className="d-flex gap-2" key={indexRow}>
            {row?.map((letter, index) => (
              <Letter letter={letter} key={index} index={index} row={indexRow}/>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Grid;
