---
title: "partner_preset_not_grantable"
description: "The `partner_admin` preset cannot be requested on a team API key."
---

The `partner_admin` preset cannot be requested on a team API key.

**How to resolve:** Mint the key with a team preset; an operator provisions partner credentials separately.

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
  "type": "https://spacefast.com/docs/errors/partner_preset_not_grantable",
  "title": "Partner preset not grantable",
  "status": 400,
  "detail": "The `partner_admin` preset cannot be requested on a team API key.",
  "code": "partner_preset_not_grantable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
