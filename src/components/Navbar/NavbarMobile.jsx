import { Box, IconButton, Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PetsIcon from "@mui/icons-material/Pets";
import { Link } from "react-router-dom";
import { tokens } from "../../styles/Theme/Theme";

// Navigation configuration
const navigationItems = [
  {
    type: "icon-link",
    icon: <PetsIcon sx={{ fontSize: 28 }} />,
    label: "Home",
    to: "/",
  },
  {
    type: "dropdown",
    label: "Storyteller",
    children: [
      { label: "Work", to: "/work" },
      { label: "Component Design", to: "/compdesign" },
    ],
  },
  { type: "link", label: "About", to: "/about" },
  { type: "link", label: "Resume", to: "/resume" },
  { type: "link", label: "Contact", to: "/contact" },
];

// Mobile nav link styles
const mobileNavLinkStyles = {
  fontFamily: tokens.typography.fontFamily.heading,
  fontSize: "28px",
  fontWeight: tokens.typography.fontWeight.medium,
  color: tokens.colors.text.primary,
  textDecoration: "none",
  padding: "16px 24px",
  minHeight: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  transition: `all ${tokens.transitions.fast}`,
  "&:hover, &:focus": {
    color: tokens.colors.brand.mint,
  },
  "&:active": {
    transform: "scale(0.98)",
  },
  "&:focus-visible": {
    outline: `2px solid ${tokens.colors.brand.blue}`,
    outlineOffset: "4px",
  },
};

// Mobile dropdown trigger styles
const mobileDropdownTriggerStyles = {
  ...mobileNavLinkStyles,
  background: "none",
  border: "none",
  width: "100%",
  cursor: "pointer",
};

// Sub-menu item styles
const subMenuItemStyles = {
  display: "block",
  fontFamily: tokens.typography.fontFamily.heading,
  fontSize: "20px",
  fontWeight: tokens.typography.fontWeight.regular,
  color: tokens.colors.text.muted,
  textDecoration: "none",
  padding: "12px 24px",
  textAlign: "center",
  transition: `all ${tokens.transitions.fast}`,
  "&:hover, &:focus": {
    color: tokens.colors.brand.blue,
  },
  "&:focus-visible": {
    outline: `2px solid ${tokens.colors.brand.blue}`,
    outlineOffset: "2px",
  },
};

const NavbarMobile = ({
  open,
  onClose,
  storytellerExpanded,
  onToggleStoryteller,
}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        visibility: open ? "visible" : "hidden",
        pointerEvents: open ? "auto" : "none",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Backdrop */}
      <Box
        onClick={onClose}
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: open ? 1 : 0,
          transition: `opacity ${tokens.transitions.normal}`,
        }}
      />

      {/* Menu Panel */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(18, 18, 18, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          transform: open ? "translateY(0)" : "translateY(-20px)",
          opacity: open ? 1 : 0,
          transition: `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity ${tokens.transitions.normal}`,
        }}
      >
        {/* Close Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <IconButton
            onClick={onClose}
            aria-label="Close menu"
            sx={{
              color: tokens.colors.text.primary,
              border: `1px solid ${tokens.colors.background.glassBorder}`,
              borderRadius: tokens.borderRadius.md,
              padding: "12px",
              transition: `all ${tokens.transitions.fast}`,
              "&:hover": {
                background: tokens.colors.background.glass,
                transform: "rotate(90deg)",
              },
              "&:focus-visible": {
                outline: `2px solid ${tokens.colors.brand.blue}`,
                outlineOffset: "2px",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Navigation Items */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
            px: 4,
            pb: 10,
          }}
        >
          {navigationItems.map((item, index) => {
            // Staggered animation delay
            const animationDelay = `${index * 0.05}s`;
            const itemAnimationStyles = {
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transition: `opacity ${tokens.transitions.normal} ${animationDelay}, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${animationDelay}`,
            };

            if (item.type === "icon-link") {
              return (
                <Box
                  key={item.to}
                  component={Link}
                  to={item.to}
                  onClick={onClose}
                  sx={{
                    ...mobileNavLinkStyles,
                    ...itemAnimationStyles,
                  }}
                >
                  {item.icon}
                </Box>
              );
            }

            if (item.type === "dropdown") {
              return (
                <Box
                  key={item.label}
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    textAlign: "center",
                    ...itemAnimationStyles,
                  }}
                >
                  {/* Dropdown trigger */}
                  <Box
                    component="button"
                    onClick={onToggleStoryteller}
                    aria-expanded={storytellerExpanded}
                    sx={mobileDropdownTriggerStyles}
                  >
                    {item.label}
                    <ExpandMoreIcon
                      sx={{
                        fontSize: 28,
                        transition: `transform ${tokens.transitions.normal}`,
                        transform: storytellerExpanded
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  </Box>

                  {/* Sub-menu */}
                  <Collapse in={storytellerExpanded} timeout={300}>
                    <Box sx={{ py: 1 }}>
                      {item.children.map((child) => (
                        <Box
                          key={child.to}
                          component={Link}
                          to={child.to}
                          onClick={onClose}
                          sx={subMenuItemStyles}
                        >
                          {child.label}
                        </Box>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              );
            }

            // Standard link
            return (
              <Box
                key={item.to}
                component={Link}
                to={item.to}
                onClick={onClose}
                sx={{
                  ...mobileNavLinkStyles,
                  ...itemAnimationStyles,
                }}
              >
                {item.label}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarMobile;
