function DashboardView({ onOpenJob }) {
  const jobs = [
    { id:1, time:'9:00 AM',  address:'128 Elm St · Santa Monica', service:'Deep Clean · 3br', pro:'Maria S.', status:'confirmed' },
    { id:2, time:'10:30 AM', address:'44 Pier Ave · Venice',       service:'Weekly · 2br',   pro:'James L.', status:'in_progress' },
    { id:3, time:'1:15 PM',  address:'9 Sunset Blvd · WeHo',       service:'STR Turn',       pro:'Alicia D.', status:'pending' },
    { id:4, time:'3:30 PM',  address:'7511 Melrose · LA',          service:'Move-out',       pro:'Omar K.',   status:'confirmed' },
  ];
  return (
    <div style={dvStyles.wrap}>
      <div style={dvStyles.kpis}>
        <KpiCard label="Bookings today" value="12" delta="+2" positive footer="vs. last Tue" />
        <KpiCard label="Revenue WTD"    value="$18,240" delta="+14%" positive footer="on track: $26k" />
        <KpiCard label="Avg rating"     value="4.92 ★" footer="412 reviews this month" />
        <KpiCard label="On-time rate"   value="97%" delta="-1%" footer="industry bench: 82%" />
      </div>
      <div style={dvStyles.split}>
        <section style={dvStyles.panel}>
          <div style={dvStyles.panelHead}>
            <div>
              <div style={dvStyles.eyebrow}>Today · Tuesday, April 28</div>
              <h3 style={dvStyles.h3}>Live schedule</h3>
            </div>
            <button style={dvStyles.viewAll}>View full schedule →</button>
          </div>
          <div style={dvStyles.jobs}>
            {jobs.map(j => <JobCard key={j.id} job={j} onClick={() => onOpenJob(j)}/>)}
          </div>
        </section>
        <section style={dvStyles.panel}>
          <div style={dvStyles.panelHead}>
            <div>
              <div style={dvStyles.eyebrow}>Now</div>
              <h3 style={dvStyles.h3}>Needs your eyeballs</h3>
            </div>
          </div>
          <div style={dvStyles.alerts}>
            <div style={{...dvStyles.alert, background:'#FFF3D1', borderColor:'#FFB600'}}>
              <div style={dvStyles.alertH}>Reschedule request</div>
              <div style={dvStyles.alertP}>Ben Ortiz wants to move Thu → Fri AM. One tap to approve.</div>
              <div style={dvStyles.alertRow}>
                <button style={dvStyles.approve}>Approve</button>
                <button style={dvStyles.deny}>Propose new</button>
              </div>
            </div>
            <div style={{...dvStyles.alert, background:'var(--mt-teal-100)', borderColor:'var(--mt-teal)'}}>
              <div style={dvStyles.alertH}>Cleaner milestone</div>
              <div style={dvStyles.alertP}>Maria S. just hit 500 cleans — worth a shout-out + bonus?</div>
            </div>
            <div style={{...dvStyles.alert, background:'#FBE6E7', borderColor:'#E5484D'}}>
              <div style={dvStyles.alertH}>Low-star review</div>
              <div style={dvStyles.alertP}>3★ from 44 Pier Ave. Could use a personal text — details attached.</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const dvStyles = {
  wrap: { padding:32, display:'flex', flexDirection:'column', gap:20 },
  kpis: { display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14 },
  split: { display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:16 },
  panel: { background:'white', border:'1px solid var(--border-subtle)', borderRadius:16, padding:20 },
  panelHead: { display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:14 },
  eyebrow: { fontFamily:'var(--font-ui)', fontSize:10, fontWeight:800, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mt-ocean)' },
  h3: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:20, color:'var(--mt-navy)', margin:0, marginTop:4 },
  viewAll: { background:'transparent', border:0, color:'var(--mt-ocean)', fontWeight:700, fontSize:13, cursor:'pointer' },
  jobs: { display:'flex', flexDirection:'column', gap:8 },
  alerts: { display:'flex', flexDirection:'column', gap:10 },
  alert: { borderRadius:12, padding:14, border:'1.5px solid' },
  alertH: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:14, color:'var(--mt-navy)' },
  alertP: { fontSize:13, color:'var(--fg-secondary)', marginTop:4, lineHeight:1.4 },
  alertRow: { display:'flex', gap:8, marginTop:10 },
  approve: { background:'var(--mt-green)', color:'white', border:0, fontWeight:800, fontSize:12, padding:'6px 14px', borderRadius:999, cursor:'pointer', fontFamily:'var(--font-display)' },
  deny: { background:'white', color:'var(--mt-navy)', border:'1.5px solid var(--mt-navy)', fontWeight:700, fontSize:12, padding:'6px 14px', borderRadius:999, cursor:'pointer', fontFamily:'var(--font-display)' }
};

window.DashboardView = DashboardView;
