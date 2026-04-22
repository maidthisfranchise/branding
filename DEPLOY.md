# Deploying the brand hub + generator to Vercel

You've got a working GitHub Pages site at https://maidthisfranchise.github.io/branding/ for the **static parts** (logos, colors, voice, skill download).

But the **AI generator** needs a server. Here's how to turn it on — 10 minutes, free tier, done.

---

## Step 1 — Get an Anthropic API key

1. Go to https://console.anthropic.com
2. Sign up / log in (use your MaidThis email)
3. Click **Settings → API Keys → Create Key**
4. Name it `brand-hub-vercel`, copy the key (starts with `sk-ant-...`)
5. Add $10 of credit (Settings → Billing). That'll cover thousands of generations with Claude Haiku.

**Keep that key somewhere safe.** Never paste it into GitHub, never put it in the HTML.

---

## Step 2 — Deploy to Vercel

1. Go to https://vercel.com and log in with your GitHub account
2. Click **Add New → Project**
3. Import the `maidthisfranchise/branding` repo
4. **Framework Preset:** "Other" (Vercel will auto-detect the `vercel.json`)
5. **Root Directory:** leave as `./`
6. Expand **Environment Variables**:
   - Name: `ANTHROPIC_API_KEY`
   - Value: paste the key from Step 1
   - Click **Add**
7. Click **Deploy**

Wait ~60 seconds. You'll get a live URL like `https://maidthis-brand-xxx.vercel.app`.

---

## Step 3 — Point the brand hub at your Vercel deployment

1. In `docs/index.html`, find this line near the top of the `<script>` section:
   ```js
   window.__BRAND_HUB_API__ = 'https://maidthis-brand.vercel.app';
   ```
2. Replace that URL with your actual Vercel URL from Step 2
3. Commit via the GitHub web UI (edit file → commit changes)
4. GitHub Pages redeploys automatically in ~30 seconds

Test it: go to https://maidthisfranchise.github.io/branding/ → fill out the form → generate. Should work. 🎉

---

## Optional — use a custom domain

Once you're happy with it, point `brand.maidthisfranchise.com` at either:

**(A) GitHub Pages** (keeps current setup):
- DNS: CNAME `brand` → `maidthisfranchise.github.io`
- GitHub repo → Settings → Pages → Custom domain: `brand.maidthisfranchise.com`

**(B) Vercel** (serves both static and API from one domain — cleaner):
- In Vercel project settings → Domains → Add `brand.maidthisfranchise.com`
- Follow DNS instructions Vercel gives you
- Then in `docs/index.html` you can set `window.__BRAND_HUB_API__ = ''` (empty — same origin, relative calls work)

Option B is the right long-term choice because it removes the cross-origin hop. Do A first to keep things simple, migrate to B later.

---

## What things cost

- **Vercel:** free tier covers all this traffic forever. You'd need thousands of daily generations to hit a paid tier.
- **Anthropic API:** Claude Haiku costs pennies. 200 generations/month ≈ **$2–5/month**. Budget $20/month and you'll have headroom.
- **GitHub Pages:** free.

Set a monthly budget cap in the Anthropic console (Settings → Usage limits) so a runaway script can't drain your balance.

---

## Troubleshooting

**"Server not configured" error in the generator:**
Vercel doesn't have the `ANTHROPIC_API_KEY` env var. Project → Settings → Environment Variables → add it → redeploy.

**CORS error in browser console:**
The brand hub is served from `github.io` but calling `vercel.app`. The serverless function already sets `Access-Control-Allow-Origin: *` so this should just work. If it doesn't, confirm `window.__BRAND_HUB_API__` in your HTML matches your actual Vercel URL exactly.

**Generator hangs forever:**
Check Vercel → your project → Functions → Logs. Probably an API key or billing issue on Anthropic.

---

## TL;DR

1. Get Anthropic API key, add $10 credit
2. Import repo into Vercel, paste key as env var, deploy
3. Put the Vercel URL in `docs/index.html`, commit
4. Done — generator works on your public site
