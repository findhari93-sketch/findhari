import { Typography, Divider, Box } from "@mui/material";
import WaveSVG from "../HomeComps/WavesSvg/Wavesvg";

const AboutMe = () => {
  return (
    <section id="about-me">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          py: { xs: 4, md: 5 },
          px: { xs: 2, md: 3 },
        }}
      >
        {/* Centered Container */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            color: "#fff",
          }}
        >
          {/* Title */}
          <Box sx={{ mb: 1.5 }}>
            <Typography
              sx={{
                fontFamily: "Roboto, sans-serif",
                textTransform: "uppercase",
                letterSpacing: { xs: "4px", md: "6px" },
                fontSize: { xs: "24px", md: "28px" },
                fontWeight: 500,
              }}
            >
              ABOUT
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto, sans-serif",
                textTransform: "uppercase",
                letterSpacing: { xs: "4px", md: "6px" },
                fontSize: { xs: "24px", md: "28px" },
                fontWeight: 500,
                pl: { xs: 4, md: 6 },
              }}
            >
              - ME
            </Typography>
          </Box>

          <Divider
            sx={{
              borderColor: "rgba(255,255,255,0.3)",
              mb: { xs: 2.5, md: 3 },
            }}
          />

          {/* Content - Diagonal Layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {/* Left aligned */}
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Typography
                sx={{
                  fontFamily: "Kalam, cursive",
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.9)",
                  maxWidth: { xs: "200px", md: "220px" },
                  textAlign: "left",
                }}
              >
                I love to combine modern technologies with Visual Aesthetics.
              </Typography>
            </Box>

            {/* Center aligned */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                sx={{
                  fontFamily: "Kalam, cursive",
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.9)",
                  maxWidth: { xs: "200px", md: "220px" },
                  textAlign: "center",
                }}
              >
                I believe that every project I do should have an overvalue.
              </Typography>
            </Box>

            {/* Right aligned */}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Typography
                sx={{
                  fontFamily: "Kalam, cursive",
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.9)",
                  maxWidth: { xs: "200px", md: "220px" },
                  textAlign: "right",
                }}
              >
                I love to combine modern technologies with Visual Aesthetics.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <WaveSVG />
    </section>
  );
};

export default AboutMe;
