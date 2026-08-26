/* Kit loader + dev fallback.

   1. __dsFind()  — locates the compiled design-system namespace on `window`
                    (the bundle the design-system compiler generates).
   2. window.DS   — the component namespace the kits read from. When the compiled
                    bundle is not present yet (e.g. straight after authoring),
                    the component sources are fetched, their ESM keywords
                    stripped, and evaluated with Babel standalone so screens
                    still render. No-op once the real bundle exists.
   3. __dsLoad()  — loads a kit's own .jsx screen files the same way, in order,
                    defining each screen function as a global.

   Set window.__DS_ROOT to the relative path of the design-system root before
   loading this file.
*/
(function () {
  var ROOT = window.__DS_ROOT || "../../";

  window.__dsFind = function () {
    var direct = window.InsightLensDesignSystem_8d0629;
    if (direct && direct.Button) return direct;
    for (var i = 0, ks = Object.keys(window); i < ks.length; i++) {
      try {
        var v = window[ks[i]];
        if (v && typeof v === "object" && v.Button && v.Badge) return v;
      } catch (e) { /* cross-origin window property */ }
    }
    return null;
  };

  function transform(src, tail) {
    var body = src.replace(/^\s*import\b[^\n]*\n/gm, "").replace(/export\s+/g, "");
    return Babel.transform(body + (tail || ""), {
      presets: [["react", { runtime: "classic" }]],
      sourceType: "script",
    }).code;
  }

  window.__dsLoad = function (paths, base) {
    var b = base || "";
    return paths.reduce(function (chain, p) {
      return chain.then(function () {
        return fetch(b + p)
          .then(function (r) { return r.text(); })
          .then(function (src) { (0, eval)(transform(src)); })
          .catch(function (e) { console.error("kit file failed:", p, e); });
      });
    }, Promise.resolve());
  };

  var COMPONENTS = [
    "buttons/Button", "forms/Input", "forms/PromptField",
    "display/Card", "display/StatCard", "display/Badge", "display/ServiceIcon",
    "charts/DonutChart", "charts/BarChart",
    "navigation/SideNav", "navigation/Breadcrumb", "feedback/Alert",
  ];

  function loadBundle() {
    return new Promise(function (res) {
      var s = document.createElement("script");
      s.src = ROOT + "_ds_bundle.js";
      s.onload = res; s.onerror = function () { res(); };
      document.head.appendChild(s);
    });
  }

  var existing = window.__dsFind();
  if (existing) { window.DS = existing; window.__DS_READY = Promise.resolve(existing); return; }

  window.DS = {};
  window.__DS_READY = loadBundle().then(function () {
    var real = window.__dsFind();
    if (real) { window.DS = real; return real; }
    return Promise.all(
    COMPONENTS.map(function (p) {
      var name = p.split("/")[1];
      return fetch(ROOT + "components/" + p + ".jsx")
        .then(function (r) { return r.text(); })
        .then(function (src) {
          window.DS[name] = eval(transform("(function(){\n" + src, "\nreturn " + name + ";})()"));
        })
        .catch(function (e) { console.error("component failed:", p, e && e.message); });
    })
    ).then(function () { return window.DS; });
  });
})();
