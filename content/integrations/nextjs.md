---
title: Next.js
description: How to export a static Next.js site and publish it on Spacefast with predictable routing and asset behavior.
---

Spacefast hosts Next.js spaces that build to static files. It does not run the Next.js server, so use static export and move request-time features to build time, browser code, or another backend.

## Static export

Configure Next.js with `output: "export"`, as described in the official [Next.js static export guide](https://nextjs.org/docs/pages/guides/static-exports). In current Next.js versions, `next build` writes the static site to `out` when this option is set.

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Optional: emit /about/index.html instead of /about.html.
  // trailingSlash: true,
};

export default nextConfig;
```

Build and publish the generated directory:

```bash
bun run build
sf publish ./out
```

Static export works best when routes are known at build time. Avoid server-only features such as API Routes, Middleware, `getServerSideProps`, ISR, on-demand revalidation, Draft Mode, Preview Mode, request-time redirects and rewrites, and dynamic rendering from cookies or headers.

Several of these have a static-hosting answer: redirects and rewrites move to [`_redirects`](/redirects), and API calls can target your backend directly or through a [proxy route](/proxy-routes).

## Images

Next.js default image optimization requires a Next.js server at runtime. Static export needs `images.unoptimized`, pre-generated responsive assets, or a custom loader.

Next.js documents this behavior in its [static export image optimization section](https://nextjs.org/docs/pages/guides/static-exports#image-optimization) and the [Export with Image Optimization API error guide](https://nextjs.org/docs/messages/export-image-api). For the full Next.js image API, see the [`next/image` docs](https://nextjs.org/docs/api-reference/next/image) and [`images` config docs](https://nextjs.org/docs/pages/api-reference/config/next-config-js/images).

For public images, use the [Site Accelerator API](/image-acceleration). It transforms images through `i0.wp.com` and handles width, quality, crop, fit, filters, and metadata at the CDN layer.

Install the shared image package:

```bash
bun add @spacefast/image
```

```ts
// next.config.ts
import { createRequire } from "node:module";
import type { NextConfig } from "next";
import { spacefastNextImageConfig } from "@spacefast/image/next";

const require = createRequire(import.meta.url);

const nextConfig: NextConfig = {
  output: "export",
  images: {
    ...spacefastNextImageConfig,
    loaderFile: require.resolve("@spacefast/image/next-loader"),
  },
};

export default nextConfig;
```

`spacefastNextImageConfig` includes the shared `loader: "custom"` and `qualities` settings. Resolve `@spacefast/image/next-loader` from your own `next.config.ts` so pnpm, Yarn PnP, and hoisted workspaces can locate the package correctly.

Or copy the loader into your space if you do not want a dependency:

```ts
// lib/spacefast-image-loader.ts
type ImageLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

export default function spacefastImageLoader({ src, width, quality }: ImageLoaderParams) {
  if (!/^https?:\/\//i.test(src)) {
    return src;
  }

  const params = new URLSearchParams({
    w: String(width),
    quality: String(quality ?? 75),
    strip: "all",
  });

  const source = new URL(src);
  if (source.hostname === "i0.wp.com") {
    params.forEach((value, key) => source.searchParams.set(key, value));
    return source.toString();
  }

  source.searchParams.forEach((value, key) => {
    if (!params.has(key)) {
      params.set(key, value);
    }
  });
  return `https://i0.wp.com/${source.host}${source.pathname}?${params.toString()}`;
}
```

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./lib/spacefast-image-loader.ts",
    qualities: [50, 60, 75, 85, 100],
  },
};

export default nextConfig;
```

Use absolute public image URLs for images that should go through Site Accelerator. Relative images in `public/` are emitted as static files and returned unchanged by this loader.

```tsx
import Image from "next/image";

export function HeroImage() {
  return (
    <Image
      src="https://example.com/uploads/hero.jpg"
      alt="Hero image"
      width={1200}
      height={630}
      quality={85}
      priority
    />
  );
}
```

This outputs image URLs like:

```text
https://i0.wp.com/example.com/uploads/hero.jpg?w=1200&quality=85&strip=all
```

For advanced Site Accelerator options, see [Image acceleration](/image-acceleration). It covers `resize`, `fit`, `crop`, `filter`, `brightness`, `contrast`, `colorize`, `smooth`, `zoom`, `allow_lossy`, and metadata. Put those options in one URL helper so components do not rebuild image URLs differently.

For component-level loader control instead of global Next configuration, import the loader directly:

```tsx
import Image from "next/image";
import { spacefastNextImageLoader } from "@spacefast/image/next";

export function CardImage() {
  return (
    <Image
      loader={spacefastNextImageLoader}
      src="https://example.com/uploads/card.jpg"
      alt="Card image"
      width={800}
      height={450}
    />
  );
}
```

## Publishing checklist

- Confirm `next build` creates an `out` directory with `index.html` at the root.
- Replace Vercel or Next.js runtime features before publishing.
- Put `_redirects` and `_headers` in the exported output if the space needs Spacefast routing, response headers, or `_headers` Basic Auth (not available on Free; available on Personal and Work).
- Use Site Accelerator URLs only for public images that the CDN can fetch.
