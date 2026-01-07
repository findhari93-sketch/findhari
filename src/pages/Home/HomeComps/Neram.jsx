import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import SectionTextContent from "../../../components/SectionTextContent/SectionTextContent";
import FloatingMan from "../../../assets/images/float-man.webp";
import { Link } from "react-router-dom";
import { Instagram, YouTube } from "@mui/icons-material";
import {
  FancyIconButtonFloat1,
  FancyIconButtonFloat2,
} from "../../../components/Buttons/ShineButton";

const NeramSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        paddingRight: { xs: "0", md: "3rem" },
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* Hero Image */}
      <Box
        sx={{
          flex: 1,
          justifyContent: "flex-end",
          display: "flex", // Added to align content correctly
          alignItems: "center",
          mb: { xs: 4, md: 0 },
        }}
      >
        <img
          src={FloatingMan}
          alt="neram"
          style={{
            width: "100%",
            maxWidth: "500px",
            cursor: "url(https://i.ibb.co/JkrmzSR/download.png), auto",
            display: "block",
            margin: 0,
            transform: "scale(0.55)",
          }}
        />
      </Box>

      {/* Text Content */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box>
          <Box
            className="sectionTitle"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            gutterBottom
          >
            <Box className="">
              <em style={{ fontSize: "1rem" }}>Founder of</em>
              <br />
              <a
                href="https://neramclasses.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit", // removes default blue
                  fontFamily: "Roboto, sans-serif",
                  textTransform: "none",
                  fontSize: "30px",
                }}
              >
                <b>neram</b>Classes
                <b style={{ color: "rgba(234, 76, 137, 1)" }}>.com</b>
              </a>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <FancyIconButtonFloat1 aria-label="youtube">
                <YouTube />
              </FancyIconButtonFloat1>

              <FancyIconButtonFloat2 aria-label="instagram">
                <Instagram />
              </FancyIconButtonFloat2>
            </Box>
          </Box>

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
              neramClasses.com is my idea. As a head of this startup I<br />
              learned many skills apart from web design & development.
              <br /> neram is a self learning platform for design based
              competitive
              <br />
              exams in india.
            </>
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            gap: 2,
          }}
        >
          <a href="https://neramclasses.com">
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
              Website
            </Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default NeramSection;
