// src/components/Hero/Hero.jsx
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero-image.webp";
import heroImgMobile from "../../assets/images/hero-image-1.webp";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* Text Content */}
      <Box sx={{ flex: 1, textAlign: { xs: "center", md: "right" } }}>
        <Typography variant="sectionTitle">
          <span style={{ paddingRight: "5rem" }}> PORT</span>
          <br />
          <span>- FOLIO</span>
        </Typography>

        <hr style={{ borderColor: "#fff" }} />
        <Typography variant="sectionContent">
          Hi, I'm Haribabu Manoharan (aka Hari). I have experience in Web
          Development, UI/UX Design, Digital Marketing, Content Creation, and
          Building Architecture.
        </Typography>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            gap: 2,
          }}
        >
          <Link to="/resume">
            <Button variant="contained" color="secondary">
              CV
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button variant="outlined" color="primary">
              Portfolio
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Hero Image */}
      <Box sx={{ flex: 1, position: "relative", mb: { xs: 4, md: 0 } }}>
        <img
          src={heroImg}
          alt="Hero"
          className="hari-img"
          style={{
            width: "100%",
            maxWidth: "500px",
            cursor: "url(https://i.ibb.co/JkrmzSR/download.png), auto",
            display: "block",
            margin: "0 auto",
            transform: "scale(0.95)",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
