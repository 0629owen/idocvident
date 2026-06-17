"use client";

import { useEffect, useState } from "react";
import { PRESENTATION_SECTIONS } from "@/lib/presentation-sections";

export function SlideNavigation() {
  const [activeId, setActiveId] = useState(PRESENTATION_SECTIONS[0].id);

  const activeIndex = PRESENTATION_SECTIONS.findIndex(({ id }) => id === activeId);

  const goToSlide = (index: number) => {
    const section = PRESENTATION_SECTIONS[index];
    if (!section) return;
    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { threshold: [0.15, 0.35, 0.55] },
    );

    PRESENTATION_SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="slide-nav hidden lg:flex" aria-label="Slide navigation">
      <button
        type="button"
        className="slide-arrow"
        onClick={() => goToSlide(activeIndex - 1)}
        disabled={activeIndex <= 0}
        aria-label="Previous section"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 16l-6-6h12l-6 6z" />
        </svg>
      </button>

      <div className="nav-dots">
        {PRESENTATION_SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`nav-dot${activeId === id ? " active" : ""}`}
            aria-label={label}
            aria-current={activeId === id ? "true" : undefined}
            onClick={() => {
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        ))}
      </div>

      <button
        type="button"
        className="slide-arrow"
        onClick={() => goToSlide(activeIndex + 1)}
        disabled={activeIndex >= PRESENTATION_SECTIONS.length - 1}
        aria-label="Next section"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 8l6 6H6l6-6z" />
        </svg>
      </button>
    </nav>
  );
}
