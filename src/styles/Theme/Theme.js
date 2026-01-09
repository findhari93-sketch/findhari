import { createTheme } from "@mui/material/styles";

// =============================================================================
// DESIGN TOKENS - Portfolio Theme for Haribabu Manoharan
// =============================================================================

// Color Palette
const colors = {
  // Primary Gradient Colors
  gradient: {
    primary: ["#ee7752", "#e73c7e", "#23a6d5", "#23d5ab"],
    light: ["#fff3ef", "#ffecf3", "#effbff", "#f0fffb"],
  },
  // Brand Colors
  brand: {
    coral: "#ee7752",
    pink: "#e73c7e",
    blue: "#23a6d5",
    mint: "#23d5ab",
  },
  // Social Media Colors
  social: {
    facebook: "#1877F2",
    linkedin: "#0A66C2",
    instagram: "#E1306C",
    youtube: "#FF0000",
    whatsapp: "#25D366",
    github: "#333333",
  },
  // Text Colors
  text: {
    primary: "#ffffff",
    secondary: "rgba(153, 153, 153, 1)",
    muted: "rgba(255, 255, 255, 0.7)",
  },
  // Background Colors
  background: {
    dark: "#121212",
    black: "#000000",
    white: "#ffffff",
    light: "#f0f0f0",
    // Glassmorphism
    glass: "rgba(255, 255, 255, 0.1)",
    glassHover: "rgba(255, 255, 255, 0.15)",
    glassBorder: "rgba(255, 255, 255, 0.15)",
  },
};

// Typography
const typography = {
  fontFamily: {
    heading: "Roboto, sans-serif",
    body: "Kalam, cursive",
    system:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    md: "18px",
    lg: "20px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "40px",
    "4xl": "48px",
    "5xl": "64px",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
  letterSpacing: {
    tight: "-0.02em",
    normal: "0",
    wide: "0.05em",
    wider: "0.1em",
    widest: "0.2em",
  },
};

// Spacing (based on 8px grid)
const spacing = {
  0: "0",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
};

// Border Radius
const borderRadius = {
  none: "0",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "24px",
  full: "9999px",
};

// Shadows
const shadows = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
  glow: {
    coral: "0 0 20px rgba(238, 119, 82, 0.5)",
    pink: "0 0 20px rgba(231, 60, 126, 0.5)",
    blue: "0 0 20px rgba(35, 166, 213, 0.5)",
    mint: "0 0 20px rgba(35, 213, 171, 0.5)",
    white: "0 0 20px rgba(255, 255, 255, 0.3)",
  },
};

// Transitions
const transitions = {
  fast: "150ms ease",
  normal: "300ms ease",
  slow: "500ms ease",
  gradient: "7s ease infinite",
};

// Breakpoints
const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

// Glass Card Styles (reusable)
const glassCard = {
  background: colors.background.glass,
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: `1px solid ${colors.background.glassBorder}`,
  borderRadius: borderRadius.lg,
};

// =============================================================================
// MUI THEME CONFIGURATION
// =============================================================================

const Theme = createTheme({
  // Palette
  palette: {
    mode: "dark",
    primary: {
      main: colors.brand.blue,
      light: colors.brand.mint,
      dark: colors.brand.pink,
    },
    secondary: {
      main: colors.brand.coral,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
    background: {
      default: colors.background.dark,
      paper: colors.background.glass,
    },
    // Custom colors
    brand: colors.brand,
    social: colors.social,
    gradient: colors.gradient,
  },

  // Typography
  typography: {
    fontFamily: typography.fontFamily.system,
    h1: {
      fontFamily: typography.fontFamily.heading,
      fontWeight: typography.fontWeight.bold,
      fontSize: typography.fontSize["5xl"],
      letterSpacing: typography.letterSpacing.tight,
    },
    h2: {
      fontFamily: typography.fontFamily.heading,
      fontWeight: typography.fontWeight.semibold,
      fontSize: typography.fontSize["4xl"],
    },
    h3: {
      fontFamily: typography.fontFamily.heading,
      fontWeight: typography.fontWeight.medium,
      fontSize: typography.fontSize["3xl"],
    },
    h4: {
      fontFamily: typography.fontFamily.heading,
      fontWeight: typography.fontWeight.medium,
      fontSize: typography.fontSize["2xl"],
    },
    h5: {
      fontFamily: typography.fontFamily.heading,
      fontWeight: typography.fontWeight.medium,
      fontSize: typography.fontSize.xl,
    },
    h6: {
      fontFamily: typography.fontFamily.heading,
      fontWeight: typography.fontWeight.medium,
      fontSize: typography.fontSize.lg,
    },
    body1: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.lg,
      lineHeight: typography.lineHeight.relaxed,
    },
    body2: {
      fontFamily: typography.fontFamily.system,
      fontSize: typography.fontSize.base,
      lineHeight: typography.lineHeight.normal,
    },
  },

  // Spacing (8px base)
  spacing: 8,

  // Shape
  shape: {
    borderRadius: 8,
  },

  // Breakpoints
  breakpoints: {
    values: breakpoints,
  },

  // Component Overrides
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 1000%;
          animation: gradient 7s ease infinite;
        }

        @keyframes gradient {
          0% { background-position: 0 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }
      `,
    },

    MuiTypography: {
      variants: [
        {
          props: { variant: "sectionTitle" },
          style: {
            fontFamily: typography.fontFamily.heading,
            textTransform: "uppercase",
            letterSpacing: "8px",
            fontSize: typography.fontSize["3xl"],
            fontWeight: typography.fontWeight.medium,
            "@media (max-width:960px)": {
              letterSpacing: "6px",
              fontSize: typography.fontSize["2xl"],
            },
          },
        },
        {
          props: { variant: "sectionContent" },
          style: {
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize.lg,
            lineHeight: "40px",
            "@media (max-width:768px)": {
              fontSize: typography.fontSize.base,
              lineHeight: "35px",
            },
          },
        },
        {
          props: { variant: "heroTitle" },
          style: {
            fontFamily: typography.fontFamily.heading,
            fontWeight: typography.fontWeight.bold,
            fontSize: "48px",
            lineHeight: typography.lineHeight.tight,
            "@media (max-width:1280px)": {
              fontSize: "40px",
            },
            "@media (max-width:960px)": {
              fontSize: "36px",
            },
            "@media (max-width:600px)": {
              fontSize: "28px",
            },
          },
        },
        {
          props: { variant: "heroSubtitle" },
          style: {
            fontFamily: typography.fontFamily.body,
            fontSize: "16px",
            lineHeight: 1.7,
            color: colors.text.muted,
            "@media (max-width:768px)": {
              fontSize: "14px",
            },
          },
        },
        {
          props: { variant: "cardTitle" },
          style: {
            fontFamily: typography.fontFamily.heading,
            fontWeight: typography.fontWeight.semibold,
            fontSize: typography.fontSize.xl,
          },
        },
        {
          props: { variant: "cardDescription" },
          style: {
            fontFamily: typography.fontFamily.system,
            fontSize: typography.fontSize.base,
            color: colors.text.secondary,
            lineHeight: typography.lineHeight.normal,
          },
        },
      ],
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: typography.fontWeight.medium,
          borderRadius: borderRadius.md,
          padding: `${spacing[3]} ${spacing[6]}`,
          transition: transitions.normal,
        },
        contained: {
          backgroundColor: colors.background.white,
          color: colors.background.black,
          "&:hover": {
            backgroundColor: colors.background.light,
            transform: "translateY(-2px)",
            boxShadow: shadows.lg,
          },
        },
        outlined: {
          borderColor: colors.text.primary,
          color: colors.text.primary,
          "&:hover": {
            borderColor: colors.text.primary,
            backgroundColor: colors.background.glass,
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          ...glassCard,
          transition: transitions.normal,
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: shadows.glow.white,
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily.system,
          fontSize: typography.fontSize.sm,
          backgroundColor: colors.background.glass,
          color: colors.text.primary,
          border: `1px solid ${colors.background.glassBorder}`,
        },
      },
    },
  },
});

// Export design tokens for use in styled components
export const tokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  breakpoints,
  glassCard,
};

export default Theme;
