function ServiceGrid() {
  const items = [
    { tag:'Most booked', title:'Weekly Refresh', desc:"The sweet spot. You live, we clean, nobody argues about the dishes.", price:'From $99 / visit', featured:true },
    { tag:'Service', title:'The Deep Clean', desc:'Baseboards. Blinds. That one mystery stain. Everything.', price:'From $189' },
    { tag:'Service', title:'Move-in / Move-out', desc:'So pristine, you get your deposit back AND a compliment.', price:'From $249' },
    { tag:'STR', title:'Vacation Rental Turn', desc:"Guest-ready in 3 hours. Photos included for your listing.", price:'From $119' },
  ];
  return (
    <section style={sgStyles.wrap}>
      <div style={sgStyles.inner}>
        <div style={sgStyles.head}>
          <div style={sgStyles.eyebrow}>Services</div>
          <h2 style={sgStyles.h2}>Pick your poison. <span style={{color:'var(--mt-ocean)'}}>(Metaphorically.)</span></h2>
        </div>
        <div style={sgStyles.grid}>
          {items.map((it, i) => (
            <div key={i} style={{...sgStyles.card, ...(it.featured ? sgStyles.featured : {})}}>
              <div style={sgStyles.tag}>{it.tag}</div>
              <div style={sgStyles.title}>{it.title}</div>
              <div style={sgStyles.desc}>{it.desc}</div>
              <div style={sgStyles.priceRow}>
                <span style={sgStyles.price}>{it.price}</span>
                <span style={sgStyles.arrow}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sgStyles = {
  wrap: { padding:'80px 32px', background:'white' },
  inner: { maxWidth:1200, margin:'0 auto' },
  head: { marginBottom:40, display:'flex', flexDirection:'column', gap:10 },
  eyebrow: { fontFamily:'var(--font-ui)', fontSize:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--mt-ocean)' },
  h2: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:44, letterSpacing:'-0.02em', lineHeight:1.05, color:'var(--mt-navy)', margin:0 },
  grid: { display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16 },
  card: { background:'white', border:'1px solid var(--border-subtle)', borderRadius:20, padding:24, display:'flex', flexDirection:'column', gap:10, minHeight:220, cursor:'pointer', transition:'all 200ms cubic-bezier(0.2, 0.8, 0.2, 1)' },
  featured: { background:'var(--mt-teal-100)', border:'1px solid var(--mt-teal-300)' },
  tag: { fontFamily:'var(--font-ui)', fontSize:10, fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--mt-ocean)' },
  title: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:22, letterSpacing:'-0.01em', color:'var(--mt-navy)', lineHeight:1.1 },
  desc: { fontFamily:'var(--font-body)', fontSize:14, lineHeight:1.5, color:'var(--fg-secondary)', textWrap:'pretty' },
  priceRow: { marginTop:'auto', display:'flex', alignItems:'center', justifyContent:'space-between' },
  price: { fontFamily:'var(--font-ui)', fontSize:13, fontWeight:700, color:'var(--mt-navy)' },
  arrow: { fontFamily:'var(--font-display)', fontWeight:800, color:'var(--mt-ocean)', fontSize:20 }
};

window.ServiceGrid = ServiceGrid;
