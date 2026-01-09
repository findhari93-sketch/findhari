import { useState, useRef } from "react";
import { Box, Grow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { tokens } from "../../styles/Theme/Theme";

const NavbarDropdown = ({ label, items, isDarkMode }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  // Dynamic colors based on background
  const textColor = isDarkMode
    ? tokens.colors.text.primary
    : tokens.colors.background.dark;

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        setOpen(!open);
        break;
      case "Escape":
        setOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ position: "relative", display: "inline-block" }}
    >
      {/* Dropdown Trigger */}
      <Box
        component="button"
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        aria-expanded={open}
        aria-haspopup="menu"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: tokens.typography.fontFamily.heading,
          fontSize: tokens.typography.fontSize.sm,
          fontWeight: tokens.typography.fontWeight.medium,
          letterSpacing: "0.5px",
          color: textColor,
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
            width: open ? "80%" : 0,
            height: "2px",
            background: `linear-gradient(90deg, ${tokens.colors.brand.coral}, ${tokens.colors.brand.pink}, ${tokens.colors.brand.blue})`,
            transition: `width ${tokens.transitions.normal}`,
            transform: "translateX(-50%)",
          },
          "&:hover::after": {
            width: "80%",
          },
        }}
      >
        {label}
        <KeyboardArrowDownIcon
          sx={{
            fontSize: 18,
            transition: `transform ${tokens.transitions.fast}`,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </Box>

      {/* Dropdown Menu - Always dark for consistency */}
      <Grow in={open} timeout={200}>
        <Box
          role="menu"
          aria-label={`${label} submenu`}
          sx={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            mt: 1,
            minWidth: 180,
            py: 1,
            zIndex: 100,
            // Glassmorphism - dark dropdown for consistency
            background: "rgba(18, 18, 18, 0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: `1px solid ${tokens.colors.background.glassBorder}`,
            borderRadius: tokens.borderRadius.lg,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            // Hide when closed
            visibility: open ? "visible" : "hidden",
            pointerEvents: open ? "auto" : "none",
          }}
        >
          {items.map((item) => (
            <Box
              key={item.to}
              component={Link}
              to={item.to}
              role="menuitem"
              onClick={() => setOpen(false)}
              sx={{
                display: "block",
                px: 2.5,
                py: 1.25,
                fontFamily: tokens.typography.fontFamily.heading,
                fontSize: "13px",
                fontWeight: tokens.typography.fontWeight.regular,
                color: tokens.colors.text.primary, // Always white in dropdown
                textDecoration: "none",
                transition: `all ${tokens.transitions.fast}`,
                "&:hover": {
                  background: tokens.colors.background.glassHover,
                  color: tokens.colors.brand.blue,
                  paddingLeft: "24px",
                },
                "&:focus-visible": {
                  outline: `2px solid ${tokens.colors.brand.blue}`,
                  outlineOffset: "-2px",
                },
              }}
            >
              {item.label}
            </Box>
          ))}
        </Box>
      </Grow>
    </Box>
  );
};

export default NavbarDropdown;
