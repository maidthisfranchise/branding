function TopBar({ title, subtitle }) {
  return (
    <div style={tbStyles.wrap}>
      <div>
        <h1 style={tbStyles.h1}>{title}</h1>
        <div style={tbStyles.sub}>{subtitle}</div>
      </div>
      <div style={tbStyles.actions}>
        <div style={tbStyles.search}>
          <span style={{color:'var(--fg-tertiary)'}}>⌕</span>
          <input placeholder="Search bookings, customers, cleaners..." style={tbStyles.searchInput}/>
          <span style={tbStyles.kbd}>⌘K</span>
        </div>
        <button style={tbStyles.bell}>🔔<span style={tbStyles.badge}>3</span></button>
        <button style={tbStyles.cta}>+ New booking</button>
      </div>
    </div>
  );
}

const tbStyles = {
  wrap: { padding:'24px 32px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid var(--border-subtle)', background:'white', position:'sticky', top:0, zIndex:10 },
  h1: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:26, letterSpacing:'-0.01em', color:'var(--mt-navy)', margin:0, lineHeight:1.1 },
  sub: { fontSize:13, color:'var(--fg-secondary)', marginTop:2 },
  actions: { display:'flex', gap:10, alignItems:'center' },
  search: { display:'flex', alignItems:'center', gap:10, background:'var(--bg-soft)', borderRadius:10, padding:'8px 12px', minWidth:320, border:'1px solid var(--border-subtle)' },
  searchInput: { border:0, background:'transparent', outline:'none', fontSize:13, fontFamily:'var(--font-body)', flex:1, color:'var(--fg-primary)' },
  kbd: { fontSize:10, fontFamily:'var(--font-mono)', padding:'2px 6px', borderRadius:4, background:'white', border:'1px solid var(--border-subtle)', color:'var(--fg-tertiary)' },
  bell: { background:'var(--bg-soft)', border:'1px solid var(--border-subtle)', padding:'8px 12px', borderRadius:10, cursor:'pointer', position:'relative', fontSize:14 },
  badge: { position:'absolute', top:2, right:2, background:'var(--state-danger)', color:'white', fontSize:9, fontWeight:800, padding:'1px 5px', borderRadius:999 },
  cta: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:13, color:'white', background:'var(--mt-ocean)', border:0, padding:'10px 18px', borderRadius:999, cursor:'pointer', boxShadow:'0 8px 18px rgba(12,133,194,0.28)' }
};

window.TopBar = TopBar;
