---
search:
  tags: [domains, registration, whois, tld, transfer]
title: Search, buy, and manage domain names
description: Search names and check availability from the CLI or API, look up TLD pricing and WHOIS, and automate the registration lifecycle with webhooks.
---

Spacefast can find you a domain name and manage its registration. The
search and research surface is API and CLI; the purchase itself happens
in the dashboard. Once you own a name, host its records with
[DNS at Spacefast](/domains/dns) and attach it to a space with
[custom domains](/domains).

## Search from the terminal

```bash
sf domains search acme
```

That prints local name ideas for a brand, 20 suggestions by default
(`--limit` changes it). For live availability checks, open the
interactive search UI:

```bash
sf domains search acme --interactive
```

## Search from the API

Three research endpoints turn a query into candidate names:

- `GET /v1/domains/research/suggestions?q=acme` returns ranked domain
  suggestions for a query.
- `GET /v1/domains/research/ideas?q=acme` returns creative name ideas
  derived from the query.
- Both take `limit` (default 96, max 160).

Check whether a specific name can be registered:

```bash
curl "https://api.spacefast.com/v1/domains/research/availability?domain=acme.com" \
  -H "Authorization: Bearer $SPACEFAST_TOKEN"
```

The response reports `available`, a `status` of `available`,
`available_elsewhere`, `taken`, `unknown`, or `unsupported_tld`,
whether the name is `purchasable` through Spacefast or `connectable` as
an external domain, a `premium` flag, and the `price` in USD. To check
many names in one call, `POST /v1/domains/research/availability` with a
`names` or `domains` array of up to 80 entries.

Lookups are rate-limited: too many in a short window returns
[`domain_lookup_rate_limited`](/errors/domain_lookup_rate_limited),
and the `Retry-After` header says when to search again.

## Pricing by TLD

`GET /v1/domains/products` lists the purchasable top-level domains
(TLDs) with their pricing, and
`GET /v1/domains/products/{tld}` returns pricing and rules for one TLD.
Read prices from these endpoints rather than hard-coding them.

## WHOIS

`GET /v1/domains/research/whois?domain=acme.com` returns public WHOIS
registration data: the registrar, nameservers, lifecycle events, and
the raw record. When WHOIS data is unavailable for a domain,
[`whois_unavailable`](/errors/whois_unavailable) says so — retry
later.

## Buy the name

There is no public API endpoint for purchasing a registration: pick the
name with the tools above, then buy it in the dashboard. After the
purchase, the domain shows up in your inventory (next section) and the
`domain.registration_purchased` webhook event fires.

## Your domain inventory

Every domain your teams work with — registered at Spacefast or brought
from outside — is an inventory record:

- `GET /v1/domains` lists inventory records across your teams, newest
  first; pass `teamId` to limit to one team.
- `POST /v1/domains` adds an apex or concrete hostname you already own.
  Assign it to a space with
  `PATCH /v1/teams/{teamId}/domains/{domainId}`.
- `GET /v1/domains/{domainId}` returns one domain with its
  verification, binding, and DNS state.
- `PATCH /v1/domains/{domainId}` updates metadata such as
  `wildcardEnabled`.
- `POST /v1/domains/{domainId}/verify` checks the domain's DNS for
  proof of control and updates verification state.
- `DELETE /v1/domains/{domainId}` deletes an unbound domain and its DNS
  data; unbind bound domains first.

## Automate the lifecycle

Registrations move through a lifecycle you can subscribe to with
[webhooks](/operate/webhooks). The `domain` resource emits
`registration_purchased`, `registration_renewed`,
`registration_expiring`, `registration_expired`,
`transfer_in_started`, and `transfer_out_started` — enough to post a
renewal reminder to Slack or open a ticket when a transfer begins.

The matching error codes tell you where a domain stands when an
operation is blocked:

- [`registration_expiring`](/errors/registration_expiring) — the
  registration is about to expire, which blocks the operation; renew
  first, then retry.
- [`registration_expired`](/errors/registration_expired) — the
  registration is expired; renew the domain at its registrar before
  retrying.
- [`domain_registration_not_renewable`](/errors/domain_registration_not_renewable)
  — the registration cannot be renewed right now; check its status and
  renewal window.
- [`domain_registration_active`](/errors/domain_registration_active) —
  an active registration blocks the operation; wait for it or cancel it.
- [`domain_transfer_active`](/errors/domain_transfer_active) — a
  transfer is in progress and blocks the operation; wait for it to
  finish or cancel it.

## Related

- [Host DNS at Spacefast](/domains/dns) for records and delegation.
- [Custom domains](/domains) for serving a space at your hostname.
- [Webhooks](/operate/webhooks) for the full event catalog.
