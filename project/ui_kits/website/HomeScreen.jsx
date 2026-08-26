/** @jsxRuntime classic */
/* Home — insightlens.com/ */

function HomeScreen({ onNavigate }) {
  const { Button } = window.DS;
  return (
    <React.Fragment>
      {/* Hero: particle field on near-black */}
      <section style={{ position: "relative", background: "var(--il-ink-700)", overflow: "hidden" }}>
        <img src="../../assets/imagery/hero-particle-wave.png" alt=""
             style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: .85 }} />
        <div style={{ position: "relative", maxWidth: "var(--il-container)", margin: "0 auto",
                      padding: "132px var(--il-gutter) 148px" }}>
          <div className="il-bracket" style={{ width: 44, height: 44, marginBottom: 30 }} />
          <h1 className="il-h1" style={{ color: "var(--il-white)", maxWidth: "20ch" }}>
            InsightLens + Envision USA: Clarity, Creativity, and Control for Retail Spaces.
          </h1>
          <p className="il-lead" style={{ color: "var(--il-grey-300)", marginTop: 26, maxWidth: "58ch" }}>
            We’re retail experts, innovators, strategists, and creators who thrive on turning unique ideas
            into real‑world impact. We blend sharp insight with bold thinking to help organizations
            reimagine, manage, and elevate their environments with focus and confidence at any scale.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
            <Button variant="accent" size="lg" icon="arrow_forward" onClick={() => onNavigate("platform")}>
              See the platform
            </Button>
            <Button size="lg" onClick={() => onNavigate("about")}
              style={{ background: "transparent", color: "var(--il-white)", borderColor: "rgba(255,255,255,.5)" }}>
              About us
            </Button>
          </div>
        </div>
      </section>

      <div style={{ padding: "56px 0 8px" }}>
        <PhotoMarquee images={["work-01.jpg","work-02.jpg","work-03.jpg","work-04.jpg","work-05.jpg","work-06.jpg","work-07.jpg","work-08.jpg"]} />
      </div>

      {/* Two halves of one team */}
      <Section pad={88}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }}>
          <div>
            <div className="il-eyebrow">INSIGHTLENS</div>
            <h2 className="il-h2" style={{ marginTop: 12 }}>InsightLens brings precision to complexity.</h2>
            <p className="il-body" style={{ marginTop: 18, color: "var(--il-text-secondary)" }}>
              We transform data into intelligence, providing a continuous understanding of physical
              environments and enabling organizations to shape and optimize every space. From spatial
              planning to performance insights, InsightLens keeps every decision grounded in what’s
              happening now.
            </p>
          </div>
          <div>
            <div className="il-eyebrow">ENVISION USA</div>
            <h2 className="il-h2" style={{ marginTop: 12 }}>Envision brings strategy into the physical world.</h2>
            <p className="il-body" style={{ marginTop: 18, color: "var(--il-text-secondary)" }}>
              Through design leadership, value-engineered solutions, and disciplined rollout management,
              Envision ensures every location reflects brand intent, operates effectively and scales
              with certainty.
            </p>
          </div>
        </div>
        <div className="il-bracket" style={{ marginTop: 64, padding: "26px 30px", maxWidth: "72ch" }}>
          <p className="il-lead" style={{ margin: 0, color: "var(--il-ink-900)" }}>
            Individually, these services are powerful. Together, they create an end‑to‑end ecosystem
            helping organizations manage their spaces run smarter, adapt faster, and stay aligned from
            the first spark of strategy to every moment a customer walks through the door.
          </p>
        </div>
      </Section>

      {/* Shared work */}
      <Section tone="dark" pad={88}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 64, alignItems: "center" }}>
          <div>
            <h2 className="il-h2" style={{ color: "var(--il-white)" }}>Where New Challenges Become Shared Work</h2>
            <p className="il-body" style={{ marginTop: 20, color: "var(--il-grey-300)" }}>
              Not every problem comes with a blueprint and that’s often the point. We partner closely
              with our clients to explore new challenges, test ideas, and build solutions that respond
              to real needs as they emerge. If you have a challenge that doesn’t fit the mold, we’re
              always interested in exploring it together.
            </p>
          </div>
          <img src="../../assets/imagery/work-06.jpg" alt="Branch environment"
               style={{ width: "100%", borderRadius: "var(--il-radius-lg)" }} />
        </div>
      </Section>

    </React.Fragment>
  );
}
