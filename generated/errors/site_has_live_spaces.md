---
title: "site_has_live_spaces"
description: "The site still has live spaces assigned to it, so it cannot be deleted."
---

The site still has live spaces assigned to it, so it cannot be deleted.

**How to resolve:** Delete the live spaces or move them to another site before deleting this site.

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
  "type": "https://spacefast.com/docs/errors/site_has_live_spaces",
  "title": "Site has live spaces",
  "status": 400,
  "detail": "The site still has live spaces assigned to it, so it cannot be deleted.",
  "code": "site_has_live_spaces",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
