---
title: "dns_control_observation_indeterminate"
description: "The domain check could not finish because a DNS or HTTP probe did not answer."
---

The domain check could not finish because a DNS or HTTP probe did not answer.

**How to resolve:** Wait briefly and check the domain again. An inconclusive check preserves any existing verification proof.

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
  "type": "https://spacefast.com/docs/errors/dns_control_observation_indeterminate",
  "title": "Dns control observation indeterminate",
  "status": 400,
  "detail": "The domain check could not finish because a DNS or HTTP probe did not answer.",
  "code": "dns_control_observation_indeterminate",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
