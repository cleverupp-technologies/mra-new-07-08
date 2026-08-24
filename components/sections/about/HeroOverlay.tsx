import React from "react";

/**
 * Reusable Cinematic Hero Overlay
 *
 * Exact same overlay implementation used in Homepage & About Hero:
 * - Desktop (≥ lg): 90-degree directional linear-gradient fading from dark navy (rgba(3,8,18,0.88))
 *   on the left behind text to transparent (rgba(3,8,18,0.15)) on the right.
 * - Mobile (< lg): Balanced ambient vertical gradient (from-slate-950/50 via-slate-950/60 to-slate-950/80).
 */
export function HeroOverlay() {
  return (
    <>
      {/* Mobile Ambient Soft Cream Gradient Overlay (< lg) */}
      <div
        className="lg:hidden absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(250, 248, 241, 0.96) 0%, rgba(250, 248, 241, 0.85) 45%, rgba(250, 248, 241, 0.45) 75%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Desktop Directional Soft Cream Gradient Overlay (≥ lg) */}
      <div
        className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(250, 248, 241, 0.97) 0%, rgba(250, 248, 241, 0.90) 38%, rgba(250, 248, 241, 0.55) 68%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}

export default HeroOverlay;
