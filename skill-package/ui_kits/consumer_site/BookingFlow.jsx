const { useState: useBookState } = React;

function BookingFlow({ open, initialZip, onClose }) {
  const [step, setStep] = useBookState(1);
  const [zip, setZip] = useBookState(initialZip || '');
  const [service, setService] = useBookState('Weekly Refresh');
  const [slot, setSlot] = useBookState(null);

  React.useEffect(() => { if (open) { setStep(1); setZip(initialZip || ''); setSlot(null); } }, [open, initialZip]);

  if (!open) return null;

  const slots = [
    { day:'Tue', date:'Apr 28', time:'10:30 AM', pro:'Maria S.', rate:4.95 },
    { day:'Wed', date:'Apr 29', time:'8:00 AM',  pro:'James L.', rate:4.92 },
    { day:'Wed', date:'Apr 29', time:'2:15 PM',  pro:'Alicia D.', rate:4.98 },
    { day:'Thu', date:'Apr 30', time:'11:45 AM', pro:'Omar K.', rate:4.90 },
  ];

  return (
    <div style={bfStyles.overlay} onClick={onClose}>
      <div style={bfStyles.modal} onClick={e => e.stopPropagation()}>
        <div style={bfStyles.header}>
          <div style={bfStyles.progress}>
            {[1,2,3].map(i => (
              <div key={i} style={{...bfStyles.dot, ...(i <= step ? bfStyles.dotActive : {})}}/>
            ))}
          </div>
          <button style={bfStyles.x} onClick={onClose}>✕</button>
        </div>

        {step === 1 && (
          <div style={bfStyles.body}>
            <div style={bfStyles.eyebrow}>Step 1 of 3</div>
            <h2 style={bfStyles.h}>What's the ZIP?</h2>
            <p style={bfStyles.sub}>We match you to a local franchisee. (Yes, they're all background-checked. No, they won't judge the laundry pile.)</p>
            <input style={bfStyles.bigInput} value={zip} onChange={e => setZip(e.target.value)} placeholder="90210"/>
            <div style={bfStyles.chips}>
              {['Weekly Refresh', 'Deep Clean', 'Move-in/out', 'Vacation rental'].map(s => (
                <button key={s} onClick={() => setService(s)}
                  style={{...bfStyles.chip, ...(service === s ? bfStyles.chipOn : {})}}>{s}</button>
              ))}
            </div>
            <button style={bfStyles.next} disabled={!zip} onClick={() => setStep(2)}>See openings →</button>
          </div>
        )}

        {step === 2 && (
          <div style={bfStyles.body}>
            <div style={bfStyles.eyebrow}>Step 2 of 3 · {service} · {zip}</div>
            <h2 style={bfStyles.h}>Pick a time that works.</h2>
            <p style={bfStyles.sub}>We only show times your matched pro is actually free. None of that "contact us for availability" nonsense.</p>
            <div style={bfStyles.slots}>
              {slots.map((s,i) => (
                <button key={i} onClick={() => setSlot(s)} style={{...bfStyles.slot, ...(slot === s ? bfStyles.slotOn : {})}}>
                  <div style={bfStyles.slotDay}>{s.day} · {s.date}</div>
                  <div style={bfStyles.slotTime}>{s.time}</div>
                  <div style={bfStyles.slotPro}>{s.pro} · {s.rate} ★</div>
                </button>
              ))}
            </div>
            <div style={{display:'flex', gap:10}}>
              <button style={bfStyles.back} onClick={() => setStep(1)}>← Back</button>
              <button style={bfStyles.next} disabled={!slot} onClick={() => setStep(3)}>Confirm →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={bfStyles.body}>
            <div style={bfStyles.doneCheck}>
              <svg viewBox="0 0 24 24" width="48" height="48" stroke="white" strokeWidth="3" fill="none"><path d="M5 12l5 5L20 7"/></svg>
            </div>
            <h2 style={bfStyles.h}>You're booked.</h2>
            <p style={bfStyles.sub}>{slot?.pro} is on it. {slot?.day}, {slot?.date} at {slot?.time}. Receipt hit your inbox. Go do literally anything else now.</p>
            <div style={bfStyles.recap}>
              <div><span style={bfStyles.recapK}>Service</span><span>{service}</span></div>
              <div><span style={bfStyles.recapK}>Pro</span><span>{slot?.pro} · {slot?.rate} ★</span></div>
              <div><span style={bfStyles.recapK}>Total</span><span style={{fontWeight:800}}>$189.00</span></div>
            </div>
            <button style={bfStyles.next} onClick={onClose}>Back to home</button>
          </div>
        )}
      </div>
    </div>
  );
}

const bfStyles = {
  overlay: { position:'fixed', inset:0, background:'rgba(28,42,56,0.6)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:100, padding:20, backdropFilter:'blur(4px)' },
  modal: { width:'min(560px, 100%)', maxHeight:'90vh', overflow:'auto', background:'white', borderRadius:24, padding:32, boxShadow:'0 40px 80px rgba(0,0,0,0.3)' },
  header: { display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 },
  progress: { display:'flex', gap:6 },
  dot: { width:40, height:6, borderRadius:3, background:'var(--mt-gray)' },
  dotActive: { background:'var(--mt-ocean)' },
  x: { border:0, background:'var(--mt-gray)', width:32, height:32, borderRadius:999, cursor:'pointer', fontSize:14, color:'var(--mt-navy)' },
  body: { display:'flex', flexDirection:'column', gap:16 },
  eyebrow: { fontFamily:'var(--font-ui)', fontSize:11, fontWeight:800, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mt-ocean)' },
  h: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:32, letterSpacing:'-0.02em', color:'var(--mt-navy)', margin:0, lineHeight:1.1 },
  sub: { fontFamily:'var(--font-body)', fontSize:15, color:'var(--fg-secondary)', lineHeight:1.5, margin:0 },
  bigInput: { padding:'18px 22px', fontSize:24, fontFamily:'var(--font-display)', fontWeight:700, border:'2px solid var(--border-default)', borderRadius:14, outline:'none', color:'var(--mt-navy)' },
  chips: { display:'flex', flexWrap:'wrap', gap:8 },
  chip: { fontFamily:'var(--font-ui)', fontWeight:700, fontSize:13, padding:'9px 16px', borderRadius:999, border:'1.5px solid var(--border-default)', background:'white', color:'var(--fg-primary)', cursor:'pointer' },
  chipOn: { background:'var(--mt-navy)', color:'white', borderColor:'var(--mt-navy)' },
  slots: { display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 },
  slot: { padding:'12px 14px', borderRadius:14, border:'1.5px solid var(--border-default)', background:'white', textAlign:'left', cursor:'pointer', display:'flex', flexDirection:'column', gap:2 },
  slotOn: { borderColor:'var(--mt-ocean)', background:'var(--mt-ocean-100)' },
  slotDay: { fontFamily:'var(--font-ui)', fontSize:11, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--fg-tertiary)' },
  slotTime: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:18, color:'var(--mt-navy)' },
  slotPro: { fontFamily:'var(--font-ui)', fontSize:12, color:'var(--fg-secondary)' },
  back: { flex:1, fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, padding:'14px', borderRadius:999, border:'2px solid var(--mt-navy)', background:'transparent', color:'var(--mt-navy)', cursor:'pointer' },
  next: { flex:2, fontFamily:'var(--font-display)', fontWeight:800, fontSize:14, letterSpacing:'0.02em', padding:'14px 24px', borderRadius:999, border:0, background:'var(--mt-ocean)', color:'white', cursor:'pointer', boxShadow:'0 14px 30px rgba(12,133,194,0.3)' },
  doneCheck: { width:72, height:72, borderRadius:999, background:'var(--mt-green)', display:'flex', alignItems:'center', justifyContent:'center', alignSelf:'center', marginBottom:8 },
  recap: { background:'var(--bg-soft)', borderRadius:12, padding:16, display:'flex', flexDirection:'column', gap:8, fontFamily:'var(--font-body)', fontSize:14 },
  recapK: { color:'var(--fg-tertiary)', fontSize:12, fontWeight:700, letterSpacing:'0.04em', textTransform:'uppercase', marginRight:12 }
};
// each recap row:
const recapRow = { display:'flex', justifyContent:'space-between' };
// Inline style shim for rows (applied below)
Object.assign(bfStyles.recap, { });
window.BookingFlow = BookingFlow;
