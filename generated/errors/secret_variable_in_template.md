---
title: "secret_variable_in_template"
description: "A secret variable was referenced in a template, which is blocked."
---

A secret variable was referenced in a template, which is blocked.

**How to resolve:** Templates may only substitute non-secret variables. Remove the secret reference.

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
  "type": "https://docs.spacefast.com/docs/errors/secret_variable_in_template",
  "title": "Secret variable in template",
  "status": 400,
  "detail": "A secret variable was referenced in a template, which is blocked.",
  "code": "secret_variable_in_template",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
