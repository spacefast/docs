---
title: "zero_runner_response_encode_failed"
description: "The Zero runner could not encode its response."
---

The Zero runner could not encode its response.

**How to resolve:** Return JSON-serializable response metadata from the endpoint.

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
  "type": "https://spacefast.com/docs/errors/zero_runner_response_encode_failed",
  "title": "Zero runner response encode failed",
  "status": 400,
  "detail": "The Zero runner could not encode its response.",
  "code": "zero_runner_response_encode_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
