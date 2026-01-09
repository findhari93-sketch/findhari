// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TopCurve from "./components/TopCurve/TopCurve";
import { Home } from "./pages/Home/Home";
import CompDesign from "./pages/ComponentsDesign/CompDesign";

// Placeholder styles
const placeholderStyle = {
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  color: "#fff",
  textAlign: "center",
};

// Work Page Placeholder
const Work = () => (
  <Box sx={placeholderStyle}>
    <Typography variant="sectionTitle" sx={{ mb: 3 }}>
      Work
    </Typography>
    <Typography variant="sectionContent" sx={{ mb: 4, maxWidth: "600px" }}>
      Case studies and projects coming soon. Check out the featured work on the homepage!
    </Typography>
    <Link to="/" style={{ textDecoration: "none" }}>
      <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
        Back to Home
      </Button>
    </Link>
  </Box>
);

// About Page Placeholder
const About = () => (
  <Box sx={placeholderStyle}>
    <Typography variant="sectionTitle" sx={{ mb: 3 }}>
      About
    </Typography>
    <Typography variant="sectionContent" sx={{ mb: 4, maxWidth: "600px" }}>
      Strategic UX Engineer with 8+ years bridging design and engineering.
      Full about page coming soon!
    </Typography>
    <Link to="/" style={{ textDecoration: "none" }}>
      <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
        Back to Home
      </Button>
    </Link>
  </Box>
);

// Resume Page Placeholder
const Resume = () => (
  <Box sx={placeholderStyle}>
    <Typography variant="sectionTitle" sx={{ mb: 3 }}>
      Resume
    </Typography>
    <Typography variant="sectionContent" sx={{ mb: 4, maxWidth: "600px" }}>
      Interactive resume and downloadable PDF coming soon!
    </Typography>
    <Link to="/" style={{ textDecoration: "none" }}>
      <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
        Back to Home
      </Button>
    </Link>
  </Box>
);

// Contact Page Placeholder
const Contact = () => (
  <Box sx={placeholderStyle}>
    <Typography variant="sectionTitle" sx={{ mb: 3 }}>
      Contact
    </Typography>
    <Typography variant="sectionContent" sx={{ mb: 2, maxWidth: "600px" }}>
      Let's connect! Contact form coming soon.
    </Typography>
    <Typography
      sx={{
        fontFamily: "Roboto, sans-serif",
        fontSize: "18px",
        mb: 4,
      }}
    >
      Email: findhari93@gmail.com
    </Typography>
    <Link to="/" style={{ textDecoration: "none" }}>
      <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
        Back to Home
      </Button>
    </Link>
  </Box>
);

// Case Study Placeholder
const CaseStudy = () => (
  <Box sx={placeholderStyle}>
    <Typography variant="sectionTitle" sx={{ mb: 3 }}>
      Case Study
    </Typography>
    <Typography variant="sectionContent" sx={{ mb: 4, maxWidth: "600px" }}>
      Detailed case study content coming soon!
    </Typography>
    <Link to="/work" style={{ textDecoration: "none" }}>
      <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
        Back to Work
      </Button>
    </Link>
  </Box>
);

function App() {
  return (
    <Router>
      <Box>
        <TopCurve />
        <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legacy/Utility Routes */}
          <Route path="/compdesign" element={<CompDesign />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
