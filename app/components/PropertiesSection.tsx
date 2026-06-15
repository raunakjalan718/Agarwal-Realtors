"use client";

import Image from "next/image";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import styles from "./PropertiesSection.module.css";

const properties = [
  {
    id: "prop-1",
    type: "Residential Apartment",
    title: "Luxury Apartments",
    location: "Sector 36, Sohna Road, Gurugram",
    price: "₹ 65 L – 1.2 Cr",
    tag: "Ready to Move",
    area: "1,050 – 1,850 sq.ft",
    beds: "2 / 3 BHK",
    image: "/apartment.jpg",
  },
  {
    id: "prop-2",
    type: "Residential Plot",
    title: "Premium Plots",
    location: "Dhunela Village, Sohna, Haryana",
    price: "₹ 18 L – 55 L",
    tag: "Investment Pick",
    area: "100 – 500 sq. yards",
    beds: "Freehold",
    image: "/plot.jpg",
  },
  {
    id: "prop-3",
    type: "Commercial Space",
    title: "SCO Spaces",
    location: "Sohna Main Market, Gurugram",
    price: "₹ 45 L – 1.8 Cr",
    tag: "High ROI",
    area: "300 – 1,200 sq.ft",
    beds: "Ground + 2 Floors",
    image: "/SCO.jpg",
  },
  {
    id: "prop-4",
    type: "Farmhouse",
    title: "Luxury Farmhouses",
    location: "Aravalli Foothills, Sohna",
    price: "₹ 1.5 Cr – 4 Cr",
    tag: "New Launch",
    area: "500 – 2,000 sq. yards",
    beds: "4 / 5 BHK Villas",
    image: "/farmhouse.jpg",
  },
];

/**
 * PropertiesSection — Red background / Black text
 * Modern card grid with hover elevation effect
 */
export default function PropertiesSection() {
  const ref = useScrollReveal({ threshold: 0.08 });

  return (
    <section
      id="properties"
      className={styles.properties}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="properties-heading"
    >
      <div className={styles.dividerTop} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ── Header ── */}
        <div className={styles.sectionHeader}>
          <p
            className={styles.eyebrow}
            data-reveal="fade"
          >
            Handpicked Listings
          </p>
          <h2
            id="properties-heading"
            className={styles.heading}
            data-reveal
            style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
          >
            Our Properties
          </h2>
          <p
            className={styles.subheading}
            data-reveal
            style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
          >
            From residential plots to premium commercial spaces — every
            listing curated for value, location, and long-term growth.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className={styles.grid}>
          {properties.map((prop, i) => (
            <article
              key={prop.id}
              id={prop.id}
              className={styles.card}
              data-reveal="scale"
              style={{ "--reveal-delay": `${0.1 + i * 0.1}s` } as React.CSSProperties}
              aria-label={prop.title}
            >
              {/* Image */}
              <div className={styles.cardImageWrap}>
                <Image
                  src={prop.image}
                  alt={`${prop.title} — ${prop.location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.cardImage}
                  style={{ objectFit: "cover" }}
                />
                <span className={styles.tag}>{prop.tag}</span>
              </div>

              {/* Details */}
              <div className={styles.cardBody}>
                <p className={styles.propType}>{prop.type}</p>
                <h3 className={styles.propTitle}>{prop.title}</h3>
                <p className={styles.propLocation}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {prop.location}
                </p>

                <div className={styles.propMeta}>
                  <span>{prop.area}</span>
                  <span className={styles.metaDot} />
                  <span>{prop.beds}</span>
                </div>

                <div className={styles.cardFooter}>
                  <strong className={styles.price}>{prop.price}</strong>
                  <button
                    id={`view-${prop.id}`}
                    className={styles.viewBtn}
                    aria-label={`View details for ${prop.title}`}
                  >
                    View Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div
          className={styles.ctaRow}
          data-reveal="fade"
          style={{ "--reveal-delay": "0.5s" } as React.CSSProperties}
        >
          <a href="#contact" className={styles.ctaBtn} id="properties-cta">
            Enquire About Any Property
          </a>
        </div>
      </div>
    </section>
  );
}
