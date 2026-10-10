"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(2025);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      style={{
        borderTop: "1px solid var(--footer-border)",
        background: "var(--footer-bg)",
        padding: "48px 24px 36px",
        marginTop: "auto",
        transition: "all 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          textAlign: "center",
        }}
      >
        {/* Logo — emblem + text */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              position: "relative",
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid var(--footer-border)",
              boxShadow: "0 0 20px rgba(201, 168, 76, 0.12)",
            }}
          >
            <Image
              src="/gpp-logo.jpg"
              alt="GPP emblem"
              fill
              sizes="56px"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "var(--text-secondary)", letterSpacing: "0.06em", transition: "color 0.3s ease" }}>
              Global Pension Policy
            </div>
            <div style={{ fontSize: "9px", color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, marginTop: "3px", opacity: 0.9 }}>
              Official Settlement Portal
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="divider-gold" />

        {/* Disclaimer */}
        <p style={{ fontSize: "12px", color: "var(--footer-subtext)", maxWidth: "500px", lineHeight: "1.7", transition: "color 0.3s ease" }}>
          This website is intended exclusively for former GPP members in connection with the ongoing settlement and distribution process. All communications are confidential.
        </p>

        {/* Copyright */}
        <p style={{ fontSize: "11px", color: "var(--footer-copy)", letterSpacing: "0.04em", transition: "color 0.3s ease" }}>
          © {year} Global Pension Policy — globalpensionpolicy.com · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
