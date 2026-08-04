---
title: "zero_js_response_malformed"
description: "The Zero endpoint returned a malformed runner response."
---

The Zero endpoint returned a malformed runner response.

**How to resolve:** Return a valid Response or supported Zero handler result.

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
  "type": "https://docs.spacefast.com/docs/errors/zero_js_response_malformed",
  "title": "Zero js response malformed",
  "status": 400,
  "detail": "The Zero endpoint returned a malformed runner response.",
  "code": "zero_js_response_malformed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
