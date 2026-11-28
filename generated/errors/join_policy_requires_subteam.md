---
title: "join_policy_requires_subteam"
description: "Only a subteam has a join policy; a top-level team admits people by invitation."
---

Only a subteam has a join policy; a top-level team admits people by invitation.

**How to resolve:** Leave `joinPolicy` out, or set it on a subteam or when creating one with `parentTeamId`.

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
  "type": "https://spacefast.com/docs/errors/join_policy_requires_subteam",
  "title": "Join policy requires subteam",
  "status": 422,
  "detail": "Only a subteam has a join policy; a top-level team admits people by invitation.",
  "code": "join_policy_requires_subteam",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
