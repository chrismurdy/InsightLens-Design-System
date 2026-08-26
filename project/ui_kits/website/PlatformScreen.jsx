/** @jsxRuntime classic */
/* Asset Management Platform — insightlens.com/asset-management-platform */

const LIFECYCLE = [
  { icon: "asset-management-platform", title: "Data & Technology", body: "Create a single, accurate foundation for every decision." },
  { icon: "ma-data-models", title: "Strategy, Design & VE", body: "Design environments with confidence guided by real‑world conditions." },
  { icon: "multi-purpose-spatial-intelligence", title: "Plan & Execute", body: "Turn approved plans into precise, repeatable rollouts." },
  { icon: "digital-display-monitoring", title: "Operate & Optimize", body: "Maintain performance with live visibility and coordinated response." },
];

function PlatformScreen({ onNavigate }) {
  const { Button, ServiceIcon, Card } = window.DS;
  return (
    <React.Fragment>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--il-ink-700)" }}>
        <img src="../../assets/imagery/hero-platform-photo.jpg" alt=""
             style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "var(--il-scrim-dark)" }} />
        <div style={{ position: "relative", maxWidth: "var(--il-container)", margin: "0 auto",
                      padding: "116px var(--il-gutter)" }}>
          <div className="il-eyebrow" style={{ color: "var(--il-gold-500)" }}>ASSET MANAGEMENT PLATFORM</div>
          <h1 className="il-h1" style={{ color: "var(--il-white)", marginTop: 16, maxWidth: "22ch" }}>
            Built to organize data. Designed to drive decisions.
          </h1>
          <p className="il-lead" style={{ color: "var(--il-grey-300)", marginTop: 22, maxWidth: "62ch" }}>
            The platform that connects your physical environments, assets, and programs into
            intelligence that teams can act on. InsightLens gives organizations a shared, reliable
            view of their locations so decisions are grounded in reality, execution is consistent,
            and operations perform at scale.
          </p>
          <div style={{ marginTop: 34 }}>
            <Button variant="accent" size="lg" icon="arrow_forward" onClick={() => onNavigate("contact")}>Book a walkthrough</Button>
          </div>
        </div>
      </section>

      <Section pad={88}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 460px", gap: 64, alignItems: "center" }}>
          <div>
            <h2 className="il-h2">One Platform. Built for the Total Location Lifecycle.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, marginTop: 40 }}>
              {LIFECYCLE.map((s) => (
                <div key={s.title}>
                  <ServiceIcon name={s.icon} assetBase="../../" size={46} />
                  <h3 className="il-h4" style={{ marginTop: 16 }}>{s.title}</h3>
                  <p className="il-small" style={{ marginTop: 8, color: "var(--il-text-secondary)" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
          <img src="../../assets/product/platform-discover.png" alt="InsightLens service screen"
               style={{ width: "100%", borderRadius: "var(--il-radius-lg)", boxShadow: "var(--il-shadow-lg)" }} />
        </div>
      </Section>

      <Section tone="subtle" pad={80}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: 56, alignItems: "center" }}>
          <div>
            <p className="il-lead" style={{ color: "var(--il-ink-900)" }}>
              The InsightLens Platform was created to bring clarity, intelligence, and consistency to
              large networks of physical spaces supporting better decisions today and enabling smarter
              automation over time.
            </p>
            <p className="il-body" style={{ marginTop: 20, color: "var(--il-text-secondary)" }}>
              It’s the intelligence layer powering everything you do today and everything you’ll
              automate tomorrow.
            </p>
          </div>
          <img src="../../assets/product/platform-devices.png" alt="InsightLens workflow screens" style={{ width: "100%" }} />
        </div>
      </Section>

      <Section pad={80}>
        <div className="il-eyebrow">RESOURCES</div>
        <h2 className="il-h3" style={{ marginTop: 12 }}>Bringing plans to life with clarity, consistency, and control.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 32 }}>
          <Card image="../../assets/imagery/work-02.jpg" eyebrow="Video" title="Centralized Data" href="#" />
          <Card image="../../assets/imagery/work-05.jpg" eyebrow="Video" title="ROI" href="#" />
          <Card image="../../assets/imagery/work-08.jpg" eyebrow="PDF" title="Bank Case Study" href="#" />
        </div>
      </Section>

    </React.Fragment>
  );
}
