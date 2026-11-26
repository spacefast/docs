---
title: "team_subscription_required"
description: "A person has one free team. This team is another one, so it needs a subscription before it can create Spaces, publish, add domains or add members. What it already serves stays online."
---

A person has one free team. This team is another one, so it needs a subscription before it can create Spaces, publish, add domains or add members. What it already serves stays online.

**How to resolve:** Have an owner or admin subscribe the team at `details.upgradeUrl`, then retry.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`.

- `code` is stable and machine-readable.
- `type` links to this page.
- `title` is a short label.
- `status` repeats the HTTP status.
- `detail` explains this occurrence.
- `pointer`, when present, is an RFC 6901 JSON Pointer at the offending field in the request body.
- `details`, when present, carries structured context.

Match on `code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/team_subscription_required",
  "title": "Team subscription required",
  "status": 422,
  "detail": "A person has one free team. This team is another one, so it needs a subscription before it can create Spaces, publish, add domains or add members. What it already serves stays online.",
  "code": "team_subscription_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
