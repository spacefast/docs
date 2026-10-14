---
title: "cron_run_unreachable"
description: "The space never answered the on-demand cron request before the timeout."
---

The space never answered the on-demand cron request before the timeout.

**How to resolve:** Check the space's runtime logs for that path, then try again. A handler that legitimately runs long will still complete on its own schedule; only this preview gives up.

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
  "type": "https://spacefast.com/docs/errors/cron_run_unreachable",
  "title": "Cron run unreachable",
  "status": 400,
  "detail": "The space never answered the on-demand cron request before the timeout.",
  "code": "cron_run_unreachable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
