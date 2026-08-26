/** @jsxRuntime classic */
/* Platform shell: left rail, top bar, content pane. */

const NAV_ITEMS = [
  { id: "discover", label: "Discover", icon: "dashboard" },
  { id: "locations", label: "Locations", icon: "location_city",
    children: [{ id: "locations", label: "Dashboard" }, { id: "profiles", label: "Profiles" }] },
  { id: "assets", label: "Assets", icon: "category",
    children: [{ id: "assets", label: "Dashboard" }, { id: "scan", label: "3D Scan viewer" }] },
  { id: "marketing", label: "Marketing", icon: "campaign" },
  { id: "messaging", label: "Digital Messaging", icon: "smart_display" },
  { id: "monitoring", label: "Digital Monitoring", icon: "monitor_heart" },
  { id: "programs", label: "Programs", icon: "timeline" },
  { id: "admin", label: "Admin", icon: "settings" },
];

function TopBar({ onSearch }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 32px",
      borderBottom: "1px solid var(--il-line-hairline)", background: "var(--il-white)" }}>
      <button aria-label="Collapse navigation"
        style={{ background: "none", border: 0, cursor: "pointer", color: "var(--il-grey-600)", display: "grid", placeItems: "center" }}>
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
        <span className="il-small" style={{ color: "var(--il-text-secondary)" }}>Firstname Lastname</span>
        <span style={{ width: 30, height: 30, borderRadius: "var(--il-radius-pill)", background: "var(--il-blue-500)",
          display: "grid", placeItems: "center", color: "var(--il-white)", fontSize: 12, fontWeight: 600 }}>FL</span>
      </div>
    </div>
  );
}

function AppShell({ screen, onSelect, children }) {
  const { SideNav } = window.DS;
  const activeTop = { profiles: "locations", scan: "assets" }[screen] || screen;
  const items = NAV_ITEMS.map(function (it) {
    return it.children ? Object.assign({}, it, { activeChildId: screen }) : it;
  });
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--il-grey-050)" }}>
      <SideNav items={items} activeId={activeTop} onSelect={onSelect}
               logo="../../assets/logo/insightlens-envision-lockup.png" width={250}
               style={{ position: "sticky", top: 0, height: "100vh" }} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <TopBar />
        <main style={{ flex: 1, padding: "26px 32px 56px", background: "var(--il-white)" }}>{children}</main>
      </div>
    </div>
  );
}

function ViewHeader({ crumbs, title, actions }) {
  const { Breadcrumb } = window.DS;
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 24, marginBottom: 28 }}>
      <div>
        <Breadcrumb items={crumbs} />
        <h1 className="il-h2" style={{ marginTop: 10 }}>{title}</h1>
      </div>
      {actions ? <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>{actions}</div> : null}
    </div>
  );
}
