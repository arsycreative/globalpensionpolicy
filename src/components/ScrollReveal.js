"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and animates them into view when they enter the viewport.
 * Uses IntersectionObserver — no layout shift on SSR.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",   // "up" | "left" | "right" | "none"
  duration = 0.65,
  threshold = 0.15,
  className = "",
  style = {},
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const initialTransform = {
    up:    "translateY(32px)",
    down:  "translateY(-32px)",
    left:  "translateX(-32px)",
    right: "translateX(32px)",
    none:  "none",
  }[direction] ?? "translateY(32px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : initialTransform,
        transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
