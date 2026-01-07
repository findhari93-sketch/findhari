import { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import PetsIcon from "@mui/icons-material/Pets";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/hari-logo.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    [<PetsIcon />, "/"],
    ["startUp", "/startup"],
    ["aboutMe", "/about-me"],
    ["skills", "/skills"],
    ["in", "/in"],
    ["work", "/experience"],
    ["contact", "/contact"],
  ];

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          bgcolor: scrolled ? "#121212" : "transparent",
          boxShadow: scrolled ? "0 4px 10px rgba(0,0,0,0.3)" : "none",
          transition: "all 0.3s ease-in-out",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, lg: 10 },
          py: scrolled ? 1 : 2,
        }}
      >
        {/* Logo with Text */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={logo}
            alt="Hari Logo"
            sx={{
              height: scrolled ? 40 : { xs: 52, md: 100 },
              transition: "height 0.3s ease-in-out",
            }}
          />
          <Box
            sx={{
              ml: 2,
              fontFamily: "Roboto, sans-serif",
              color: scrolled ? "#fff" : "#000",
              fontSize: scrolled ? "12px" : { xs: "14px", md: "18px" },
              transition: "font-size 0.3s ease-in-out",
            }}
          >
            <Typography component="span" sx={{ fontSize: "unset" }}>
              <Box component="span" sx={{ fontWeight: 900 }}>
                haribabu
              </Box>{" "}
              Manoharan
            </Typography>
          </Box>
        </Box>

        {/* Desktop Nav */}
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            gap: 3,
          }}
        >
          {navLinks.map(([label, path]) =>
            typeof label === "string" ? (
              <Link
                key={path}
                to={path}
                className="nav-link"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontFamily: "Roboto",
                }}
              >
                {label}
              </Link>
            ) : (
              <IconButton
                key={path}
                component={Link}
                to={path}
                sx={{
                  color: "#fff",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                {label}
              </IconButton>
            )
          )}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          onClick={handleToggleDrawer}
          sx={{ display: { lg: "none" }, color: "white" }}
        >
          <LunchDiningIcon />
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleToggleDrawer}>
        <Box sx={{ width: 250, bgcolor: "#121212", height: "100%" }}>
          <List>
            {navLinks.map(([label, path]) => (
              <ListItem
                button
                key={path}
                component={Link}
                to={path}
                onClick={handleToggleDrawer}
              >
                {typeof label === "string" ? (
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      sx: { color: "#fff", fontFamily: "Roboto" },
                    }}
                  />
                ) : (
                  <IconButton
                    aria-label="icon"
                    sx={{ color: "white" }}
                    onClick={handleToggleDrawer}
                  >
                    {label}
                  </IconButton>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
