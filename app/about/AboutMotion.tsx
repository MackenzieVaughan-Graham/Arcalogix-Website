"use client";

import { useEffect } from "react";
import styles from "./about.module.css";

/** A light-touch reveal effect scoped only to the About page. */
export default function AboutMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('main[data-page="arcalogix-about"] [data-about-reveal]')
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(styles.revealPending);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -28px 0px" });

    elements.forEach((element) => {
      // Content in the initial viewport is always visible; only animate what
      // actually enters view later. Text remains visible without JavaScript.
      if (element.getBoundingClientRect().top > window.innerHeight * 0.9) {
        element.classList.add(styles.revealPending);
      }
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove(styles.revealPending));
    };
  }, []);

  return null;
}
