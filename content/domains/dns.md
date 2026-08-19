---
search:
  tags: [dns, nameservers, records, zone, delegation]
title: Host DNS at Spacefast
description: Delegate a domain to Spacefast nameservers, manage records from the CLI, and understand snapshots, managed records, and zone exports.
---

Spacefast can host a domain's DNS zone, so the same CLI that publishes
your site also edits its records. This page covers delegation, record
management with `sf domains dns`, and the safety model behind zone
writes. To attach a hostname to a space, start at
[custom domains](/domains) instead.

## Delegate the domain first

DNS hosting requires the domain to be delegated to Spacefast
nameservers. Until delegation propagates, zone operations fail with
[`nameserver_delegation_required`](/errors/nameserver_delegation_required);
update the nameservers at the registrar, then retry.

Check where a domain stands:

```bash
sf domains nameservers example.com
```

That shows the domain's DNS mode and its nameserver set. If the
observed nameservers diverge from the expected set, Spacefast reports
[`nameserver_divergence`](/errors/nameserver_divergence) — align the
registrar's records with the expected set, then re-check.

For a Spacefast-registered domain you can set custom nameservers from
the CLI (at least two, comma-separated):

```bash
sf domains nameservers set example.com ns1.example-dns.com,ns2.example-dns.com
```

Externally registered domains change nameservers at their registrar.
Nameserver changes emit the `domain.nameservers_updated`
[webhook event](/operate/webhooks).

## Add, update, and remove records

`sf domains dns add` writes a record into the domain's
Spacefast-managed zone. Supported types are `A`, `AAAA`, `ALIAS`,
`CAA`, `CNAME`, `MX`, `NS`, `SRV`, and `TXT`; `--name` is relative to
the zone with `@` for the apex, `--ttl` defaults to 3600 seconds, and
`--priority` applies to `MX` and `SRV` records:

```bash
sf domains dns add example.com --type MX --name @ --value mail.example.com --priority 10
```

List the zone to see records and their ids (default 200 per page, max
500, with `--cursor` for the next page):

```bash
sf domains dns ls example.com
```

Update or delete by record id; if the id is wrong you get
[`dns_record_not_found`](/errors/dns_record_not_found), so list first:

```bash
sf domains dns update example.com rec_123 --value 1.2.3.4 --ttl 3600
sf domains dns rm example.com rec_123
```

Record changes emit the `domain.dns_updated`
[webhook event](/operate/webhooks).

## Batch changes

`sf domains dns batch` applies a set of DNS changes in one call. The
JSON body holds arrays of records to delete, patch, put, and post, and
comes from a literal string, an `@file`, or `-` for stdin:

```bash
sf domains dns batch example.com --input @dns-changes.json
sf domains dns batch example.com --input '{"posts":[{"type":"TXT","name":"@","value":"v=spf1 -all"}]}'
```

Not every provider can apply a batch with the required semantics; when
one cannot, the API answers
[`dns_provider_batch_unsupported`](/errors/dns_provider_batch_unsupported)
and you split the change.

## Records Spacefast manages for you

Some records in the zone exist because a binding or feature put them
there — the records that route your hostname to a space, for example.
You cannot edit those directly
([`dns_record_managed`](/errors/dns_record_managed)); change the
binding or feature that owns the record instead. A record of your own
that collides with a managed one is rejected with
[`dns_record_conflicts_with_managed`](/errors/dns_record_conflicts_with_managed);
managed records cannot be overridden, so remove or adjust the
conflicting record.

## Snapshots, capabilities, and connected providers

A domain's zone can also live at a connected DNS provider rather than
in Spacefast's own DNS. Spacefast then works from a cached **snapshot**
of the provider's zone: it plans your change against the snapshot,
writes through to the provider, and reports what happened. Three
commands and a few error codes make that model visible:

- `sf domains dns capabilities example.com` shows what the backing
  provider supports. When a field is rejected with
  [`dns_field_not_applicable`](/errors/dns_field_not_applicable) or
  [`dns_provider_feature_unavailable`](/errors/dns_provider_feature_unavailable),
  the capabilities response tells you which fields are creatable or
  patchable.
- `sf domains dns refresh example.com` refreshes the snapshot. A write
  against outdated data fails with
  [`dns_provider_snapshot_stale`](/errors/dns_provider_snapshot_stale)
  — refresh, review the new diff, and retry against the latest record
  ids.
- Some providers apply every write as a **replace-all**: the write
  replaces the whole zone, not one record. Spacefast surfaces that with
  [`dns_provider_replace_all_write_strategy`](/errors/dns_provider_replace_all_write_strategy)
  so you review the full-zone diff and unrelated `MX`, `TXT`, `CAA`,
  `NS`, and wildcard records are preserved. Such providers can also
  require a fresh full-zone plan before the write
  ([`dns_provider_replace_all_requires_fresh_plan`](/errors/dns_provider_replace_all_requires_fresh_plan)):
  refresh the snapshot, review the plan, and run the action from it.

Two more guardrails protect against losing records. An operation can
require exporting the current records first
([`dns_export_required`](/errors/dns_export_required)): export the
zone, confirm the snapshot, and retry. And a DNS import that cannot see
the full zone refuses to run
([`dns_import_partial_visibility`](/errors/dns_import_partial_visibility)),
because importing partial data would lose records — verify delegation
and retry once the full zone is visible.

If another team already controls the domain's DNS, operations are
blocked with
[`incumbent_controls_dns`](/errors/incumbent_controls_dns); prove
control by completing domain verification, or coordinate with the
incumbent.

## Export the zone

Print the zone as BIND-style records — for a backup, a diff, or a move
to another host:

```bash
sf domains dns export example.com
```

## Related

- [Custom domains](/domains) for attaching a hostname to a space.
- [Search, buy, and manage domain names](/domains/registration) if you
  do not own the name yet.
- [`sf domains dns` CLI reference](/cli#sf-domains-dns-add-domain) for
  every flag.
