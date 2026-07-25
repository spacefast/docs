---
title: Platforms
description: The Spacefast platform surface for companies hosting sites for their own customers — the tenant model, key posture, on-behalf-of calls, and the Platform API reference.
---

The platform surface is for companies that host many sites for **their own customers** — white-label static hosting behind your brand and your billing. You call one API; your customer sees you, full stop. This page is the guide — the [Platform API reference](/platforms/api/reference) lists every operation.

It is a superset of the [public REST API](/api): the same control plane, the same envelope, the same error codes — plus the tenant surface (sites, principals, on-behalf-of calls) that the public reference deliberately doesn't show.

## The model: tenant → site → space

- **Tenant** — your platform. The boundary for keys, principals, quotas, and billing.
- **Site** — a runtime container one of your customers owns; mostly a provisioning detail (`POST /v1/sites`).
- **Space** — what customers actually see: files in, live URL out, immutable versions, rollback, passwords, routing, domains.

Map your data model onto these three nouns once; the rest is API calls. Every feature the consumer product has, spaces on your platform have — it's the same product underneath.

## Keys and the proxy posture

Tenants authenticate **server-side** with a tenant key and act on behalf of their customers:

```bash
curl -F archive=@site.zip \
  -H "Authorization: Bearer $TENANT_KEY" \
  -H "X-Spacefast-On-Behalf-Of: cust_4812" \
  https://api.spacefast.com/v1/publish
```

End users never see Spacefast credentials, and you never store per-user secrets. Every request records the acting key and the customer it acted for — a full audit trail. Scoping, quotas, and rate limits are per tenant, so one integration can't affect another.

## Operational guarantees

- **Idempotent provisioning** — `Idempotency-Key` is honored per tenant; a retried request can't double-provision a customer.
- **Typed errors** — the same stable `{ "error": { "code": ... } }` envelope as the public API; branch on codes.
- **Per-customer scoping** — resources created on behalf of a customer stay attributed to that customer (`siteId`, principal), so listing, transfer, and cleanup are exact.
- **Exports** — every space exports to a portable archive, so you can offer your customers a clean exit.

## Domains at scale

Attach any domain a customer owns using the DNS values the API returns; certificates are issued and renewed automatically, and live diagnostics report when each one resolves so you can surface status in your own UI.

## Getting access

Platform access is by conversation — limits, pricing, and domains sized to what you're building. [Tell us what you're making](https://automattic.com/work-with-us/), or read the [Platform API reference](/platforms/api/reference) first.
