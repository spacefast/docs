---
title: Visitor pages
description: Theme or take over Spacefast's not-found, access, directory, and file-preview pages.
---

Spacefast publishes six visitor-facing pages with every version: `404`,
`password`, `denied`, `login`, `index`, and `preview`. The defaults are
responsive, support dark mode, use the right HTTP status and cache policy, and
pick up your theme automatically.

Add visual tokens to the canonical `sf.jsonc` file:

```jsonc
{
  "theme": {
    "accent": "#ff603d",
    "background": "#faf9f7",
    "font": "Inter, system-ui, sans-serif",
    "logo": "/logo.svg",
    "name": "Acme Docs",
    "hideSpacefastBranding": true,
  },
}
```

The team's entitlements decide whether the team can hide Spacefast branding or
use a complete `_pages` takeover. Spacefast can infer palette and font values
from a compatible `theme.json`. Explicit `theme` values always win.

## Add site chrome

Put `_layout.html` at the publish root or inside a directory. The nearest
layout wins for that directory and its children. Spacefast wraps default Pages
and site fragments in it. A complete document beginning with `<!doctype html>`
opts out. Layouts do not nest in v1.

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

## Own a page

In an entitled space, you can commit complete documents at `_pages/404.html`,
`_pages/password.html`, `_pages/denied.html`, `_pages/index.html`, or
`_pages/preview.html`. Spacefast expands a custom page, then serves it as
written — it never wraps the page. Login takeover is not part of v1.

Spacefast resolves a page in this order:

1. The nearest literal `404.html`.
2. The nearest `_pages/<id>.html`.
3. The designed default with the nearest `_layout.html`.

A literal `404.html` never needs an entitlement. Spacefast serves it verbatim.

Use the CLI to start from the readable defaults. The CLI validates with the exact publish-time checks:

```bash
sf pages pull password
```

```bash
sf pages pull layout
```

```bash
sf pages validate
```

```bash
sf dev
```

`sf dev` exposes samples at `/_spacefast/pages/404` and the other page IDs.

## Pages elements

Pages uses a small, versioned custom-element vocabulary. It has no loops, conditionals, or attributes API.

| Element              | Expansion                            | Valid in        |
| -------------------- | ------------------------------------ | --------------- |
| `<sf-content>`       | Wrapped page or fragment             | `_layout.html`  |
| `<sf-password-form>` | Canonical password form              | `password`      |
| `<sf-login>`         | Login handoff                        | `login` default |
| `<sf-files>`         | Escaped directory entries            | `index`         |
| `<sf-file>`          | File preview, metadata, and download | `preview`       |
| `<sf-logo>`          | Configured logo image                | Anywhere        |
| `<sf-name>`          | Configured space name                | Anywhere        |

A hand-written password form must `POST` a field named `_pw` to the current URL. Password checking, throttling, cookies, and redirects remain server-owned.

## Machine responses

Browsers requesting HTML receive the published page artifact. `Accept: application/json` and fetch requests receive a fixed envelope such as:

```json
{
  "error": {
    "code": "password_required",
    "status": 401,
    "page": "password",
    "action": { "method": "POST", "field": "_pw", "url": "/private" }
  }
}
```

Other clients receive one line of plain text. You cannot customize the JSON and plain-text representations. Platform refusal pages—undeployed, suspended, legal, visit limit, runtime errors, rate limits, and upstream failures—always use Spacefast-owned defaults.
