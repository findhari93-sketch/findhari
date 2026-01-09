// src/components/Hero/Hero.jsx
import { Box, Typography, Button, Chip, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import heroImg from "../../../assets/images/hero-image.png";

// White blob component for bottom decoration
const WhiteBlobBottom = () => (
  <Box
    component="svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    sx={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: { xs: "120px", sm: "160px", md: "220px", lg: "280px" },
      zIndex: 1,
      pointerEvents: "none",
    }}
  >
    <path
      fill="#ffffff"
      d="M0,192 C180,280 360,120 540,180 C720,240 900,140 1080,180 C1200,210 1320,260 1440,220 L1440,320 L0,320 Z"
    />
  </Box>
);

// Dotted circle component for decoration
const DottedCircle = ({ size, strokeWidth = 2, dashLength = 4, gapLength = 8, top, right, opacity = 0.3 }) => (
  <Box
    component="svg"
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    sx={{
      position: "absolute",
      top,
      right,
      opacity,
      pointerEvents: "none",
      zIndex: 0,
      display: { xs: "none", sm: "block" },
    }}
  >
    <circle
      cx={size / 2}
      cy={size / 2}
      r={(size / 2) - (strokeWidth / 2)}
      fill="none"
      stroke="rgba(255, 255, 255, 0.5)"
      strokeWidth={strokeWidth}
      strokeDasharray={`${dashLength} ${gapLength}`}
    />
  </Box>
);

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "auto", md: "calc(100vh - 80px)" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingY: { xs: "2rem", md: "3rem" },
        paddingX: { xs: "1.5rem", md: "2rem" },
        paddingBottom: { xs: "140px", sm: "180px", md: "240px", lg: "300px" },
      }}
    >
      {/* Decorative Dotted Circles */}
      <DottedCircle
        size={280}
        strokeWidth={2}
        dashLength={4}
        gapLength={10}
        top={{ xs: "10%", md: "8%" }}
        right={{ xs: "-100px", md: "-40px", lg: "5%" }}
        opacity={0.25}
      />
      <DottedCircle
        size={140}
        strokeWidth={1.5}
        dashLength={3}
        gapLength={6}
        top={{ xs: "50%", md: "45%" }}
        right={{ xs: "5%", md: "8%", lg: "12%" }}
        opacity={0.35}
      />
      {/* Centered Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 3, md: 4 },
          color: "white",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "right" },
            maxWidth: { md: "500px" },
          }}
        >
          {/* Role Badge */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: { xs: "center", md: "flex-end" },
              mb: 1.5,
            }}
          >
            <Chip
              label="UX Engineer"
              size="small"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                color: "#fff",
                fontFamily: "Roboto, sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                height: "24px",
                backdropFilter: "blur(4px)",
              }}
            />
            <Chip
              label="Design Systems"
              size="small"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                color: "#fff",
                fontFamily: "Roboto, sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                height: "24px",
                backdropFilter: "blur(4px)",
              }}
            />
          </Stack>

          {/* Main Title */}
          <Typography
            variant="heroTitle"
            component="h1"
            sx={{
              mb: 1.5,
              background:
                "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.8) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Haribabu Manoharan
          </Typography>

          <Box
            sx={{
              borderBottom: "1px solid #ffffff7a",
              mb: 2,
              width: "100%",
            }}
          />

          {/* Subtitle */}
          <Typography
            variant="heroSubtitle"
            sx={{
              mb: 2,
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            UX Engineer bridging design and code to build products users love.
            8+ years crafting design systems, leading frontend teams, and
            shipping at scale.
          </Typography>

          {/* Stats */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              justifyContent: { xs: "center", md: "flex-end" },
              mb: 2.5,
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                8+
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.7)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Years
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                50+
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.7)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Components
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                15+
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.7)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Mentored
              </Typography>
            </Box>
          </Stack>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Link to="/work" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  fontSize: "14px",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                View Work
              </Button>
            </Link>
            <Link to="/resume" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  fontSize: "14px",
                  "&:hover": {
                    borderColor: "#fff",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Download CV
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Hero Image */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            zIndex: 3,
          }}
        >
          <img
            src={heroImg}
            alt="Haribabu Manoharan - UX Engineer"
            style={{
              width: "100%",
              maxWidth: "380px",
              display: "block",
              margin: "0",
            }}
          />
        </Box>
      </Box>

      {/* White Blob at Bottom */}
      <WhiteBlobBottom />
    </Box>
  );
};

export default Hero;
