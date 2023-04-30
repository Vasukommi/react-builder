import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import DragndDrop from "./components/examples/DragndDrop";
import './App.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DragndDrop />
      </div>
    </DndProvider>
  );
}

export default App;
