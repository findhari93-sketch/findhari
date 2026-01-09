import React from "react";
import { Box, Typography } from "@mui/material";
import TimelineConnector from "./TimelineConnector";

const TimelineCard = ({ item, index, onClick, wasClick, isLast }) => {
  const number = String(index + 1).padStart(2, "0");
  const IconComponent = item.icon;

  const handleClick = () => {
    if (wasClick) {
      onClick();
    }
  };

  // Check if image is a placeholder
  const isPlaceholder =
    !item.image || item.image.includes("placehold.co");

  return (
    <Box
      onClick={handleClick}
      sx={{
        position: "relative",
        width: { xs: 260, md: 300 },
        minWidth: { xs: 260, md: 300 },
        flexShrink: 0,
        scrollSnapAlign: "start",
        bgcolor: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Year Badge */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          bgcolor: item.iconColor || "#e73c7e",
          color: "#fff",
          px: 1.5,
          py: 0.5,
          borderRadius: "20px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 600,
          fontSize: "13px",
          zIndex: 2,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        {item.year}
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 140, md: 160 },
          backgroundImage: isPlaceholder ? "none" : `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          bgcolor: isPlaceholder ? `${item.iconColor}15` : "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Show icon for placeholder images */}
        {isPlaceholder && (
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              bgcolor: `${item.iconColor}25`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconComponent
              sx={{ fontSize: 32, color: item.iconColor, opacity: 0.7 }}
            />
          </Box>
        )}
      </Box>

      {/* Content Section */}
      <Box sx={{ p: { xs: 2, md: 2.5 } }}>
        {/* Number and Icon Row */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 1.5,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              fontSize: { xs: 28, md: 32 },
              color: "rgba(0,0,0,0.06)",
              lineHeight: 1,
            }}
          >
            {number}
          </Typography>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              bgcolor: `${item.iconColor}15`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconComponent sx={{ fontSize: 18, color: item.iconColor }} />
          </Box>
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
            fontSize: { xs: 17, md: 19 },
            color: "#1a1a1a",
            mb: 0.75,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {item.title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: "Kalam, cursive",
            fontSize: { xs: 13, md: 14 },
            color: "#666",
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: { xs: 40, md: 42 },
          }}
        >
          {item.description}
        </Typography>
      </Box>

      {/* Timeline Connector */}
      {!isLast && <TimelineConnector color={item.iconColor} />}
    </Box>
  );
};

export default TimelineCard;
