---
title: Tag Manager
description: Version, review, preview, and release analytics or marketing tags without republishing a space.
---

:::note[Early access]
Tag Manager is available only when the `tags` feature is enabled for your team.
The CLI hides the commands until that feature is active.
:::

Spacefast Tag Manager keeps analytics and marketing code out of page templates.
You create an immutable tag version, validate it, review the diff, and point an
environment at the approved version. Releasing or rolling back tags does not
republish the space.

## Start with a template

List the built-in providers and event presets:

```bash
sf tags templates
```

Create a Google Analytics draft:

```bash
sf tags versions create --space docs --template google-analytics --field measurementId=G-XXXXXXXXXX --title "Add analytics"
```

The template supplies the provider script, default trigger, and consent
category. Other templates include Google Tag Manager, Meta Pixel, TikTok Pixel,
LinkedIn Insight, Segment, Plausible, PostHog, and custom scripts. Always use
`sf tags templates` as the current list.

## Validate and review

Validate the immutable draft before submitting it:

```bash
sf tags versions validate tver_123 --space docs
```

Inspect its effective diff:

```bash
sf tags versions diff tver_123 --space docs
```

Submit it for review when the space requires approval:

```bash
sf tags versions submit tver_123 --space docs
```

Approve the submitted version:

```bash
sf tags versions approve tver_123 --space docs
```

Validation checks the graph shape, script hosts, consent requirements, trigger
references, budgets, and the space's review policy. A release cannot bypass a
required approval.

## Release and roll back

Point production at an approved version:

```bash
sf tags releases set production tver_123 --space docs
```

Use `preview` or `development` instead of `production` for another environment.
Pass `--expected-current-version` in automation so concurrent changes fail
rather than overwriting one another.

Roll production back to a known version:

```bash
sf tags releases rollback production tver_122 --space docs
```

List release pointers:

```bash
sf tags releases --space docs
```

## Preview a draft

Create a signed, no-store debug session for one page:

```bash
sf tags debug --space docs --version tver_123 --url https://docs.view.fast
```

The returned URL previews that version without changing a release pointer.
Revoke the session when review is finished:

```bash
sf tags debug --space docs --version tver_123 --revoke-session tgp_123
```

## Declarative configuration

Keep a desired graph in `spacefast.tags.json`:

```json
{
  "templates": [
    {
      "templateId": "google-tag-manager",
      "config": { "containerId": "GTM-XXXXXXX" }
    }
  ],
  "eventPresets": ["page_view", "outbound_click"]
}
```

Apply it as a validated draft:

```bash
sf tags apply spacefast.tags.json --space docs
```

Submit and release in one policy-checked operation:

```bash
sf tags apply spacefast.tags.json --space docs --submit --release production
```

## Consent

Templates declare one or more consent categories: `necessary`, `functional`,
`analytics`, or `marketing`. Optional tags stay blocked until their categories
are granted. Browser privacy signals and explicit denials continue to win.

The dashboard exposes the same workflow under **Integrations**: installed
providers, drafts, review, release pointers, debug sessions, and audit history.
