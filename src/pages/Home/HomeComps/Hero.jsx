// src/components/Hero/Hero.jsx
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import heroImg from "../../../assets/images/hero-image.png";
import heroImgMobile from "../../../assets/images/hero-image-1.webp";
import SectionTextContent from "../../../components/SectionTextContent/SectionTextContent";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        paddingX: "2rem",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* Text Content */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "right" },
        }}
      >
        <Box>
          <Typography variant="sectionTitle" gutterBottom>
            <span style={{ paddingRight: "5rem" }}>"PORT"</span>
            <br />
            <span>- "FOLIO"</span>
          </Typography>

          <Box
            sx={{
              borderBottom: "1px solid #ffffff7a",
              mb: 2,
              width: "100%",
              marginBottom: "3rem",
            }}
          />

          <Typography variant="sectionContent">
            <>
              Hi, I'm Haribabu Manoharan (aka Hari). I have good experience{" "}
              <br />
              in Web Development | UI/UX Design | Digital Marketing |
              <br /> Content Creation & Space Design Architecture.
              <br /> Find My resume Below.
            </>
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            gap: 2,
          }}
        >
          <Link to="/resume">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#f0f0f0", // light grey on hover
                },
              }}
            >
              CV
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255,255,255,0.1)", // slight white overlay on hover
                },
              }}
            >
              Portfolio
            </Button>
          </Link>
          <Link to="/compdesign">
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255,255,255,0.1)", // slight white overlay on hover
                },
              }}
            >
              Comp Design
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Hero Image */}
      <Box sx={{ flex: 1, position: "relative", mb: { xs: 4, md: 0 } }}>
        <img
          src={heroImg}
          alt="Hero"
          style={{
            width: "100%",
            maxWidth: "500px",
            cursor: "url(https://i.ibb.co/JkrmzSR/download.png), auto",
            display: "block",
            margin: "0",
            transform: "scale(0.95)",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
