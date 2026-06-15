"use client";

import styles from "./HeroSection.module.css";

/**
 * HeroSection — Full-viewport hero with:
 * - Background image + heavy red overlay (matching reference)
 * - Centered title + subtitle with reveal animation
 * - Bouncing scroll-arrow indicator at the bottom
 */
export default function HeroSection() {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={styles.hero}
      aria-label="Hero — Agarwal Realtors"
    >
      {/* ── Background image layer ── */}
      <div className={styles.heroBg} aria-hidden="true" />

      {/* ── Red overlay layer ── */}
      <div className={styles.heroOverlay} aria-hidden="true" />

      {/* ── Centered hero text ── */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Agarwal Realtors</h1>
        <p className={styles.heroSubtitle}>
          Property Dealer&nbsp;|&nbsp;Real Estate Consultant&nbsp;|&nbsp;Sohna Dhunela
        </p>
      </div>

      {/* ── Scroll indicator ── */}
      <button
        id="scroll-down-btn"
        className={styles.scrollIndicator}
        onClick={handleScrollDown}
        aria-label="Scroll down to explore more"
        title="Scroll down"
      >
        {/* Circle with SVG arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={styles.arrowIcon}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </button>
    </section>
  );
}
