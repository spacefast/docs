---
title: Anonymous publish
description: How anonymous publishes work and how to claim a space after publishing without an account.
---

Publishing without an access token creates an anonymous space. The response includes a claim token, claim link, and expiration time. Save them immediately; the token and link are returned only once.

Claim the space within 6 hours or it expires. Opening the claim page with a valid claim link extends the deadline a little (capped at about six extra hours total) — enough to finish signing up, not enough to skip it.

## Before claim

- The live space URL and permanent Version URLs work.
- The local `.spacefast/state.json` lets the CLI keep updating the anonymous space.
- Static assets, redirects, response headers, SPA fallback, and metadata all publish.
- Anonymous spaces are capped at most at Free-plan limits: 50 MB max file size, 100 MB total per version, 1,000 files per version, and 20 publishes per hour per IP.
- Uploads are accepted and scanned like any publish, but unclaimed spaces serve web content only — HTML, CSS, JavaScript, JSON, XML, images, fonts, and text. Other files stay dark until you claim.
- Around 100 visits pauses an unclaimed space behind a claim page. Claiming brings it back instantly.
- External proxy execution, `_headers` Basic Auth, and custom domains are not available on anonymous spaces.

:::note[Basic Auth and external proxy]
Not available on Free. Available on Personal and Work.
:::

## Requires login and claim

Accounts are WordPress.com accounts. Claiming moves the space into a team and unlocks:

- Custom domains and diagnostics.
- Proxy route execution and `_headers` Basic Auth on paid plans.
- Larger file-size limits and additional routing capacity.
- Team access, billing, and long-term retention.

```bash
sf publish ./dist
sf login
sf spaces claim --team my-team
```

## If a space expires

An unclaimed space that reaches its deadline is disabled: live access stops and the content is queued for deletion after a recovery window of about one day. Its hostname serves an expired page from then on and is never re-issued to someone else, so stale links can't be taken over.
