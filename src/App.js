import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Provider } from "react-redux";
import store from "./app/store.js";
import CanasPage from "./pages/canvas/CanvasPage";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <CanasPage />
        </div>
      </DndProvider>
    </Provider>
  );
}

export default App;
