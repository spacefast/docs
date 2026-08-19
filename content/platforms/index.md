---
title: Platforms
sidebar:
  label: Overview
description: Host sites for your own customers with the tenant model, server-side keys, and on-behalf-of calls in the Platform API.
---

The Platform API is for companies that host many sites for **their own
customers**. It is white-label static hosting behind your brand and your
billing. You call one API, and your customer sees only you. The
[Platform API reference](/platforms/api/reference) lists every operation.

The Platform API is a superset of the [public REST API](/api). It has the
same control plane, the same envelope, and the same error codes, plus the
tenant operations (principals and on-behalf-of calls) that the public
reference deliberately does not show.

## The tenant and space model

- **Tenant**: your platform. It is the boundary for keys, principals,
  quotas, and billing.
- **Space**: what your customers see. A space takes files in, serves a
  live URL, and has immutable versions, rollback, passwords, routing,
  and domains.

Map your data model onto tenants and spaces once; the rest is API calls.
Spaces on your platform have every feature that the consumer product has.

## Server-side keys

Tenants authenticate **server-side** with a tenant key. Platform
credentials belong on your server. Never send a tenant key to a browser,
mobile app, customer site, or generated page. Tenants act on behalf of
their customers by naming the customer as the `principal` in the request
body:

```bash
curl -F archive=@site.zip \
  -H "Authorization: Bearer $TENANT_KEY" \
  -F 'payload={"principal":{"type":"external","id":"cust_4812"}}' \
  https://api.spacefast.com/v1/publish
```

End users never see Spacefast credentials, and you never store per-user
secrets. For every request, Spacefast records the acting key and the
customer it acts for. That record gives you a full audit trail. Scoping,
quotas, and rate limits are per tenant, so one integration cannot affect
another.

## Customers as principals

Your customer is the principal. On operations that create or publish a
customer resource, include the customer as an external principal in the
JSON body:

```http title="Create a space for a customer"
POST /v1/spaces
Authorization: Bearer $TENANT_KEY
Content-Type: application/json

{
  "principal": {
    "type": "external",
    "id": "cust_4812"
  },
  "slug": "customer-home"
}
```

Use your stable internal identifier as the customer ID, and reuse it
across requests. The `principal` field attributes resources, quotas, and
audit history to that customer. To keep the mapping durable, store the
Spacefast identifiers beside your own customer and project records. Your
backend calls the Platform API and returns only the product data that
your UI needs; customers do not need a separate Spacefast account.

## Operational guarantees

- **Idempotent provisioning**: Spacefast honors `Idempotency-Key` per
  tenant, so a retried request cannot double-provision a customer.
- **Typed errors**: every 4xx/5xx is an RFC 9457 problem document
  (`application/problem+json`) with a stable top-level `code`, plus a
  `pointer` JSON Pointer on validation failures. Branch on `code`.
- **Per-customer scoping**: each resource is attributed to the customer
  principal you created it for, so listing, transfer, and cleanup are
  exact.
- **Downloads**: every space version can be downloaded file by file
  (`sf spaces download`), so you can offer your customers a clean exit.

## Domains at scale

To attach a domain that a customer owns, use the DNS values that the API
returns. Spacefast issues and renews certificates automatically. Live
diagnostics report when each domain resolves, so you can show that status
in your own UI.

## Get access

Spacefast sizes platform limits, pricing, and domains to what you build,
so access starts with a conversation.
[Tell us what you're making](https://automattic.com/work-with-us/), or read
the [Platform API reference](/platforms/api/reference) first.
