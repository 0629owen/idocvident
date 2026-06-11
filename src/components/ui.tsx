import type { CSSProperties, ReactNode } from "react";

type Tone = "neutral" | "success" | "warning" | "info";

export function Stack({
  children,
  gap = 0,
  style,
  className,
}: {
  children: ReactNode;
  gap?: number;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap, ...style }}>
      {children}
    </div>
  );
}

export function Row({
  children,
  gap = 0,
  align = "stretch",
  style,
}: {
  children: ReactNode;
  gap?: number;
  align?: CSSProperties["alignItems"];
  style?: CSSProperties;
}) {
  return (
    <div style={{ display: "flex", alignItems: align, gap, ...style }}>
      {children}
    </div>
  );
}

export function Spacer() {
  return <div style={{ flex: 1 }} />;
}

export function H1({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return <h1 style={{ margin: 0, fontSize: 28, fontWeight: 600, ...style }}>{children}</h1>;
}

export function H2({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600, ...style }}>{children}</h2>;
}

export function H3({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, ...style }}>{children}</h3>;
}

export function Text({
  children,
  tone = "primary",
  size = "medium",
  weight,
  style,
}: {
  children: ReactNode;
  tone?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium";
  weight?: "semibold";
  style?: CSSProperties;
}) {
  const color =
    tone === "secondary"
      ? "var(--text-secondary)"
      : tone === "tertiary"
        ? "var(--text-tertiary)"
        : "var(--text-primary)";

  return (
    <span
      style={{
        color,
        fontSize: size === "small" ? 12 : 14,
        fontWeight: weight === "semibold" ? 600 : 400,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export function Divider() {
  return <hr style={{ border: "none", borderTop: "1px solid var(--stroke)", margin: 0 }} />;
}

export function Button({
  children,
  variant = "primary",
  onClick,
}: {
  children: ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
}) {
  const isPrimary = variant === "primary";

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "8px 14px",
        borderRadius: 6,
        border: isPrimary ? "none" : "1px solid var(--stroke)",
        background: isPrimary ? "var(--accent)" : "transparent",
        color: isPrimary ? "#fff" : "var(--text-secondary)",
        cursor: "pointer",
        fontSize: 13,
        fontWeight: 500,
      }}
    >
      {children}
    </button>
  );
}

export function Card({
  children,
  variant,
}: {
  children: ReactNode;
  variant?: "borderless";
}) {
  return (
    <div
      style={{
        background: variant === "borderless" ? "transparent" : "var(--bg-card)",
        border: variant === "borderless" ? "none" : "1px solid var(--stroke)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  trailing,
}: {
  children: ReactNode;
  trailing?: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        borderBottom: "1px solid var(--stroke)",
        fontSize: 14,
        fontWeight: 600,
      }}
    >
      <span>{children}</span>
      {trailing && (
        <span style={{ fontSize: 12, fontWeight: 400, color: "var(--text-secondary)" }}>
          {trailing}
        </span>
      )}
    </div>
  );
}

export function CardBody({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return <div style={{ padding: 16, ...style }}>{children}</div>;
}

export function Grid({
  children,
  columns,
  gap,
}: {
  children: ReactNode;
  columns: number;
  gap: number;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap,
      }}
    >
      {children}
    </div>
  );
}

const toneColors: Record<Tone, string> = {
  neutral: "var(--text-primary)",
  success: "var(--success)",
  warning: "var(--warning)",
  info: "var(--info)",
};

export function Stat({
  value,
  label,
  tone = "neutral",
}: {
  value: string;
  label: string;
  tone?: Tone;
}) {
  return (
    <div
      style={{
        padding: 16,
        background: "var(--bg-card)",
        border: "1px solid var(--stroke)",
        borderRadius: 8,
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 600, color: toneColors[tone] }}>{value}</div>
      <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

export function Table({
  headers,
  rows,
  columnAlign = [],
  rowTone = [],
}: {
  headers: string[];
  rows: string[][];
  columnAlign?: ("left" | "right")[];
  rowTone?: Tone[];
}) {
  return (
    <div style={{ border: "1px solid var(--stroke)", borderRadius: 8, overflow: "hidden" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ background: "var(--bg-chrome)" }}>
            {headers.map((header, i) => (
              <th
                key={header}
                style={{
                  padding: "10px 14px",
                  textAlign: columnAlign[i] ?? "left",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  borderBottom: "1px solid var(--stroke)",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ borderBottom: "1px solid var(--stroke)" }}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{
                    padding: "10px 14px",
                    textAlign: columnAlign[cellIndex] ?? "left",
                    color: rowTone[rowIndex] ? toneColors[rowTone[rowIndex]] : "var(--text-primary)",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        width: 40,
        height: 22,
        borderRadius: 11,
        border: "none",
        background: checked ? "var(--accent)" : "var(--stroke)",
        cursor: "pointer",
        position: "relative",
        transition: "background 0.15s",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          left: checked ? 21 : 3,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "#fff",
          transition: "left 0.15s",
        }}
      />
    </button>
  );
}
