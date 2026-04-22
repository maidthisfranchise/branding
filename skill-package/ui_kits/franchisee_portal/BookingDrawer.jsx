function BookingDrawer({ job, onClose }) {
  if (!job) return null;
  return (
    <>
      <div style={bdStyles.overlay} onClick={onClose}/>
      <div style={bdStyles.drawer}>
        <div style={bdStyles.head}>
          <div>
            <div style={bdStyles.eyebrow}>Booking #MT-8213</div>
            <h3 style={bdStyles.h3}>{job.service}</h3>
          </div>
          <button style={bdStyles.x} onClick={onClose}>✕</button>
        </div>
        <div style={bdStyles.section}>
          <div style={bdStyles.sectionLbl}>When</div>
          <div style={bdStyles.val}>Today · {job.time} · 2h est.</div>
        </div>
        <div style={bdStyles.section}>
          <div style={bdStyles.sectionLbl}>Where</div>
          <div style={bdStyles.val}>{job.address}</div>
          <div style={bdStyles.sub}>Gate code: 2406 · Dogs: 1 (friendly)</div>
        </div>
        <div style={bdStyles.section}>
          <div style={bdStyles.sectionLbl}>Customer</div>
          <div style={bdStyles.row}>
            <div style={bdStyles.avatar}>BK</div>
            <div>
              <div style={bdStyles.val}>Ben Khan</div>
              <div style={bdStyles.sub}>4 bookings · VIP · prefers Tuesdays</div>
            </div>
          </div>
        </div>
        <div style={bdStyles.section}>
          <div style={bdStyles.sectionLbl}>Assigned pro</div>
          <div style={bdStyles.row}>
            <div style={{...bdStyles.avatar, background:'var(--mt-teal)'}}>MS</div>
            <div>
              <div style={bdStyles.val}>{job.pro}</div>
              <div style={bdStyles.sub}>4.95 ★ · 612 cleans · on-time 98%</div>
            </div>
          </div>
        </div>
        <div style={bdStyles.section}>
          <div style={bdStyles.sectionLbl}>Checklist</div>
          <div style={bdStyles.list}>
            <div style={bdStyles.check}><span style={bdStyles.boxOn}>✓</span> Kitchen deep-clean</div>
            <div style={bdStyles.check}><span style={bdStyles.boxOn}>✓</span> Bathrooms (3)</div>
            <div style={bdStyles.check}><span style={bdStyles.box}></span> Bedroom dusting</div>
            <div style={bdStyles.check}><span style={bdStyles.box}></span> Vacuum + mop</div>
            <div style={bdStyles.check}><span style={bdStyles.box}></span> Trash out</div>
          </div>
        </div>
        <div style={bdStyles.actions}>
          <button style={bdStyles.secondary}>Message customer</button>
          <button style={bdStyles.primary}>Mark complete</button>
        </div>
      </div>
    </>
  );
}

const bdStyles = {
  overlay: { position:'fixed', inset:0, background:'rgba(28,42,56,0.4)', zIndex:80 },
  drawer: { position:'fixed', top:0, right:0, width:420, height:'100vh', background:'white', zIndex:90, padding:28, overflow:'auto', boxShadow:'-20px 0 60px rgba(0,0,0,0.15)', display:'flex', flexDirection:'column', gap:20 },
  head: { display:'flex', justifyContent:'space-between', alignItems:'flex-start' },
  eyebrow: { fontFamily:'var(--font-ui)', fontSize:10, fontWeight:800, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mt-ocean)' },
  h3: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:22, color:'var(--mt-navy)', margin:0, marginTop:4, letterSpacing:'-0.01em' },
  x: { border:0, background:'var(--bg-soft)', width:32, height:32, borderRadius:999, cursor:'pointer', fontSize:14, color:'var(--mt-navy)' },
  section: { display:'flex', flexDirection:'column', gap:6, paddingBottom:16, borderBottom:'1px solid var(--border-subtle)' },
  sectionLbl: { fontFamily:'var(--font-ui)', fontSize:10, fontWeight:800, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--fg-tertiary)' },
  val: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:15, color:'var(--mt-navy)' },
  sub: { fontSize:12, color:'var(--fg-secondary)', marginTop:2 },
  row: { display:'flex', gap:12, alignItems:'center' },
  avatar: { width:40, height:40, borderRadius:999, background:'var(--mt-ocean)', color:'white', fontFamily:'var(--font-display)', fontWeight:800, fontSize:13, display:'flex', alignItems:'center', justifyContent:'center' },
  list: { display:'flex', flexDirection:'column', gap:6 },
  check: { display:'flex', gap:10, alignItems:'center', fontSize:13, color:'var(--mt-navy)' },
  box: { width:16, height:16, borderRadius:4, border:'1.5px solid var(--border-default)', display:'inline-block' },
  boxOn: { width:16, height:16, borderRadius:4, background:'var(--mt-green)', color:'white', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:800 },
  actions: { display:'flex', gap:8, marginTop:'auto' },
  secondary: { flex:1, fontFamily:'var(--font-display)', fontWeight:700, fontSize:13, padding:'12px', borderRadius:999, border:'1.5px solid var(--mt-navy)', background:'white', color:'var(--mt-navy)', cursor:'pointer' },
  primary: { flex:1, fontFamily:'var(--font-display)', fontWeight:800, fontSize:13, padding:'12px', borderRadius:999, border:0, background:'var(--mt-green)', color:'white', cursor:'pointer' }
};

window.BookingDrawer = BookingDrawer;
