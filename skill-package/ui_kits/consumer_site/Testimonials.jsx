function Testimonials() {
  const items = [
    { q: "Came home and audibly gasped. Would gasp again.", who: "Priya K.", role:"Los Angeles · Weekly" },
    { q: "My Airbnb reviews literally went up a star. Correlation? Causation? Don't care.", who: "Marcus T.", role:"Host · Scottsdale" },
    { q: "I used to apologize to my cleaner for the mess. Now I apologize for the lack of mess.", who: "Jen R.", role:"Deep clean · Austin" },
  ];
  return (
    <section style={tsStyles.wrap}>
      <div style={tsStyles.inner}>
        <div style={{display:'flex', flexDirection:'column', gap:10, textAlign:'center', alignItems:'center'}}>
          <div style={tsStyles.eyebrow}>Real reviews</div>
          <h2 style={tsStyles.h2}>4.9 stars. <span style={{color:'var(--mt-ocean)'}}>Zero fake smiles.</span></h2>
        </div>
        <div style={tsStyles.grid}>
          {items.map((t,i) => (
            <div key={i} style={tsStyles.card}>
              <div style={tsStyles.stars}>★★★★★</div>
              <div style={tsStyles.quote}>"{t.q}"</div>
              <div style={tsStyles.meta}>
                <div style={tsStyles.who}>{t.who}</div>
                <div style={tsStyles.role}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const tsStyles = {
  wrap: { padding:'80px 32px', background:'var(--mt-gray)' },
  inner: { maxWidth:1200, margin:'0 auto', display:'flex', flexDirection:'column', gap:40 },
  eyebrow: { fontFamily:'var(--font-ui)', fontSize:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mt-ocean)' },
  h2: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:44, letterSpacing:'-0.02em', lineHeight:1.05, color:'var(--mt-navy)', margin:0 },
  grid: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16 },
  card: { background:'white', borderRadius:20, padding:28, display:'flex', flexDirection:'column', gap:16, boxShadow:'0 2px 6px rgba(44,62,80,0.06)' },
  stars: { color:'var(--mt-yellow)', fontSize:18, letterSpacing:2 },
  quote: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:18, lineHeight:1.35, color:'var(--mt-navy)', textWrap:'pretty' },
  meta: { marginTop:'auto', display:'flex', flexDirection:'column', gap:2 },
  who: { fontFamily:'var(--font-ui)', fontWeight:700, fontSize:13, color:'var(--mt-navy)' },
  role: { fontFamily:'var(--font-ui)', fontSize:12, color:'var(--fg-tertiary)' }
};

window.Testimonials = Testimonials;
