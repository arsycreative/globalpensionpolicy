"use client";
import { useEffect } from "react";
import { X, MailOpen, ShieldCheck, BadgeCheck, ArrowRight } from "lucide-react";

export default function VerificationModal({ onClose }) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const steps = [
    { icon: <MailOpen size={18} color="#c9a84c" strokeWidth={1.8} />, title: "Check Your Email", desc: "Look for an official email from GPP in your inbox, including spam/junk folders." },
    { icon: <ArrowRight size={18} color="#c9a84c" strokeWidth={1.8} />, title: "Reply Directly", desc: "Reply to that email to begin the contact verification process. Do not use any other channel." },
    { icon: <BadgeCheck size={18} color="#c9a84c" strokeWidth={1.8} />, title: "Complete Verification", desc: "Once your details are verified, you will receive secure access to the member portal." },
  ];

  return (
    <div
      id="verification-modal-backdrop"
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(6, 13, 26, 0.82)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.25s ease",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          maxWidth: "480px",
          width: "100%",
          background: "rgba(13, 30, 56, 0.96)",
          border: "1px solid rgba(201,168,76,0.28)",
          borderRadius: "18px",
          padding: "36px",
          position: "relative",
          boxShadow: "0 0 60px rgba(201,168,76,0.1), 0 30px 80px rgba(0,0,0,0.6)",
          animation: "slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* Corner glow */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "160px", height: "160px", background: "radial-gradient(circle at top right, rgba(201,168,76,0.1) 0%, transparent 70%)", borderRadius: "0 18px 0 0", pointerEvents: "none" }} />

        {/* Close button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          style={{
            position: "absolute", top: "16px", right: "16px",
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: "8px",
            width: "32px", height: "32px",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#8da0bc",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.15)"; e.currentTarget.style.color = "#c9a84c"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; e.currentTarget.style.color = "#8da0bc"; }}
        >
          <X size={15} />
        </button>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
          <div style={{ width: "50px", height: "50px", borderRadius: "13px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <ShieldCheck size={24} color="#c9a84c" strokeWidth={1.6} />
          </div>
          <div>
            <h2 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#e8edf5", marginBottom: "3px" }}>
              Access Requires Verification
            </h2>
            <p style={{ fontSize: "12px", color: "#4a6080", letterSpacing: "0.04em" }}>
              Complete the steps below to unlock your account
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(201,168,76,0.12)", marginBottom: "24px" }} />

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: "14px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(201,168,76,0.09)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: "1px", flex: 1, background: "rgba(201,168,76,0.12)", minHeight: "16px" }} />
                )}
              </div>
              <div style={{ paddingBottom: i < steps.length - 1 ? "16px" : 0 }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#e8edf5", marginBottom: "4px" }}>{step.title}</div>
                <div style={{ fontSize: "12px", color: "#8da0bc", lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "10px", padding: "14px 16px", marginBottom: "22px" }}>
          <p style={{ fontSize: "11.5px", color: "#8da0bc", lineHeight: 1.65 }}>
            <strong style={{ color: "#c9a84c" }}>Note:</strong> If you have not received an email from GPP, your record may not yet be in our active outreach queue. Our team is processing members in stages.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onClose}
          className="btn-gold"
          style={{ width: "100%", padding: "13px", borderRadius: "10px", fontSize: "13px", letterSpacing: "0.06em" }}
        >
          UNDERSTOOD — CLOSE
        </button>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: scale(0.95) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
