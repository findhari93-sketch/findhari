import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import PetsIcon from "@mui/icons-material/Pets";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/hari-logo.svg";
import logoBack from "../../assets/images/logo/logo-back-2.svg"; // 👈 Your background logo

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

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
          top: "20px",
          zIndex: 10,
          bgcolor: "transparent",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, lg: 5 },
        }}
      >
        {/* Logo with Background */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Main Logo */}
          <Box
            component="img"
            src={logo}
            alt="Hari Logo"
            sx={{
              height: { xs: 52, md: 100 },
              position: "relative",
              zIndex: 1,
            }}
          />

          {/* Logo Text */}
          <Box
            sx={{
              ml: 2,
              my: "auto",
              fontFamily: "Roboto, sans-serif",
              color: "#000",
              fontSize: {
                xs: "14px",
                md: "18px",
              },
              zIndex: 1,
            }}
          >
            <Typography component="span" sx={{ fontSize: "unset" }}>
              <Box component="span" sx={{ fontWeight: 900 }}>
                haribabu
              </Box>
              Manoharan
            </Typography>
          </Box>
        </Box>

        {/* Desktop Navigation */}
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
                aria-label="pet"
                component={Link}
                to={path}
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                {label}
              </IconButton>
            )
          )}
        </Box>

        {/* Mobile Hamburger Icon */}
        <IconButton
          onClick={handleToggleDrawer}
          sx={{ display: { lg: "none" }, color: "white" }}
        >
          <LunchDiningIcon />
        </IconButton>
      </Box>

      {/* Mobile Drawer Menu */}
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
                    aria-label="pet"
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
