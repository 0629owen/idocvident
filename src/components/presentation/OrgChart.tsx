"use client";

import "./org-chart.css";

export type OrgNode = {
  label: string;
  children?: readonly OrgNode[];
};

type OrgChartNodeProps = {
  label: string;
  nodes?: readonly OrgNode[];
  clickableLabels?: string[];
  onLabelClick?: (label: string) => void;
};

function OrgChartNode({
  label,
  nodes,
  clickableLabels,
  onLabelClick,
}: OrgChartNodeProps) {
  const clickable = clickableLabels?.includes(label);

  return (
    <li>
      {clickable ? (
        <button
          type="button"
          className="org-box org-box--clickable"
          onClick={() => onLabelClick?.(label)}
        >
          {label}
        </button>
      ) : (
        <div className="org-box">{label}</div>
      )}
      {nodes && nodes.length > 0 && (
        <ul>
          {nodes.map((child) => (
            <OrgChartNode
              key={child.label}
              label={child.label}
              nodes={child.children}
              clickableLabels={clickableLabels}
              onLabelClick={onLabelClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export function OrgChart({
  label,
  children,
  large = false,
  clickableLabels,
  onLabelClick,
}: OrgNode & {
  large?: boolean;
  clickableLabels?: string[];
  onLabelClick?: (label: string) => void;
}) {
  return (
    <div className="org-chart-container--nav rounded-xl border border-lab-green-100 bg-white">
      <div className={`org-chart-wrap ${large ? "org-chart--large" : ""}`}>
        <div className={`org-chart ${large ? "org-chart--large" : ""}`}>
          <ul>
            <OrgChartNode
              label={label}
              nodes={children}
              clickableLabels={clickableLabels}
              onLabelClick={onLabelClick}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
