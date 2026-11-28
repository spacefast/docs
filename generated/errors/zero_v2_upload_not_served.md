---
title: "zero_v2_upload_not_served"
description: "This Space's version holds a raw Zero project, so files uploaded at its root are project source and are not served."
---

This Space's version holds a raw Zero project, so files uploaded at its root are project source and are not served.

**How to resolve:** Put each file under public/ (public/about.html serves at /about.html), or publish the whole project again. A version that also holds an older captured bundle takes new pages only from a whole-project publish.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_upload_not_served",
  "title": "Zero v2 upload not served",
  "status": 422,
  "detail": "This Space's version holds a raw Zero project, so files uploaded at its root are project source and are not served.",
  "code": "zero_v2_upload_not_served",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
