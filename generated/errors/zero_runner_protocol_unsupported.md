---
title: "zero_runner_protocol_unsupported"
description: "The Zero runner received an unsupported invoke protocol."
---

The Zero runner received an unsupported invoke protocol.

**How to resolve:** Rebuild and redeploy so the PHP bridge and Rust runner versions match.

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
  "type": "https://docs.spacefast.com/docs/errors/zero_runner_protocol_unsupported",
  "title": "Zero runner protocol unsupported",
  "status": 400,
  "detail": "The Zero runner received an unsupported invoke protocol.",
  "code": "zero_runner_protocol_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
