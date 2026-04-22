function Footer() {
  return (
    <footer style={fStyles.wrap}>
      <div style={fStyles.inner}>
        <div style={fStyles.brand}>
          <img src="../../assets/logos/maidthis-primary.png" alt="MaidThis" style={{height:36, filter:'brightness(0) invert(1)'}}/>
          <div style={fStyles.blurb}>Cleaning franchises built for how people actually live. And host. And occasionally panic-clean before their in-laws arrive.</div>
        </div>
        <div style={fStyles.cols}>
          <div style={fStyles.col}>
            <div style={fStyles.h}>Services</div>
            <a style={fStyles.l}>Weekly Refresh</a>
            <a style={fStyles.l}>Deep Clean</a>
            <a style={fStyles.l}>Move-in / out</a>
            <a style={fStyles.l}>Vacation rental</a>
          </div>
          <div style={fStyles.col}>
            <div style={fStyles.h}>Company</div>
            <a style={fStyles.l}>About</a>
            <a style={fStyles.l}>Franchising</a>
            <a style={fStyles.l}>Press</a>
            <a style={fStyles.l}>Careers</a>
          </div>
          <div style={fStyles.col}>
            <div style={fStyles.h}>Support</div>
            <a style={fStyles.l}>Help center</a>
            <a style={fStyles.l}>Contact</a>
            <a style={fStyles.l}>Reschedule</a>
          </div>
        </div>
      </div>
      <div style={fStyles.bottom}>
        <div>© 2026 MaidThis Franchise, Inc.</div>
        <div style={{display:'flex', gap:20}}><a style={fStyles.bl}>Privacy</a><a style={fStyles.bl}>Terms</a><a style={fStyles.bl}>Accessibility</a></div>
      </div>
    </footer>
  );
}

const fStyles = {
  wrap: { background:'var(--mt-navy)', color:'white', padding:'64px 32px 24px' },
  inner: { maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 2fr', gap:64, paddingBottom:40, borderBottom:'1px solid rgba(255,255,255,0.1)' },
  brand: { display:'flex', flexDirection:'column', gap:16 },
  blurb: { fontSize:14, lineHeight:1.55, color:'rgba(255,255,255,0.65)', maxWidth:360 },
  cols: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32 },
  col: { display:'flex', flexDirection:'column', gap:10 },
  h: { fontFamily:'var(--font-ui)', fontSize:11, fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--mt-teal)' },
  l: { fontSize:14, color:'rgba(255,255,255,0.85)', textDecoration:'none', cursor:'pointer' },
  bottom: { maxWidth:1200, margin:'0 auto', paddingTop:20, display:'flex', justifyContent:'space-between', fontSize:12, color:'rgba(255,255,255,0.5)' },
  bl: { color:'rgba(255,255,255,0.65)', textDecoration:'none' }
};

window.Footer = Footer;
