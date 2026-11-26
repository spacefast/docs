---
title: "source_url_domain_unverified"
description: "OAuth and hosted MCP connections can capture only websites on domains the team controls in Spacefast."
---

OAuth and hosted MCP connections can capture only websites on domains the team controls in Spacefast.

**How to resolve:** Register the domain through Spacefast, or add it to the team with Spacefast DNS and prove ownership with its TXT record or a nameserver change. Then capture again. See [Domains and DNS](/docs/domains/).

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
  "type": "https://spacefast.com/docs/errors/source_url_domain_unverified",
  "title": "Source url domain unverified",
  "status": 422,
  "detail": "OAuth and hosted MCP connections can capture only websites on domains the team controls in Spacefast.",
  "code": "source_url_domain_unverified",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
