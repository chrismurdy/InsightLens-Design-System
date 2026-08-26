/** @jsxRuntime classic */
/* Assets › Dashboard — reconstructed from the tablet screenshot. */

function AssetsScreen() {
  const { StatCard, BarChart, Alert, Button } = window.DS;
  return (
    <React.Fragment>
      <ViewHeader
        crumbs={[{ label: "Assets" }, { label: "Dashboard" }]}
        title="Assets Overview"
        actions={[<Button key="e" variant="secondary" size="sm" icon="download" iconPosition="left">Export</Button>]}
      />
      <Alert tone="warning" title="Scan data for 6 locations is older than 90 days"
             style={{ marginBottom: 28 }}>Re-scan window opens 12 March.</Alert>

      <div style={{ display: "flex", gap: 56, marginBottom: 40 }}>
        <StatCard value="30" label="Locations Count" bordered={false} />
        <StatCard value="477" label="Assets Count" bordered={false} />
        <div style={{ marginLeft: "auto" }} className="il-caption">Data last refreshed 2/2/2026 3:05:04 PM</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44 }}>
        <BarChart title="Assets by Group" height={200}
          data={[{ label: "Wayfinding", value: 168 }, { label: "Exterior", value: 96 },
                 { label: "Digital", value: 84 }, { label: "Interior", value: 71 }, { label: "Temporary", value: 58 }]} />
        <BarChart title="Assets by Zone" height={200} color="var(--il-chart-2)"
          data={[{ label: "Entry", value: 112 }, { label: "Client line", value: 88 },
                 { label: "Counter", value: 74 }, { label: "Offices", value: 121 }, { label: "Back of house", value: 82 }]} />
      </div>
      <p className="il-caption" style={{ marginTop: 18 }}>
        Group and zone breakdowns are illustrative; only the two counts above were legible in the source screenshots.
      </p>
    </React.Fragment>
  );
}
