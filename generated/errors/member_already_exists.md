---
title: "member_already_exists"
description: "This user is already a member of the team."
---

This user is already a member of the team.

**How to resolve:** Update the existing member's role instead of inviting again.

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
  "type": "https://docs.spacefast.com/docs/errors/member_already_exists",
  "title": "Member already exists",
  "status": 400,
  "detail": "This user is already a member of the team.",
  "code": "member_already_exists",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
