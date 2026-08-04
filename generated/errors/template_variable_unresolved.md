---
title: "template_variable_unresolved"
description: "A template references a variable that has no value."
---

A template references a variable that has no value.

**How to resolve:** Define the variable for the space, site, or team, or remove the reference.

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
  "type": "https://spacefast.com/docs/errors/template_variable_unresolved",
  "title": "Template variable unresolved",
  "status": 400,
  "detail": "A template references a variable that has no value.",
  "code": "template_variable_unresolved",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
