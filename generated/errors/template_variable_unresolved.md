---
title: "template_variable_unresolved"
description: "A template references a variable that is not defined."
---

A template references a variable that is not defined.

**How to resolve:** Define the variable in the Space's variables, or remove the reference from the template.

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
  "type": "https://spacefast.com/docs/errors/template_variable_unresolved",
  "title": "Template variable unresolved",
  "status": 400,
  "detail": "A template references a variable that is not defined.",
  "code": "template_variable_unresolved",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
