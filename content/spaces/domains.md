---
title: Set up a custom domain
description: Attach a hostname you own, verify its DNS, and let Spacefast issue and renew SSL automatically.
---

Connect a hostname you already own so a space can use your address. Spacefast
issues and renews SSL automatically after DNS is ready.

Anonymous spaces cannot use custom domains. [Keep the space](/spaces) first.

## Attach the hostname

In the dashboard, open the space, choose **Domains**, add the hostname, and copy
the DNS values Spacefast shows. Create those records at the company that
currently manages your DNS.

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

DNS changes can take time to reach every resolver. Fix the records reported by
diagnostics, wait for their TTL, and check again. Do not remove the old host
until the Spacefast domain is ready and you have tested the site.

## List or remove hostnames

```bash
sf domains ls --space docs
```

```bash
sf domains rm example.com --space docs
```

Removing a hostname stops Spacefast from serving it. It does not change records
at your DNS provider.

The dashboard and [team entitlements](/account/limits) show how many custom
domains the selected team can attach.

## Related

- [Move from another host](/publishing/migrate)
- [Move the live site](/publishing/channels)
- [Domain CLI reference](/cli#sf-domains)
