---
title: Platform authentication
description: Authenticate server-side with a tenant key and attribute each request to the customer it acts for.
---

Platform credentials belong on your server. Never ship a tenant key to a
browser, mobile app, customer site, or generated page.

Send the tenant key as bearer authentication. On operations that create or
publish a customer resource, include the customer as an external principal in
the JSON body:

```http title="Create a space for a customer"
POST /v1/spaces
Authorization: Bearer <TENANT_KEY>
Content-Type: application/json

{
  "principal": {
    "type": "external",
    "id": "<CUSTOMER_ID>"
  },
  "slug": "customer-home"
}
```

The customer ID should be your stable internal identifier. Reuse it across
requests. The `principal` field is the generated API contract for attributing
resources, quotas, and audit history to that customer.

For exact operations and schemas, use the
[Platform API reference](/platforms/api/reference).
