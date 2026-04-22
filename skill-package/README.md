# MaidThis Design System

Brand + UI system for **MaidThis Franchise** — a tech-forward residential & vacation rental cleaning franchise.

## Products covered
- **Consumer booking website** — marketing + self-service booking for homeowners and STR hosts.
- **Franchisee ops portal** — operator dashboard (schedule, roster, bookings, reports).
- **Marketing & brand applications** — social, email, print/digital, franchise prospect decks.

## Sources
- `uploads/MAID THIS - LOGO VARIATION-01.png` → `assets/logos/maidthis-t-mark.png` (T monogram)
- `uploads/MAID THIS - LOGO VARIATION-02.png` → `assets/logos/maidthis-mark.png` (MT house mark)
- `uploads/MAID THIS - LOGO VARIATION-04.png` → `assets/logos/maidthis-black.png` (all-black wordmark)
- `uploads/MAID THIS - LOGO VARIATION-08 (1).png` → `assets/logos/maidthis-primary.png` (primary two-tone)
- GitHub repo referenced: `maidthisfranchise/branding` — repo is currently empty / inaccessible at `main`, flagged as a caveat.

---

## CONTENT FUNDAMENTALS

**Voice mix:** 70% stand-up comedian · 20% trusted friend · 10% professional.

**Tone knobs**
- **Punchy, mobile-friendly sentences.** Short. Clean. Hit.
- **Self-aware humor + strategic hyperbole** — "Nobody actually enjoys scrubbing grout."
- **Mild professional snark + fourth-wall breaks** — "(Yes, we've seen worse. Yes, we're cool.)"
- **Direct audience callouts** — "Your couch is judging you."
- **Parenthetical asides** for personality — "(We're not judging. Okay, barely.)"
- **Quick-hit bullets, clear section breaks.**
- **No trendy slang that'll date quickly** (skip "bestie", "no cap", "era").

**Casing & punctuation**
- Sentence case for most headlines; **ALL CAPS used sparingly** as a design move in display type (e.g. "CLEAN. BOLD. DONE.").
- Prefer em-dashes and parentheticals to semicolons.
- Contractions are fine (we're, you'll, don't).
- Oxford commas, yes.

**POV**
- Second person ("you", "your") when speaking to the customer.
- First person plural ("we") for the brand.
- Never corporate "our team of professionals" / "valued customers".

**Emoji** — Sparingly, and never as decoration in product UI. Social campaigns can use them for punctuation (one sparkle per caption max — the logo already sparkles).

**Examples — do say**
- "Book a clean in 60 seconds. Cancel anytime. No weird vibes."
- "Sparkling floors. Zero sparkling effort."
- "Your Airbnb, guest-ready in 3 hours."
- "Real humans. Real clean. No clipboard energy."

**Examples — never say**
- "Affordable cleaning services"
- "Reliable, professional cleaning"
- "We care about your home"
- "Our trained team of expert cleaners"
- Anything starting with "At MaidThis, we believe…"

---

## VISUAL FOUNDATIONS

**Design principle** — Clean layouts with *lots* of white space. Bold primary blues. No clutter, no confetti.

**Color vibe** — Cool, crisp, coastal. The dominant trio is **teal · white · black**; ocean blue and aqua mist support. Accents (fresh green, bold yellow) earn their keep on CTAs and callouts — never ornament.

**Dominant palette (after user revision)**
- `#5AB3C9` Teal Blue — hero fills, brand affirmation
- `#FFFFFF` White — the real workhorse; maximize
- `#0F1821` / `#2C3E50` Black / Charcoal Navy — typography, anchor blocks

**Backup / support**
- `#0C85C2` Ocean Blue — links, depth moments, photo treatments
- `#A7DBE7` Aqua Mist — soft backgrounds, illustration fills

**Accents (use 1 at a time)**
- `#7CCA5B` Fresh Green — success, confirm, "booked!"
- `#FFB600` Bold Yellow — promo highlights, callouts on navy

**Typography** — Montserrat (display/UI, 800 ExtraBold for headlines) + Open Sans (body). Montserrat tightens letter-spacing at display sizes; body copy stays natural. See `colors_and_type.css` for the full scale.

**Backgrounds** — White first. Solid tints second (teal or navy). Photography as full-bleed moments with 40% navy overlay for legibility. **No gradients as decoration** (subtle light→white fades only). No busy patterns; one repeating "dot texture" on aqua mist is allowed for secondary surfaces. No hand-drawn illustrations — the sparkle/house motif from the logo is the only bespoke shape.

**Imagery color vibe** — Warm, natural light. Real people (diverse), real homes. Wide angles that showcase space & cleanliness. No stocky staging, no "before/after" gag shots. Cleaners always in top-notch uniforms.

**Animation** — Restrained. `var(--ease-standard)` cubic-bezier(0.2, 0.8, 0.2, 1) at 120–360ms. Fades + 2–6px translateY on reveal. No bounces, no parallax, no scroll-jacking.

**Hover states** — Primary buttons: 6% darker fill + the shadow lifts by 2px. Cards: shadow upgrades one level (sm → md) and translateY(-2px). Links: opacity 0.75. Never re-hue on hover.

**Press states** — scale(0.98) + shadow collapses to xs. Primary buttons flash to Ocean 700.

**Borders** — 1px `#DCE7EC` subtle on cards; 1.5px `#C6D4DB` on inputs; 2px navy on tertiary buttons. Focus ring: 3px `rgba(12,133,194,0.18)` glow + Ocean border.

**Shadows** — All navy-tinted (`rgba(44,62,80,.06 → .14)`), soft, no harsh dark drops. Brand shadow on primary CTAs is Ocean-tinted (`rgba(12,133,194,.22)`).

**Transparency & blur** — Sticky nav uses `rgba(255,255,255,0.92)` + `backdrop-filter: blur(10px)`. Modal overlay: `rgba(28,42,56,0.6)` + 4px blur. Otherwise solid.

**Corner radii** — Generous. 10–14px for inputs and small cards. 16–20px for content cards. 28px for photography frames. **999px pill** for every button and status badge — this is a core brand motif. Never square CTAs.

**Card anatomy** — White fill, 1px subtle border, `shadow-sm` at rest, 16–20px radius, 20–28px inner padding. Feature cards swap the fill for `teal-100` (no border). Dark cards use navy with a teal eyebrow.

**Protection for text over imagery** — 40% navy full-bleed overlay preferred over capsule backgrounds. Capsules used only when text is short and bottom-left aligned.

**Layout rules**
- Max container: 1200px, 32px gutter.
- 12-column grid on desktop, 4-col on mobile.
- Sticky header = 68px tall on desktop.
- Section padding: 80px top/bottom desktop; 56px mobile.
- One accent color per section — never two.

---

## ICONOGRAPHY

**System** — **Lucide** outline icons at 1.75 stroke weight, 24px default size, `currentColor` (usually navy on light, white on navy). Substitution flagged — no codebase was available to extract a native icon set; Lucide is the closest modern, neutral outline system aligned with the brand's clean ethos.

**Rules**
- Outline only. Never mix outline + filled in the same surface.
- One icon per idea. No stacked or decorative icons inside body copy.
- **Sparkle glyph** (from the logo) is reserved: teal fill, used for "clean / done / verified" moments only.
- **House glyph** (from the logo mark) is reserved for the product — never use it as an "address" icon, etc.

**Emoji** — Rarely in product UI. Social/email captions may use one emoji max. Preferred: ✨ 🏡 ✅ ⭐.

**Unicode glyphs** — `★` for ratings (yellow). `●` for status dots. `→` for "learn more" and CTA arrows. `⌕` for search.

**Assets on disk**
- `assets/logos/maidthis-primary.png` — primary lockup (two-tone)
- `assets/logos/maidthis-black.png` — all-black wordmark (single color apps)
- `assets/logos/maidthis-mark.png` — MT + house mark (favicons, avatars)
- `assets/logos/maidthis-t-mark.png` — "T" monogram (tiny UI, social avatar)

---

## Index / Manifest

Root:
- `README.md` — this file
- `SKILL.md` — portable skill spec
- `colors_and_type.css` — CSS variables: colors, type, spacing, radii, shadows, motion

Folders:
- `assets/logos/` — all four logo variations (PNG, transparent)
- `preview/` — design-system preview cards (one HTML per token family). These populate the Design System tab.
- `ui_kits/consumer_site/` — Consumer booking website kit
- `ui_kits/franchisee_portal/` — Franchisee ops portal kit

### UI kits

| Kit | Entry | Components |
|---|---|---|
| Consumer booking site | `ui_kits/consumer_site/index.html` | Header, Hero, ServiceGrid, HowItWorks, Testimonials, CTABanner, Footer, BookingFlow |
| Franchisee ops portal | `ui_kits/franchisee_portal/index.html` | Sidebar, TopBar, DashboardView, ScheduleView, TeamView, JobCard, KpiCard, BookingDrawer |
