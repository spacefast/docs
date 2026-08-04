---
title: "csam_blocked"
description: "The content was blocked because it matched known child sexual abuse material."
---

The content was blocked because it matched known child sexual abuse material.

**How to resolve:** This action is final and reported as required by law. Do not retry.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://docs.spacefast.com/docs/errors/csam_blocked",
  "title": "Csam blocked",
  "status": 400,
  "detail": "The content was blocked because it matched known child sexual abuse material.",
  "code": "csam_blocked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
