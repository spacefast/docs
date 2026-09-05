---
title: "lost_domain_control"
description: "Domain control checks kept failing past the claim notice window, so the attachment is blocked."
---

Domain control checks kept failing past the claim notice window, so the attachment is blocked.

**How to resolve:** Restore the verification record at the DNS provider, then verify the domain again.

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
  "type": "https://spacefast.com/docs/errors/lost_domain_control",
  "title": "Lost domain control",
  "status": 400,
  "detail": "Domain control checks kept failing past the claim notice window, so the attachment is blocked.",
  "code": "lost_domain_control",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
