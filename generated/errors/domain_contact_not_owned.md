---
title: "domain_contact_not_owned"
description: "This contact belongs to someone else, so you can't register or move a domain to it."
---

This contact belongs to someone else, so you can't register or move a domain to it.

**How to resolve:** Pass one of your own contacts (`viewerOwns: true` in listDomainContacts), or create one first.

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
  "type": "https://spacefast.com/docs/errors/domain_contact_not_owned",
  "title": "Domain contact not owned",
  "status": 400,
  "detail": "This contact belongs to someone else, so you can't register or move a domain to it.",
  "code": "domain_contact_not_owned",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
