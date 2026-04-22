const { useState: useStateHero } = React;

function Hero({ onBook }) {
  const [zip, setZip] = useStateHero('');
  return (
    <section style={heroStyles.wrap}>
      <div style={heroStyles.inner}>
        <div style={heroStyles.left}>
          <div style={heroStyles.eyebrow}>● Real humans · Real clean</div>
          <h1 style={heroStyles.h1}>
            Sparkling floors.<br/>
            <span style={{color:'var(--mt-ocean)'}}>Zero sparkling effort.</span>
          </h1>
          <p style={heroStyles.lead}>
            Book a top-tier cleaner in 60 seconds. We bring the supplies, the skills, and (legally) all the gossip about your neighborhood.
          </p>
          <div style={heroStyles.form}>
            <input
              style={heroStyles.input}
              placeholder="ZIP code"
              value={zip}
              onChange={e => setZip(e.target.value)}
            />
            <button style={heroStyles.cta} onClick={() => onBook?.(zip)}>Find my cleaner →</button>
          </div>
          <div style={heroStyles.trust}>
            <span>★★★★★ 4.9 avg</span>
            <span>·</span>
            <span>80,000+ homes cleaned</span>
            <span>·</span>
            <span>Background-checked pros</span>
          </div>
        </div>
        <div style={heroStyles.right}>
          <div style={heroStyles.photo}>
            <div style={heroStyles.photoLabel}>Photo placeholder<br/><span style={{opacity:0.55}}>Real cleaner, real home, natural light</span></div>
            <svg style={heroStyles.spark1} viewBox="0 0 24 24" fill="var(--mt-teal)"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"/></svg>
            <svg style={heroStyles.spark2} viewBox="0 0 24 24" fill="var(--mt-yellow)"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"/></svg>
          </div>
          <div style={heroStyles.floatCard}>
            <div style={{fontFamily:'var(--font-ui)', fontSize:10, letterSpacing:'0.08em', color:'var(--mt-ocean)', fontWeight:800, textTransform:'uppercase'}}>Next opening</div>
            <div style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:22, color:'var(--mt-navy)'}}>Tue, 10:30 AM</div>
            <div style={{fontSize:12, color:'var(--fg-secondary)'}}>Maria S. · 4.95 ★ · 612 cleans</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const heroStyles = {
  wrap: { background:'linear-gradient(180deg, #F6FAFB 0%, #FFFFFF 100%)', padding:'56px 32px 80px' },
  inner: { maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:48, alignItems:'center' },
  left: { display:'flex', flexDirection:'column', gap:20 },
  eyebrow: { fontFamily:'var(--font-ui)', fontSize:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mt-ocean)' },
  h1: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(44px, 5vw, 72px)', lineHeight:1.02, letterSpacing:'-0.02em', color:'var(--mt-navy)', margin:0, textWrap:'balance' },
  lead: { fontFamily:'var(--font-body)', fontSize:18, lineHeight:1.55, color:'var(--fg-secondary)', maxWidth:520, textWrap:'pretty' },
  form: { display:'flex', gap:8, marginTop:8, maxWidth:440 },
  input: { flex:1, padding:'14px 18px', fontSize:15, fontFamily:'var(--font-body)', border:'1.5px solid var(--border-default)', borderRadius:999, outline:'none', color:'var(--fg-primary)' },
  cta: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, letterSpacing:'0.02em', color:'white', background:'var(--mt-ocean)', border:0, padding:'0 24px', borderRadius:999, cursor:'pointer', boxShadow:'0 14px 30px rgba(12,133,194,0.3)' },
  trust: { display:'flex', gap:10, fontSize:13, color:'var(--fg-secondary)', fontWeight:600, marginTop:6, flexWrap:'wrap' },
  right: { position:'relative' },
  photo: { aspectRatio:'4/5', background:'var(--mt-teal-100)', border:'1px solid var(--border-subtle)', borderRadius:28, display:'flex', alignItems:'center', justifyContent:'center', color:'var(--mt-ocean-700)', textAlign:'center', fontFamily:'var(--font-ui)', fontSize:13, fontWeight:600, position:'relative', overflow:'hidden' },
  photoLabel: { lineHeight:1.5 },
  spark1: { position:'absolute', top:24, left:32, width:48 },
  spark2: { position:'absolute', top:72, left:80, width:28 },
  floatCard: { position:'absolute', right:-12, bottom:40, background:'white', padding:'14px 18px', borderRadius:16, boxShadow:'0 20px 48px rgba(44,62,80,0.14)', display:'flex', flexDirection:'column', gap:2 }
};

window.Hero = Hero;
