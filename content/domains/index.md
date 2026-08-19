---
search:
  tags: [dns, ssl, https, hostname]
title: Custom domains
description: Attach a hostname you own, verify its DNS, and let Spacefast issue and renew SSL automatically.
---

Connect a hostname you already own so a space serves at your address. Once
the Domain Name System (DNS) records are in place, Spacefast issues and
renews Secure Sockets Layer (SSL) certificates automatically.

No domain yet? [Search, buy, and manage domain names](/domains/registration)
covers finding and registering one.

Anonymous spaces cannot use custom domains;
[claim the space](/publish/anonymous) first.

## Attach the hostname

In the dashboard, open the space, choose **Domains**, add the hostname, and
create the DNS records Spacefast shows at your DNS provider. The same flow
from the CLI:

```bash
sf domains add example.com --space docs
```

To make one hostname redirect to another — `www` to the apex, for example —
declare that when you add it:

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

Fix the records that diagnostics reports, wait for their TTL, and check
again. Keep the old host serving until diagnostics reports the domain ready
and you have tested the site.

## Certificates

Certificates are automatic. If issuance fails, retry it from the domain's
page in the dashboard or with
`POST /v1/spaces/{spaceId}/domains/{domainId}/ssl/retry`. Uploading your
own certificate is not available.

## Manage DNS at Spacefast

When Spacefast is the domain's DNS host, you manage records, delegation,
batches, and zone exports from the CLI.
[Host DNS at Spacefast](/domains/dns) covers the whole workflow.

## List or remove hostnames

```bash
sf domains ls --space docs
```

```bash
sf domains rm example.com --space docs
```

Removing a hostname stops Spacefast from serving it but changes nothing at
your DNS provider. The dashboard and team entitlements show how many custom
domains the selected team can attach.

## Related

- [Move from another host](/guides/migrate)
- [Move the live site](/publish/versions)
- [Domain CLI reference](/cli#sf-domains)
