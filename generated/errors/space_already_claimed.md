---
title: "space_already_claimed"
description: "The space was already claimed. A claim can only succeed once."
---

The space was already claimed. A claim can only succeed once.

**How to resolve:** If you are the agent that published this space, exchange your claim token once at POST /v1/anonymous-claim/exchange for a durable access token and keep publishing to the same spaceId. Otherwise ask the owner for access — do not publish a duplicate space.

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
  "type": "https://spacefast.com/docs/errors/space_already_claimed",
  "title": "Space already claimed",
  "status": 400,
  "detail": "The space was already claimed. A claim can only succeed once.",
  "code": "space_already_claimed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
