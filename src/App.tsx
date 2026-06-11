import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Row,
  Spacer,
  Stack,
  Stat,
  Table,
  Text,
  Toggle,
} from "./components/ui";

type Section = "overview" | "analytics" | "users" | "projects" | "settings";

const MENU_ITEMS: { id: Section; label: string; description: string }[] = [
  { id: "overview", label: "Overview", description: "Summary metrics and activity" },
  { id: "analytics", label: "Analytics", description: "Traffic and conversion trends" },
  { id: "users", label: "Users", description: "Team members and roles" },
  { id: "projects", label: "Projects", description: "Active workstreams" },
  { id: "settings", label: "Settings", description: "Workspace preferences" },
];

const RECENT_ACTIVITY = [
  ["Deploy v2.4.1", "Production", "2 min ago"],
  ["Invoice #4821 paid", "Billing", "18 min ago"],
  ["New user invited", "Acme Corp", "1 hr ago"],
  ["API key rotated", "Security", "3 hr ago"],
];

const USERS = [
  ["Alex Rivera", "Admin", "Active"],
  ["Jordan Kim", "Editor", "Active"],
  ["Sam Patel", "Viewer", "Active"],
  ["Morgan Lee", "Editor", "Away"],
  ["Casey Wong", "Admin", "Active"],
];

const PROJECTS = [
  ["Platform migration", "In progress", "68%"],
  ["Mobile redesign", "Review", "92%"],
  ["Billing overhaul", "Planning", "24%"],
  ["Docs refresh", "In progress", "45%"],
];

const TRAFFIC_DATA = [
  { day: "Mon", pageViews: 4200, signUps: 120 },
  { day: "Tue", pageViews: 5100, signUps: 145 },
  { day: "Wed", pageViews: 4800, signUps: 132 },
  { day: "Thu", pageViews: 6200, signUps: 178 },
  { day: "Fri", pageViews: 5900, signUps: 165 },
  { day: "Sat", pageViews: 3100, signUps: 88 },
  { day: "Sun", pageViews: 2800, signUps: 74 },
];

const CONVERSION_DATA = [
  { page: "Landing", visitors: 12400, conversions: 1860 },
  { page: "Pricing", visitors: 8200, conversions: 1312 },
  { page: "Docs", visitors: 6100, conversions: 488 },
  { page: "Blog", visitors: 4300, conversions: 301 },
  { page: "Changelog", visitors: 1900, conversions: 95 },
];

const chartStyle = {
  fontSize: 12,
  fill: "var(--text-secondary)",
};

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

function AnalyticsSection() {
  return (
    <Stack gap={24}>
      <Stack gap={8}>
        <H2>Weekly traffic</H2>
        <div style={{ height: 220 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={TRAFFIC_DATA}>
              <CartesianGrid stroke="var(--stroke)" strokeDasharray="3 3" />
              <XAxis dataKey="day" tick={chartStyle} />
              <YAxis tick={chartStyle} />
              <Tooltip
                contentStyle={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--stroke)",
                  borderRadius: 6,
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="pageViews" name="Page views" stroke="#38bdf8" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="signUps" name="Sign-ups" stroke="#22c55e" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <Text tone="tertiary" size="small">
          Source: product analytics · last 7 days
        </Text>
      </Stack>

      <Stack gap={8}>
        <H2>Conversion by page</H2>
        <div style={{ height: 220 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={CONVERSION_DATA} layout="vertical">
              <CartesianGrid stroke="var(--stroke)" strokeDasharray="3 3" />
              <XAxis type="number" tick={chartStyle} />
              <YAxis type="category" dataKey="page" tick={chartStyle} width={80} />
              <Tooltip
                contentStyle={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--stroke)",
                  borderRadius: 6,
                }}
              />
              <Legend />
              <Bar dataKey="visitors" name="Visitors" fill="#38bdf8" radius={[0, 4, 4, 0]} />
              <Bar dataKey="conversions" name="Conversions" fill="#3b82f6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <Text tone="tertiary" size="small">
          Source: product analytics · last 30 days
        </Text>
      </Stack>
    </Stack>
  );
}

function UsersSection() {
  return (
    <Stack gap={8}>
      <Row gap={8} align="center">
        <H2>Team members</H2>
        <Spacer />
        <Button variant="primary">Invite user</Button>
      </Row>
      <Table
        headers={["Name", "Role", "Status"]}
        rows={USERS}
        rowTone={["success", "neutral", "success", "warning", "success"]}
      />
      <Text tone="tertiary" size="small">
        Source: workspace directory · 5 members
      </Text>
    </Stack>
  );
}

function ProjectsSection() {
  return (
    <Stack gap={16}>
      <H2>Active projects</H2>
      <Grid columns={2} gap={12}>
        {PROJECTS.map(([name, status, progress]) => (
          <Card key={name}>
            <CardHeader trailing={status}>{name}</CardHeader>
            <CardBody>
              <Text tone="secondary">{progress} complete</Text>
            </CardBody>
          </Card>
        ))}
      </Grid>
      <Text tone="tertiary" size="small">
        Source: project tracker · 4 active workstreams
      </Text>
    </Stack>
  );
}

function SettingsSection() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <Stack gap={20}>
      <Stack gap={8}>
        <H2>Notifications</H2>
        <Card variant="borderless">
          <CardBody style={{ padding: 0 }}>
            <Stack gap={0}>
              <Row gap={12} align="center" style={{ padding: "12px 0" }}>
                <Stack gap={2} style={{ flex: 1 }}>
                  <Text weight="semibold">Email alerts</Text>
                  <Text tone="secondary" size="small">
                    Receive incident and billing notifications
                  </Text>
                </Stack>
                <Toggle checked={emailAlerts} onChange={setEmailAlerts} />
              </Row>
              <Divider />
              <Row gap={12} align="center" style={{ padding: "12px 0" }}>
                <Stack gap={2} style={{ flex: 1 }}>
                  <Text weight="semibold">Weekly digest</Text>
                  <Text tone="secondary" size="small">
                    Summary of usage and activity every Monday
                  </Text>
                </Stack>
                <Toggle checked={weeklyDigest} onChange={setWeeklyDigest} />
              </Row>
            </Stack>
          </CardBody>
        </Card>
      </Stack>

      <Stack gap={8}>
        <H2>Workspace</H2>
        <Card variant="borderless">
          <CardBody style={{ padding: 0 }}>
            <Row gap={12} align="center" style={{ padding: "12px 0" }}>
              <Stack gap={2} style={{ flex: 1 }}>
                <Text weight="semibold">Maintenance mode</Text>
                <Text tone="secondary" size="small">
                  Show a banner and restrict non-admin access
                </Text>
              </Stack>
              <Toggle checked={maintenanceMode} onChange={setMaintenanceMode} />
            </Row>
          </CardBody>
        </Card>
      </Stack>

      <Row gap={8}>
        <Button variant="primary">Save changes</Button>
        <Button variant="ghost">Reset defaults</Button>
      </Row>
    </Stack>
  );
}

function MainContent({ section }: { section: Section }) {
  switch (section) {
    case "overview":
      return <OverviewSection />;
    case "analytics":
      return <AnalyticsSection />;
    case "users":
      return <UsersSection />;
    case "projects":
      return <ProjectsSection />;
    case "settings":
      return <SettingsSection />;
  }
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

        <MainContent section={section} />
      </Stack>
    </Row>
  );
}
