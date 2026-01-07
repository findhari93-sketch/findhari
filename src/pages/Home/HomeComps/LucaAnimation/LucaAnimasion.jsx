import React, { useEffect, useRef, useState } from "react";

const LucaEyeAnimation = () => {
  const totalFrames = 14;
  const animationDuration = 3300; // in ms
  const timePerFrame = animationDuration / totalFrames;

  const frameRef = useRef(1); // current frame number
  const lastUpdateTimeRef = useRef(0); // for timing
  const requestRef = useRef(); // for cleanup
  const [src, setSrc] = useState("/assets/images/luca animation/luca-1.svg");

  const animate = (timestamp) => {
    if (!lastUpdateTimeRef.current) lastUpdateTimeRef.current = timestamp;

    const elapsed = timestamp - lastUpdateTimeRef.current;

    if (elapsed >= timePerFrame) {
      const nextFrame =
        frameRef.current >= totalFrames ? 1 : frameRef.current + 1;
      frameRef.current = nextFrame;
      setSrc(`/assets/images/luca animation/luca-${nextFrame}.svg`);
      lastUpdateTimeRef.current = timestamp;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <img
      className="eye-animation img-fluid"
      src={src}
      alt="blinking eye animation"
      style={{ width: "100%", maxWidth: "32rem" }} // optional sizing
    />
  );
};

export default LucaEyeAnimation;
