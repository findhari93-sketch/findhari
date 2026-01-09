import { useState, useRef, useCallback, useEffect } from "react";

export const useTimelineDrag = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  // Scroll position state for arrow visibility
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleMouseDown = useCallback((e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setDragDistance(0);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = "grabbing";
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5; // Scroll speed multiplier
      setDragDistance(Math.abs(walk));
      scrollRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  }, []);

  // Arrow navigation
  const scrollNext = useCallback(() => {
    if (!scrollRef.current) return;
    const cardWidth = 280; // Approximate card width + margin
    scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  }, []);

  const scrollPrev = useCallback(() => {
    if (!scrollRef.current) return;
    const cardWidth = 280;
    scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  }, []);

  // Update scroll state for arrow visibility
  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollState);
      // Initial check
      updateScrollState();
      // Also check on resize
      window.addEventListener("resize", updateScrollState);
      return () => {
        el.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, [updateScrollState]);

  // Check if it was a click or drag
  const wasClick = dragDistance < 5;

  return {
    scrollRef,
    isDragging,
    wasClick,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
    scrollNext,
    scrollPrev,
    canScrollLeft,
    canScrollRight,
  };
};
