/** @jsxRuntime classic */
/* Contact — reconstruction. The live form is a Wix form and was not readable. */

function ContactScreen() {
  const { Input, Button, Alert } = window.DS;
  const [sent, setSent] = React.useState(false);
  return (
    <Section pad={80}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
        <div>
          <div className="il-eyebrow">CONTACT</div>
          <h1 className="il-h1" style={{ marginTop: 14, maxWidth: "16ch" }}>Let’s innovate together.</h1>
          <p className="il-body" style={{ marginTop: 20, color: "var(--il-text-secondary)", maxWidth: "46ch" }}>
            If you have a challenge that doesn’t fit the mold, we’re always interested in exploring it
            together. Tell us about your network and what you’re trying to see more clearly.
          </p>
          <div className="il-bracket" style={{ marginTop: 40, padding: "20px 24px", maxWidth: 380 }}>
            <div className="il-eyebrow">DIVISION</div>
            <p className="il-small" style={{ margin: "8px 0 0", color: "var(--il-text-secondary)" }}>
              InsightLens is a division of Envision USA, Inc.
            </p>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              style={{ display: "grid", gap: 20, border: "1px solid var(--il-line-hairline)", padding: 32 }}>
          {sent ? <Alert tone="success" title="Thanks — your enquiry is on its way." onDismiss={() => setSent(false)} /> : null}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <Input label="First name" placeholder="Jordan" required />
            <Input label="Last name" placeholder="Reyes" required />
          </div>
          <Input label="Work email" type="email" placeholder="you@company.com" required />
          <Input label="Company" placeholder="Company name" />
          <Input label="Number of locations" placeholder="e.g. 480" hint="Approximate is fine." icon="location_city" />
          <label style={{ display: "block" }}>
            <span className="il-eyebrow" style={{ display: "block", marginBottom: 8, color: "var(--il-ink-900)" }}>What are you working on?</span>
            <textarea rows={5} placeholder="A sentence or two is plenty."
              style={{ width: "100%", font: "inherit", fontSize: "var(--il-size-body)", padding: 12,
                       border: "1px solid var(--il-line-strong)", borderRadius: "var(--il-radius-0)", resize: "vertical" }} />
          </label>
          <Button variant="primary" size="lg" icon="arrow_forward" fullWidth>Send enquiry</Button>
          <p className="il-caption" style={{ margin: 0 }}>
            Reconstructed form — field set not taken from the live site.
          </p>
        </form>
      </div>
    </Section>
  );
}
