---
title: "confirmation_required"
description: "This action destroys live content or spends money, so a person must approve this exact action before it runs."
---

This action destroys live content or spends money, so a person must approve this exact action before it runs.

**How to resolve:** Send the person to the `url` in the error details, then poll `pollUrl` with the `continuationToken` every 5 seconds. Give up after 10 minutes and report back. No flag or environment variable can clear this.

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
  "detail": "This action destroys live content or spends money, so a person must approve this exact action before it runs.",
  "code": "confirmation_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
