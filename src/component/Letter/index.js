import cn from "classnames";
import { useEffect, useState } from "react";
import { useGridContext } from "../../state/GridContext";
import "./letter.scss";
import { wordToBeFound } from "../../config/ini";
import { pushIfNotExisting } from "../../utils";

const Letter = ({ letter, index, row }) => {
  const [state, setState] = useState("");
  const { activeRow, setLetterOut, setLetterFound, grid, victory } =
    useGridContext();

  const keyClass = cn(
    "tuorp-letter rounded d-flex justify-content-center align-items-center",
    {
      "turop-letter--default": state === "default",
      "tuorp-letter--settled": state === "settled",
      "tuorp-letter--perfect": state === "perfect",
      "tuorp-letter--almost": state === "almost",
      "tuorp-letter--filled": letter !== "",
    }
  );

  useEffect(() => {
    if (grid[(activeRow, index)] === "") {
      console.log(grid);
      setState("default");
    }
  }, [activeRow, grid, index, victory, letter]);

  useEffect(() => {
    const getLetterState = (letter) => {
      const letterToFind = wordToBeFound.split("")[index].toLowerCase();
      if (letter.toLowerCase() === letterToFind) {
        setState("perfect");
        setLetterFound((prev) => pushIfNotExisting(letter, prev));
      } else if (wordToBeFound.toLowerCase().includes(letter.toLowerCase())) {
        setState("almost");
      } else {
        setState("settled");
        setLetterOut((prev) => pushIfNotExisting(letter, prev));
      }
    };

    if (row < activeRow) {
      getLetterState(letter);
    }
  }, [index, letter, activeRow, row, setLetterFound, setLetterOut]);

  return (
    <div className={keyClass} style={{ width: "4rem", height: "4rem" }}>
      <h3 className="m-0 fw-bold">{letter.toUpperCase()}</h3>
    </div>
  );
};

export default Letter;
