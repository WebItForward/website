import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import ProjectPage from "../ProjectsPage/ProjectPage";
import ContactPage from "../ContactPage/ContactPage";
import JoinPage from "../JoinPage/JoinPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
