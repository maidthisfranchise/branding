# MaidThis Brand System — Monorepo

This repository is the single source of truth for the MaidThis Franchise brand. It contains:

- **`skill-package/`** → The Claude skill franchisees install. Zip this folder and publish it as a GitHub Release.
- **`brand-hub/`** → The public-facing web page (generator + asset downloads). Deploy this to GitHub Pages or Vercel.
- **`preview/`, `ui_kits/`, `assets/`, `colors_and_type.css`, `README.md`** → Design system source.

## Quick links

| What | Where |
|---|---|
| Brand rulebook | [`skill-package/README.md`](./skill-package/README.md) |
| Design tokens (CSS) | [`skill-package/colors_and_type.css`](./skill-package/colors_and_type.css) |
| Skill instructions | [`skill-package/SKILL.md`](./skill-package/SKILL.md) |
| Franchisee how-to-use | [`skill-package/HOW_TO_USE.md`](./skill-package/HOW_TO_USE.md) |
| Brand hub landing page | [`brand-hub/index.html`](./brand-hub/index.html) |

---

## Publishing workflow

### 1. Publish the skill (for franchisees)

Franchisees install the skill by uploading its files to their own Claude project. You ship it as a downloadable zip.

**To cut a new release:**

```bash
cd skill-package
zip -r ../maidthis-brand-design.zip .
cd ..
```

Then on GitHub: **Releases → Draft a new release**. Tag it `v1.0.0`, upload `maidthis-brand-design.zip` as the release asset, and publish.

The brand-hub download button points to the latest release asset.

### 2. Publish the brand hub (for everyone else)

The brand-hub is a static page — deploy with **GitHub Pages**:

1. Push this repo to GitHub
2. Settings → Pages → Source: `Deploy from a branch`
3. Branch: `main`, Folder: `/brand-hub`
4. Save. It'll be live at `https://<org>.github.io/<repo>/`
5. (Optional) Add a custom domain: `brand.maidthisfranchise.com`

---

## Updating the skill

When you update brand rules, colors, or add new UI kit components:

1. Edit files at the repo root
2. Run the zip command above → new zip
3. Cut a new GitHub Release (bump the version)
4. The brand-hub download link automatically picks up the latest release (if configured to `/releases/latest/download/maidthis-brand-design.zip`)
5. Email franchisees the release link — they drop the new zip into their existing Claude project, replacing the old one

---

## License

Internal brand asset. Not for external distribution. © MaidThis Franchise, Inc.
