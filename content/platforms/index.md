---
title: Platforms
sidebar:
  label: Overview
description: "Host sites for your own customers: the tenant model, server-side keys, on-behalf-of calls, and the Platform API reference."
---

The platform surface is for companies that host many sites for **their own
customers**. Use it for white-label static hosting behind your brand and your
billing: you call one API, and your customer sees only you. The
[Platform API reference](/platforms/api/reference) lists every operation.

The Platform API is a superset of the [public REST API](/api). You get the same control plane,
the same envelope, and the same error codes. You also get the tenant surface:
sites, principals, and on-behalf-of calls. The public reference deliberately
does not show that surface.

## The model: tenant → site → space

- **Tenant**: your platform. The boundary for keys, principals, quotas, and billing.
- **Site**: a runtime container that one of your customers owns; mostly a provisioning detail (`POST /v1/sites`).
- **Space**: what customers actually see: files in, live URL out, immutable versions, rollback, passwords, routing, domains.

Map your data model onto these three nouns once. The rest is API calls. Spaces
on your platform have every feature that the consumer product has.

## Keys and the proxy posture

Tenants authenticate **server-side** with a tenant key. Platform credentials
belong on your server. Never send a tenant key to a browser, mobile app,
customer site, or generated page. Tenants act on behalf of their customers:

```bash
curl -F archive=@site.zip \
  -H "Authorization: Bearer $TENANT_KEY" \
  -H "X-Spacefast-On-Behalf-Of: cust_4812" \
  https://api.spacefast.com/v1/publish
```

End users never see Spacefast credentials. You never store per-user secrets. For
every request, Spacefast records the acting key and the customer it acts for,
which gives you a full audit trail. Scoping, quotas, and rate limits are per
tenant, so one integration cannot affect another.

## Customers as principals

Your customer is the principal. Some operations create or publish a customer
resource. On those operations, include the customer as an external principal in
the JSON body:

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

The customer ID should be your stable internal identifier. Reuse it across
requests. The `principal` field attributes resources, quotas, and audit history
to that customer. Store the Spacefast identifiers beside your own customer and
project records so the mapping stays durable. Your backend calls the Platform
API and returns only the product data your UI needs. Customers never receive
the tenant key and do not need a separate Spacefast account.

## Operational guarantees

- **Idempotent provisioning**: Spacefast honors `Idempotency-Key` per tenant. A
  retried request cannot double-provision a customer.
- **Typed errors**: the same stable `{ "error": { "code": ... } }` envelope as
  the public API. Branch on codes.
- **Per-customer scoping**: Spacefast attributes each resource to the customer
  you created it for (`siteId`, principal). Listing, transfer, and cleanup are
  exact.
- **Exports**: every space exports to a portable archive. You can offer your
  customers a clean exit.

## Domains at scale

Use the DNS values that the API returns to attach any domain that a customer
owns. Spacefast issues and renews certificates automatically. Live diagnostics
report when each domain resolves, so you can show that status in your own UI.

## Getting access

Platform access is by conversation. We size limits, pricing, and domains to what
you build. [Tell us what you're making](https://automattic.com/work-with-us/),
or read the [Platform API reference](/platforms/api/reference) first.
