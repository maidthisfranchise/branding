function CTABanner({ onBook }) {
  return (
    <section style={ctaStyles.wrap}>
      <div style={ctaStyles.inner}>
        <svg style={ctaStyles.s1} viewBox="0 0 24 24" fill="white"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"/></svg>
        <svg style={ctaStyles.s2} viewBox="0 0 24 24" fill="white" opacity="0.6"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"/></svg>
        <h2 style={ctaStyles.h2}>Your couch is judging you.<br/><span style={{color:'var(--mt-yellow)'}}>Fix that.</span></h2>
        <p style={ctaStyles.p}>Book in 60 seconds. Cancel or reschedule anytime. No contracts, no up-selling, no weird vibes.</p>
        <button style={ctaStyles.btn} onClick={onBook}>Book a clean →</button>
      </div>
    </section>
  );
}

const ctaStyles = {
  wrap: { padding:'80px 32px', background:'var(--mt-ocean)', color:'white', position:'relative', overflow:'hidden' },
  inner: { maxWidth:800, margin:'0 auto', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:20, position:'relative' },
  h2: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(40px, 5vw, 60px)', letterSpacing:'-0.02em', lineHeight:1.05, margin:0, textWrap:'balance' },
  p: { fontFamily:'var(--font-body)', fontSize:18, lineHeight:1.55, color:'rgba(255,255,255,0.9)', maxWidth:560, textWrap:'pretty' },
  btn: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:16, letterSpacing:'0.02em', color:'var(--mt-navy)', background:'var(--mt-yellow)', border:0, padding:'16px 32px', borderRadius:999, cursor:'pointer', boxShadow:'0 20px 48px rgba(0,0,0,0.2)' },
  s1: { position:'absolute', top:-20, left:'10%', width:80, opacity:0.4 },
  s2: { position:'absolute', bottom:-20, right:'15%', width:120 }
};

window.CTABanner = CTABanner;
