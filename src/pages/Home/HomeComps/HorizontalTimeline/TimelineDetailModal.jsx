import React from "react";
import {
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const TimelineDetailModal = ({
  open,
  onClose,
  item,
  currentIndex,
  totalItems,
  onPrev,
  onNext,
}) => {
  if (!item) return null;

  const IconComponent = item.icon;
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < totalItems - 1;

  // Check if image is a placeholder
  const isPlaceholder =
    !item.image || item.image.includes("placehold.co");

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
          sx: { bgcolor: "rgba(0,0,0,0.8)" },
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "92%", sm: 520, md: 620 },
            maxHeight: "90vh",
            bgcolor: "#ffffff",
            borderRadius: 3,
            boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
            overflow: "hidden",
            outline: "none",
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 10,
              bgcolor: "rgba(255,255,255,0.95)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              "&:hover": { bgcolor: "rgba(255,255,255,1)" },
            }}
          >
            <CloseIcon sx={{ color: "#333" }} />
          </IconButton>

          {/* Navigation Arrows */}
          {canGoPrev && (
            <IconButton
              onClick={onPrev}
              sx={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                bgcolor: "rgba(255,255,255,0.95)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,1)",
                  transform: "translateY(-50%) scale(1.05)",
                },
              }}
            >
              <ChevronLeft sx={{ color: "#333" }} />
            </IconButton>
          )}

          {canGoNext && (
            <IconButton
              onClick={onNext}
              sx={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                bgcolor: "rgba(255,255,255,0.95)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,1)",
                  transform: "translateY(-50%) scale(1.05)",
                },
              }}
            >
              <ChevronRight sx={{ color: "#333" }} />
            </IconButton>
          )}

          {/* Image Header */}
          <Box
            sx={{
              width: "100%",
              height: { xs: 180, md: 220 },
              backgroundImage: isPlaceholder ? "none" : `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              bgcolor: isPlaceholder ? `${item.iconColor}15` : "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Show large icon for placeholder images */}
            {isPlaceholder && (
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  bgcolor: `${item.iconColor}25`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconComponent
                  sx={{ fontSize: 40, color: item.iconColor, opacity: 0.7 }}
                />
              </Box>
            )}
          </Box>

          {/* Content */}
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              maxHeight: { xs: "calc(90vh - 180px)", md: "calc(90vh - 220px)" },
              overflowY: "auto",
            }}
          >
            {/* Year and Icon */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  bgcolor: item.iconColor || "#e73c7e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 4px 12px ${item.iconColor}40`,
                }}
              >
                <IconComponent sx={{ color: "#fff", fontSize: 24 }} />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: item.iconColor || "#e73c7e",
                }}
              >
                {item.year}
              </Typography>

              {/* Progress indicator */}
              <Typography
                sx={{
                  ml: "auto",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 14,
                  color: "#999",
                }}
              >
                {currentIndex + 1} / {totalItems}
              </Typography>
            </Box>

            {/* Title */}
            <Typography
              sx={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: { xs: 24, md: 28 },
                color: "#1a1a1a",
                mb: 2,
              }}
            >
              {item.title}
            </Typography>

            {/* Full Description */}
            <Typography
              sx={{
                fontFamily: "Kalam, cursive",
                fontSize: { xs: 16, md: 18 },
                color: "#444",
                lineHeight: 1.8,
              }}
            >
              {item.moreDescription}
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default TimelineDetailModal;
