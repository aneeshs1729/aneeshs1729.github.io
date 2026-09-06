import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";

import Navbar from "./components/Navbar";

import About from "./pages/About";
import Education from "./pages/Education";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Fun from "./pages/Fun";
import Experience from "./pages/Experience";
import SeminarsPresentations from "./pages/SeminarsPresentations";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.slice(1);

    // Wait until React has rendered the routed page.
    requestAnimationFrame(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }, [location.pathname, location.hash]);

  return null;
}



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
