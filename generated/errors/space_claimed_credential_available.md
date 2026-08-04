---
title: "space_claimed_credential_available"
description: "The space was claimed and its owner kept agent publishing enabled; this claim token now works exactly once as an exchange voucher."
---

The space was claimed and its owner kept agent publishing enabled; this claim token now works exactly once as an exchange voucher.

**How to resolve:** POST /v1/anonymous-claim/exchange with this claim token as bearer auth. Save the returned access token (e.g. .spacefast/state.json), then retry the request with it as Authorization: Bearer. Do not publish a new space.

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
  "type": "https://docs.spacefast.com/docs/errors/space_claimed_credential_available",
  "title": "Space claimed credential available",
  "status": 400,
  "detail": "The space was claimed and its owner kept agent publishing enabled; this claim token now works exactly once as an exchange voucher.",
  "code": "space_claimed_credential_available",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
