"use client";

import Image from "next/image";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import styles from "./AboutSection.module.css";

/**
 * AboutSection — Black background / Red accents
 * Split layout: punchy copy + stats left, image right
 */
export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      className={styles.about}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="about-heading"
    >
      {/* Clean line divider */}
      <div className={styles.dividerTop} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ── Text Column ── */}
        <div className={styles.textCol}>
          <p
            className={styles.eyebrow}
            data-reveal="fade"
          >
            Established 2009 · Sohna & Dhunela
          </p>

          <h2
            id="about-heading"
            className={styles.heading}
            data-reveal="slide-left"
            style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          >
            Built on Trust.<br />Driven by Results.
          </h2>

          <p
            className={styles.body}
            data-reveal
            style={{ "--reveal-delay": "0.16s" } as React.CSSProperties}
          >
            For over 15 years, Agarwal Realtors has been Gurugram's most
            trusted name in property dealing — delivering transparency,
            hyperlocal expertise, and end-to-end support across Sohna
            and Dhunela.
          </p>

          {/* Bullet differentiators */}
          <ul
            className={styles.bullets}
            data-reveal
            style={{ "--reveal-delay": "0.24s" } as React.CSSProperties}
          >
            <li>Deep-rooted local market knowledge</li>
            <li>Transparent, zero-surprise pricing</li>
            <li>Full legal & documentation support</li>
          </ul>

          {/* Stats */}
          <ul
            className={styles.stats}
            data-reveal
            style={{ "--reveal-delay": "0.32s" } as React.CSSProperties}
          >
            {[
              { num: "500+", label: "Deals Closed" },
              { num: "15+",  label: "Years Active" },
              { num: "98%",  label: "Satisfaction"  },
            ].map(({ num, label }) => (
              <li key={label} className={styles.statItem}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Image Column ── */}
        <div
          className={styles.imageCol}
          data-reveal="slide-right"
          style={{ "--reveal-delay": "0.12s" } as React.CSSProperties}
        >
          <div className={styles.imageFrame}>
            <Image
              src="/image1.jpg"
              alt="Agarwal Realtors — Site visit in Sohna"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
              style={{ objectFit: "cover" }}
            />
            <div className={styles.cornerAccentTL} aria-hidden="true" />
            <div className={styles.cornerAccentBR} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
