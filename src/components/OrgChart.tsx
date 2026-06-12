import "./OrgChart.css";

export type OrgNode = {
  label: string;
  children?: OrgNode[];
};

type OrgChartNodeProps = OrgNode & {
  clickableLabels?: string[];
  onLabelClick?: (label: string) => void;
};

function OrgChartNode({
  label,
  children,
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
      {children && children.length > 0 && (
        <ul>
          {children.map((child) => (
            <OrgChartNode
              key={child.label}
              {...child}
              clickableLabels={clickableLabels}
              onLabelClick={onLabelClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function OrgChart({
  label,
  children,
  compact = false,
  large = false,
  clickableLabels,
  onLabelClick,
}: OrgNode & {
  compact?: boolean;
  large?: boolean;
  clickableLabels?: string[];
  onLabelClick?: (label: string) => void;
}) {
  const chartClass = [
    "org-chart",
    compact ? "org-chart--compact" : "",
    large ? "org-chart--large" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`org-chart-wrap${compact ? " org-chart-wrap--compact" : ""}${large ? " org-chart-wrap--large" : ""}`}>
      <div className={chartClass}>
        <ul>
          <OrgChartNode
            label={label}
            children={children}
            clickableLabels={clickableLabels}
            onLabelClick={onLabelClick}
          />
        </ul>
      </div>
    </div>
  );
}
