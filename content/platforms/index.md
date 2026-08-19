---
title: Platforms
sidebar:
  label: Overview
description: "Host sites for your own customers: the tenant model, server-side keys, on-behalf-of calls, and the Platform API reference."
---

The platform surface is for companies that host many sites for **their own
customers** — white-label static hosting behind your brand and your
billing. You call one API, and your customer sees only you. The
[Platform API reference](/platforms/api/reference) lists every operation.

The Platform API is a superset of the [public REST API](/api): the same
control plane, the same envelope, and the same error codes, plus the tenant
surface — principals and on-behalf-of calls — that the public reference
deliberately does not show.

## The model: tenant → space

- **Tenant**: your platform. The boundary for keys, principals, quotas,
  and billing.
- **Space**: what customers actually see — files in, live URL out,
  immutable versions, rollback, passwords, routing, domains.

Map your data model onto these two nouns once; the rest is API calls.
Spaces on your platform have every feature that the consumer product has.

## Keys and the proxy posture

Tenants authenticate **server-side** with a tenant key. Platform
credentials belong on your server: never send a tenant key to a browser,
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
customer it acts for, which gives you a full audit trail. Scoping, quotas,
and rate limits are per tenant, so one integration cannot affect another.

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

The customer ID should be your stable internal identifier, reused across
requests. The `principal` field attributes resources, quotas, and audit
history to that customer, so store the Spacefast identifiers beside your
own customer and project records to keep the mapping durable. Your backend
calls the Platform API and returns only the product data your UI needs;
customers never receive the tenant key and do not need a separate
Spacefast account.

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

Use the DNS values that the API returns to attach any domain that a
customer owns. Spacefast issues and renews certificates automatically, and
live diagnostics report when each domain resolves, so you can show that
status in your own UI.

## Getting access

Platform access is by conversation: limits, pricing, and domains are sized
to what you build.
[Tell us what you're making](https://automattic.com/work-with-us/), or read
the [Platform API reference](/platforms/api/reference) first.
