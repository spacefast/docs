---
title: Set up a custom domain
description: Attach a hostname you own, verify its DNS, and let Spacefast issue and renew SSL automatically.
---

Connect a hostname you already own so a space can use your address. Spacefast
issues and renews SSL automatically after DNS is ready.

Anonymous spaces cannot use custom domains. [Claim the space](/spaces) first.

## Attach the hostname

In the dashboard, open the space. Choose **Domains**. Add the hostname. Copy
the DNS values Spacefast shows. Create those records at your DNS provider.

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

DNS changes can take time to reach every resolver. Fix the records that
diagnostics reports. Wait for their TTL. Check again. Do not remove the old
host until the Spacefast domain is ready and you test the site.

## List or remove hostnames

```bash
sf domains ls --space docs
```

```bash
sf domains rm example.com --space docs
```

When you remove a hostname, Spacefast stops serving it. The removal does not
change records at your DNS provider.

The dashboard and [team entitlements](/account/billing) show how many custom
domains the selected team can attach.

## Related

- [Move from another host](/publishing/migrate)
- [Move the live site](/publishing/channels)
- [Domain CLI reference](/cli#sf-domains)
