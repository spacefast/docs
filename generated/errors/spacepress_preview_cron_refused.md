---
title: "spacepress_preview_cron_refused"
description: "A SpacePress app's job runner refused a request without a current token for the version on this hostname."
---

A SpacePress app's job runner refused a request without a current token for the version on this hostname.

**How to resolve:** Nothing to fix. SpacePress apps run their jobs from their own traffic. Queued jobs run on a visit after about a minute.

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
  "type": "https://spacefast.com/docs/errors/spacepress_preview_cron_refused",
  "title": "Spacepress preview cron refused",
  "status": 422,
  "detail": "A SpacePress app's job runner refused a request without a current token for the version on this hostname.",
  "code": "spacepress_preview_cron_refused",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
