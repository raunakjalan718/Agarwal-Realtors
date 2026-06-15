"use client";

import { useState, FormEvent } from "react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const ref = useScrollReveal({ threshold: 0.06 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={styles.contact}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="contact-heading"
    >
      {/* Clean divider */}
      <div className={styles.dividerTop} aria-hidden="true" />

      {/* ── Dark elevated card on the red background ── */}
      <div
        className={styles.card}
        data-reveal
        style={{ "--reveal-delay": "0.05s" } as React.CSSProperties}
      >
        <div className={styles.cardInner}>
          {/* ── Left: Form column ── */}
          <div className={styles.formCol}>
            <p className={styles.eyebrow}>Get in Touch</p>
            <h2 id="contact-heading" className={styles.heading}>
              Let's Find Your<br />Perfect Property.
            </h2>
            <p className={styles.subtext}>
              Tell us what you're looking for — we respond within one business day.
            </p>

            {submitted ? (
              <div className={styles.successMsg} role="alert">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>Thank you! We'll be in touch shortly.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name" className={styles.label}>Full Name</label>
                    <input id="contact-name" name="name" type="text" className={styles.input} placeholder="Rahul Sharma" required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-phone" className={styles.label}>Phone</label>
                    <input id="contact-phone" name="phone" type="tel" className={styles.input} placeholder="+91 98765 43210" required />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>Email</label>
                  <input id="contact-email" name="email" type="email" className={styles.input} placeholder="you@email.com" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-requirement" className={styles.label}>Requirement</label>
                  <select id="contact-requirement" name="requirement" className={styles.input} required defaultValue="">
                    <option value="" disabled>Select your requirement</option>
                    <option value="buy">Buy a Property</option>
                    <option value="sell">Sell a Property</option>
                    <option value="rent">Rent / Lease</option>
                    <option value="invest">Investment Advisory</option>
                    <option value="legal">Legal Assistance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>Message</label>
                  <textarea id="contact-message" name="message" className={`${styles.input} ${styles.textarea}`} placeholder="Budget, preferred location, specific requirements…" rows={4} />
                </div>
                <button id="contact-submit" type="submit" className={styles.submitBtn}>
                  Send Enquiry
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* ── Divider ── */}
          <div className={styles.colDivider} aria-hidden="true" />

          {/* ── Right: Info column ── */}
          <div className={styles.infoCol}>
            <h3 className={styles.infoTitle}>Agarwal Realtors</h3>
            <p className={styles.infoTagline}>Property Dealer & Real Estate Consultant</p>

            <ul className={styles.infoList}>
              {[
                {
                  icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>,
                  text: "Sohna & Dhunela, Gurugram, Haryana",
                },
                {
                  icon: <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1z"/>,
                  text: "+91 98765 43210",
                  href: "tel:+919876543210",
                },
                {
                  icon: <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>,
                  text: "info@agarwalrealtors.in",
                  href: "mailto:info@agarwalrealtors.in",
                },
                {
                  icon: <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 0-2 0v-.07A8 8 0 0 1 4.07 9H5a1 1 0 0 0 0-2h-.93A8 8 0 0 1 11 4.07V5a1 1 0 0 0 2 0v-.93A8 8 0 0 1 19.93 9H19a1 1 0 0 0 0 2h.93A8 8 0 0 1 13 16.93z"/>,
                  text: "Mon – Sat: 9:00 AM – 7:00 PM",
                },
              ].map(({ icon, text, href }) => (
                <li key={text} className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">{icon}</svg>
                  </span>
                  {href ? (
                    <a href={href} className={styles.infoLink}>{text}</a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA to call */}
            <a href="tel:+919876543210" id="contact-call-btn" className={styles.callBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1z"/>
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
