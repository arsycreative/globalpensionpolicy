"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

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

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          boxShadow: scrolled ? "var(--nav-shadow)" : "none",
          borderBottom: "1px solid var(--nav-border)",
          transition: "background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
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
                border: "1px solid var(--card-border)",
                boxShadow: "0 0 14px rgba(201,168,76,0.18)",
                flexShrink: 0,
                transition: "box-shadow 0.3s ease",
              }}
            >
              <Image src="/gpp-logo.jpg" alt="GPP emblem" fill sizes="44px" style={{ objectFit: "cover" }} priority />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <span style={{ fontSize: "14.5px", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "0.03em", lineHeight: 1.2 }}>
                Global Pension Policy
              </span>
              <span style={{ fontSize: "9px", color: "var(--gold)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, opacity: 0.9 }}>
                Official Settlement Portal
              </span>
            </div>
          </a>

          {/* ── Right side controls: Links + ThemeToggle + Hamburger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Desktop nav links */}
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
                      color: isActive ? "var(--gold)" : "var(--text-secondary)",
                      background: isActive ? "var(--badge-bg)" : "transparent",
                      border: `1px solid ${isActive ? "var(--card-border)" : "transparent"}`,
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--gold)";
                        e.currentTarget.style.background = "var(--badge-bg)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--text-secondary)";
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {s.label}
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              id="hamburger-btn"
              className="mobile-only"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                background: "var(--toggle-bg)",
                border: "1px solid var(--toggle-border)",
                borderRadius: "8px",
                width: "38px", height: "38px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                cursor: "pointer",
                transition: "all 0.25s ease",
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
            maxHeight: menuOpen ? "220px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            background: "var(--nav-bg-scrolled)",
            borderTop: menuOpen ? "1px solid var(--nav-border)" : "none",
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
                  color: activeSection === s.id ? "var(--gold)" : "var(--text-secondary)",
                  background: activeSection === s.id ? "var(--badge-bg)" : "transparent",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "all 0.2s ease",
                  display: "block",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
