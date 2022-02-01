import Header from "../Header";
import Grid from "../Grid";
import Keyboard from "../Keyboard";
import { useGrid } from "../../hook/useGrid";

function App() {
  const { victory } = useGrid();
  console.log(victory);
  return (
    <div className="min-vh-100 bg-dark text-white d-flex flex-column">
      <Header />
      <div className="flex-fill d-flex flex-column justify-content-between">
        <Grid />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
