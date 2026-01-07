import { Container, Grid, Typography, Divider, Box } from "@mui/material";
import WaveSVG from "../HomeComps/WavesSvg/Wavesvg";

const AboutMe = () => {
  return (
    <section id="about-me">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // adjust as needed
          color: "#fff",
          padding: "0 5rem",
        }}
      >
        <Typography variant="sectionTitle">ABOUT</Typography>
        <Typography variant="sectionTitle" sx={{ paddingLeft: "6rem" }}>
          - ME
        </Typography>
        <Divider
          sx={{
            width: "100%",
            borderColor: "white", // or your theme color
            mt: 1,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            width: "100%",
            marginTop: "3rem",
          }}
        >
          <Typography variant="sectionContent" sx={{ width: "15rem" }}>
            <>
              I love to combine the modern technologies with Visual Aesthetics.
            </>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Typography
            variant="sectionContent"
            sx={{ width: "15rem", textAlign: "center" }}
          >
            <>I belive that every project that i do should have an overvalue.</>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
          <Typography
            variant="sectionContent"
            sx={{ width: "15rem", textAlign: "end" }}
          >
            <>
              I love to combine the modern technologies with Visual Aesthetics.
            </>
          </Typography>
        </Box>
      </Box>
      <WaveSVG />
    </section>
  );
};

export default AboutMe;
