---
title: "secret_variable_in_template"
description: "A template references a variable marked secret."
---

A template references a variable marked secret.

**How to resolve:** Remove the secret variable from the template and read it in server code instead.

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
  "type": "https://spacefast.com/docs/errors/secret_variable_in_template",
  "title": "Secret variable in template",
  "status": 400,
  "detail": "A template references a variable marked secret.",
  "code": "secret_variable_in_template",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
