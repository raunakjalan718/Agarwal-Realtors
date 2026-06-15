"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  threshold?: number;   // 0–1, how much of element must be visible
  rootMargin?: string;  // e.g. "0px 0px -80px 0px"
  once?: boolean;       // animate only on first entry (default true)
}

/**
 * useScrollReveal — attaches an IntersectionObserver to a container ref.
 * When children with [data-reveal] enter the viewport, the class
 * "revealed" is added, triggering CSS animations defined per-component.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <section ref={ref}>
 *     <h2 data-reveal>...</h2>
 *   </section>
 */
export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = options;

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("revealed");
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
