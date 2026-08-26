/** @jsxRuntime classic */
/* About — insightlens.com/about */

const QUOTES = [
  { q: "As the complexity of campaigns has increased … They have always proven to be proactive in streamlining processes … They are a true partner committed to the total success of our shared client.", who: "Vice President, Printing and Distribution" },
  { q: "We simply couldn’t execute some of our deliverables post-migration without their partnership and expertise.", who: "Visual Comms Manager, Digital Signage Supplier" },
  { q: "Their expertise and database management services and commitment to quality have streamlined our process, allowing us to focus on what we do best. Their reliability and seamless operations have truly transformed our business.", who: "Operations Director, Creative Agency" },
  { q: "Absolutely happy with the ease of ordering much needed signage for the FC.", who: "AVP FCAM, Banking Client" },
];

function AboutScreen({ onNavigate }) {
  const { Card } = window.DS;
  return (
    <React.Fragment>
      <Section pad={80}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div className="il-eyebrow">ABOUT</div>
            <h1 className="il-h1" style={{ marginTop: 14, maxWidth: "18ch" }}>We’ve taken pride in our work for over 25 years.</h1>
          </div>
          <p className="il-body" style={{ color: "var(--il-text-secondary)" }}>
            Our history is built on long‑term partnerships and a belief that collaboration fuels
            transformation — our team‑centric culture empowers us to tackle challenges collectively,
            inspire fresh ideas, and drive meaningful results for our clients. We help organizations
            create better retail experiences through thoughtful design, practical problem‑solving, and
            a commitment to doing great work together.
          </p>
        </div>
        <img src="../../assets/imagery/hero-particle-wave.png" alt=""
             style={{ width: "100%", marginTop: 48, borderRadius: "var(--il-radius-lg)", background: "var(--il-ink-700)" }} />
        <p className="il-lead" style={{ marginTop: 40, color: "var(--il-ink-900)" }}>
          Today, Envision and InsightLens operate as one connected team.
        </p>
      </Section>

      <Section tone="subtle" pad={80}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          {QUOTES.map((t) => (
            <blockquote key={t.who} className="il-bracket"
              style={{ margin: 0, padding: "24px 26px", background: "var(--il-white)" }}>
              <p className="il-body" style={{ margin: 0 }}>{t.q}</p>
              <footer className="il-eyebrow" style={{ marginTop: 16 }}>{t.who}</footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section pad={80}>
        <h2 className="il-h3" style={{ maxWidth: "40ch" }}>
          A look at how those partnerships come to life, turning insight into action across every location.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 30 }}>
          <Card image="../../assets/imagery/work-03.jpg" eyebrow="Video" title="InsightLens + Envision" href="#" />
          <Card image="../../assets/imagery/work-07.jpg" eyebrow="Video" title="Bank Partnership" href="#">
            A reflection of the long-standing partnerships we’ve built with banks and the work we’re
            proud to support together.
          </Card>
        </div>
      </Section>

    </React.Fragment>
  );
}
