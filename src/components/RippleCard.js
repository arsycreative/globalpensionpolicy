"use client";
import { useEffect, useRef } from "react";

/**
 * Card with ripple effect on click + subtle glow pulse on hover.
 * Accepts all standard div props + className/style.
 */
export default function RippleCard({ children, className = "", style = {}, ...props }) {
  const cardRef = useRef(null);

  function handleClick(e) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);

    if (props.onClick) props.onClick(e);
  }

  return (
    <div
      ref={cardRef}
      className={`glass-card ripple-card ${className}`}
      onClick={handleClick}
      style={{
        cursor: "pointer",
        transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
        e.currentTarget.style.boxShadow =
          "0 0 0 0 rgba(201,168,76,0), 0 8px 40px rgba(201,168,76,0.18), 0 20px 60px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.16)";
        e.currentTarget.style.boxShadow = "none";
      }}
      {...props}
    >
      {children}
    </div>
  );
}
