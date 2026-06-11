import { useState } from "react";
import {
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Row,
  Stack,
  Stat,
  Table,
  Text,
} from "./components/ui";

type Section = "overview" | "cases";

const MENU_ITEMS: { id: Section; label: string; description: string }[] = [
  { id: "overview", label: "Overview", description: "Summary metrics and activity" },
  { id: "cases", label: "Cases", description: "Active and closed cases" },
];

const RECENT_ACTIVITY = [
  ["Deploy v2.4.1", "Production", "2 min ago"],
  ["Invoice #4821 paid", "Billing", "18 min ago"],
  ["New user invited", "Acme Corp", "1 hr ago"],
  ["API key rotated", "Security", "3 hr ago"],
];

const CASES = [
  ["CASE-1042", "Billing dispute", "Open", "2 hr ago"],
  ["CASE-1041", "Login issue", "In review", "5 hr ago"],
  ["CASE-1040", "Refund request", "Closed", "1 day ago"],
  ["CASE-1039", "API outage", "Open", "2 days ago"],
];

function NavItem({
  label,
  description,
  active,
  onClick,
}: {
  label: string;
  description: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 2,
        width: "100%",
        padding: "8px 10px",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        textAlign: "left",
        background: active ? "var(--bg-hover)" : "transparent",
        color: active ? "var(--text-primary)" : "var(--text-secondary)",
      }}
    >
      <span style={{ fontSize: 13, fontWeight: active ? 600 : 400 }}>{label}</span>
      <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{description}</span>
    </button>
  );
}

function OverviewSection() {
  return (
    <Stack gap={20}>
      <Grid columns={4} gap={16}>
        <Stat value="12,847" label="Total users" tone="info" />
        <Stat value="$48.2k" label="Monthly revenue" />
        <Stat value="99.7%" label="Uptime" tone="success" />
        <Stat value="3" label="Open incidents" tone="warning" />
      </Grid>

      <Stack gap={8}>
        <H2>Recent activity</H2>
        <Table
          headers={["Event", "Source", "Time"]}
          rows={RECENT_ACTIVITY}
          columnAlign={["left", "left", "right"]}
        />
        <Text tone="tertiary" size="small">
          Source: workspace audit log · last 24 hours
        </Text>
      </Stack>
    </Stack>
  );
}

function CasesSection() {
  return (
    <Stack gap={8}>
      <H2>All cases</H2>
      <Table
        headers={["Case ID", "Subject", "Status", "Updated"]}
        rows={CASES}
        columnAlign={["left", "left", "left", "right"]}
        rowTone={["warning", "neutral", "success", "warning"]}
      />
      <Text tone="tertiary" size="small">
        Source: case management system · 4 cases
      </Text>
    </Stack>
  );
}

export default function App() {
  const [section, setSection] = useState<Section>("overview");
  const activeItem = MENU_ITEMS.find((item) => item.id === section)!;

  return (
    <Row gap={0} align="stretch" style={{ minHeight: "100vh" }}>
      <Stack
        gap={16}
        style={{
          width: 220,
          flexShrink: 0,
          padding: "16px 12px",
          background: "var(--bg-chrome)",
          borderRight: "1px solid var(--stroke)",
        }}
      >
        <Stack gap={4}>
          <H3 style={{ padding: "0 10px" }}>Console</H3>
          <Text tone="tertiary" size="small" style={{ padding: "0 10px" }}>
            Workspace dashboard
          </Text>
        </Stack>

        <Divider />

        <Stack gap={4}>
          {MENU_ITEMS.map((item) => (
            <NavItem
              key={item.id}
              label={item.label}
              description={item.description}
              active={section === item.id}
              onClick={() => setSection(item.id)}
            />
          ))}
        </Stack>
      </Stack>

      <Stack gap={16} style={{ flex: 1, padding: 24, minWidth: 0 }}>
        <Stack gap={4}>
          <H1>{activeItem.label}</H1>
          <Text tone="secondary">{activeItem.description}</Text>
        </Stack>

        {section === "overview" ? <OverviewSection /> : <CasesSection />}
      </Stack>
    </Row>
  );
}
