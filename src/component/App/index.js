import Header from "../Header";
import Grid from "../Grid";
import Keyboard from "../Keyboard";
import { useGridContext } from "../../state/GridContext";
import Modal from "../Modal";

function App() {
  const { modal } = useGridContext();
  return (
    <div className="min-vh-100 bg-dark text-white d-flex flex-column">
      <Header />
      <div className="flex-fill d-flex flex-column justify-content-between">
        <Grid />
        <Keyboard />
      </div>
      {modal && <Modal />}
      <div className="position-absolute bottom-0 left-0 p-1 fs-xs opacity-50">
        <p className="m-0 opacity-75 fs-7">
          🐒 by{" "}
          <a
            href="https://github.com/larprad?tab=repositories"
            className="text-decoration-none text-secondary"
          >
            Larprad
          </a>
          , inspired by Wordle
        </p>
      </div>
    </div>
  );
}

export default App;
