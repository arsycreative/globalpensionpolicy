"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Globe,
  MailOpen,
  ShieldCheck,
  Lock,
  CheckCircle2,
  FileText,
  BadgeCheck,
  Coins,
  Info,
  Users,
  AlarmClockCheck,
  UserRoundCheck,
  SendHorizonal,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import PageProgressBar from "@/components/PageProgressBar";
import RippleCard from "@/components/RippleCard";
import VerificationModal from "@/components/VerificationModal";

/* ─── small helper ─── */
function IconBox({ children, size = 48 }) {
  return (
    <div className="icon-bg" style={{ width: size, height: size, marginBottom: "20px" }}>
      {children}
    </div>
  );
}

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PageProgressBar />
      <Navbar />
      {showModal && <VerificationModal onClose={() => setShowModal(false)} />}

      <main style={{ paddingTop: "72px" }}>

        {/* ══════════════════════════════════════════
            HERO  —  particle canvas background
        ══════════════════════════════════════════ */}
        <section
          style={{
            position: "relative",
            minHeight: "94vh",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* Static hero image underneath particles */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Image src="/hero-bg.jpg" alt="GPP background" fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(6,13,26,0.93) 0%, rgba(13,30,56,0.78) 60%, rgba(6,13,26,0.95) 100%)" }} />
          </div>

          {/* Animated particle network */}
          <ParticleCanvas />

          {/* Decorative floating orbs */}
          <div style={{ position: "absolute", top: "12%", right: "8%", width: "340px", height: "340px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)", zIndex: 2, animation: "float 7s ease-in-out infinite" }} />
          <div style={{ position: "absolute", bottom: "18%", left: "4%", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)", zIndex: 2, animation: "float 9s ease-in-out infinite reverse" }} />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 3, maxWidth: "1200px", margin: "0 auto", padding: "60px 24px", width: "100%" }}>

            <div className="section-badge" style={{ marginBottom: "28px", display: "inline-flex" }}>
              <Globe size={11} strokeWidth={2.5} />
              Official Website for Former Members
            </div>

            <h1
              className="hero-title"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                color: "#e8edf5",
                maxWidth: "780px",
                marginBottom: "12px",
              }}
            >
              Global{" "}
              <span className="text-gold-gradient">Pension Policy</span>
            </h1>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
                fontWeight: 400,
                color: "#8da0bc",
                marginBottom: "28px",
                letterSpacing: "0.05em",
              }}
            >
              Settlement &amp; Distribution Portal
            </h2>

            <p style={{ fontSize: "1.05rem", color: "#b0c4de", maxWidth: "600px", lineHeight: 1.8, marginBottom: "36px" }}>
              The GPP program has been completed. The remaining process concerns the settlement
              and distribution of the Global Pension Policies associated with eligible former GPP members.
            </p>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <button
                id="hero-member-access-btn"
                onClick={() => setShowModal(true)}
                className="btn-gold"
                style={{ padding: "14px 30px", borderRadius: "9px", fontSize: "13.5px", letterSpacing: "0.06em", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <UserRoundCheck size={16} />
                MEMBER ACCESS
              </button>
              <a
                href="#process"
                style={{ padding: "14px 30px", borderRadius: "9px", fontSize: "13.5px", letterSpacing: "0.06em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.32)", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.55)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.32)"; }}
              >
                <FileText size={16} />
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Bottom fade */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "130px", background: "linear-gradient(to bottom, transparent, #060d1a)", zIndex: 3 }} />
        </section>

        {/* ══════════════════════════════════════════
            COMMUNICATION PROCESS
        ══════════════════════════════════════════ */}
        <section id="notice" style={{ maxWidth: "1200px", margin: "0 auto", padding: "90px 24px 70px" }}>
          <ScrollReveal style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-badge" style={{ marginBottom: "20px", display: "inline-flex" }}>
              <AlarmClockCheck size={11} strokeWidth={2.5} />
              Communication Process
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, color: "#e8edf5", marginBottom: "16px" }}>
              How to <span className="text-gold-gradient">Connect with Us</span>
            </h2>
            <p style={{ color: "#8da0bc", fontSize: "1rem", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75 }}>
              We are contacting former GPP members through our email communication channel.
            </p>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { icon: <MailOpen size={22} color="#c9a84c" strokeWidth={1.6} />, title: "Email Communication", desc: "We are contacting former GPP members using email information available in our historical records. If you have received an email from our official contact address, please reply directly to continue." },
              { icon: <BadgeCheck size={22} color="#c9a84c" strokeWidth={1.6} />, title: "Verification Required", desc: "Reply directly to the email from our official contact address so that we can verify your contact details and identity to continue the settlement and distribution process." },
              { icon: <ShieldCheck size={22} color="#c9a84c" strokeWidth={1.6} />, title: "Secure Channel Only", desc: "For your security, all member-related communication and the transfer of personal or account information will be conducted exclusively through our designated email channel." },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.12} direction="up">
                <RippleCard style={{ padding: "32px", height: "100%" }}>
                  <IconBox>{card.icon}</IconBox>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#e8edf5", marginBottom: "10px" }}>{card.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#8da0bc", lineHeight: 1.75 }}>{card.desc}</p>
                </RippleCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PRIVACY & DATA PROTECTION
        ══════════════════════════════════════════ */}
        <section
          id="privacy"
          style={{
            background: "rgba(13, 30, 56, 0.28)",
            borderTop: "1px solid rgba(201,168,76,0.07)",
            borderBottom: "1px solid rgba(201,168,76,0.07)",
            padding: "90px 24px",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>

              <ScrollReveal direction="left">
                <div className="section-badge" style={{ marginBottom: "20px", display: "inline-flex" }}>
                  <ShieldCheck size={11} strokeWidth={2.5} />
                  Privacy &amp; Data Protection
                </div>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#e8edf5", lineHeight: 1.22, marginBottom: "20px" }}>
                  Your Privacy is Our <span className="text-gold-gradient">Priority</span>
                </h2>
                <p style={{ color: "#8da0bc", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "24px" }}>
                  Due to the confidential nature of member information, all member-related communication and the transfer of personal or account information will be conducted through our designated email communication channel.
                </p>
                <div className="notice-box">
                  <p style={{ fontSize: "0.88rem", color: "#c9a84c", fontWeight: 600, marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Info size={14} /> Security Reminder
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "#8da0bc", lineHeight: 1.65 }}>
                    Please ensure that you communicate only through the official email address provided in our correspondence.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    { icon: <Lock size={16} color="#c9a84c" strokeWidth={1.8} />, label: "Data Encryption", value: "End-to-End" },
                    { icon: <MailOpen size={16} color="#c9a84c" strokeWidth={1.8} />, label: "Communication Channel", value: "Official Email Only" },
                    { icon: <BadgeCheck size={16} color="#c9a84c" strokeWidth={1.8} />, label: "Member Verification", value: "Required Before Access" },
                    { icon: <ShieldCheck size={16} color="#c9a84c" strokeWidth={1.8} />, label: "Information Transfer", value: "Secure & Confidential" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="glass-card"
                      style={{ padding: "15px 20px", display: "flex", alignItems: "center", gap: "14px", transition: "all 0.3s ease" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.16)"; e.currentTarget.style.transform = "translateX(0)"; }}
                    >
                      <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(201,168,76,0.09)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "10px", color: "#4a6080", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>{item.label}</div>
                        <div style={{ fontSize: "0.92rem", color: "#c9a84c", fontWeight: 600, marginTop: "2px" }}>{item.value}</div>
                      </div>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", flexShrink: 0, boxShadow: "0 0 6px rgba(74,222,128,0.5)" }} />
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            MEMBER ACCESS
        ══════════════════════════════════════════ */}
        <section id="member-access" style={{ maxWidth: "1200px", margin: "0 auto", padding: "90px 24px" }}>
          <ScrollReveal style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-badge" style={{ marginBottom: "20px", display: "inline-flex" }}>
              <Lock size={11} strokeWidth={2.5} />
              Member Account Access
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, color: "#e8edf5", marginBottom: "16px" }}>
              Secure <span className="text-gold-gradient">Member Login</span>
            </h2>
            <p style={{ color: "#8da0bc", fontSize: "0.95rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.75 }}>
              Secure member account access is available exclusively to former GPP members who have been verified through our official email communication process.
            </p>
          </ScrollReveal>

          <ScrollReveal style={{ maxWidth: "440px", margin: "0 auto" }}>
            <div
              className="glass-card"
              style={{ padding: "40px", border: "1px solid rgba(201,168,76,0.22)", boxShadow: "0 0 40px rgba(201,168,76,0.08), 0 24px 64px rgba(0,0,0,0.45)" }}
            >
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <div style={{ width: "66px", height: "66px", borderRadius: "16px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.22)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <UserRoundCheck size={28} color="#c9a84c" strokeWidth={1.5} />
                </div>
                <div style={{ fontSize: "10px", color: "#4a6080", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>Member Portal</div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "22px" }}>
                <div>
                  <label htmlFor="member-login" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 600, color: "#8da0bc", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    <Users size={12} color="#8da0bc" /> Member Login
                  </label>
                  <input id="member-login" type="text" className="login-input" placeholder="Enter your member ID" disabled aria-disabled="true" />
                </div>
                <div>
                  <label htmlFor="member-password" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 600, color: "#8da0bc", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    <Lock size={12} color="#8da0bc" /> Password
                  </label>
                  <input id="member-password" type="password" className="login-input" placeholder="Enter your password" disabled aria-disabled="true" />
                </div>
              </div>

              <div style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "9px", padding: "12px 16px", textAlign: "center", marginBottom: "18px" }}>
                <p style={{ fontSize: "12px", color: "#c9a84c", fontWeight: 600, letterSpacing: "0.04em", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                  <Lock size={13} /> Access Pending Verification
                </p>
                <p style={{ fontSize: "11px", color: "#4a6080", marginTop: "4px", lineHeight: 1.5 }}>
                  Member login will be available after completing email verification
                </p>
              </div>

              {/* Clicking this triggers the modal */}
              <button
                id="login-submit-btn"
                onClick={() => setShowModal(true)}
                style={{
                  width: "100%", padding: "14px", borderRadius: "9px",
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "#c9a84c",
                  fontSize: "12.5px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.14)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"; }}
              >
                <ShieldCheck size={15} />
                VIEW VERIFICATION PROCESS
              </button>
            </div>

            <p style={{ textAlign: "center", color: "#4a6080", fontSize: "11.5px", marginTop: "18px", lineHeight: 1.65 }}>
              If you have not yet completed the verification process,<br />
              you will not be able to access the member account area.
            </p>
          </ScrollReveal>
        </section>

        {/* ══════════════════════════════════════════
            SETTLEMENT PROCESS  —  city night bg
        ══════════════════════════════════════════ */}
        <section id="process" style={{ position: "relative", padding: "110px 24px", overflow: "hidden" }}>

          {/* Background image */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Image src="/settlement-bg.jpg" alt="Global financial city at night" fill style={{ objectFit: "cover", objectPosition: "center 55%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,13,26,0.93) 0%, rgba(6,13,26,0.78) 50%, rgba(6,13,26,0.95) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />
          </div>

          <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
            <ScrollReveal style={{ textAlign: "center", marginBottom: "64px" }}>
              <div className="section-badge" style={{ marginBottom: "20px", display: "inline-flex" }}>
                <Coins size={11} strokeWidth={2.5} />
                Settlement &amp; Distribution
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, color: "#e8edf5", marginBottom: "16px" }}>
                The Settlement <span className="text-gold-gradient">Process</span>
              </h2>
              <p style={{ color: "#8da0bc", fontSize: "0.95rem", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75 }}>
                The remaining GPP process is focused on the settlement and distribution of the Global Pension Policies to eligible former members.
              </p>
              <div className="divider-gold" style={{ marginTop: "24px" }} />
            </ScrollReveal>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "22px" }}>
              {[
                { step: "01", icon: <SendHorizonal size={20} color="#c9a84c" strokeWidth={1.8} />, title: "Email Contact", desc: "We contact former members via email using historical records. Check your inbox for official communication." },
                { step: "02", icon: <BadgeCheck size={20} color="#c9a84c" strokeWidth={1.8} />, title: "Reply & Verify", desc: "Reply to the official email so we can verify your contact details and identity." },
                { step: "03", icon: <FileText size={20} color="#c9a84c" strokeWidth={1.8} />, title: "Account Information", desc: "After verification, your individual account information and settlement details will be made available." },
                { step: "04", icon: <Coins size={20} color="#c9a84c" strokeWidth={1.8} />, title: "Distribution", desc: "Eligible verified members will receive their Global Pension Policy settlement and distribution." },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <RippleCard
                    style={{ padding: "28px", height: "100%", background: "rgba(6,13,26,0.65)" }}
                  >
                    <div style={{ position: "absolute", top: "12px", right: "16px", fontSize: "2.8rem", fontWeight: 900, color: "rgba(201,168,76,0.06)", lineHeight: 1, fontFamily: "var(--font-playfair), serif", pointerEvents: "none" }}>
                      {item.step}
                    </div>
                    <div className="icon-bg" style={{ width: "44px", height: "44px", marginBottom: "16px" }}>{item.icon}</div>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e8edf5", marginBottom: "10px" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.84rem", color: "#8da0bc", lineHeight: 1.75 }}>{item.desc}</p>
                  </RippleCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            IMPORTANT NOTICE BANNER
        ══════════════════════════════════════════ */}
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "90px 24px" }}>
          <ScrollReveal>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(21,40,68,0.82) 0%, rgba(13,30,56,0.92) 100%)",
                border: "1px solid rgba(201,168,76,0.24)",
                borderRadius: "18px",
                padding: "52px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 60px rgba(201,168,76,0.06), 0 24px 64px rgba(0,0,0,0.35)",
              }}
            >
              {/* Decorative accents */}
              <div style={{ position: "absolute", top: 0, right: 0, width: "200px", height: "200px", background: "radial-gradient(circle at top right, rgba(201,168,76,0.09) 0%, transparent 70%)", borderRadius: "0 18px 0 0", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "160px", height: "160px", background: "radial-gradient(circle at bottom left, rgba(201,168,76,0.05) 0%, transparent 70%)", borderRadius: "0 0 0 18px", pointerEvents: "none" }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(201,168,76,0.11)", border: "1px solid rgba(201,168,76,0.28)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Info size={20} color="#c9a84c" strokeWidth={1.8} />
                  </div>
                  <div className="section-badge" style={{ display: "inline-flex" }}>
                    <Globe size={11} strokeWidth={2.5} />
                    Important Notice
                  </div>
                </div>

                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#e8edf5", marginBottom: "16px" }}>
                  Official Communication &amp; Information Point
                </h2>

                <p style={{ color: "#8da0bc", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: "680px", marginBottom: "30px" }}>
                  This website serves as an official communication and information point for former GPP members in connection with the ongoing settlement and distribution process.{" "}
                  <strong style={{ color: "#c9a84c" }}>
                    If you have received an email from GPP, please reply directly to that email to begin or complete the verification process.
                  </strong>
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
                  {[
                    "Only communicate through the official email provided in our correspondence",
                    "Do not share personal information through any unofficial channel",
                    "Member account information is available only after verification is complete",
                    "This is the only official website: globalpensionpolicy.com",
                  ].map((point, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.28)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                        <CheckCircle2 size={12} color="#c9a84c" strokeWidth={2.5} />
                      </div>
                      <span style={{ fontSize: "0.875rem", color: "#8da0bc", lineHeight: 1.65 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
