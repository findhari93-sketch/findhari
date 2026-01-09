import { Box, Button, Typography, keyframes } from "@mui/material";
import FloatingCharacter from "../../../assets/images/floatmansplit/character.png";
import BubbleLayer2 from "../../../assets/images/floatmansplit/Layer2.png";
import BubbleLayer3 from "../../../assets/images/floatmansplit/Layer3.png";
import BubbleLayer4 from "../../../assets/images/floatmansplit/Layer4.png";
import BubbleLayer5 from "../../../assets/images/floatmansplit/Layer5.png";
import Ball1 from "../../../assets/images/floatmansplit/Ball1.png";
import Ball2 from "../../../assets/images/floatmansplit/Ball2.png";
import Ball3 from "../../../assets/images/floatmansplit/Ball3.png";
import { Instagram, YouTube } from "@mui/icons-material";
import {
  FancyIconButtonFloat1,
  FancyIconButtonFloat2,
} from "../../../components/Buttons/ShineButton";

// Main character floating animation
const floatCharacter = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

// Shadow animation - synced inversely with character
const shadowPulse = keyframes`
  0%, 100% {
    transform: translateX(-50%) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translateX(-50%) scale(0.75);
    opacity: 0.5;
  }
`;

// Bubble floating animations - each with unique movement pattern
const floatBubble1 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(8px, -10px) rotate(3deg); }
  66% { transform: translate(-5px, -6px) rotate(-2deg); }
`;

const floatBubble2 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-6px, -8px) rotate(-2deg); }
  75% { transform: translate(4px, -12px) rotate(2deg); }
`;

const floatBubble3 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  40% { transform: translate(10px, -7px) rotate(4deg); }
  70% { transform: translate(-3px, -10px) rotate(-1deg); }
`;

const floatBubble4 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  30% { transform: translate(-8px, -5px) rotate(-3deg); }
  60% { transform: translate(6px, -9px) rotate(2deg); }
`;

const floatBall1 = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(5px, -8px); }
`;

const floatBall2 = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-6px, -10px); }
`;

const floatBall3 = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(4px, -6px); }
`;

const NeramSection = () => {
  return (
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
          maxWidth: "1000px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 2, md: 4 },
          color: "white",
        }}
      >
        {/* Floating Scene Container */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            minHeight: { xs: "350px", md: "450px" },
            width: "100%",
            maxWidth: "450px",
          }}
        >
          {/* Bubble Layer 2 - Top Left */}
          <Box
            component="img"
            src={BubbleLayer2}
            alt=""
            sx={{
              position: "absolute",
              top: "5%",
              left: "12%",
              width: { xs: "65px", md: "85px" },
              height: "auto",
              animation: `${floatBubble1} 4s ease-in-out infinite`,
              animationDelay: "0.2s",
            }}
          />

          {/* Bubble Layer 3 - Top Center */}
          <Box
            component="img"
            src={BubbleLayer3}
            alt=""
            sx={{
              position: "absolute",
              top: "0%",
              left: "30%",
              width: { xs: "55px", md: "70px" },
              height: "auto",
              animation: `${floatBubble2} 3.5s ease-in-out infinite`,
              animationDelay: "0.5s",
            }}
          />

          {/* Bubble Layer 4 - Top Right */}
          <Box
            component="img"
            src={BubbleLayer4}
            alt=""
            sx={{
              position: "absolute",
              top: "2%",
              right: "28%",
              width: { xs: "60px", md: "80px" },
              height: "auto",
              animation: `${floatBubble3} 4.5s ease-in-out infinite`,
              animationDelay: "0.1s",
            }}
          />

          {/* Bubble Layer 5 - Upper Right */}
          <Box
            component="img"
            src={BubbleLayer5}
            alt=""
            sx={{
              position: "absolute",
              top: "18%",
              right: "8%",
              width: { xs: "55px", md: "70px" },
              height: "auto",
              animation: `${floatBubble4} 3.8s ease-in-out infinite`,
              animationDelay: "0.3s",
            }}
          />

          {/* Ball 1 Shadow - Bottom Left */}
          <Box
            sx={{
              position: "absolute",
              bottom: "9%",
              left: "16%",
              width: { xs: "18px", md: "22px" },
              height: { xs: "6px", md: "8px" },
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",
              filter: "blur(3px)",
              animation: `${floatBall1} 3s ease-in-out infinite`,
            }}
          />

          {/* Ball 1 - Bottom Left */}
          <Box
            component="img"
            src={Ball1}
            alt=""
            sx={{
              position: "absolute",
              bottom: "12%",
              left: "15%",
              width: { xs: "22px", md: "28px" },
              height: "auto",
              animation: `${floatBall1} 3s ease-in-out infinite`,
            }}
          />

          {/* Ball 2 - Top Left Area */}
          <Box
            component="img"
            src={Ball2}
            alt=""
            sx={{
              position: "absolute",
              top: "8%",
              left: "5%",
              width: { xs: "28px", md: "35px" },
              height: "auto",
              animation: `${floatBall2} 3.2s ease-in-out infinite`,
              animationDelay: "0.4s",
            }}
          />

          {/* Ball 3 Shadow - Bottom Right */}
          <Box
            sx={{
              position: "absolute",
              bottom: "15%",
              right: "13%",
              width: { xs: "14px", md: "18px" },
              height: { xs: "5px", md: "6px" },
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",
              filter: "blur(3px)",
              animation: `${floatBall3} 2.8s ease-in-out infinite`,
              animationDelay: "0.6s",
            }}
          />

          {/* Ball 3 - Bottom Right */}
          <Box
            component="img"
            src={Ball3}
            alt=""
            sx={{
              position: "absolute",
              bottom: "18%",
              right: "12%",
              width: { xs: "18px", md: "24px" },
              height: "auto",
              animation: `${floatBall3} 2.8s ease-in-out infinite`,
              animationDelay: "0.6s",
            }}
          />

          {/* Main Character Shadow */}
          <Box
            sx={{
              position: "absolute",
              bottom: "5%",
              left: "50%",
              width: { xs: "120px", md: "160px" },
              height: { xs: "25px", md: "35px" },
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)",
              filter: "blur(8px)",
              animation: `${shadowPulse} 3s ease-in-out infinite`,
            }}
          />

          {/* Main Character */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              animation: `${floatCharacter} 3s ease-in-out infinite`,
            }}
          >
            <img
              src={FloatingCharacter}
              alt="Neram Classes - EdTech Platform"
              style={{
                width: "100%",
                maxWidth: "320px",
                display: "block",
                margin: 0,
              }}
            />
          </Box>
        </Box>

        {/* Text Content */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            maxWidth: { md: "480px" },
          }}
        >
          {/* Header with Social Icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Kalam, cursive",
                  fontSize: "14px",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.8)",
                  mb: 0.5,
                }}
              >
                Founder of
              </Typography>
              <a
                href="https://neramclasses.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: { xs: "22px", md: "26px" },
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  <strong>neram</strong>Classes
                  <strong style={{ color: "#ea4c89" }}>.com</strong>
                </Typography>
              </a>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5 }}>
              <FancyIconButtonFloat1
                aria-label="youtube"
                sx={{ transform: "scale(0.85)" }}
              >
                <YouTube sx={{ fontSize: "20px" }} />
              </FancyIconButtonFloat1>
              <FancyIconButtonFloat2
                aria-label="instagram"
                sx={{ transform: "scale(0.85)" }}
              >
                <Instagram sx={{ fontSize: "20px" }} />
              </FancyIconButtonFloat2>
            </Box>
          </Box>

          <Box
            sx={{
              borderBottom: "1px solid rgba(255,255,255,0.3)",
              mb: 2,
              width: "100%",
            }}
          />

          {/* Description */}
          <Typography
            sx={{
              fontFamily: "Kalam, cursive",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.9)",
              mb: 2.5,
            }}
          >
            neramClasses.com is my idea. As a head of this startup I learned
            many skills apart from web design & development. neram is a self
            learning platform for design based competitive exams in India.
          </Typography>

          {/* CTA */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <a
              href="https://neramclasses.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  fontSize: "13px",
                  fontWeight: 500,
                  px: 3,
                  py: 0.875,
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Website
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NeramSection;
