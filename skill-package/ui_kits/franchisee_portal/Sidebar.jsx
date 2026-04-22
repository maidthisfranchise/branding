function Sidebar({ active, onNav }) {
  const items = [
    { id:'dashboard', label:'Dashboard', icon:'grid' },
    { id:'schedule',  label:'Schedule',  icon:'calendar' },
    { id:'team',      label:'Team',      icon:'users' },
    { id:'bookings',  label:'Bookings',  icon:'clipboard' },
    { id:'customers', label:'Customers', icon:'heart' },
    { id:'reports',   label:'Reports',   icon:'chart' },
  ];
  return (
    <aside style={sbStyles.wrap}>
      <div style={sbStyles.logoRow}>
        <img src="../../assets/logos/maidthis-mark.png" style={{width:36, height:36}}/>
        <div>
          <div style={sbStyles.brand}>MaidThis</div>
          <div style={sbStyles.sub}>Ops portal</div>
        </div>
      </div>
      <div style={sbStyles.market}>
        <div style={sbStyles.marketLbl}>Market</div>
        <div style={sbStyles.marketVal}>Los Angeles · West</div>
      </div>
      <nav style={sbStyles.nav}>
        {items.map(it => (
          <button key={it.id}
            onClick={() => onNav(it.id)}
            style={{...sbStyles.item, ...(active === it.id ? sbStyles.itemOn : {})}}>
            <span style={sbStyles.dot}></span>
            {it.label}
          </button>
        ))}
      </nav>
      <div style={sbStyles.user}>
        <div style={sbStyles.avatar}>JS</div>
        <div>
          <div style={{fontWeight:700, fontSize:13, color:'white'}}>Jamie Santos</div>
          <div style={{fontSize:11, color:'rgba(255,255,255,0.55)'}}>Franchise owner</div>
        </div>
      </div>
    </aside>
  );
}

const sbStyles = {
  wrap: { width:240, background:'var(--mt-navy)', color:'white', padding:20, display:'flex', flexDirection:'column', gap:20, height:'100vh', position:'sticky', top:0 },
  logoRow: { display:'flex', gap:10, alignItems:'center' },
  brand: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:16 },
  sub: { fontSize:11, color:'rgba(255,255,255,0.55)', letterSpacing:'0.06em', textTransform:'uppercase', fontWeight:700 },
  market: { background:'rgba(255,255,255,0.06)', borderRadius:10, padding:'10px 12px' },
  marketLbl: { fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mt-teal)', fontWeight:700 },
  marketVal: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, marginTop:2 },
  nav: { display:'flex', flexDirection:'column', gap:2, flex:1 },
  item: { background:'transparent', border:0, color:'rgba(255,255,255,0.75)', padding:'10px 12px', borderRadius:8, textAlign:'left', fontFamily:'var(--font-ui)', fontWeight:600, fontSize:13, cursor:'pointer', display:'flex', alignItems:'center', gap:10 },
  itemOn: { background:'rgba(90,179,201,0.2)', color:'white' },
  dot: { width:6, height:6, borderRadius:999, background:'currentColor', opacity:0.6 },
  user: { display:'flex', gap:10, alignItems:'center', padding:'10px 0', borderTop:'1px solid rgba(255,255,255,0.1)' },
  avatar: { width:36, height:36, borderRadius:999, background:'var(--mt-teal)', color:'var(--mt-navy)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:800, fontSize:14 }
};

window.Sidebar = Sidebar;
