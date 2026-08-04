---
title: "comment_screenshot_rate_limited"
description: "Too many comment screenshot uploads were attempted."
---

Too many comment screenshot uploads were attempted.

**How to resolve:** Wait for the one-minute window to reset, then retry the screenshot upload.

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
  "type": "https://docs.spacefast.com/docs/errors/comment_screenshot_rate_limited",
  "title": "Comment screenshot rate limited",
  "status": 400,
  "detail": "Too many comment screenshot uploads were attempted.",
  "code": "comment_screenshot_rate_limited",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
