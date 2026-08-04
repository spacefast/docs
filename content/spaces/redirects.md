---
title: Redirects
description: How to configure redirects, rewrites, SPA fallbacks, and proxy routes.
---

Add `_redirects` at the publish root to redirect, rewrite, proxy, or return
custom 404 responses. Spacefast compiles the file when a publish finishes and
attaches the rules to that immutable version. The serving rules are
precomputed — nothing parses the file per request — and Spacefast never serves
the file itself.

```text
/old /new 301
/blog/* /news/:splat 302
/app/* /index.html 200
/api/* https://api.example.com/:splat 200
/missing /404.html 404
```

Vite spaces can also define these rules in `vite.config.ts` with the Spacefast
Vite plugin. The plugin merges config rules with `_redirects`. It applies them
in the dev server. It writes the merged output file during build.

## Line syntax

Each non-empty, non-comment line is a rule. The order is source, optional query
captures, destination, optional status, then optional conditions.

```text
source [query=:capture ...] destination [status[!]] [Condition=value,... ...]
```

- Lines beginning with `#` are comments.
- Status defaults to `302`.
- Supported statuses are `200`, `301`, `302`, `303`, `307`, `308`, and `404`.
- Append `!` to the status to force the rule, for example `301!`.
- Each rule line can be up to 1,000 characters.
- A publish can include up to 2,100 redirect rules: 2,000 static rules and 100 dynamic rules.

## Rule capacity

The team's [entitlements](/account/billing) set its routing-rule capacity. The
compiler parses the complete file. Diagnostics then identify the exact rules
when the result is over capacity.

## Sources

A source must be an absolute path beginning with `/` or an absolute `http`/`https` URL. Exact sources match with or without a trailing slash.

```text
/docs /guides 301
/docs/ /guides 301
https://www.example.com/old-docs /docs 301
https://:subdomain.example.com/* /sites/:subdomain/:splat 200
```

URL sources are host-specific. If a space has assigned hostnames, each exact URL host must belong to the space. Host patterns may use `*` or placeholders.

## Patterns

Use `*` for one splat capture named `:splat`. Use named placeholders such as `:slug` for one path segment. Reuse captures in the destination.

```text
/blog/* /news/:splat 301
/posts/:year/:slug /blog/:year/:slug 301
/downloads/* https://cdn.example.com/files/:splat 302
/products/:id /shop/item/:id 308
```

- A pattern supports only one wildcard.
- Wildcards must appear at the end of a path segment.
- You cannot use a wildcard and a placeholder in the same segment.
- Placeholder names must start with a letter. A pattern can capture each placeholder only once.

Static rules are exact path rules without a host constraint. Dynamic rules include any wildcard, placeholder, or host constraint.

## Actions

| Status                            | Action           | Destination                  |
| --------------------------------- | ---------------- | ---------------------------- |
| `301`, `302`, `303`, `307`, `308` | Redirect         | Path or absolute URL.        |
| `200`                             | Rewrite          | Local path.                  |
| `200`                             | Proxy            | Absolute `http`/`https` URL. |
| `404`                             | Custom not found | Local path.                  |

External proxy rules — `200` with an absolute URL destination — require the
team's proxy entitlement. The rule still compiles without it but does not reach
the upstream. See [Proxy routes](/spaces/proxy-routes).

## Query captures

Query captures sit between source and destination. Use `name=:capture`. Query names must start with a letter. They may include letters, numbers, underscores, or hyphens.

```text
/search q=:q /results/:q 302
/api/search q=:q page=:page https://api.example.com/search?q=:q&page=:page 200
/legacy utm_campaign=:campaign /campaigns/:campaign 301
```

- The incoming query must contain exactly the listed query parameter names.
- Query order does not matter.
- Spacefast joins repeated query values with commas before capture expansion.
- Redirects without query captures forward the original query when the destination has no query.
- Redirects with query captures do not forward unmatched original query values.

## Conditions

Conditions come after the status. Spacefast supports `Country`, `Language`, `Cookie`, and `Agent`. Values are comma-separated with no spaces. Country values must be two-letter country codes.

```text
/pricing /pricing-eu 302 Country=NL,DE,FR
/ /nl 302 Language=nl
/preview /preview-authenticated 200 Cookie=spacefast_preview
/promo /promo-us 302 Country=US Language=en
/ai /ai.txt 200! Agent=true
```

Spacefast supports only the condition names above. Spacefast rejects Netlify
and Cloudflare spellings such as `nf_country` and `cf_ipcountry`. The
`redirect_condition_unsupported` error blocks the publish. Rename them to
`Country=` / `Language=`. Spacefast rejects role conditions the same way.

Spacefast combines multiple conditions with `AND`. Spacefast combines multiple
comma-separated values inside one condition with `OR`.

Use `Agent=true` when a URL should serve a plain-text version to AI agents. The
same URL keeps the browser version for humans. Spacefast treats requests as
agent-like when they prefer `text/plain` or `text/markdown` without asking for
HTML. It also treats requests with a known agent user agent as agent-like.
Shell fetches like `curl` and `wget` count as agents.

## Runtime order

Rules run in file order. Browser redirects and external proxy rules run as soon
as they match. Spacefast skips local rewrites and custom 404 rules when the
original request resolves to a file. A rule with `!` in the status still runs.

```text
/app/* /app/index.html 200
/admin/* /admin/index.html 200!
```

The first rule preserves existing `/app` files. The second rule can shadow existing `/admin` files.

## Invalid rules

Spacefast rejects rules that are ambiguous, unsafe, or likely to loop.

```text
# Missing destination
/old

# Unsupported status
/old /new 305

# Rewrite destination must be a path or absolute URL
/app/* index.html 200

# Custom 404 destination must be a path
/missing https://example.com/404 404

# This loops back to the same path
/docs /docs 301
```

Custom response headers use a separate [Headers](/spaces/headers) page.
