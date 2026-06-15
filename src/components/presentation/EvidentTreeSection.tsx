"use client";

import { useState } from "react";
import {
  EVIDENT_NAV_SECTIONS,
  EVIDENT_SECTION_TOPICS,
  EVIDENT_TREE,
  type EvidentNavSection,
} from "@/lib/evident-structure";
import { OrgChart } from "@/components/presentation/OrgChart";

export function EvidentTreeSection() {
  const [selectedNavSection, setSelectedNavSection] =
    useState<EvidentNavSection>("Cases");

  const handleNavSectionClick = (label: string) => {
    if (!EVIDENT_NAV_SECTIONS.includes(label as EvidentNavSection)) return;
    setSelectedNavSection(label as EvidentNavSection);
    document.getElementById("evident-topics")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <p className="tree-hint">Click a section to view its pages</p>
      <OrgChart
        {...EVIDENT_TREE}
        large
        clickableLabels={[...EVIDENT_NAV_SECTIONS]}
        onLabelClick={handleNavSectionClick}
      />

      <div id="evident-topics" className="mt-12 scroll-mt-24">
        <h3 className="text-2xl font-semibold text-foreground">{selectedNavSection}</h3>
        <p className="tree-hint">
          Pages under {selectedNavSection} —{" "}
          <a href="#evident-tree" className="back-link">
            back to navigation
          </a>
        </p>
        <div className="topic-grid">
          {EVIDENT_SECTION_TOPICS[selectedNavSection].map((topic) => (
            <div key={topic} className="topic-box">
              {topic}
            </div>
          ))}
        </div>
        <div className="section-tabs">
          {EVIDENT_NAV_SECTIONS.map((section) => (
            <button
              key={section}
              type="button"
              className={`section-tab${selectedNavSection === section ? " active" : ""}`}
              onClick={() => setSelectedNavSection(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
