---
search:
  tags: [dns, ssl, https, hostname]
title: Custom domains
description: Attach a hostname you own, verify its DNS, and let Spacefast issue and renew SSL automatically.
---

Attach a hostname you already own so a space serves at your address. After
the Domain Name System (DNS) records are in place, Spacefast issues and
renews Secure Sockets Layer (SSL) certificates automatically.

If you don't own a name yet, see
[Search, buy, and manage domain names](/domains/registration).

Anonymous spaces cannot use custom domains.
[Claim the space](/publish/anonymous) first.

## Attach the hostname

In the dashboard, open the space, choose **Domains**, and add the hostname.
Then create the DNS records Spacefast shows at your DNS provider. The CLI
does the same:

```bash
sf domains add example.com --space docs
```

To redirect one hostname to another, for example `www` to the apex, declare
the redirect when you add the hostname:

```bash
sf domains add www.example.com --space docs --role redirect --redirect-to example.com
```

## Verify DNS and SSL

After you change DNS records, ask Spacefast to check them:

```bash
sf domains check example.com --space docs
```

The diagnostics command shows the records Spacefast can see and the
current SSL state:

```bash
sf domains diagnostics example.com --space docs
```

Fix the records that diagnostics reports, wait for their TTL, and check
again. Keep the old host serving until diagnostics reports the domain ready
and you have tested the site.

## Certificates

Certificates are automatic. If issuance fails, retry it from the domain's
page in the dashboard or with
`POST /v1/spaces/{spaceId}/domains/{domainId}/ssl/retry`. You cannot upload
your own certificate.

## Manage DNS at Spacefast

When Spacefast is the domain's DNS host, you manage records, delegation,
batches, and zone exports from the CLI.
[Host DNS at Spacefast](/domains/dns) covers the whole workflow.

## List or remove hostnames

List the hostnames attached to a space:

```bash
sf domains ls --space docs
```

Remove a hostname:

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
