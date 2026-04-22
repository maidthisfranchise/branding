function KpiCard({ label, value, delta, positive, footer }) {
  return (
    <div style={kpStyles.card}>
      <div style={kpStyles.lbl}>{label}</div>
      <div style={kpStyles.val}>{value}</div>
      <div style={kpStyles.row}>
        {delta && (
          <span style={{...kpStyles.delta, color: positive ? '#2E6E14' : '#B81E22', background: positive ? '#E6F5DC' : '#FBE6E7'}}>
            {positive ? '▲' : '▼'} {delta}
          </span>
        )}
        <span style={kpStyles.foot}>{footer}</span>
      </div>
    </div>
  );
}

const kpStyles = {
  card: { background:'white', border:'1px solid var(--border-subtle)', borderRadius:14, padding:18, display:'flex', flexDirection:'column', gap:8 },
  lbl: { fontFamily:'var(--font-ui)', fontSize:11, fontWeight:800, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--fg-tertiary)' },
  val: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:32, letterSpacing:'-0.02em', color:'var(--mt-navy)', lineHeight:1 },
  row: { display:'flex', gap:10, alignItems:'center' },
  delta: { fontFamily:'var(--font-ui)', fontSize:11, fontWeight:800, padding:'2px 8px', borderRadius:999 },
  foot: { fontSize:11, color:'var(--fg-tertiary)' }
};

window.KpiCard = KpiCard;

function JobCard({ job, onClick }) {
  const color = { confirmed:'#7CCA5B', in_progress:'#0C85C2', pending:'#FFB600', done:'#2C3E50' }[job.status];
  const label = { confirmed:'Confirmed', in_progress:'In progress', pending:'Pending', done:'Complete' }[job.status];
  return (
    <button onClick={onClick} style={jcStyles.card}>
      <div style={{...jcStyles.bar, background:color}}/>
      <div style={jcStyles.content}>
        <div style={jcStyles.row1}>
          <span style={jcStyles.time}>{job.time}</span>
          <span style={{...jcStyles.pill, background: color+'22', color}}>{label}</span>
        </div>
        <div style={jcStyles.addr}>{job.address}</div>
        <div style={jcStyles.meta}>
          <span>{job.service}</span>
          <span>·</span>
          <span>{job.pro}</span>
        </div>
      </div>
    </button>
  );
}

const jcStyles = {
  card: { display:'flex', gap:0, background:'white', border:'1px solid var(--border-subtle)', borderRadius:12, padding:0, cursor:'pointer', textAlign:'left', width:'100%', overflow:'hidden' },
  bar: { width:4, alignSelf:'stretch' },
  content: { padding:'12px 14px', display:'flex', flexDirection:'column', gap:4, flex:1 },
  row1: { display:'flex', justifyContent:'space-between', alignItems:'center' },
  time: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:14, color:'var(--mt-navy)' },
  pill: { fontFamily:'var(--font-ui)', fontWeight:800, fontSize:10, letterSpacing:'0.06em', textTransform:'uppercase', padding:'3px 8px', borderRadius:999 },
  addr: { fontFamily:'var(--font-body)', fontSize:13, fontWeight:600, color:'var(--mt-navy)' },
  meta: { fontSize:12, color:'var(--fg-tertiary)', display:'flex', gap:6 }
};

window.JobCard = JobCard;
