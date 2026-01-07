// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import TopCurve from "./components/TopCurve/TopCurve";
import { Home } from "./pages/Home/Home";
import CompDesign from "./pages/ComponentsDesign/CompDesign";
// Placeholder components for routing
const Startup = () => <div style={style}>StartUp Page</div>;
const AboutMe = () => <div style={style}>About Me</div>;
const Skills = () => <div style={style}>Skills Page</div>;
const In = () => <div style={style}>In Page</div>;
const Experience = () => <div style={style}>Experience Page</div>;
const Contact = () => <div style={style}>Contact Page</div>;
const Resume = () => <div style={style}>Resume Page</div>;
const Portfolio = () => <div style={style}>Portfolio Page</div>;

const style = {
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  color: "#fff",
};

function App() {
  return (
    <Router>
      <Box>
        <TopCurve />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/in" element={<In />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/compdesign" element={<CompDesign />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
