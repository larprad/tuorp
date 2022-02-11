import cn from "classnames";
import { useGridContext } from "../../state/GridContext";
import Letter from "../Letter";

import "./row.scss";

const Row = ({ row, indexRow }) => {
  const { activeRow, warning } = useGridContext();

  console.log(activeRow, "acro");
  console.log(warning, "warn");
  console.log(indexRow, "ro");

  const rowClass = cn("d-flex gap-2", {
    "tuorp-row--anim": indexRow === activeRow && warning,
  });

  return (
    <div className={rowClass} key={indexRow}>
      {row?.map((letter, index) => (
        <Letter letter={letter} key={index} index={index} row={indexRow} />
      ))}
    </div>
  );
};

export default Row;
