import React from "react";

export function scrollToConsultation(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  if (typeof window !== "undefined") {
    const el = document.getElementById("consultation");
    if (el) {
      const headerHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - headerHeight);
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else {
      window.location.href = "/#consultation";
    }
  }
}
