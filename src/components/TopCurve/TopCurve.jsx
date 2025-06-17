// src/components/TopCurve/TopCurve.jsx
import { Box } from "@mui/material";
import logoBack from "../../assets/images/logo/logo-back-2.svg"; // Adjust path if needed

const TopCurve = () => {
  return (
    <Box
      component="img"
      src={logoBack}
      alt="Logo Background"
      sx={{
        position: "absolute",
        top: 0,
        left: 40,
        zIndex: 0,
        transformOrigin: "top left",
        transform: {
          xs: "scale(0.5)",
          sm: "scale(0.5)",
          md: "scale(0.75)",
          lg: "scale(2.5)",
        },
        height: {
          xs: 50,
          md: 70,
          lg: 80,
        },
      }}
    />
  );
};

export default TopCurve;
