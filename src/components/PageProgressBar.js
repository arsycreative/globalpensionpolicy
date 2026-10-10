"use client";
import { useEffect, useState } from "react";

/**
 * Thin gold progress bar that appears at the top of the page on mount
 * and fills to 100% then fades out — simulates a page load indicator.
 */
export default function PageProgressBar() {
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Start progressing
    const t1 = setTimeout(() => setWidth(30), 50);
    const t2 = setTimeout(() => setWidth(60), 200);
    const t3 = setTimeout(() => setWidth(85), 500);
    const t4 = setTimeout(() => setWidth(100), 900);
    // Fade out after complete
    const t5 = setTimeout(() => setOpacity(0), 1200);
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, []);

  if (opacity === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2.5px",
        width: `${width}%`,
        background: "linear-gradient(90deg, #9a7a30, #c9a84c, #e8c97a)",
        zIndex: 9999,
        opacity,
        transition: `width ${width === 100 ? 0.3 : 0.5}s ease, opacity 0.4s ease`,
        boxShadow: "0 0 10px rgba(201, 168, 76, 0.9), 0 0 20px rgba(201, 168, 76, 0.4)",
        borderRadius: "0 2px 2px 0",
        pointerEvents: "none",
      }}
    />
  );
}
