---
title: "space_db_value_protected"
description: "The request touches a secret, such as a password hash, session token or WordPress salt, which can't be read, filtered on or changed here."
---

The request touches a secret, such as a password hash, session token or WordPress salt, which can't be read, filtered on or changed here.

**How to resolve:** Leave the protected column or row out of the request. Change passwords and sessions through the Space's own sign-in features.

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
  "type": "https://spacefast.com/docs/errors/space_db_value_protected",
  "title": "Space db value protected",
  "status": 422,
  "detail": "The request touches a secret, such as a password hash, session token or WordPress salt, which can't be read, filtered on or changed here.",
  "code": "space_db_value_protected",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
