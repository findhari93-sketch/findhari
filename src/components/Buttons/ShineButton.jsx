import { styled, keyframes } from "@mui/system";
import { IconButton } from "@mui/material";

// Edge glow animation
const edgePulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0px rgba(255, 255, 255, 0.1), 0 0 8px rgba(255, 255, 255, 0.25);
  }
  50% {
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.4), 0 0 25px rgba(255, 255, 255, 0.2);
  }
`;

// Sparkle star animation
const sparkleFlash = keyframes`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0; transform: scale(0.5); }
`;

// Bubble float animations
const bubbleFloat1 = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const bubbleFloat2 = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

// YouTube Floating Icon Button
export const FancyIconButtonFloat1 = styled(IconButton)(({ theme }) => ({
  position: "relative",
  overflow: "visible",
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(6px)",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff",
  transition: "all 0.3s ease-in-out",
  animation: `${edgePulse} 5s ease-in-out infinite, ${bubbleFloat1} 4s ease-in-out infinite`,

  "&:hover": {
    background: "#FF0000", // YouTube Red
    boxShadow: "0 0 25px rgba(255, 0, 0, 0.5)",
  },

  "&::before": {
    content: '"✦"',
    position: "absolute",
    top: "-5px",
    left: "-5px",
    fontSize: "0.7rem",
    color: "#ffffff",
    opacity: 0,
    animation: `${sparkleFlash} 4s infinite`,
    animationDelay: "0s",
  },

  "&::after": {
    content: '"✦"',
    position: "absolute",
    bottom: "-5px",
    right: "-5px",
    fontSize: "0.6rem",
    color: "#ffffff",
    opacity: 0,
    animation: `${sparkleFlash} 4s infinite`,
    animationDelay: "2s",
  },
}));

// Instagram Floating Icon Button
export const FancyIconButtonFloat2 = styled(IconButton)(({ theme }) => ({
  position: "relative",
  overflow: "visible",
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(6px)",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff",
  transition: "all 0.3s ease-in-out",
  animation: `${edgePulse} 5s ease-in-out infinite, ${bubbleFloat2} 5s ease-in-out infinite`,

  "&:hover": {
    background:
      "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
    boxShadow: "0 0 25px rgba(250, 118, 30, 0.4)",
  },

  "&::before": {
    content: '"✦"',
    position: "absolute",
    top: "-5px",
    left: "-5px",
    fontSize: "0.7rem",
    color: "#ffffff",
    opacity: 0,
    animation: `${sparkleFlash} 4s infinite`,
    animationDelay: "0s",
  },

  "&::after": {
    content: '"✦"',
    position: "absolute",
    bottom: "-5px",
    right: "-5px",
    fontSize: "0.6rem",
    color: "#ffffff",
    opacity: 0,
    animation: `${sparkleFlash} 4s infinite`,
    animationDelay: "2s",
  },
}));
