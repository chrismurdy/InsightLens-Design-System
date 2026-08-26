/** @jsxRuntime classic */
/* Site chrome for the insightlens.com kit. React + window.DS are globals. */

const NAV = [
  { label: "About", id: "about" },
  { label: "Our Services", children: ["Data & Technology", "Strategy, Design & Value Engineering", "Plan & Execute", "Operate & Optimize", "Cybersecurity Support"] },
  { label: "Asset Management Platform", id: "platform" },
  { label: "3D Scans", id: "scans" },
  { label: "What Is Your Role?", children: ["Design", "Facilities", "Marketing", "Merchandising", "Real Estate"] },
  { label: "Resources", children: ["Case Studies", "Posts", "Videos"] },
  { label: "Contact", id: "contact" },
];

const AB = "../../";

function SiteHeader({ current, onNavigate }) {
  const [open, setOpen] = React.useState(null);
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(255,255,255,.93)",
      backdropFilter: "blur(8px)", borderBottom: "1px solid var(--il-line-hairline)" }}>
      <div style={{ maxWidth: "var(--il-container)", margin: "0 auto", height: "var(--il-nav-h)",
        padding: "0 var(--il-gutter)", display: "flex", alignItems: "center", gap: 32 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }} style={{ flex: "0 0 auto" }}>
          <img src={AB + "assets/logo/insightlens-envision-lockup.png"} alt="InsightLens + Envision USA" style={{ height: 26, width: "auto" }} />
        </a>
        <nav style={{ marginLeft: "auto", display: "flex", gap: 20, alignItems: "center" }}>
          {NAV.map((item) => (
            <div key={item.label} style={{ position: "relative" }}
                 onMouseEnter={() => setOpen(item.children ? item.label : null)}
                 onMouseLeave={() => setOpen(null)}>
              <a href="#" onClick={(e) => { e.preventDefault(); if (item.id) onNavigate(item.id); }}
                 className="il-nav-label"
                 style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11,
                   color: current === item.id ? "var(--il-gold-600)" : "var(--il-ink-900)",
                   textDecoration: "none", paddingBottom: 3,
                   borderBottom: "2px solid " + (current === item.id ? "var(--il-gold-500)" : "transparent") }}>
                {item.label}
                {item.children ? <span className="material-symbols-outlined" style={{ fontSize: 14 }}>expand_more</span> : null}
              </a>
              {open === item.label ? (
                <div style={{ position: "absolute", top: "100%", left: -14, marginTop: 10, minWidth: 270,
                  background: "var(--il-white)", border: "1px solid var(--il-line-hairline)",
                  boxShadow: "var(--il-shadow-lg)", padding: "10px 0" }}>
                  {item.children.map((c) => (
                    <a key={c} href="#" onClick={(e) => e.preventDefault()} className="il-nav-label"
                       style={{ display: "block", padding: "9px 20px", fontSize: 11, color: "var(--il-ink-900)", textDecoration: "none" }}>{c}</a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SiteFooter({ onNavigate }) {
  return (
    <footer style={{ background: "var(--il-ink-700)", color: "var(--il-white)", padding: "72px 0 40px" }}>
      <div style={{ maxWidth: "var(--il-container)", margin: "0 auto", padding: "0 var(--il-gutter)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 420 }}>
            <div className="il-h3" style={{ color: "var(--il-white)" }}>Let’s innovate together.</div>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("contact"); }} className="il-nav-label"
               style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 18, color: "var(--il-gold-500)" }}>
              Contact us here
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </a>
          </div>
          <div style={{ display: "grid", gap: 10 }}>
            <div className="il-eyebrow" style={{ color: "var(--il-grey-400)" }}>Follow us here.</div>
            <a href="https://www.linkedin.com/company/insightlens" target="_blank" rel="noreferrer" style={{ width: 30 }}>
              <img src={AB + "assets/icons/linkedin.png"} alt="LinkedIn" style={{ width: 30, height: 30, filter: "invert(1)" }} />
            </a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.16)", marginTop: 48, paddingTop: 22,
          display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "space-between" }}>
          <div className="il-caption" style={{ color: "var(--il-grey-400)" }}>
            InsightLens is a division of Envision USA, Inc. &nbsp;·&nbsp; © 2026 Envision USA, Inc.
          </div>
          <a href="#" onClick={(e) => e.preventDefault()} className="il-caption" style={{ color: "var(--il-grey-400)" }}>Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}

function Section({ children, tone = "white", pad = 96, style }) {
  const bg = { white: "var(--il-white)", subtle: "var(--il-grey-100)", dark: "var(--il-ink-700)" }[tone];
  return (
    <section style={{ background: bg, padding: pad + "px 0", color: tone === "dark" ? "var(--il-white)" : "inherit", ...style }}>
      <div style={{ maxWidth: "var(--il-container)", margin: "0 auto", padding: "0 var(--il-gutter)" }}>{children}</div>
    </section>
  );
}

function PhotoMarquee({ images, height = 240 }) {
  const strip = images.concat(images);
  return (
    <div style={{ overflow: "hidden", background: "var(--il-white)" }}>
      <div style={{ display: "flex", gap: 16, width: "max-content", animation: "il-marquee 52s linear infinite" }}>
        {strip.map((src, i) => (
          <img key={i} src={AB + "assets/imagery/" + src} alt=""
               style={{ height, width: height * 1.69, objectFit: "cover", borderRadius: "var(--il-radius-lg)" }} />
        ))}
      </div>
    </div>
  );
}
