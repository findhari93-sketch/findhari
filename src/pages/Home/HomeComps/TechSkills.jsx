import { Box, Typography, Divider, keyframes } from "@mui/material";
import LucaEyeAnimation from "./LucaAnimation/LucaAnimasion";

// Define keyframes for animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const TechSkills = () => {
  const gradientTextStyle = {
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "200%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `${gradientAnimation} 7s ease infinite`,
  };

  const categoryStyle = {
    fontFamily: "Roboto, sans-serif",
    fontSize: { xs: "11px", md: "12px" },
    color: "rgb(153, 153, 153)",
    textTransform: "uppercase",
    letterSpacing: "1px",
    mb: 0.5,
  };

  const skillStyle = {
    fontFamily: "Kalam, cursive",
    fontSize: { xs: "14px", md: "16px" },
    lineHeight: 1.7,
    color: "#333",
  };

  return (
    <section id="Skills">
      <Box sx={{ backgroundColor: "#fff" }}>
        {/* Centered Container */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1000px",
            mx: "auto",
            px: { xs: 2, md: 3 },
            py: { xs: 4, md: 5 },
          }}
        >
          {/* Title */}
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography
              sx={{
                fontFamily: "Roboto, sans-serif",
                textTransform: "uppercase",
                letterSpacing: { xs: "4px", md: "6px" },
                fontSize: { xs: "24px", md: "28px" },
                fontWeight: 500,
                ...gradientTextStyle,
              }}
            >
              Tech
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto, sans-serif",
                textTransform: "uppercase",
                letterSpacing: { xs: "4px", md: "6px" },
                fontSize: { xs: "24px", md: "28px" },
                fontWeight: 500,
                ...gradientTextStyle,
              }}
            >
              - Skills
            </Typography>
          </Box>

          <Divider sx={{ borderColor: "rgba(0,0,0,0.1)", mb: { xs: 3, md: 4 } }} />

          {/* Intro Description */}
          <Box sx={{ mb: { xs: 3, md: 4 } }}>
            <Typography
              sx={{
                fontFamily: "Kalam, cursive",
                fontSize: { xs: "16px", md: "18px" },
                lineHeight: 1.7,
                color: "#333",
                textAlign: "left",
              }}
            >
              I'm a building architect turned web developer. Architecture major
              from NIT Trichy. I combine design thinking with technical
              implementation.
            </Typography>
          </Box>

          {/* Skills Grid */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 4 },
              alignItems: "flex-start",
            }}
          >
            {/* Skills List */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, md: 2.5 },
                textAlign: { xs: "center", md: "right" },
              }}
            >
              <Box>
                <Typography sx={{ ...skillStyle, fontWeight: 600, mb: 1 }}>
                  Things{" "}
                  <Box component="span" sx={gradientTextStyle}>
                    I Learned
                  </Box>
                </Typography>
              </Box>

              <Box>
                <Typography sx={categoryStyle}>Development</Typography>
                <Typography sx={skillStyle}>
                  React, TypeScript, JavaScript/ES6, HTML, CSS/SASS
                </Typography>
              </Box>

              <Box>
                <Typography sx={categoryStyle}>Design Tools</Typography>
                <Typography sx={skillStyle}>
                  Figma, Adobe XD, Photoshop, Illustrator
                </Typography>
              </Box>

              <Box>
                <Typography sx={categoryStyle}>Backend & DB</Typography>
                <Typography sx={skillStyle}>
                  Firebase, Supabase, MongoDB, Node.js
                </Typography>
              </Box>

              <Box>
                <Typography sx={categoryStyle}>Architecture</Typography>
                <Typography sx={skillStyle}>
                  AutoCAD, Revit, SketchUp, Lumion, Blender
                </Typography>
              </Box>

              <Box>
                <Typography sx={categoryStyle}>Other</Typography>
                <Typography sx={skillStyle}>
                  Git, Storybook, CI/CD, SEO, Content Creation
                </Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <Typography sx={{ ...skillStyle, fontWeight: 600 }}>
                  Currently Learning{" "}
                  <Box component="span" sx={gradientTextStyle}>
                    Full Stack
                  </Box>
                </Typography>
              </Box>
            </Box>

            {/* Animation */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: { xs: "180px", md: "250px" },
                order: { xs: -1, md: 0 },
              }}
            >
              <LucaEyeAnimation />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Wave SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,32L80,58.7C160,85,320,139,480,170.7C640,203,800,213,960,202.7C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default TechSkills;
