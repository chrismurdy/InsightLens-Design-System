/** @jsxRuntime classic */
/* Discover — the AI data agent landing view. */

function DiscoverScreen() {
  const { PromptField, Badge } = window.DS;
  const [log, setLog] = React.useState([
    { from: "agent", text: "Hi, I’m InsightLens, your AI data agent. How can I help?" },
  ]);
  const [q, setQ] = React.useState("Show me the Alberta branch");

  function ask(text) {
    if (!text) return;
    setLog(function (l) {
      return l.concat(
        { from: "user", text: text },
        { from: "agent", text: "Alberta — 1 location, 14 assets, last scanned 11 Feb 2026. Digital upgrade: scheduled." }
      );
    });
    setQ("");
  }

  return (
    <div style={{ maxWidth: 720, margin: "6vh auto 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
        <span style={{ display: "block", width: 220, height: 26, overflow: "hidden" }}>
          <img src="../../assets/logo/insightlens-envision-lockup.png" alt="InsightLens"
               style={{ height: 26, width: "auto", display: "block" }} />
        </span>
        <span style={{ color: "var(--il-grey-400)" }}>|</span>
        <span className="il-h3" style={{ letterSpacing: "0.04em" }}>DISCOVER<sup style={{ fontSize: 11, verticalAlign: "super" }}>®</sup></span>
      </div>

      <div style={{ display: "grid", gap: 10, margin: "38px 0 22px" }}>
        {log.map(function (m, i) {
          return (
            <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
              <div className="il-small" style={{
                background: m.from === "user" ? "var(--il-blue-050)" : "var(--il-grey-100)",
                border: "1px solid " + (m.from === "user" ? "var(--il-blue-300)" : "var(--il-line-hairline)"),
                borderRadius: "var(--il-radius-md)", padding: "10px 14px", maxWidth: "72%",
              }}>{m.text}</div>
            </div>
          );
        })}
      </div>

      <PromptField value={q} onChange={function (e) { setQ(e.target.value); }} onSubmit={ask}
                   placeholder="Show me the Alberta branch" />

      <div style={{ display: "flex", gap: 8, marginTop: 18, flexWrap: "wrap", justifyContent: "center" }}>
        {["Locations missing scans", "Digital upgrade status", "Assets by zone", "Programs closing this month"].map(function (s) {
          return (
            <button key={s} onClick={function () { ask(s); }} style={{ background: "none", border: 0, padding: 0, cursor: "pointer" }}>
              <Badge tone="neutral">{s}</Badge>
            </button>
          );
        })}
      </div>
    </div>
  );
}
