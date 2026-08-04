---
title: "invalid_webhook_signature"
description: "The webhook signature did not verify."
---

The webhook signature did not verify.

**How to resolve:** Verify with the current webhook secret over `{t}.{rawBody}` and reject stale timestamps.

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
  "type": "https://spacefast.com/docs/errors/invalid_webhook_signature",
  "title": "Invalid webhook signature",
  "status": 400,
  "detail": "The webhook signature did not verify.",
  "code": "invalid_webhook_signature",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
