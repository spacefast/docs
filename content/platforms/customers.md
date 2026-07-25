---
title: Customers and sites
description: Map your customer model onto Platform tenants, sites, and spaces without exposing Spacefast credentials.
---

Your platform is the tenant. Your customer is the principal named by each
on-behalf-of request. A site is the runtime container you provision for that
customer; a space is the product resource they recognize and manage.

## Keep the mapping durable

Store the Spacefast identifiers beside your own customer and project records.
Use idempotency keys when provisioning so retrying a request cannot create a
second resource for the same intent.

## Keep the boundary server-side

Your backend calls the Platform API and returns only the product data your UI
needs. Customers never receive the tenant key and do not need a separate
Spacefast account.

Continue with [Platform authentication](/platforms/authentication) or open the
[Platform API reference](/platforms/api/reference).
