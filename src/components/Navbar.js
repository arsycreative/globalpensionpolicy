"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const SECTIONS = [
  { id: "notice",        label: "Process" },
  { id: "privacy",       label: "Privacy" },
  { id: "member-access", label: "Member Access" },
  { id: "process",       label: "Settlement" },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen]          = useState(false);

  /* ── Scroll handler ── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

    // Active section detection
    const offsets = SECTIONS.map((s) => {
      const el = document.getElementById(s.id);
      return el ? { id: s.id, top: el.getBoundingClientRect().top } : null;
    }).filter(Boolean);

    const inView = offsets.filter((o) => o.top <= 120);
    if (inView.length) setActiveSection(inView[inView.length - 1].id);
    else setActiveSection("");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ── Close menu on resize ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navBg = scrolled
    ? "rgba(6, 13, 26, 0.97)"
    : "rgba(6, 13, 26, 0.78)";

  const navShadow = scrolled
    ? "0 1px 0 rgba(201,168,76,0.18), 0 4px 24px rgba(0,0,0,0.4)"
    : "none";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: navBg,
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          boxShadow: navShadow,
          borderBottom: "1px solid rgba(201,168,76,0.12)",
          transition: "background 0.35s ease, box-shadow 0.35s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── Logo ── */}
          <a
            href="#"
            style={{ display: "flex", alignItems: "center", gap: "13px", textDecoration: "none" }}
          >
            <div
              style={{
                position: "relative",
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid rgba(201,168,76,0.28)",
                boxShadow: "0 0 14px rgba(201,168,76,0.18)",
                flexShrink: 0,
                transition: "box-shadow 0.3s ease",
              }}
            >
              <Image src="/gpp-logo.jpg" alt="GPP emblem" fill sizes="44px" style={{ objectFit: "cover" }} priority />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <span style={{ fontSize: "14.5px", fontWeight: 800, color: "#e8edf5", letterSpacing: "0.03em", lineHeight: 1.2 }}>
                Global Pension Policy
              </span>
              <span style={{ fontSize: "9px", color: "#c9a84c", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, opacity: 0.8 }}>
                Official Settlement Portal
              </span>
            </div>
          </a>

          {/* ── Desktop nav links ── */}
          <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {SECTIONS.map((s) => {
              const isActive = activeSection === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "8px",
                    fontSize: "12.5px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textDecoration: "none",
                    color: isActive ? "#c9a84c" : "#8da0bc",
                    background: isActive ? "rgba(201,168,76,0.09)" : "transparent",
                    border: `1px solid ${isActive ? "rgba(201,168,76,0.25)" : "transparent"}`,
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#c9a84c";
                      e.currentTarget.style.background = "rgba(201,168,76,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#8da0bc";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {s.label}
                </a>
              );
            })}
          </div>

          {/* ── Right side: status badge + hamburger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Status badge */}
            <div
              className="desktop-only"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <span
                style={{
                  width: "7px", height: "7px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "inline-block",
                  boxShadow: "0 0 6px rgba(74,222,128,0.6)",
                  animation: "dot-pulse 2s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: "10.5px", fontWeight: 600, color: "#c9a84c", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Settlement Active
              </span>
            </div>

            {/* Hamburger */}
            <button
              id="hamburger-btn"
              className="mobile-only"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "8px",
                width: "40px", height: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                cursor: "pointer",
              }}
            >
              <span
                className="hamburger-line"
                style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}
              />
              <span
                className="hamburger-line"
                style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "none" }}
              />
              <span
                className="hamburger-line"
                style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}
              />
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown menu ── */}
        <div
          style={{
            maxHeight: menuOpen ? "260px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            background: "rgba(6,13,26,0.97)",
            borderTop: menuOpen ? "1px solid rgba(201,168,76,0.1)" : "none",
          }}
        >
          <div style={{ padding: menuOpen ? "16px 24px 20px" : "0 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "11px 14px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: activeSection === s.id ? "#c9a84c" : "#8da0bc",
                  background: activeSection === s.id ? "rgba(201,168,76,0.08)" : "transparent",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "all 0.2s ease",
                  display: "block",
                }}
              >
                {s.label}
              </a>
            ))}
            <div style={{ marginTop: "8px", paddingTop: "12px", borderTop: "1px solid rgba(201,168,76,0.1)", display: "flex", alignItems: "center", gap: "7px" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 6px rgba(74,222,128,0.6)" }} />
              <span style={{ fontSize: "10.5px", fontWeight: 600, color: "#c9a84c", letterSpacing: "0.1em", textTransform: "uppercase" }}>Settlement Active</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
