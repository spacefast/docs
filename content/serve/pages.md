---
title: Visitor pages and theming
description: Theme Spacefast's visitor pages, add site chrome, or take system pages over completely.
---

Every version publishes with five visitor-facing pages: `404`, `denied`,
`access`, `index`, and `preview`. The defaults are responsive, support dark
mode, use the right HTTP status and cache policy, and pick up your theme
automatically, so most spaces never touch them. When you do want control,
use the smallest of three layers that solves the job:

1. `sf.jsonc` supplies basic metadata and theme tokens.
2. `theme.json` and `_layout.html` define reusable presentation and site
   chrome.
3. `_pages/*.html` completely replaces individual system pages.

## Theme tokens

Set the common values in the canonical `sf.jsonc` file:

```jsonc
{
  "theme": {
    "accent": "#ff603d",
    "background": "#faf9f7",
    "font": "Inter, system-ui, sans-serif",
    "logo": "/logo.svg",
    "name": "Acme",
    "hideSpacefastBranding": true,
  },
}
```

These tokens style the access, error, and system pages without taking over
their form logic. The team's entitlements decide whether the space can hide
Spacefast branding or use a complete `_pages` takeover. Spacefast can infer
palette and font values from a compatible `theme.json`. Explicit `theme`
values always win.

## DESIGN.md and generated files

`DESIGN.md` is an authoring file for people and agents. Put fenced
`theme.json` and `layout.html` blocks in it, then generate the serving
files:

```bash
sf design generate
```

The command writes `theme.json` and `_layout.html`. To replace existing
generated files, pass `--force`. Spacefast does not read `DESIGN.md` during
a publish or during serving, so commit the generated files to keep the
version reproducible.

## Site chrome with a shared layout

Put `_layout.html` at the publish root or inside a directory. The nearest
layout wins for that directory and its children. Spacefast wraps default
pages and site fragments in it. A complete document beginning with
`<!doctype html>` opts out. Layouts do not nest in v1.

```html
<!doctype html>
<html lang="en">
  <body>
    <nav>
      <a href="/"><sf-logo></sf-logo><sf-name></sf-name></a>
    </nav>
    <main><sf-content></sf-content></main>
  </body>
</html>
```

Spacefast validates required slots before a publish goes live.

## Own a page completely

In an entitled space, commit complete documents at `_pages/404.html`,
`_pages/denied.html`, `_pages/access.html`, `_pages/index.html`,
`_pages/preview.html`, or `_pages/collab.html`. Spacefast expands a custom
page, then serves it as written and never wraps it.

A custom `access` page must render `<sf-access-lanes>` so that visitors
keep a way in. Any Content Security Policy (CSP) the page declares must
allow `form-action 'self'`. Otherwise, the publish fails.

```html
<!-- _pages/404.html -->
<!doctype html>
<html lang="en">
  <body>
    <nav><a href="/"><sf-logo></sf-logo><sf-name></sf-name></a></nav>
    <main><h1>Not found</h1><p><a href="/">Back to the start.</a></p></main>
  </body>
</html>
```

Spacefast resolves a page in this order:

1. The nearest literal `404.html`.
2. The nearest `_pages/<id>.html`.
3. The designed default with the nearest `_layout.html`.

A literal `404.html` never needs an entitlement. Spacefast serves it
verbatim.

## Pages elements

Pages uses a small, versioned custom-element vocabulary with no loops,
conditionals, or attributes API.

| Element                   | Expansion                            | Valid in            |
| ------------------------- | ------------------------------------ | ------------------- |
| `<sf-content>`            | Wrapped page or fragment             | `_layout.html`      |
| `<sf-access-lanes>`       | Sign-in, password, and request lanes | `access` (required) |
| `<sf-access-status>`      | Current access state                 | `access`            |
| `<sf-denial-context>`     | Why the request was denied           | `denied`            |
| `<sf-page-path>`          | The requested path                   | `404`, `index`, `preview` |
| `<sf-page-title>`         | Page title                           | Anywhere            |
| `<sf-page-summary>`       | Page summary                         | `index`             |
| `<sf-files>`              | Escaped directory entries            | `index`             |
| `<sf-file>`               | File preview, metadata, and download | `preview`           |
| `<sf-logo>`               | Configured logo image                | Anywhere            |
| `<sf-name>`               | Configured space name                | Anywhere            |
| `<sf-spacefast-branding>` | Spacefast attribution                | Anywhere            |

A layout accepts exactly one `<sf-content>`, plus `<sf-logo>`, `<sf-name>`,
`<sf-page-title>`, and `<sf-spacefast-branding>`. Unknown elements fail the
publish.

The runtime owns the sign-in and password lane markup inside
`<sf-access-lanes>`, and you retheme around it. Password checking,
throttling, cookies, and redirects remain server-owned.

## Machine responses

Browsers that request HTML receive the published page artifact. Requests
with `Accept: application/json` and fetch requests receive an RFC 9457
problem document:

```json
{
  "type": "https://spacefast.com/docs/errors/access_denied",
  "title": "Access denied",
  "status": 403,
  "code": "access_denied",
  "page": "access"
}
```

Other clients receive one line of plain text. You cannot customize the JSON
and plain-text representations. Platform refusal pages always use
Spacefast-owned defaults.

## Test locally

To start from the readable defaults, pull a page. Valid pull targets are
the five page IDs plus `layout` and `all`:

```bash
sf pages pull access
```

Validate with the exact publish-time checks:

```bash
sf pages validate
```

`sf dev` previews pages and layout expansion, with samples at
`/_spacefast/pages/404` and the other page IDs:

```bash
sf dev
```
