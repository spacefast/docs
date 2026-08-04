---
title: "inject_invalid"
description: "The inject config key is malformed."
---

The inject config key is malformed.

**How to resolve:** Make inject an object whose head/bodyStart/bodyEnd/noscript entries are arrays of up to 16 strings.

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
  "type": "https://spacefast.com/docs/errors/inject_invalid",
  "title": "Inject invalid",
  "status": 400,
  "detail": "The inject config key is malformed.",
  "code": "inject_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
