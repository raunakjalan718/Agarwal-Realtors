"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import styles from "./ExpertiseSection.module.css";

const services = [
  {
    id: "exp-1",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="14" width="36" height="28" rx="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 14V10a8 8 0 0 1 16 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Property Consultation",
    desc: "Guided site visits, price negotiation, and seamless coordination from search to handover.",
  },
  {
    id: "exp-2",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 38V18L24 8l14 10v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="18" y="26" width="12" height="12" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 38h36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Legal & Documentation",
    desc: "Registry, title verification, NOC procurement, and mutation — watertight and stress-free.",
  },
  {
    id: "exp-3",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 36l6-6 6 4 10-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="6" y="8" width="36" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Market Analysis",
    desc: "Hyperlocal data on rates, infrastructure projects, and demand trends in Sohna-Dhunela.",
  },
  {
    id: "exp-4",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 40V20l16-12 16 12v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 40V28h16v12" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Investment Advisory",
    desc: "Build a diversified real estate portfolio with expert guidance on entry, exit, and ROI.",
  },
  {
    id: "exp-5",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 14v10l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Resale & Rental",
    desc: "We connect owners with qualified buyers and tenants, handling all negotiations and paperwork.",
  },
  {
    id: "exp-6",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M24 6l4 10h10l-8 6 3 10-9-6-9 6 3-10-8-6h10L24 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: "NRI & Remote Clients",
    desc: "Virtual tours, POA coordination, and dedicated management for outstation investors.",
  },
];

export default function ExpertiseSection() {
  const ref = useScrollReveal({ threshold: 0.08 });

  return (
    <section
      id="expertise"
      className={styles.expertise}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="expertise-heading"
    >
      <div className={styles.dividerTop} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow} data-reveal="fade">What We Do Best</p>
          <h2
            id="expertise-heading"
            className={styles.heading}
            data-reveal
            style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          >
            Our Expertise
          </h2>
          <p
            className={styles.subheading}
            data-reveal
            style={{ "--reveal-delay": "0.16s" } as React.CSSProperties}
          >
            Full-spectrum real estate services for buyers, sellers,
            investors, and NRI clients.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className={styles.card}
              data-reveal
              style={{ "--reveal-delay": `${0.08 + i * 0.07}s` } as React.CSSProperties}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                {svc.icon}
              </div>
              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <p className={styles.cardDesc}>{svc.desc}</p>
              <div className={styles.cardAccent} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
