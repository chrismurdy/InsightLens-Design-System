# UI kit — InsightLens asset-management platform

Recreation of the platform UI as published on insightlens.com (the product itself
is behind a login). Source of truth: the two product screenshots in
`assets/product/` — `platform-discover.png` (the DISCOVER agent screen) and
`platform-devices.png` (Locations Overview and an Assets dashboard shown on
desktop, tablet and phone).

Screens: **Discover** (AI data agent), **Locations › Dashboard** (metric, two
donuts, location-type bars, map), **Assets › Dashboard** (counts and two bar
charts), **3D Scan viewer**.

Faithful to the screenshots: the white left rail with uppercase items and
expanding children, the breadcrumb + view title, the huge metric with a two-line
label, gold-first chart colours, the round blue avatar top right, the pill prompt
field, and the "INSIGHTLENS | DISCOVER" wordmark treatment.

Reconstructed / flagged: all table and filter chrome (not legible at the
published resolution), the geographic map (no geodata supplied — a labelled
placeholder is shown), and every number beyond those readable in the screenshots
(497 locations, 30 locations count, 477 assets count).
