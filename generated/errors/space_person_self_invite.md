---
title: "space_person_self_invite"
description: "The inviter already belongs to the space."
---

The inviter already belongs to the space.

**How to resolve:** Use your existing space access instead of inviting yourself.

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
  "type": "https://spacefast.com/docs/errors/space_person_self_invite",
  "title": "Space person self invite",
  "status": 400,
  "detail": "The inviter already belongs to the space.",
  "code": "space_person_self_invite",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
