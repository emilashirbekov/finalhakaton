import MainRoutes from "./routes/MainRoutes";
import "./assets/global.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
