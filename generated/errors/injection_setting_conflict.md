---
title: "injection_setting_conflict"
description: "The request set `superpowers.injection` and an older injection key to opposite values, so Spacefast didn't change the setting."
---

The request set `superpowers.injection` and an older injection key to opposite values, so Spacefast didn't change the setting.

**How to resolve:** Send only `superpowers.injection`, or old keys that agree with it: `enabled: false` or `disable_all_injection: true` mean off, `enabled: true` or `disable_all_injection: false` mean on. The error's pointer names the old key that disagreed.

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
  "type": "https://spacefast.com/docs/errors/injection_setting_conflict",
  "title": "Injection setting conflict",
  "status": 422,
  "detail": "The request set `superpowers.injection` and an older injection key to opposite values, so Spacefast didn't change the setting.",
  "code": "injection_setting_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
