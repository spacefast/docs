---
title: Set up a custom domain
description: Attach a hostname you own, verify its DNS, and let Spacefast issue and renew SSL automatically.
---

Connect a hostname you already own so a space can use your address. Spacefast
issues and renews Secure Sockets Layer (SSL) certificates automatically after
your Domain Name System (DNS) records are ready.

Anonymous spaces cannot use custom domains. [Claim the space](/spaces) first.

## Attach the hostname

In the dashboard, open the space and choose **Domains**. Add the hostname,
copy the DNS values Spacefast shows, and create those records at your DNS
provider.

From the CLI:

```bash
sf domains add example.com --space docs
```

To make one hostname redirect to another, declare that when you add it:

```bash
sf domains add www.example.com --space docs --role redirect --redirect-to example.com
```

## Verify DNS and SSL

After changing DNS, ask Spacefast to check it:

```bash
sf domains check example.com --space docs
```

For the records Spacefast can see and the current SSL state:

```bash
sf domains diagnostics example.com --space docs
```

Fix the records that diagnostics reports, wait for their TTL, and check again.
Do not remove the old host until diagnostics reports the domain ready and you
have tested the site.

## Certificates

Certificates are automatic. If issuance fails, retry it from the domain's
page in the dashboard, or
`POST /v1/spaces/{spaceId}/domains/{domainId}/ssl/retry`. Uploading your own
certificate is not available.

## Manage DNS at Spacefast

When Spacefast is the domain's DNS host, manage records from the CLI:
`sf domains dns add|update|rm|ls|export|refresh`, plus
`sf domains nameservers set` for delegation and `sf domains search` for
availability. See the [CLI reference](/cli#sf-domains-dns-add-domain).

## List or remove hostnames

```bash
sf domains ls --space docs
```

```bash
sf domains rm example.com --space docs
```

When you remove a hostname, Spacefast stops serving it. The removal does not
change records at your DNS provider.

The dashboard and team entitlements show how many custom
domains the selected team can attach.

## Related

- [Move from another host](/publishing/migrate)
- [Move the live site](/publishing/channels)
- [Domain CLI reference](/cli#sf-domains)
