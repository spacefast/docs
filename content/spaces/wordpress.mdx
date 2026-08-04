---
title: WordPress
description: Build a Spacefast site from public WordPress content with the read-only WordPress client.
---

:::note[Private beta]
The WordPress data-source integration is a read-only private beta. It supports
public content from WordPress sites with the standard REST API.
:::

## Connect a source

In the Spacefast dashboard, open the space and go to **Settings → Data
sources**. Add a named public WordPress site and choose the default source.
Then connect the repository that builds the site to the same space.

Install the client in that repository:

```bash
bun add @spacefast/wordpress
```

Read content during the repository build:

```ts
import { createWordPressClient } from "@spacefast/wordpress";

const wp = createWordPressClient();
const { data: posts, pagination } = await wp.posts.list({
  perPage: 10,
  orderBy: "date",
});
const about = await wp.pages.bySlug("about");
```

Collections include posts, pages, media, categories, tags, and users. The
client preserves WordPress pagination metadata.

## Multiple sources

Omit `url` to use the default source, or select another configured source by
name:

```ts
const docs = createWordPressClient({ source: "docs" });
```

Repository builds receive `SPACEFAST_DATA_SOURCES` and `WORDPRESS_URL` from
the dashboard configuration. An explicit `url` always wins and is the right
choice for local development or browser code:

```ts
const local = createWordPressClient({ url: "https://example.wordpress.com" });
```

Zero-config discovery reads Node environment variables, so it is intended for
build-time or SSR code, not a browser bundle.

## Rebuild on WordPress changes

Choose **Connect WordPress** in the data-source settings, install the provided
plugin in WordPress, and paste the one-time connection into **Settings →
Spacefast**. Public content changes then coalesce into production repository
builds. **Build now** remains available in both products.

The plugin credential is limited to triggering builds for this space. It
cannot upload arbitrary output or replace saved build settings. Revoke it when
the WordPress installation is retired or compromised.

## Boundaries

- The client makes `GET` requests only. It cannot edit WordPress content.
- Draft, preview, private, and authenticated WordPress content is not
  supported.
- Content is a build snapshot. It changes on the Spacefast site only after a
  new repository build succeeds.
- Dashboard sources require standard pretty-permalink REST URLs under
  `/wp-json`; explicit client URLs also support the documented REST-root forms.
