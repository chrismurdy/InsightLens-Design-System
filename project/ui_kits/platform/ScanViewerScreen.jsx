/** @jsxRuntime classic */
/* 3D scan viewer — built around the real captures published on the site. */

function ScanViewerScreen() {
  const { Badge, Button } = window.DS;
  const views = [
    { id: "tour", label: "Virtual tour", src: "scan-virtual-tour.png" },
    { id: "cloud", label: "Point cloud", src: "scan-point-cloud.png" },
    { id: "interactive", label: "Interactive", src: "scan-interactive-visualization.png" },
  ];
  const [view, setView] = React.useState("interactive");
  const active = views.find(function (v) { return v.id === view; });
  return (
    <React.Fragment>
      <ViewHeader
        crumbs={[{ label: "Assets" }, { label: "3D Scan viewer" }]}
        title="BR-0311 · Yonge & Bloor"
        actions={[<Button key="s" variant="secondary" size="sm" icon="share" iconPosition="left">Share</Button>]}
      />
      <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
        {views.map(function (v) {
          return (
            <button key={v.id} onClick={function () { setView(v.id); }}
              className="il-nav-label"
              style={{ background: v.id === view ? "var(--il-gold-050)" : "transparent",
                border: "1px solid " + (v.id === view ? "var(--il-gold-500)" : "var(--il-line-strong)"),
                padding: "9px 16px", cursor: "pointer", color: "var(--il-ink-900)", font: "inherit",
                fontSize: 12, letterSpacing: "var(--il-track-nav)", textTransform: "uppercase" }}>
              {v.label}
            </button>
          );
        })}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
          <Badge tone="gold" dot>Captured 02 Feb 2026</Badge>
        </div>
      </div>
      <img src={"../../assets/product/" + active.src} alt={active.label}
           style={{ width: "100%", border: "1px solid var(--il-line-hairline)", borderRadius: "var(--il-radius-md)" }} />
      <p className="il-caption" style={{ marginTop: 12 }}>
        Captures published on insightlens.com/3d-scans. Viewer chrome around them is reconstructed.
      </p>
    </React.Fragment>
  );
}
