---
title: "zero_v2_mixed_source_forms"
description: "The publish uploads both a captured Zero source bundle (.zero-source/) and a raw project (zero.config.ts)."
---

The publish uploads both a captured Zero source bundle (.zero-source/) and a raw project (zero.config.ts).

**How to resolve:** Publish one form: the project itself, or the bundle a current CLI captures from it with sf publish.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_mixed_source_forms",
  "title": "Zero v2 mixed source forms",
  "status": 422,
  "detail": "The publish uploads both a captured Zero source bundle (.zero-source/) and a raw project (zero.config.ts).",
  "code": "zero_v2_mixed_source_forms",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
