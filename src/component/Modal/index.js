import { useGrid } from "../../hook/useGrid";

const Modal = ({ title }) => {
  const { initGame } = useGrid();

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Victory</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={initGame}
            >
              Encore !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
