---
title: "share_entry_not_a_person"
description: "Only a person's invitation can be resent."
---

Only a person's invitation can be resent.

**How to resolve:** Resend a `person` entry that hasn't accepted yet.

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
  "type": "https://spacefast.com/docs/errors/share_entry_not_a_person",
  "title": "Share entry not a person",
  "status": 422,
  "detail": "Only a person's invitation can be resent.",
  "code": "share_entry_not_a_person",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
