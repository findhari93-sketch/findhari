import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/hari-logo.svg";
import { tokens } from "../../styles/Theme/Theme";

const NavbarLogo = ({ scrolled, isDarkMode }) => {
  // Dynamic text color based on background
  const textColor = isDarkMode
    ? tokens.colors.text.primary
    : tokens.colors.background.dark;

  return (
    <Box
      component={Link}
      to="/"
      sx={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {/* Logo Image */}
      <Box
        component="img"
        src={logo}
        alt="Hari Logo"
        sx={{
          height: scrolled ? { xs: 36, md: 40 } : { xs: 44, md: 56 },
          transition: `height ${tokens.transitions.normal}`,
          // Invert logo color if on light background (optional)
          filter: isDarkMode ? "none" : "none",
        }}
      />

      {/* Name Text */}
      <Box
        sx={{
          ml: 1.5,
          fontFamily: tokens.typography.fontFamily.heading,
          color: textColor,
          fontSize: scrolled
            ? { xs: "14px", md: "16px" }
            : { xs: "16px", md: "20px" },
          transition: `
            font-size ${tokens.transitions.normal},
            color ${tokens.transitions.normal}
          `,
        }}
      >
        <Typography
          component="span"
          sx={{
            fontSize: "inherit",
            fontFamily: "inherit",
            color: "inherit",
          }}
        >
          <Box component="span" sx={{ fontWeight: 700 }}>
            haribabu
          </Box>{" "}
          <Box
            component="span"
            sx={{
              fontWeight: 400,
              opacity: 0.85,
            }}
          >
            Manoharan
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default NavbarLogo;
