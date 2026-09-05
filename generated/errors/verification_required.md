---
title: "verification_required"
description: "DNS control for this hostname has to be proven before it keeps serving."
---

DNS control for this hostname has to be proven before it keeps serving.

**How to resolve:** Add the verification record the domain response lists, then verify the domain.

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
  "type": "https://spacefast.com/docs/errors/verification_required",
  "title": "Verification required",
  "status": 400,
  "detail": "DNS control for this hostname has to be proven before it keeps serving.",
  "code": "verification_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
