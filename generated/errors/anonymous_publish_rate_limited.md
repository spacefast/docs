---
title: "anonymous_publish_rate_limited"
description: "Too many anonymous publishes came from this network in a short window."
---

Too many anonymous publishes came from this network in a short window.

**How to resolve:** Wait for the window to pass, or sign in with an API key for higher limits.

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
  "type": "https://docs.spacefast.com/docs/errors/anonymous_publish_rate_limited",
  "title": "Anonymous publish rate limited",
  "status": 400,
  "detail": "Too many anonymous publishes came from this network in a short window.",
  "code": "anonymous_publish_rate_limited",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
