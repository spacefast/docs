---
title: Customization
description: Control Spacefast pages, site chrome, color, typography, and metadata.
---

Customization has three layers. Start with the smallest one that solves the
job.

1. `sf.jsonc` supplies basic metadata and theme tokens.
2. `theme.json` and `_layout.html` define reusable presentation and site chrome.
3. `_pages/*.html` completely replaces individual Spacefast system pages.

## Theme tokens

Set the common visitor-page values in `sf.jsonc`:

```jsonc
{
  "theme": {
    "accent": "#ff603d",
    "background": "#faf9f7",
    "font": "Haskoy, system-ui, sans-serif",
    "logo": "/logo.svg",
    "name": "Acme",
  },
}
```

These tokens style access, error, and platform-owned pages. You do not need to
own their form logic.

## DESIGN.md and generated files

`DESIGN.md` is an authoring file for people and agents. Put fenced
`theme.json` and `layout.html` blocks in it. Then generate the serving files:

```bash
sf design generate
```

The command writes `theme.json` and `_layout.html`. Spacefast does not read
`DESIGN.md` during a publish or during serving. Commit the generated files so
the version is reproducible.

Use `--force` when you intentionally want to replace existing generated files:

```bash
sf design generate --force
```

## Shared layout

`_layout.html` wraps matching content with site chrome. Use Spacefast elements
such as `<sf-content>` and `<sf-name>` rather than duplicating page bodies.
Spacefast validates required slots before a publish goes live.

## Complete page takeovers

Put templates under `_pages/` when a system page needs completely custom
markup. The runtime injects status and form blocks into the required `sf-*`
slots. Access and recovery flows keep working.

See [Pages](/spaces/visitor-pages) for the available templates, elements, validation command,
and plan availability.

## Test locally

Preview Pages and layout expansion:

```bash
sf dev
```

Validate templates without starting the server:

```bash
sf pages validate
```
