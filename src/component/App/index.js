import Header from "../Header";
import Grid from "../Grid";
import Keyboard from "../Keyboard";
import { useGridContext } from "../../state/GridContext";
import Modal from "../Modal";
import { useEffect } from "react";
import { useGrid } from "../../hook/useGrid";
import { useParams } from "react-router-dom";

function App() {
  const { modal } = useGridContext();
  const { initGame } = useGrid();
  const { id } = useParams();
  useEffect(() => {
    initGame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div className="min-vh-100 bg-dark text-white d-flex flex-column">
      <Header />
      <div className="flex-fill d-flex flex-column justify-content-between">
        <Grid />
        <Keyboard />
      </div>
      {modal && <Modal />}
    </div>
  );
}

export default App;
