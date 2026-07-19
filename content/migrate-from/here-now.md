---
title: here.now
description: How to move a static site from here.now to Spacefast.
---

here.now and Spacefast both publish prebuilt static files, and both support anonymous publishing with a claim window before unclaimed sites expire (24 hours there, 6 hours here), so agent and CLI workflows port directly. Republish the same output directory to Spacefast. Start from the local folder, build artifact, or file manifest that produced the current `*.here.now` URL, then test the new version before moving DNS. Every Spacefast plan includes unlimited spaces and unlimited bandwidth, and every publish is an immutable version with one-click rollback.

```bash
# Republish the same static output that was sent to here.now
sf publish ./dist

# Single-page apps should keep an explicit fallback
sf publish ./dist --spa true
```

## What carries over

- Static artifacts within the target space's file-size limit. Server-executable files are never run by Spacefast Engine.
- Single-page apps after enabling Spacefast SPA fallback for client-side routes.
- Custom domains after adding the domain in Spacefast and moving DNS when diagnostics pass. SSL is automatic.
- Public external API calls from browser code, if they already work without here.now proxy route credential injection.

## Migration checklist

- Find the original publish directory. here.now serves paths relative to the uploaded root, so do not add an extra parent folder.
- Check large files against the target space's file-size limit before publishing.
- If the old deployment was anonymous, recover the source files from your machine or agent logs. Anonymous claim tokens are returned only once and anonymous deployments expire after 24 hours. Spacefast's anonymous spaces work similarly: claim within 6 hours to keep them.
- Recreate account-level concerns in Spacefast: custom domain records, space name, SPA mode, and any environment or secret values needed by your build or external backend.
- Test direct file paths, refreshes on deep SPA links, protected API calls, and cache behavior on the Spacefast URL before changing production DNS.

## What to change

- Replace `.herenow/proxy.json` with Spacefast `_redirects` external `200` proxy rules only when the upstream does not need private credential injection. External proxy rules do not execute on Free — they serve a platform page and activate on Personal or Work. Move secret-bearing calls to a separate backend; browser code must not embed secrets that here.now injected server-side.
- Recreate here.now variables as Spacefast space variables, CI secrets, or backend secrets. here.now variable values are not returned by its API, so you need the original secret source.
- Convert here.now handle links and custom-domain links into Spacefast space domains and redirects. A here.now handle such as `name.here.now` cannot be transferred.
- Replace here.now password protection, payment gating, forking metadata, auto-viewer pages, and directory listings with explicit Spacefast configuration or static pages. `_headers` Basic Auth is not available on Free; it is available on Personal and Work.

## Limitations

Know the platform boundary before you migrate. Spacefast can host the static files, but it cannot import every here.now account feature from a public URL.

- There is no one-click import from a `*.here.now` URL. Migrate from the original files or a verified file manifest instead of scraping the live site.
- here.now proxy routes are not portable as-is. Their manifests can reference account variables, inject upstream auth headers, forward request bodies, and stream API responses; those routes need Spacefast external `200` proxy rules for public upstreams or a separate backend for anything secret-bearing.
- Secrets cannot be exported from here.now. Its variable list returns names and metadata, not values, so lost API keys must be rotated or recovered from the original provider.
- Anonymous here.now deployments expire after 24 hours unless claimed. If the claim URL or token was lost and the deployment expired, Spacefast cannot recover the files.
- here.now-specific handles, link locations, fork buttons, payment gates, and password gates are product features, not static files. They need deliberate replacement in Spacefast.
- Static hosting is still static hosting. Server-rendered apps, background jobs, databases, file uploads, user sessions, and framework server functions need an external service or a different runtime.
