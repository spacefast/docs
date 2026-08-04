---
title: here.now
description: How to move a static site from here.now to Spacefast.
---

here.now and Spacefast both publish prebuilt static files. Both support anonymous
publishing with a claim window. Republish the same output directory to
Spacefast. Then test the new version before moving DNS.

```bash
# Republish the same static output that was sent to here.now
sf publish ./dist
```

```bash
# Single-page apps should keep an explicit fallback
sf publish ./dist --spa true
```

## What carries over

- Static artifacts within the target space's file-size limit. Spacefast Engine never runs server-executable files.
- Single-page apps, after you enable Spacefast SPA fallback for client-side routes.
- Custom domains, after you add the domain in Spacefast and move DNS. Move DNS when the diagnostics pass. SSL is automatic.
- Public external API calls from browser code, if they already work without credential injection from a here.now proxy route.

## Migration checklist

- Find the original publish directory. here.now serves paths relative to the
  uploaded root. Do not add an extra parent folder.
- Check large files against the target space's file-size limit before publishing.
- If the old deployment was anonymous, recover the source files from your machine
  or agent logs. here.now returns anonymous claim tokens only once.
- Recreate account-level concerns in Spacefast: custom domain records, space
  name, SPA mode, and any environment or secret values that your build or
  external backend needs.
- Test direct file paths, refreshes on deep SPA links, protected API calls, and
  cache behavior on the Spacefast URL before changing production DNS.

## What to change

- Replace `.herenow/proxy.json` with Spacefast `_redirects` external `200` proxy
  rules. Do this only when the upstream does not need private credential
  injection. The target team must also have the proxy entitlement. Move
  secret-bearing calls to a separate backend. Browser code must not embed
  secrets that here.now injected server-side.
- Recreate here.now variables as Spacefast space variables, CI secrets, or backend secrets.
- Convert here.now handle links and custom-domain links into Spacefast space domains and redirects. You cannot transfer a here.now handle such as `name.here.now`.
- Replace here.now password protection, payment gating, forking metadata,
  auto-viewer pages, and directory listings with explicit Spacefast
  configuration or static pages. `_headers` Basic Auth requires the target
  team's entitlement.

## Limitations

Know the platform boundary before you migrate. Spacefast can host the static files, but it cannot import every here.now account feature from a public URL.

- There is no one-click import from a `*.here.now` URL. Migrate from the original files or a verified file manifest instead of scraping the live site.
- here.now proxy routes are not portable as-is. Their manifests can reference account variables, inject upstream auth headers, forward request bodies, and stream API responses.
- You cannot export secrets from here.now. Its variable list returns names and metadata, not values. You must rotate lost API keys or recover them from the original provider.
- Anonymous here.now deployments expire after 24 hours if nobody claims them. If you lost the claim URL or token and the deployment expired, Spacefast cannot recover the files.
- here.now-specific handles, link locations, fork buttons, payment gates, and password gates are product features, not static files. You must replace them deliberately in Spacefast.
- Static hosting is still static hosting. Server-rendered apps, background jobs, databases, file uploads, user sessions, and framework server functions need an external service or a different runtime.
