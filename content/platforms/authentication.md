---
title: Platform authentication
description: Authenticate server-side with a tenant key and attribute each request to the customer it acts for.
---

Platform credentials belong on your server. Never ship a tenant key to a
browser, mobile app, customer site, or generated page.

Send the tenant key as bearer authentication and identify the customer with the
on-behalf-of header:

```http
Authorization: Bearer <TENANT_KEY>
X-Spacefast-On-Behalf-Of: <CUSTOMER_ID>
```

The customer ID should be your stable internal identifier. Reuse it across
requests so resources, quotas, and audit history stay attributable to the same
customer.

For exact operations and schemas, use the
[Platform API reference](/platforms/api/reference).
