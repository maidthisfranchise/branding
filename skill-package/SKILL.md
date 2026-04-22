---
name: maidthis-brand-design
description: Use this skill whenever you are asked to design, write, or produce any on-brand artifact for MaidThis Franchise — a tech-forward residential and vacation rental cleaning franchise. Covers flyers, social posts, email headers, door hangers, landing pages, pitch decks, vehicle art, business cards, ad copy, franchise recruitment materials, and any other marketing collateral. ALSO use this skill any time the user mentions MaidThis, a cleaning franchise promotion, or a local market campaign (Scottsdale, LA, Austin, etc.). The skill contains the full visual system (colors, type, logos), voice and tone rules, content do's and don'ts, and reference UI/component examples.
---

# MaidThis Brand Design Skill

You are designing for **MaidThis Franchise** — a residential + vacation rental (STR) cleaning franchise. Output should be tight, on-brand, and almost never generic.

## Before you design, read these

1. **`README.md`** — full brand rulebook: voice, content fundamentals, color system, type, layout rules, iconography, do's and don'ts. Read it end to end on the first request of a session.
2. **`colors_and_type.css`** — source of truth for every color, font, radius, shadow, and spacing token. **Always link this CSS file from any HTML artifact you create.**
3. **`preview/`** — one HTML card per token family. Great visual reference for what "on-brand" looks like.
4. **`ui_kits/consumer_site/`** and **`ui_kits/franchisee_portal/`** — high-fidelity component examples (Header, Hero, Buttons, Cards, Forms, Dashboard, Schedule board). Copy-paste from these rather than inventing new patterns.
5. **`assets/logos/`** — four logo variations. Use the right one:
   - `maidthis-primary.png` — default two-tone lockup (most uses)
   - `maidthis-black.png` — single-color print / fax / faxed again
   - `maidthis-mark.png` — favicon, avatar, tight spaces
   - `maidthis-t-mark.png` — tiny UI, social profile square

## Voice (non-negotiable)

**70% stand-up comedian · 20% trusted friend · 10% professional.**

- Punchy, mobile-friendly sentences. Short. Clean. Hit.
- Self-aware humor, strategic hyperbole, parenthetical asides.
- Direct audience callouts: *"Your couch is judging you."*
- Second person ("you", "your"). First person plural ("we") for the brand.
- Contractions are fine. Oxford commas, yes.

**Never say** — "affordable", "reliable", "professional cleaning services", "we care about your home", "our team of trained professionals", anything starting with "At MaidThis, we believe…". These are bans.

**Say instead** — "Real humans. Real clean. No clipboard energy.", "Sparkling floors. Zero sparkling effort.", "Your Airbnb, guest-ready in 3 hours."

## Dominant palette

- Teal Blue `#5AB3C9` — brand affirmation, hero fills
- White `#FFFFFF` — the workhorse, maximize it
- Charcoal / Black `#2C3E50` / `#0F1821` — typography, anchor blocks

Backup: Ocean Blue `#0C85C2`, Aqua Mist `#A7DBE7`. Accents (one at a time, never two): Fresh Green `#7CCA5B` for success/CTAs, Bold Yellow `#FFB600` for promos.

## Type

- **Montserrat** — display + UI, 800 ExtraBold for headlines, tight tracking (-0.02em) at display sizes.
- **Open Sans** — body copy, 15–18px, line-height 1.55–1.6.

## Layout defaults

- Max container 1200px, 32px gutter.
- 80px section padding on desktop.
- Pill buttons (999px radius). Always. Never square CTAs.
- 16–20px radius on cards. 28px on photography frames.
- Shadows are navy-tinted and soft. Never harsh black drops.
- Generous whitespace beats decoration.

## Workflow when the user asks for something

1. **Confirm audience and surface** briefly — is it a homeowner flyer? STR host social post? Franchise recruitment ad? Each has a different tone dial within the voice range.
2. **Pick the right format** — static HTML for print-ready, interactive HTML for prototypes, slides for presentations. Default to a single self-contained HTML file.
3. **Always link `colors_and_type.css`** — never re-declare tokens.
4. **Always use real logos from `assets/logos/`** — never draw a fake logo.
5. **Photography is placeholder-only** unless the user provides images. A labelled placeholder block is better than a generic stock illustration or AI slop.
6. **Offer 2–3 variations** for anything visual. Layout, color emphasis, copy angle.
7. **Franchisees can customize** — always leave obvious spots for market name, phone, promo code.

## Example prompts this skill should handle

- "Make me an Instagram post about our happiness guarantee"
- "Design a door hanger for move-out season in LA"
- "Draft a flyer for a $50-off Deep Clean promo"
- "Write a recruitment ad to hire new cleaners"
- "Build a landing page for our Scottsdale market"
- "I need 3 email header designs for our monthly newsletter"

For each — read the README, pick the right template patterns from `ui_kits/`, keep voice in check, ship.
