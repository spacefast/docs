---
title: Proxy routes
description: How to configure public proxy routes with Spacefast redirects.
---

Proxy routes live in `_redirects`. Add a `200` rewrite with an absolute `http` or `https` destination. Routes are compiled at finalize and attached to that immutable version.

```text
# _redirects
/api/* https://api.example.com/:splat 200
/search q=:q https://api.example.com/search?q=:q 200
```

Sources must start with `/` or use an absolute URL. Use trailing `/*` for prefix matches; otherwise the match is exact. Reuse captures such as `:splat` in the destination.

Internal rewrites to pages in the same space do not need an external proxy route.

:::note
Not available on Free. Available on Personal and Work.
:::

On Free, external proxy routes do not execute: visitors hit a platform page instead. The rule stays in your config and activates the moment you upgrade — no redeploy needed. Upgrading propagates to your live spaces in seconds, not on your next publish. Anonymous spaces never execute external proxy routes.

## Supported proxy shape

Use proxy routes for public HTTP endpoints that do not need Spacefast to inject private credentials. Keep secret-bearing logic behind your own API, Worker, Function, or service, then proxy to that public endpoint.

## Migration checklist

- Move any proxy manifest entries into root `_redirects` as `200` rules.
- Keep response headers in root `_headers`.
- Use a real upstream URL for Cloudflare Pages Functions, Workers, or Netlify Functions.
- Check version diagnostics for unsupported conditions or managed headers.

| Proxy capability        | Support | Mechanism                                              |
| ----------------------- | ------- | ------------------------------------------------------ |
| Exact path proxy        | Yes     | `/api https://api.example.com 200`                     |
| Prefix proxy            | Yes     | `/api/* https://api.example.com/:splat 200`            |
| Query capture           | Yes     | `/search q=:q https://api.example.com/search?q=:q 200` |
| Secret injection        | No      | Use your upstream service for private credentials.     |
| Separate proxy manifest | No      | Use `_redirects`.                                      |

See [Redirects](/redirects) for the full proxy route syntax.
