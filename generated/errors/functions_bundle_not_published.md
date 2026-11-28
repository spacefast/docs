---
title: "functions_bundle_not_published"
description: "The version declares a Functions bundle that is missing from its runtime files."
---

The version declares a Functions bundle that is missing from its runtime files.

**How to resolve:** Check `details.artifactPath`. Rebuild the worker and include the generated bundle at that path in the publish output. If an ignore rule excludes the bundle, update the rule and publish again. If you upload files through the API, include the bundle in the file manifest and upload its bytes before finalizing.

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
  "type": "https://spacefast.com/docs/errors/functions_bundle_not_published",
  "title": "Functions bundle not published",
  "status": 422,
  "detail": "The version declares a Functions bundle that is missing from its runtime files.",
  "code": "functions_bundle_not_published",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
