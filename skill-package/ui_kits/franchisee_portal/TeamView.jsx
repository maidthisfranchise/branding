function TeamView() {
  const team = [
    { name:'Maria Sanchez',  role:'Lead Cleaner', cleans:612, rating:4.95, util:92, milestone:'500 cleans ★', color:'#7CCA5B' },
    { name:'James Liu',      role:'Cleaner',      cleans:284, rating:4.92, util:84, milestone:null, color:'#0C85C2' },
    { name:'Alicia Daniels', role:'Cleaner · STR',cleans:198, rating:4.98, util:88, milestone:'Top STR rating', color:'#FFB600' },
    { name:'Omar Khalil',    role:'Cleaner',      cleans:341, rating:4.90, util:90, milestone:null, color:'#5AB3C9' },
    { name:'Priya Patel',    role:'Trainee',      cleans:18,  rating:4.85, util:60, milestone:'New · 3 wks', color:'#A7DBE7' },
  ];
  return (
    <div style={tvStyles.wrap}>
      <div style={tvStyles.panel}>
        <div style={tvStyles.head}>
          <div>
            <div style={tvStyles.eyebrow}>Roster · 5 active</div>
            <h3 style={tvStyles.h3}>Your team</h3>
          </div>
          <button style={tvStyles.cta}>+ Add cleaner</button>
        </div>
        <table style={tvStyles.table}>
          <thead>
            <tr>
              <th style={tvStyles.th}>Cleaner</th>
              <th style={tvStyles.th}>Cleans</th>
              <th style={tvStyles.th}>Rating</th>
              <th style={tvStyles.th}>Utilization</th>
              <th style={tvStyles.th}>Milestones</th>
              <th style={tvStyles.th}></th>
            </tr>
          </thead>
          <tbody>
            {team.map(m => {
              const initials = m.name.split(' ').map(p => p[0]).join('');
              return (
                <tr key={m.name} style={tvStyles.tr}>
                  <td style={tvStyles.td}>
                    <div style={{display:'flex', gap:10, alignItems:'center'}}>
                      <div style={{...tvStyles.avatar, background:m.color}}>{initials}</div>
                      <div>
                        <div style={{fontWeight:700, color:'var(--mt-navy)', fontFamily:'var(--font-display)'}}>{m.name}</div>
                        <div style={{fontSize:12, color:'var(--fg-tertiary)'}}>{m.role}</div>
                      </div>
                    </div>
                  </td>
                  <td style={tvStyles.td}>{m.cleans}</td>
                  <td style={tvStyles.td}><span style={{color:'var(--mt-yellow)', fontWeight:800}}>★</span> {m.rating.toFixed(2)}</td>
                  <td style={tvStyles.td}>
                    <div style={tvStyles.barWrap}>
                      <div style={{...tvStyles.bar, width: m.util+'%'}}/>
                    </div>
                    <div style={{fontSize:11, color:'var(--fg-tertiary)', marginTop:2}}>{m.util}%</div>
                  </td>
                  <td style={tvStyles.td}>
                    {m.milestone && <span style={tvStyles.badge}>{m.milestone}</span>}
                  </td>
                  <td style={tvStyles.td}><button style={tvStyles.link}>View →</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const tvStyles = {
  wrap: { padding:32 },
  panel: { background:'white', border:'1px solid var(--border-subtle)', borderRadius:16, padding:20 },
  head: { display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 },
  eyebrow: { fontFamily:'var(--font-ui)', fontSize:10, fontWeight:800, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mt-ocean)' },
  h3: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:20, color:'var(--mt-navy)', margin:0, marginTop:4 },
  cta: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:13, color:'white', background:'var(--mt-ocean)', border:0, padding:'9px 16px', borderRadius:999, cursor:'pointer' },
  table: { width:'100%', borderCollapse:'collapse', fontFamily:'var(--font-body)', fontSize:14 },
  th: { textAlign:'left', padding:'10px 12px', fontFamily:'var(--font-ui)', fontSize:11, fontWeight:800, color:'var(--fg-tertiary)', letterSpacing:'0.06em', textTransform:'uppercase', borderBottom:'1px solid var(--border-subtle)' },
  tr: { borderBottom:'1px solid var(--border-subtle)' },
  td: { padding:'14px 12px', color:'var(--mt-navy)', verticalAlign:'middle' },
  avatar: { width:36, height:36, borderRadius:999, color:'var(--mt-navy)', fontFamily:'var(--font-display)', fontWeight:800, fontSize:12, display:'flex', alignItems:'center', justifyContent:'center' },
  barWrap: { width:100, height:6, borderRadius:999, background:'var(--bg-muted)', overflow:'hidden' },
  bar: { height:'100%', background:'var(--mt-teal)' },
  badge: { fontFamily:'var(--font-ui)', fontSize:11, fontWeight:800, padding:'3px 10px', borderRadius:999, background:'var(--mt-teal-100)', color:'var(--mt-ocean-700)' },
  link: { background:'transparent', border:0, color:'var(--mt-ocean)', fontWeight:700, cursor:'pointer', fontSize:13 }
};

window.TeamView = TeamView;
