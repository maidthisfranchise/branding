function HowItWorks() {
  const steps = [
    { n:'01', title:'Drop a ZIP', body:"We match you to a local pro who's already cleaned a zillion homes just like yours." },
    { n:'02', title:'Pick a time', body:"Tomorrow 10 AM? Thursday 2 PM? 6:45 AM on a Saturday? (We don't judge.)" },
    { n:'03', title:'Come home to clean', body:"Unlock the door, breathe in, text your group chat a brag photo. That's it." },
  ];
  return (
    <section style={hwStyles.wrap}>
      <div style={hwStyles.inner}>
        <div style={{display:'flex', flexDirection:'column', gap:10}}>
          <div style={hwStyles.eyebrow}>How it works</div>
          <h2 style={hwStyles.h2}>Three taps. Zero grout.</h2>
        </div>
        <div style={hwStyles.grid}>
          {steps.map(s => (
            <div key={s.n} style={hwStyles.step}>
              <div style={hwStyles.num}>{s.n}</div>
              <div style={hwStyles.title}>{s.title}</div>
              <div style={hwStyles.body}>{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const hwStyles = {
  wrap: { padding:'80px 32px', background:'var(--mt-navy)', color:'white' },
  inner: { maxWidth:1200, margin:'0 auto', display:'flex', flexDirection:'column', gap:40 },
  eyebrow: { fontFamily:'var(--font-ui)', fontSize:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mt-teal)' },
  h2: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:44, letterSpacing:'-0.02em', lineHeight:1.05, margin:0 },
  grid: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16 },
  step: { background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:20, padding:28, display:'flex', flexDirection:'column', gap:12 },
  num: { fontFamily:'var(--font-display)', fontWeight:900, fontSize:52, color:'var(--mt-teal)', lineHeight:1 },
  title: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:24, letterSpacing:'-0.01em' },
  body: { fontFamily:'var(--font-body)', fontSize:15, lineHeight:1.55, color:'rgba(255,255,255,0.75)', textWrap:'pretty' }
};

window.HowItWorks = HowItWorks;
