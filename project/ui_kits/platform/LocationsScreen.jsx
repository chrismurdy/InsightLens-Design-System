/** @jsxRuntime classic */
/* Locations › Dashboard — reconstructed from the published screenshot. */

function LocationsScreen() {
  const { StatCard, DonutChart, BarChart, Button, Badge } = window.DS;
  return (
    <React.Fragment>
      <ViewHeader
        crumbs={[{ label: "Locations" }, { label: "Dashboard" }]}
        title="Locations Overview"
        actions={[
          <Button key="f" variant="ghost" size="sm" icon="filter_alt" iconPosition="left">Filter</Button>,
          <Button key="e" variant="secondary" size="sm" icon="download" iconPosition="left">Export</Button>,
        ]}
      />

      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 1fr", gap: 40, alignItems: "start" }}>
        <StatCard value="497" label="Number of Locations" bordered={false} />
        <DonutChart title="Digital upgrade" size={150}
          data={[{ label: "Complete", value: 61 }, { label: "Scheduled", value: 24 }, { label: "No", value: 15 }]} />
        <DonutChart title="Parking Lot" size={150}
          data={[{ label: "Yes", value: 78 }, { label: "No", value: 22 }]} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 48, alignItems: "start" }}>
        <div>
          <h3 className="il-h4" style={{ marginBottom: 12 }}>Locations by state</h3>
          <div style={{ position: "relative", aspectRatio: "16 / 10", background: "var(--il-grey-100)",
            border: "1px dashed var(--il-line-strong)", borderRadius: "var(--il-radius-md)",
            display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
            <div>
              <span className="material-symbols-outlined" style={{ fontSize: 30, color: "var(--il-grey-500)" }}>map</span>
              <p className="il-caption" style={{ margin: "8px 0 0", maxWidth: "34ch" }}>
                Map placeholder. The live dashboard plots gold location markers on a US map;
                no geodata was supplied with this design system.
              </p>
            </div>
          </div>
        </div>
        <BarChart title="Location Type" height={220}
          data={[{ label: "Standard", value: 118 }, { label: "Showroom", value: 32 },
                 { label: "Flagship", value: 11 }, { label: "Legacy", value: 41 }, { label: "Remote", value: 38 }]} />
      </div>

      <div style={{ marginTop: 48 }}>
        <h3 className="il-h4" style={{ marginBottom: 14 }}>Recently updated</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Location", "Type", "State", "Assets", "Digital upgrade", "Last scan"].map(function (h) {
                return <th key={h} className="il-eyebrow" style={{ textAlign: "left", padding: "10px 12px",
                  borderBottom: "1px solid var(--il-line-strong)" }}>{h}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {[
              ["BR-0142 · Calgary Centre", "Standard", "AB", "14", "scheduled", "11 Feb 2026"],
              ["BR-0311 · Yonge & Bloor", "Flagship", "ON", "38", "complete", "02 Feb 2026"],
              ["BR-0498 · Sherbrooke", "Legacy", "QC", "9", "no", "18 Dec 2025"],
              ["BR-0507 · Burnaby Metro", "Showroom", "BC", "21", "complete", "27 Jan 2026"],
            ].map(function (r) {
              const tone = { complete: "success", scheduled: "blue", no: "neutral" }[r[4]];
              const text = { complete: "Complete", scheduled: "Scheduled", no: "Not planned" }[r[4]];
              return (
                <tr key={r[0]}>
                  {r.slice(0, 4).map(function (cell, i) {
                    return <td key={i} className="il-small" style={{ padding: "12px", borderBottom: "1px solid var(--il-line-hairline)" }}>{cell}</td>;
                  })}
                  <td style={{ padding: "12px", borderBottom: "1px solid var(--il-line-hairline)" }}>
                    <Badge tone={tone} square>{text}</Badge>
                  </td>
                  <td className="il-small" style={{ padding: "12px", borderBottom: "1px solid var(--il-line-hairline)", color: "var(--il-text-secondary)" }}>{r[5]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="il-caption" style={{ marginTop: 12 }}>Table chrome reconstructed — not legible in the published screenshots.</p>
      </div>
    </React.Fragment>
  );
}
