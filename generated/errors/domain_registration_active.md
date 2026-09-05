---
title: "domain_registration_active"
description: "The domain's registration state blocks this action."
---

The domain's registration state blocks this action.

**How to resolve:** Read the registration `status` in the error details and finish or cancel the registration first.

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
  "type": "https://spacefast.com/docs/errors/domain_registration_active",
  "title": "Domain registration active",
  "status": 400,
  "detail": "The domain's registration state blocks this action.",
  "code": "domain_registration_active",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
