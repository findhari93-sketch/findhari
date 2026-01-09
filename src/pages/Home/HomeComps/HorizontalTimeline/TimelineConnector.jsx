import React from "react";
import { Box } from "@mui/material";

const TimelineConnector = ({ color }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: { xs: -8, md: -12 },
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      {/* Gradient line connector */}
      <Box
        sx={{
          width: { xs: 16, md: 24 },
          height: 3,
          background: `linear-gradient(90deg, ${color || "#e73c7e"}50, transparent)`,
          borderRadius: "2px",
        }}
      />
    </Box>
  );
};

export default TimelineConnector;
