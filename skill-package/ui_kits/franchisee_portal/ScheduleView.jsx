function ScheduleView() {
  const days = ['Mon 27', 'Tue 28', 'Wed 29', 'Thu 30', 'Fri 1', 'Sat 2', 'Sun 3'];
  const hours = ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM'];
  const events = [
    { day:1, hour:0, len:2, pro:'Maria S.',  service:'Deep Clean', color:'var(--mt-ocean)' },
    { day:1, hour:1, len:1.5, pro:'James L.', service:'Weekly',   color:'var(--mt-teal)' },
    { day:2, hour:2, len:2, pro:'Alicia D.', service:'STR Turn',  color:'var(--mt-teal)' },
    { day:3, hour:0, len:3, pro:'Omar K.',   service:'Move-out',  color:'var(--mt-navy)' },
    { day:4, hour:1, len:2, pro:'Maria S.',  service:'Weekly',    color:'var(--mt-teal)' },
    { day:5, hour:3, len:2, pro:'James L.',  service:'Deep Clean',color:'var(--mt-ocean)' },
    { day:0, hour:0, len:1.5, pro:'Omar K.', service:'Weekly',    color:'var(--mt-teal)' },
  ];

  return (
    <div style={svStyles.wrap}>
      <div style={svStyles.panel}>
        <div style={svStyles.head}>
          <div>
            <div style={svStyles.eyebrow}>Week of April 27</div>
            <h3 style={svStyles.h3}>Schedule</h3>
          </div>
          <div style={svStyles.filters}>
            <button style={svStyles.filter}>All cleaners</button>
            <button style={svStyles.filter}>All services</button>
            <button style={{...svStyles.filter, background:'var(--mt-navy)', color:'white', borderColor:'var(--mt-navy)'}}>Week</button>
          </div>
        </div>
        <div style={svStyles.board}>
          <div style={svStyles.hoursCol}>
            <div style={svStyles.spacer}/>
            {hours.map(h => <div key={h} style={svStyles.hourLbl}>{h}</div>)}
          </div>
          {days.map((d, di) => (
            <div key={d} style={svStyles.dayCol}>
              <div style={svStyles.dayHead}>{d}</div>
              <div style={svStyles.grid}>
                {events.filter(e => e.day === di).map((e,i) => (
                  <div key={i} style={{
                    position:'absolute', left:4, right:4,
                    top: e.hour * 64 + 4,
                    height: e.len * 64 - 8,
                    background: e.color,
                    color:'white', borderRadius:8, padding:'8px 10px',
                    fontSize:11, fontWeight:600,
                    display:'flex', flexDirection:'column', gap:2
                  }}>
                    <div style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:12}}>{e.service}</div>
                    <div style={{opacity:0.85}}>{e.pro}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const svStyles = {
  wrap: { padding:32 },
  panel: { background:'white', border:'1px solid var(--border-subtle)', borderRadius:16, padding:20, overflow:'hidden' },
  head: { display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 },
  eyebrow: { fontFamily:'var(--font-ui)', fontSize:10, fontWeight:800, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mt-ocean)' },
  h3: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:20, color:'var(--mt-navy)', margin:0, marginTop:4 },
  filters: { display:'flex', gap:6 },
  filter: { background:'white', border:'1.5px solid var(--border-subtle)', fontFamily:'var(--font-ui)', fontWeight:700, fontSize:12, padding:'7px 14px', borderRadius:999, cursor:'pointer', color:'var(--fg-primary)' },
  board: { display:'grid', gridTemplateColumns:'60px repeat(7, 1fr)', gap:6 },
  hoursCol: { display:'flex', flexDirection:'column' },
  spacer: { height:32 },
  hourLbl: { height:64, fontFamily:'var(--font-mono)', fontSize:10, color:'var(--fg-tertiary)', paddingTop:4 },
  dayCol: { display:'flex', flexDirection:'column' },
  dayHead: { height:32, fontFamily:'var(--font-display)', fontWeight:800, fontSize:12, color:'var(--mt-navy)', textAlign:'center', borderBottom:'1px solid var(--border-subtle)', display:'flex', alignItems:'center', justifyContent:'center' },
  grid: { position:'relative', height: 64*5, background:'repeating-linear-gradient(to bottom, var(--bg-soft), var(--bg-soft) 63px, var(--border-subtle) 63px, var(--border-subtle) 64px)', borderRadius:6 }
};

window.ScheduleView = ScheduleView;
