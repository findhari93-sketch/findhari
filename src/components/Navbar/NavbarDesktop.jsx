import { Box, IconButton } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";
import { tokens } from "../../styles/Theme/Theme";

// Navigation configuration
const storytellerItems = [
  { label: "Work", to: "/work" },
  { label: "Component Design", to: "/compdesign" },
];

const navLinks = [
  { type: "link", label: "About", to: "/about" },
  { type: "link", label: "Resume", to: "/resume" },
  { type: "link", label: "Contact", to: "/contact" },
];

const NavbarDesktop = ({ isDarkMode }) => {
  // Dynamic colors based on background
  const textColor = isDarkMode
    ? tokens.colors.text.primary
    : tokens.colors.background.dark;

  const hoverBg = isDarkMode
    ? tokens.colors.background.glass
    : "rgba(0, 0, 0, 0.05)";

  // Shared link styles
  const linkStyles = {
    fontFamily: tokens.typography.fontFamily.heading,
    fontSize: tokens.typography.fontSize.sm,
    fontWeight: tokens.typography.fontWeight.medium,
    letterSpacing: "0.5px",
    color: textColor,
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: tokens.borderRadius.md,
    transition: `all ${tokens.transitions.fast}`,
    position: "relative",
    "&:hover": {
      color: tokens.colors.brand.blue,
    },
    "&:focus-visible": {
      outline: `2px solid ${tokens.colors.brand.blue}`,
      outlineOffset: "2px",
    },
    // Gradient underline on hover
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "4px",
      left: "50%",
      width: 0,
      height: "2px",
      background: `linear-gradient(90deg, ${tokens.colors.brand.coral}, ${tokens.colors.brand.pink}, ${tokens.colors.brand.blue})`,
      transition: `width ${tokens.transitions.normal}`,
      transform: "translateX(-50%)",
    },
    "&:hover::after": {
      width: "80%",
    },
  };

  return (
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        alignItems: "center",
        gap: 1,
      }}
    >
      {/* Home Icon */}
      <IconButton
        component={Link}
        to="/"
        aria-label="Go to home page"
        sx={{
          color: textColor,
          padding: "8px",
          transition: `all ${tokens.transitions.fast}`,
          "&:hover": {
            backgroundColor: hoverBg,
            color: tokens.colors.brand.mint,
          },
          "&:focus-visible": {
            outline: `2px solid ${tokens.colors.brand.blue}`,
            outlineOffset: "2px",
          },
        }}
      >
        <PetsIcon sx={{ fontSize: 20 }} />
      </IconButton>

      {/* Storyteller Dropdown */}
      <NavbarDropdown
        label="Storyteller"
        items={storytellerItems}
        isDarkMode={isDarkMode}
      />

      {/* Standard Nav Links */}
      {navLinks.map((link) => (
        <Box key={link.to} component={Link} to={link.to} sx={linkStyles}>
          {link.label}
        </Box>
      ))}
    </Box>
  );
};

export default NavbarDesktop;
