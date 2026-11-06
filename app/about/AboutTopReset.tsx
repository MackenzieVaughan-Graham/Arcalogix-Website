"use client";

import { useLayoutEffect } from "react";

/**
 * Ensures the standalone /about route starts at its top even when reached
 * from a long, smooth-scrolling homepage or restored from browser history.
 * Does not change the scroll behaviour of the homepage or About's own anchors.
 */
export default function AboutTopReset() {
  useLayoutEffect(() => {
    const html = document.documentElement;
    const initialBehavior = html.style.scrollBehavior;
    const initialRestoration = window.history.scrollRestoration;
    let restoreFrame: number | null = null;

    window.history.scrollRestoration = "manual";

    const resetToTop = () => {
      // Preserve explicit links to sections *inside* About, if any.
      if (window.location.hash && window.location.hash !== "#about-top") return;
      if (restoreFrame !== null) window.cancelAnimationFrame(restoreFrame);
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      restoreFrame = window.requestAnimationFrame(() => {
        html.style.scrollBehavior = initialBehavior;
        restoreFrame = null;
      });
    };

    resetToTop();
    // Addresses browser restoration on load / back-forward cache.
    window.addEventListener("pageshow", resetToTop);

    return () => {
      window.removeEventListener("pageshow", resetToTop);
      if (restoreFrame !== null) window.cancelAnimationFrame(restoreFrame);
      html.style.scrollBehavior = initialBehavior;
      window.history.scrollRestoration = initialRestoration;
    };
  }, []);

  return null;
}
