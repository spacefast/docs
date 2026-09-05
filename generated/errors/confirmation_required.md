---
title: "confirmation_required"
description: "A person must approve this exact action before it can run."
---

A person must approve this exact action before it can run.

**How to resolve:** Open `url` from the error details so a person can approve, then poll `pollUrl` with `continuationToken` every 5 seconds. In the CLI this gate guards a local destructive action, so re-run with `--yes`.

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
  "type": "https://spacefast.com/docs/errors/confirmation_required",
  "title": "Confirmation required",
  "status": 400,
  "detail": "A person must approve this exact action before it can run.",
  "code": "confirmation_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
