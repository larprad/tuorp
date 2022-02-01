import { useGrid } from "../../hook/useGrid";

const Modal = ({ title }) => {
  const { initGame } = useGrid();

  return (
    <div className="position-absolute bg-secondary top-0">
      <h5>{title}</h5>
      <button type="button" className="btn-close" aria-label="Close"></button>
      <p>Victory</p>
      <button
        type="button"
        className="btn btn-green"
        data-bs-dismiss="modal"
        onClick={initGame}
      >
        Encore !
      </button>
    </div>
  );
};

export default Modal;
