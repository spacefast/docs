---
title: "wp_cloud_team_shared_site_exists"
description: "The team already has a shared site of this class."
---

The team already has a shared site of this class.

**How to resolve:** Use the existing shared site.

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
  "type": "https://docs.spacefast.com/docs/errors/wp_cloud_team_shared_site_exists",
  "title": "Wp cloud team shared site exists",
  "status": 400,
  "detail": "The team already has a shared site of this class.",
  "code": "wp_cloud_team_shared_site_exists",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
