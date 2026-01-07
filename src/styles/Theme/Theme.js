import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
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

    // ✅ Corrected MuiTypography placement
    MuiTypography: {
      variants: [
        {
          props: { variant: "sectionTitle" },
          style: {
            fontFamily: "Roboto, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "8px",
            fontSize: "40px",
            fontWeight: "500",
            "@media (max-width:960px)": {
              letterSpacing: "6px",
              fontSize: "25px",
            },
          },
        },
        {
          props: { variant: "sectionContent" },
          style: {
            fontFamily: "Kalam, cursive",
            fontSize: "20px",
            lineHeight: "40px",
            "@media (max-width:768px)": {
              fontSize: "16px",
              lineHeight: "35px",
            },
          },
        },
      ],
    },
  },
});

export default Theme;
