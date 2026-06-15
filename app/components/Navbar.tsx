"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

/**
 * Navbar — Fixed top navigation bar
 *
 * Features:
 * - Solid black background, always visible
 * - Brand name + nav links in brand red
 * - Hover: animated underline expand + brightness lift
 * - Mobile: hamburger → full-screen overlay menu
 * - Entrance: slides down on first render
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const navLinks = [
    { label: "About Us",   href: "#about"   },
    { label: "Expertise",  href: "#expertise" },
    { label: "Contact Us", href: "#contact"  },
  ];

  return (
    <>
      <header className={styles.navbar} role="banner">
        <nav className={styles.navInner} aria-label="Primary navigation">

          {/* ── Brand logo ── */}
          <a href="#home" className={styles.brand} aria-label="Agarwal Realtors — Home">
            <Image
              src="/logo.png"
              alt="Agarwal Realtors"
              height={42}
              width={160}
              className={styles.brandLogo}
              priority
            />
          </a>

          {/* ── Desktop links ── */}
          <ul className={styles.navLinks} role="list">
            {navLinks.map(({ label, href }, i) => (
              <li key={href} style={{ "--link-delay": `${0.1 + i * 0.08}s` } as React.CSSProperties}>
                <a
                  href={href}
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                  <span className={styles.linkUnderline} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          {/* ── Hamburger (mobile) ── */}
          <button
            id="hamburger-btn"
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        id="mobile-menu"
        className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <ul className={styles.mobileLinks} role="list">
          {navLinks.map(({ label, href }, i) => (
            <li
              key={href}
              className={styles.mobileLinkItem}
              style={{ "--item-delay": `${0.05 + i * 0.07}s` } as React.CSSProperties}
            >
              <a
                href={href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
