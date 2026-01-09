import { useState, useEffect, useRef, useCallback } from "react";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarLogo from "./NavbarLogo";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { tokens } from "../../styles/Theme/Theme";

// Helper function to determine if a color is light or dark
const isColorLight = (r, g, b) => {
  // Using relative luminance formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
};

// Sample background color from multiple points for better accuracy
const sampleBackgroundColors = (navbarRect) => {
  const sampleY = navbarRect.bottom + 20;
  const samplePoints = [
    window.innerWidth * 0.2,  // Left side
    window.innerWidth * 0.5,  // Center
    window.innerWidth * 0.8,  // Right side
  ];

  const colors = [];

  for (const sampleX of samplePoints) {
    const element = document.elementFromPoint(sampleX, sampleY);
    if (!element) continue;

    // Check element and its parents for background
    let el = element;
    while (el && el !== document.body) {
      const style = window.getComputedStyle(el);
      const bg = style.backgroundColor;

      if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          colors.push({
            r: parseInt(match[1]),
            g: parseInt(match[2]),
            b: parseInt(match[3]),
          });
          break;
        }
      }
      el = el.parentElement;
    }
  }

  return colors;
};

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [scrolled, setScrolled] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(true); // Default to light
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storytellerExpanded, setStorytellerExpanded] = useState(false);
  const hamburgerRef = useRef(null);
  const navbarRef = useRef(null);

  // Detect background color beneath navbar
  const detectBackgroundBrightness = useCallback(() => {
    if (!navbarRef.current) return;

    const navbarRect = navbarRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;

    // The top portion of the page (hero + timeline) has light backgrounds
    // Use a generous threshold - approximately 3.5 viewports to cover timeline
    const lightSectionHeight = window.innerHeight * 3.5;

    if (scrollY < lightSectionHeight) {
      // Hero and timeline sections have light/white backgrounds
      setIsLightBackground(true);
      return;
    }

    // Below the light sections, sample colors for detection
    const colors = sampleBackgroundColors(navbarRect);

    if (colors.length > 0) {
      // Check if majority of sampled colors are light
      const lightCount = colors.filter(c => isColorLight(c.r, c.g, c.b)).length;
      const isLight = lightCount > colors.length / 2;
      setIsLightBackground(isLight);
      return;
    }

    // Fallback: assume dark background after the light sections
    setIsLightBackground(false);
  }, []);

  // Scroll detection with background check
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      detectBackgroundBrightness();
    };

    // Initial check with small delay to ensure DOM is ready
    const initialCheck = () => {
      requestAnimationFrame(() => {
        handleScroll();
      });
    };

    initialCheck();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", detectBackgroundBrightness, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", detectBackgroundBrightness);
    };
  }, [detectBackgroundBrightness]);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle mobile menu close
  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
    setStorytellerExpanded(false);
    setTimeout(() => {
      hamburgerRef.current?.focus();
    }, 300);
  };

  // Determine colors based on background
  // isLightBackground = true means we're over a LIGHT section, need DARK text
  // isLightBackground = false means we're over a DARK section, need LIGHT text
  const useDarkText = isLightBackground;
  const textColor = useDarkText
    ? tokens.colors.background.dark
    : tokens.colors.text.primary;

  const glassBackground = useDarkText
    ? "rgba(255, 255, 255, 0.85)"
    : tokens.colors.background.glass;

  const glassBorder = useDarkText
    ? "rgba(0, 0, 0, 0.1)"
    : tokens.colors.background.glassBorder;

  // Navbar container styles
  const navbarStyles = {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: { xs: 2, md: 4, lg: 8 },
    py: scrolled ? 1.5 : 2.5,
    transition: `
      background-color ${tokens.transitions.normal},
      backdrop-filter ${tokens.transitions.normal},
      padding ${tokens.transitions.normal},
      box-shadow ${tokens.transitions.normal},
      border-color ${tokens.transitions.normal}
    `,
    // Glassmorphism when scrolled - adapts to background
    ...(scrolled
      ? {
          background: glassBackground,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: `1px solid ${glassBorder}`,
          boxShadow: useDarkText
            ? "0 4px 30px rgba(0, 0, 0, 0.08)"
            : "0 4px 30px rgba(0, 0, 0, 0.15)",
        }
      : {
          background: "transparent",
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)",
          borderBottom: "1px solid transparent",
          boxShadow: "none",
        }),
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  };

  // Hamburger button styles
  const hamburgerStyles = {
    display: { lg: "none" },
    color: textColor,
    padding: "10px",
    border: `1px solid ${useDarkText ? "rgba(0, 0, 0, 0.15)" : tokens.colors.background.glassBorder}`,
    borderRadius: tokens.borderRadius.md,
    transition: `all ${tokens.transitions.fast}`,
    "&:hover": {
      background: useDarkText ? "rgba(0, 0, 0, 0.05)" : tokens.colors.background.glass,
    },
    "&:focus-visible": {
      outline: `2px solid ${tokens.colors.brand.blue}`,
      outlineOffset: "2px",
    },
  };

  // Pass isDarkMode for child components (inverse of useDarkText)
  const isDarkMode = !useDarkText;

  return (
    <>
      <Box
        ref={navbarRef}
        component="nav"
        sx={navbarStyles}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo - clicks to home */}
        <NavbarLogo scrolled={scrolled} isDarkMode={isDarkMode} />

        {/* Desktop Navigation */}
        {!isMobile && <NavbarDesktop isDarkMode={isDarkMode} />}

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <IconButton
            ref={hamburgerRef}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            sx={hamburgerStyles}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Box>

      {/* Mobile Full-Screen Overlay */}
      {isMobile && (
        <NavbarMobile
          open={mobileMenuOpen}
          onClose={handleCloseMobileMenu}
          storytellerExpanded={storytellerExpanded}
          onToggleStoryteller={() => setStorytellerExpanded(!storytellerExpanded)}
        />
      )}
    </>
  );
};

export default Navbar;
