---
title: "primary_contact_ineligible"
description: "The account cannot be this Space's primary contact. It is not a current member of the owning team and has no accepted editor or manager role on the Space."
---

The account cannot be this Space's primary contact. It is not a current member of the owning team and has no accepted editor or manager role on the Space.

**How to resolve:** Pick someone from `primaryContactCandidates` on GET /v1/spaces/{spaceId}/people, or send `primaryContactUserId: null` to fall back to the team admins.

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
  "type": "https://spacefast.com/docs/errors/primary_contact_ineligible",
  "title": "Primary contact ineligible",
  "status": 422,
  "detail": "The account cannot be this Space's primary contact. It is not a current member of the owning team and has no accepted editor or manager role on the Space.",
  "code": "primary_contact_ineligible",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
