"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "About Us",    href: "#about"      },
  { label: "Properties",  href: "#properties"  },
  { label: "Expertise",   href: "#expertise"   },
  { label: "Contact Us",  href: "#contact"     },
];

const socials = [
  {
    id: "footer-instagram",
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: "footer-facebook",
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    id: "footer-whatsapp",
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
  {
    id: "footer-youtube",
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="none" fill="currentColor" opacity="0.8"/>
      </svg>
    ),
  },
];

/**
 * Footer — Solid black / Red accents
 * Minimal: logo, quick links, socials, copyright
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Diagonal divider: red → black */}
      <div className={styles.dividerTop} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ── Brand column ── */}
        <div className={styles.brandCol}>
          <a href="#home" aria-label="Agarwal Realtors — Back to top" className={styles.logoLink}>
            <Image
              src="/logo.png"
              alt="Agarwal Realtors"
              height={38}
              width={150}
              className={styles.logo}
            />
          </a>
          <p className={styles.tagline}>
            Property Dealer & Real Estate Consultant<br />
            Sohna · Dhunela · Gurugram
          </p>
          {/* Socials */}
          <ul className={styles.socials} role="list">
            {socials.map(({ id, label, href, icon }) => (
              <li key={id}>
                <a
                  id={id}
                  href={href}
                  className={styles.socialLink}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Quick links ── */}
        <nav className={styles.linksCol} aria-label="Footer navigation">
          <h4 className={styles.colHeading}>Quick Links</h4>
          <ul className={styles.linksList} role="list">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.footerLink}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Contact snippet ── */}
        <div className={styles.contactCol}>
          <h4 className={styles.colHeading}>Contact</h4>
          <address className={styles.address}>
            <p>Sohna &amp; Dhunela, Gurugram</p>
            <p>Haryana — 122103</p>
            <a href="tel:+919876543210" className={styles.footerLink}>
              +91 98765 43210
            </a>
            <a href="mailto:info@agarwalrealtors.in" className={styles.footerLink}>
              info@agarwalrealtors.in
            </a>
          </address>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {year} Agarwal Realtors. All rights reserved.
        </p>
        <p className={styles.crafted}>
          Crafted with precision for Sohna &amp; Dhunela's premier real estate.
        </p>
      </div>
    </footer>
  );
}
