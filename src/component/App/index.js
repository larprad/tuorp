import Header from "../Header";
import Grid from "../Grid";
import Keyboard from "../Keyboard";
import { useGridContext } from "../../state/GridContext";
import Modal from "../Modal";
import { useGrid } from "../../hook/useGrid";

function App() {
  const { game, victory } = useGridContext();
  const { initGame } = useGrid();
  return (
    <div className="min-vh-100 bg-dark text-white d-flex flex-column">
      <Header />
      <div className="flex-fill d-flex flex-column justify-content-between">
        <Grid />
        <Keyboard />
        <button onClick={initGame}>Reset</button>
      </div>
      {game === "end" && <Modal title={victory ? "yes!" : "nooooo!"} />}
    </div>
  );
}

export default App;
