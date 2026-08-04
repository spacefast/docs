---
title: "zero_js_globals_failed"
description: "The Zero runner could not install runtime globals for the endpoint."
---

The Zero runner could not install runtime globals for the endpoint.

**How to resolve:** Rebuild with a current runner and report the failure if it repeats.

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
  "type": "https://docs.spacefast.com/docs/errors/zero_js_globals_failed",
  "title": "Zero js globals failed",
  "status": 400,
  "detail": "The Zero runner could not install runtime globals for the endpoint.",
  "code": "zero_js_globals_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
