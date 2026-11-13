---
title: "functions_transport_failed"
description: "The space's Functions worker did not answer: the request ran past the 30-second limit, or the connection to the worker failed."
---

The space's Functions worker did not answer: the request ran past the 30-second limit, or the connection to the worker failed.

**How to resolve:** A Functions request has 30 seconds to finish, and a scheduled cron run is a request with the same limit, though `sf crons run` stops waiting after 15 seconds. When the detail names the limit, do less work per request: split long jobs into chunks that each finish in time, and save progress (for example in `env.DB`) so the next request or cron run picks up where the last one stopped. Otherwise try again, and run `sf logs runtime --request-id <id>` with the response's request ID to see the cause.

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
  "type": "https://spacefast.com/docs/errors/functions_transport_failed",
  "title": "Functions transport failed",
  "status": 400,
  "detail": "The space's Functions worker did not answer: the request ran past the 30-second limit, or the connection to the worker failed.",
  "code": "functions_transport_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
