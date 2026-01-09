import React from "react";
import { Box } from "@mui/material";

const TimelineNode = ({ item }) => {
  const IconComponent = item.icon;

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: 40, md: 48 },
        height: { xs: 40, md: 48 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {/* Outer ring with colored border */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "3px solid",
          borderColor: item.iconColor || "#e73c7e",
          bgcolor: "#ffffff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      />

      {/* Icon in center */}
      <IconComponent
        sx={{
          fontSize: { xs: 20, md: 24 },
          color: item.iconColor || "#e73c7e",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default TimelineNode;
