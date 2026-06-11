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

const RECENT_ACTIVITY = [
  ["Deploy v2.4.1", "Production", "2 min ago"],
  ["Invoice #4821 paid", "Billing", "18 min ago"],
  ["New user invited", "Acme Corp", "1 hr ago"],
  ["API key rotated", "Security", "3 hr ago"],
];

export default function App() {
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
      </Stack>

      <Stack gap={16} style={{ flex: 1, padding: 24, minWidth: 0 }}>
        <Stack gap={4}>
          <H1>Overview</H1>
          <Text tone="secondary">Summary metrics and activity</Text>
        </Stack>

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
      </Stack>
    </Row>
  );
}
