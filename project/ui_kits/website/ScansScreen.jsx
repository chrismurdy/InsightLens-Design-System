/** @jsxRuntime classic */
/* 3D Scans — insightlens.com/3d-scans */

function ScansScreen({ onNavigate }) {
  const { Button, Badge } = window.DS;
  const items = [
    { src: "scan-virtual-tour.png", title: "Virtual tour", body: "Walk any location from anywhere, at the state it was captured." },
    { src: "scan-point-cloud.png", title: "Point cloud", body: "Dimensionally accurate capture for design and value engineering." },
    { src: "scan-interactive-visualization.png", title: "Interactive visualization", body: "Assets, zones and measurements layered onto the space itself." },
  ];
  return (
    <React.Fragment>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--il-ink-700)" }}>
        <img src="../../assets/imagery/hero-3d-scans.jpg" alt=""
             style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "var(--il-scrim-dark)" }} />
        <div style={{ position: "relative", maxWidth: "var(--il-container)", margin: "0 auto", padding: "104px var(--il-gutter)" }}>
          <div className="il-eyebrow" style={{ color: "var(--il-gold-500)" }}>3D SCANS</div>
          <h1 className="il-h1" style={{ color: "var(--il-white)", marginTop: 16, maxWidth: "20ch" }}>
            Scanning creates a reliable record of the space as it really is.
          </h1>
          <div style={{ marginTop: 32 }}>
            <Button variant="accent" size="lg" icon="arrow_forward" onClick={() => onNavigate("contact")}>Request a scan</Button>
          </div>
        </div>
      </section>

      <Section pad={80}>
        <div style={{ display: "grid", gap: 56 }}>
          {items.map((it, i) => (
            <div key={it.title} style={{ display: "grid", gridTemplateColumns: i % 2 ? "1fr 1.25fr" : "1.25fr 1fr", gap: 48, alignItems: "center" }}>
              <img src={"../../assets/product/" + it.src} alt={it.title}
                   style={{ width: "100%", borderRadius: "var(--il-radius-lg)", border: "1px solid var(--il-line-hairline)", order: i % 2 ? 2 : 1 }} />
              <div style={{ order: i % 2 ? 1 : 2 }}>
                <Badge tone="gold">Deliverable</Badge>
                <h2 className="il-h3" style={{ marginTop: 14 }}>{it.title}</h2>
                <p className="il-body" style={{ marginTop: 12, color: "var(--il-text-secondary)" }}>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="il-caption" style={{ marginTop: 40 }}>
          Screens above are the real captures published on insightlens.com/3d-scans. Section copy beyond
          the headline was not fully readable from the live page and is placeholder — please supply it.
        </p>
      </Section>

    </React.Fragment>
  );
}
