"use client";

import { useEffect } from "react";

/** Subtle one-time entrance reveals; never intercepts or locks the user's scroll. */
export default function ScrollEnhancer() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches || !("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>([
      ".hero-visual",
      ".journey-heading",
      ".simplified-final-cta .final-cta-inner",
      ".final-cta-inner",
    ].join(", "));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("scroll-motion-visible");
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.07 });
    elements.forEach((element) => {
      element.classList.add("scroll-motion-ready");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return null;
}
