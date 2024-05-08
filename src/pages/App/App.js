import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
