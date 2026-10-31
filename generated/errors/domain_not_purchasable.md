---
title: "domain_not_purchasable"
description: "One or more domains in the cart cannot be bought right now."
---

One or more domains in the cart cannot be bought right now.

**How to resolve:** Check `details.lines` for each name and its reason, drop those names, and buy the rest.

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
  "type": "https://spacefast.com/docs/errors/domain_not_purchasable",
  "title": "Domain not purchasable",
  "status": 400,
  "detail": "One or more domains in the cart cannot be bought right now.",
  "code": "domain_not_purchasable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
