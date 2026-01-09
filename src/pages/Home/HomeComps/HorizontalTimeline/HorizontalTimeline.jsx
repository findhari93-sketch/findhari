import React, { useState } from "react";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { timelineData } from "./timelineData";
import TimelineCard from "./TimelineCard";
import TimelineDetailModal from "./TimelineDetailModal";
import { useTimelineDrag } from "./useTimelineDrag";

const HorizontalTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {
    scrollRef,
    wasClick,
    handlers,
    scrollNext,
    scrollPrev,
    canScrollLeft,
    canScrollRight,
  } = useTimelineDrag();

  const handleCardClick = (item, index) => {
    setSelectedItem(item);
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handlePrevItem = () => {
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      setSelectedIndex(newIndex);
      setSelectedItem(timelineData[newIndex]);
    }
  };

  const handleNextItem = () => {
    if (selectedIndex < timelineData.length - 1) {
      const newIndex = selectedIndex + 1;
      setSelectedIndex(newIndex);
      setSelectedItem(timelineData[newIndex]);
    }
  };

  return (
    <Box sx={{ position: "relative", py: { xs: 2, md: 4 } }}>
      {/* Navigation Arrows - Desktop only */}
      {!isMobile && (
        <>
          <IconButton
            onClick={scrollPrev}
            disabled={!canScrollLeft}
            sx={{
              position: "absolute",
              left: { xs: 8, md: 16 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              width: 48,
              height: 48,
              opacity: canScrollLeft ? 1 : 0.3,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 1)",
                transform: "translateY(-50%) scale(1.05)",
                boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
              },
            }}
          >
            <ChevronLeft sx={{ color: "#333", fontSize: 28 }} />
          </IconButton>

          <IconButton
            onClick={scrollNext}
            disabled={!canScrollRight}
            sx={{
              position: "absolute",
              right: { xs: 8, md: 16 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              width: 48,
              height: 48,
              opacity: canScrollRight ? 1 : 0.3,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 1)",
                transform: "translateY(-50%) scale(1.05)",
                boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
              },
            }}
          >
            <ChevronRight sx={{ color: "#333", fontSize: 28 }} />
          </IconButton>
        </>
      )}

      {/* Scrollable Container */}
      <Box
        ref={scrollRef}
        {...handlers}
        sx={{
          display: "flex",
          gap: { xs: 2, md: 3 },
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          px: { xs: 3, md: 8 },
          py: 3,
          cursor: "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": { display: "none" },
          WebkitOverflowScrolling: "touch",
        }}
      >
        {timelineData.map((item, index) => (
          <TimelineCard
            key={index}
            item={item}
            index={index}
            isLast={index === timelineData.length - 1}
            onClick={() => handleCardClick(item, index)}
            wasClick={wasClick}
          />
        ))}
      </Box>

      {/* Detail Modal */}
      <TimelineDetailModal
        open={modalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
        currentIndex={selectedIndex}
        totalItems={timelineData.length}
        onPrev={handlePrevItem}
        onNext={handleNextItem}
      />
    </Box>
  );
};

export default HorizontalTimeline;
