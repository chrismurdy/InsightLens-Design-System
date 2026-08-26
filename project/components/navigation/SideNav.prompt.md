Left rail for every platform screen. Items are uppercase; the active row gets a
gold left marker and a pale gold ground; its children expand beneath it.

\`\`\`jsx
<SideNav logo="assets/logo/insightlens-envision-lockup.png" activeId="locations"
  onSelect={setScreen}
  items={[{id:"discover",label:"Discover",icon:"dashboard"},
          {id:"locations",label:"Locations",icon:"location_city",
           activeChildId:"dashboard",
           children:[{id:"dashboard",label:"Dashboard"},{id:"profiles",label:"Profiles"}]}]} />
\`\`\`
