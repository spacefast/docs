---
title: Quickstart
description: Documentation for publishing, configuring, operating, and troubleshooting static spaces on Spacefast.
---

Publish a folder, a zip, or a single `index.html` and Spacefast keeps it at a permanent URL. No account needed for the first publish, and your site is live seconds after the upload completes.

1. Go to [spacefast.com](https://spacefast.com).
2. Drag your folder, zip, or `index.html` onto the upload box.
3. Publish. You get a live URL, a permanent Version URL, and — if you published without an account — a claim link.

Claim the space within 6 hours by opening the claim link and signing in with your WordPress.com account; unclaimed spaces expire. Once claimed, it's yours: same URL for every future publish, full version history.

:::tip
If you upload a folder, Spacefast looks for `index.html` at the root. Server-executable files are never run — Spacefast serves static files only.
:::

## Dashboard URLs

Your team lives at `my.spacefast.com/<team>`, and each space lives at `my.spacefast.com/<team>/<space>`. Those are the canonical dashboard URLs. Old links containing `/~/` are legacy-only and permanently redirect to the canonical URL.

## Common first publish

Prefer the terminal? Install the CLI once, then publish:

```bash
curl -fsSL https://spacefast.com/install.sh | bash
```

```bash
sf publish ./dist --name docs
```

```bash
sf publish ./dist --spa true
```

The full command surface is in the [CLI reference](/cli).

The first CLI publish writes `.spacefast/state.json` next to the folder. Later publishes from that folder update the same space — same URL, new version — and skip unchanged files when hashes match.

Every publish is an immutable version, so your live site stays up and you can always roll back: `sf rollback` promotes an earlier version with no rebuild. Mistakes are cheap here.
