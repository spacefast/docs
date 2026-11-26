---
title: "free_usage_exhausted"
description: "The Free team's $1 of monthly usage is used up, so new builds and Functions requests are paused. PHP, delivery and email continue."
---

The Free team's $1 of monthly usage is used up, so new builds and Functions requests are paused. PHP, delivery and email continue.

**How to resolve:** If `details.upgradeUrl` is present, upgrade the team there to build again. Otherwise, wait for the next billing period.

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
  "type": "https://spacefast.com/docs/errors/free_usage_exhausted",
  "title": "Free usage exhausted",
  "status": 422,
  "detail": "The Free team's $1 of monthly usage is used up, so new builds and Functions requests are paused. PHP, delivery and email continue.",
  "code": "free_usage_exhausted",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
