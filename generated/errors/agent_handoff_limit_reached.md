---
title: "agent_handoff_limit_reached"
description: "This user already has the maximum number of pending handoffs for the space."
---

This user already has the maximum number of pending handoffs for the space.

**How to resolve:** Redeem or revoke an existing pending handoff for the space before creating another.

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
  "type": "https://docs.spacefast.com/docs/errors/agent_handoff_limit_reached",
  "title": "Agent handoff limit reached",
  "status": 400,
  "detail": "This user already has the maximum number of pending handoffs for the space.",
  "code": "agent_handoff_limit_reached",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
