import { useGrid } from "../../hook/useGrid";
import { useGridContext } from "../../state/GridContext";
import { tuorp } from "../../utils";

import "./modal.scss";

const Modal = () => {
  const { initGame } = useGrid();
  const { victory, wordToBeFound } = useGridContext();

  return (
    <div className="tuorp-modal position-absolute left-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center">
      <div className="tuorp-modal__container rounded shadow p-4 text-center">
        <h1 className="text-primary">{victory ? "Victoire !" : "Perdu !"} </h1>
        <p className="text-center mt-4 ">
          {victory
            ? "Bien joué, tu es super balaise ! "
            : "Aïe, mais qu'est ce qu'il s'est passé ?"}
        </p>
        <p>C'était...</p>
        <h3 className="text-secondary fw-bold mb-4">{wordToBeFound}</h3>
        <div className="d-flex gap-3 justifiy-content-center">
          <button className="btn btn-primary flex-fill" onClick={initGame}>
            Un autre !
          </button>
          <button className="btn btn-outline-primary flex-fill" onClick={tuorp}>
            Prout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
