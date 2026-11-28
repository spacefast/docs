---
title: "secret_detected"
description: "A committed file contains a high-confidence secret or private key."
---

A committed file contains a high-confidence secret or private key.

**How to resolve:** Remove the secret from published files, rotate it if exposed, and store runtime secrets in Spacefast Secrets (`sf env set NAME --value-from-stdin`, Space Variables in the dashboard, or `.env.server` for SpacePress/Functions Spaces; static pages cannot hold runtime secrets — use `--no-secret` for non-secret variables). Never suppress a real credential; for a confirmed false positive or test fixture, add `gitleaks:allow` on that line or a scoped entry in `spacefast.config.ts` (or `sf.jsonc`) under `security.secrets.allowlist.entries`.

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
  "type": "https://spacefast.com/docs/errors/secret_detected",
  "title": "Secret detected",
  "status": 422,
  "detail": "A committed file contains a high-confidence secret or private key.",
  "code": "secret_detected",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
