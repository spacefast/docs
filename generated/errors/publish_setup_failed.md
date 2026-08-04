---
title: "publish_setup_failed"
description: "Provisioning for this publish failed."
---

Provisioning for this publish failed.

**How to resolve:** Retry the publish. If it persists, contact support with the requestId.

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
  "type": "https://spacefast.com/docs/errors/publish_setup_failed",
  "title": "Publish setup failed",
  "status": 400,
  "detail": "Provisioning for this publish failed.",
  "code": "publish_setup_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
