import React, { useEffect, useRef, useState, useCallback } from "react";

const LucaEyeAnimation = () => {
  const totalFrames = 14;
  const animationDuration = 3300; // in ms
  const timePerFrame = animationDuration / totalFrames;

  const containerRef = useRef(null);
  const frameRef = useRef(1);
  const lastUpdateTimeRef = useRef(0);
  const requestRef = useRef();
  const isVisibleRef = useRef(false);
  const imagesLoadedRef = useRef(false);
  const preloadedImages = useRef([]);

  const [currentFrame, setCurrentFrame] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload all images on mount
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = [];

      for (let i = 1; i <= totalFrames; i++) {
        const promise = new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = `/assets/images/luca animation/luca-${i}.svg`;
        });
        imagePromises.push(promise);
      }

      try {
        preloadedImages.current = await Promise.all(imagePromises);
        imagesLoadedRef.current = true;
        setIsLoaded(true);
      } catch (error) {
        console.warn("Failed to preload animation frames:", error);
        // Still allow animation even if preload fails
        setIsLoaded(true);
      }
    };

    loadImages();
  }, []);

  // Animation loop - only runs when visible and images are loaded
  const animate = useCallback((timestamp) => {
    if (!isVisibleRef.current || !imagesLoadedRef.current) {
      requestRef.current = requestAnimationFrame(animate);
      return;
    }

    if (!lastUpdateTimeRef.current) lastUpdateTimeRef.current = timestamp;

    const elapsed = timestamp - lastUpdateTimeRef.current;

    if (elapsed >= timePerFrame) {
      const nextFrame = frameRef.current >= totalFrames ? 1 : frameRef.current + 1;
      frameRef.current = nextFrame;
      setCurrentFrame(nextFrame);
      lastUpdateTimeRef.current = timestamp;
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [timePerFrame]);

  // Intersection Observer - only animate when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;

          if (entry.isIntersecting && !requestRef.current) {
            lastUpdateTimeRef.current = 0;
            requestRef.current = requestAnimationFrame(animate);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);

  // Start animation when loaded
  useEffect(() => {
    if (isLoaded) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isLoaded, animate]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: "400px",
        aspectRatio: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={`/assets/images/luca animation/luca-${currentFrame}.svg`}
        alt="Luca eye animation"
        style={{
          width: "100%",
          height: "auto",
          willChange: "contents",
          transform: "translateZ(0)",
        }}
        loading="eager"
      />
    </div>
  );
};

export default LucaEyeAnimation;
