import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";

import About from "./pages/About";
import Education from "./pages/Education";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Fun from "./pages/Fun";
import Experience from "./pages/Experience";
import SeminarsPresentations from "./pages/SeminarsPresentations";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/research" element={<Research />} />
        <Route path="/presentations" element={<SeminarsPresentations />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/fun" element={<Fun />} />
      </Routes>
    </>
  );
}

export default App;