const { useState } = React;

function Header() {
  return (
    <header style={hStyles.wrap}>
      <div style={hStyles.inner}>
        <a href="#" style={hStyles.logo}>
          <img src="../../assets/logos/maidthis-primary.png" alt="MaidThis" style={{height: 36}}/>
        </a>
        <nav style={hStyles.nav}>
          <a href="#" style={hStyles.link}>Residential</a>
          <a href="#" style={hStyles.link}>Vacation rentals</a>
          <a href="#" style={hStyles.link}>Pricing</a>
          <a href="#" style={hStyles.link}>Own a franchise</a>
        </nav>
        <div style={{display:'flex', gap:10, alignItems:'center'}}>
          <a href="#" style={{...hStyles.link, fontWeight:600}}>Sign in</a>
          <button style={hStyles.cta}>Book a clean →</button>
        </div>
      </div>
    </header>
  );
}

const hStyles = {
  wrap: { position:'sticky', top:0, zIndex:50, background:'rgba(255,255,255,0.92)', backdropFilter:'blur(10px)', borderBottom:'1px solid var(--border-subtle)' },
  inner: { maxWidth:1200, margin:'0 auto', padding:'14px 32px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:24 },
  logo: { display:'flex', alignItems:'center' },
  nav: { display:'flex', gap:28 },
  link: { fontFamily:'var(--font-ui)', fontSize:14, fontWeight:500, color:'var(--fg-primary)', textDecoration:'none' },
  cta: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:13, letterSpacing:'0.02em',
         color:'white', background:'var(--mt-ocean)', border:0, padding:'11px 20px', borderRadius:999, cursor:'pointer',
         boxShadow:'0 10px 22px rgba(12,133,194,0.3)' }
};

window.Header = Header;
