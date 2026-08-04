---
title: Image acceleration
description: Resize, crop, filter, and serve public images through Site Accelerator.
---

Serve public images through Site Accelerator for CDN caching and on-the-fly
transforms. Append query parameters to a URL to resize, crop, filter, and
compress an image. You do not need a build step.

```text
https://i0.wp.com/s.ma.tt/files/2012/06/DSC01205.jpg?w=300
https://i0.wp.com/s.ma.tt/files/2012/06/9-DSC01406-1600x1066.jpg?resize=400,220
https://i0.wp.com/s.ma.tt/files/2010/10/MCM_4049.jpg?fit=300,300
```

## URL format

Use `i0.wp.com` followed by the original public image host and path.

```text
https://i0.wp.com/{original-image-host}/{path-to-image}?{params}
```

For example:

```text
https://i0.wp.com/example.com/images/hero.jpg?w=1200&quality=80
```

Images must be public over HTTP or HTTPS. For secure source images, keep the original source URL as `https://...` in your application. Then generate the Site Accelerator URL from its host and path.

## Examples

### Width and height

Set a target width with `w`.

```text
https://i0.wp.com/s.ma.tt/files/2012/06/DSC01205.jpg?w=300
```

![Theater sign example resized with w=300](https://i0.wp.com/s.ma.tt/files/2012/06/DSC01205.jpg?w=300)

Set a target height with `h`.

```text
https://i0.wp.com/s.ma.tt/files/2012/06/MCM_0629-1600x1064.jpg?h=200
```

![Lavender example resized with h=200](https://i0.wp.com/s.ma.tt/files/2012/06/MCM_0629-1600x1064.jpg?h=200)

### Crop

Crop by percentage offsets and dimensions.

```text
https://i0.wp.com/s.ma.tt/files/2012/06/4-MCM_0830-1600x1064.jpg?crop=12,25,60,60
```

![Crop example using percentages](https://i0.wp.com/s.ma.tt/files/2012/06/4-MCM_0830-1600x1064.jpg?crop=12,25,60,60)

Crop by pixel offsets and dimensions.

```text
https://i0.wp.com/s.ma.tt/files/2012/06/4-MCM_0830-1600x1064.jpg?crop=160px,160px,788px,788px
```

![Crop example using pixels](https://i0.wp.com/s.ma.tt/files/2012/06/4-MCM_0830-1600x1064.jpg?crop=160px,160px,788px,788px)

Mix pixel and percentage values when that better matches the crop.

```text
https://i0.wp.com/s.ma.tt/files/2012/06/4-MCM_0830-1600x1064.jpg?crop=160px,25,1400px,60
```

![Crop example mixing pixels and percentages](https://i0.wp.com/s.ma.tt/files/2012/06/4-MCM_0830-1600x1064.jpg?crop=160px,25,1400px,60)

### Resize and fit

Use `resize` when the output should match exact dimensions.

```text
https://i0.wp.com/s.ma.tt/files/2012/06/9-DSC01406-1600x1066.jpg?resize=400,220
```

![Landscape example resized and cropped to 400 by 220](https://i0.wp.com/s.ma.tt/files/2012/06/9-DSC01406-1600x1066.jpg?resize=400,220)

```text
https://i0.wp.com/s.ma.tt/files/2010/11/MCM_4443.jpg?resize=200,400
```

![Portrait example resized and cropped to 200 by 400](https://i0.wp.com/s.ma.tt/files/2010/11/MCM_4443.jpg?resize=200,400)

Use `fit` when the image should stay inside a bounding box without changing aspect ratio.

```text
https://i0.wp.com/s.ma.tt/files/2010/10/MCM_4049.jpg?fit=300,300
```

![Landscape example fit within 300 by 300](https://i0.wp.com/s.ma.tt/files/2010/10/MCM_4049.jpg?fit=300,300)

```text
https://i0.wp.com/s.ma.tt/files/2010/10/MCM_4214.jpg?fit=300,300
```

![Portrait example fit within 300 by 300](https://i0.wp.com/s.ma.tt/files/2010/10/MCM_4214.jpg?fit=300,300)

### Letterbox

Use `lb` to add black letterboxing.

```text
https://images.spacefast.com/examples/letterbox.jpg?lb=310,250
```

![Letterbox example](https://images.spacefast.com/examples/letterbox.jpg?lb=310,250)

Use `ulb=true` to remove black letterboxing.

```text
https://images.spacefast.com/examples/letterbox-source.jpg?ulb=true
```

![Unletterbox example](https://images.spacefast.com/examples/letterbox-source.jpg?ulb=true)

### Filters

Filters use the `filter` parameter.

```text
https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=negate
https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=grayscale
https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=sepia
https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=edgedetect
https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=emboss
https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=blurgaussian
https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=blurselective
https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=meanremoval
```

![Negate filter example](https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=negate)
![Grayscale filter example](https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=grayscale)
![Sepia filter example](https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=sepia)
![Edge detect filter example](https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=edgedetect)
![Emboss filter example](https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=emboss)
![Gaussian blur filter example](https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=blurgaussian)
![Selective blur filter example](https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=blurselective)
![Mean removal filter example](https://i0.wp.com/s.ma.tt/files/2010/12/MCM_5875-1600x1064.jpg?w=200&filter=meanremoval)

### Brightness, contrast, and color

Adjust brightness.

```text
https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9517-1600x1065.jpg?brightness=-40
https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9517-1600x1065.jpg?brightness=0
https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9517-1600x1065.jpg?brightness=80
```

![Brightness -40 example](https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9517-1600x1065.jpg?brightness=-40)
![Brightness 0 example](https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9517-1600x1065.jpg?brightness=0)
![Brightness 80 example](https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9517-1600x1065.jpg?brightness=80)

Adjust contrast.

```text
https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9517-1600x1065.jpg?contrast=-50
https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9517-1600x1065.jpg?contrast=0
https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9517-1600x1065.jpg?contrast=50
```

![Contrast -50 example](https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9517-1600x1065.jpg?contrast=-50)
![Contrast 0 example](https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9517-1600x1065.jpg?contrast=0)
![Contrast 50 example](https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9517-1600x1065.jpg?contrast=50)

Add a color tint with comma-separated RGB values.

```text
https://i0.wp.com/s.ma.tt/files/2024/02/IMG_3775.jpeg?colorize=100,0,0
https://i0.wp.com/s.ma.tt/files/2024/02/IMG_3775.jpeg?colorize=0,100,0
https://i0.wp.com/s.ma.tt/files/2024/02/IMG_3775.jpeg?colorize=0,0,100
```

![Red colorize example](https://i0.wp.com/s.ma.tt/files/2024/02/IMG_3775.jpeg?colorize=100,0,0)
![Green colorize example](https://i0.wp.com/s.ma.tt/files/2024/02/IMG_3775.jpeg?colorize=0,100,0)
![Blue colorize example](https://i0.wp.com/s.ma.tt/files/2024/02/IMG_3775.jpeg?colorize=0,0,100)

### Smooth and zoom

Use `smooth` to smooth the image.

```text
https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9230-1600x1064.jpg?w=310&smooth=1
```

![Smooth example](https://i0.wp.com/s.ma.tt/files/2011/06/MCM_9230-1600x1064.jpg?w=310&smooth=1)

Use `zoom` for high pixel ratio devices.

```text
https://i0.wp.com/s.ma.tt/files/2012/02/MCM_4246-1600x1064.jpg?zoom=2
```

![Zoom example](https://i0.wp.com/s.ma.tt/files/2012/02/MCM_4246-1600x1064.jpg?zoom=2)

### Quality, lossy output, and metadata

Control output quality.

```text
https://i0.wp.com/ma.tt/files/2014/09/8084136238_169f1ca1f0_o.jpg?w=310&quality=50
```

![Quality 50 example](https://i0.wp.com/ma.tt/files/2014/09/8084136238_169f1ca1f0_o.jpg?w=310&quality=50)

Allow lossy output for a lossless source image.

```text
https://i0.wp.com/ma.tt/files/2025/06/image-1.png?allow_lossy=1
```

![Allow lossy example](https://i0.wp.com/ma.tt/files/2025/06/image-1.png?allow_lossy=1)

Strip metadata explicitly with `strip=all`.

```text
https://i0.wp.com/ma.tt/files/2012/06/13-MCM_0885.jpg?w=310&strip=all
```

![Strip metadata example](https://i0.wp.com/ma.tt/files/2012/06/13-MCM_0885.jpg?w=310&strip=all)

## Supported formats

- Site Accelerator serves common raster image formats such as `.gif`, `.png`, `.jpg`, and `.webp`.
- Site Accelerator converts to more efficient lossy output, such as WebP, when the request and the browser support it.

## Query parameters

| Parameter     | Description                                                                                                                                      | Example                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| `w`           | Set the output width in pixels.                                                                                                                  | `?w=300`                                               |
| `h`           | Set the output height in pixels.                                                                                                                 | `?h=200`                                               |
| `crop`        | Crop by percentage offsets and dimensions, or by pixel values. Values are `x,y,w,h`.                                                             | `?crop=12,25,60,60` or `?crop=160px,160px,788px,788px` |
| `resize`      | Resize and crop to exact `width,height` dimensions while preserving as much of the image as possible.                                            | `?resize=400,220`                                      |
| `fit`         | Fit within a `width,height` bounding box while preserving aspect ratio.                                                                          | `?fit=300,300`                                         |
| `lb`          | Add black letterboxing while scaling to `width,height`.                                                                                          | `?lb=310,250`                                          |
| `ulb`         | Remove black letterboxing.                                                                                                                       | `?ulb=true`                                            |
| `filter`      | Apply a filter. Supported values are `negate`, `grayscale`, `sepia`, `edgedetect`, `emboss`, `blurgaussian`, `blurselective`, and `meanremoval`. | `?filter=grayscale`                                    |
| `brightness`  | Adjust brightness from `-255` through `255`.                                                                                                     | `?brightness=40`                                       |
| `contrast`    | Adjust contrast from `-100` through `100`.                                                                                                       | `?contrast=50`                                         |
| `colorize`    | Add a color tint with comma-separated RGB values.                                                                                                | `?colorize=100,0,0`                                    |
| `smooth`      | Smooth the image. Lower values increase smoothing; `0` is maximum smoothing.                                                                     | `?smooth=2`                                            |
| `zoom`        | Size images for high pixel ratio devices. Valid values are `1`, `1.5`, and `2` through `10`. You cannot use `zoom` with `crop`.                  | `?zoom=2`                                              |
| `quality`     | Control output quality from `10` through `100`. If you omit `quality`, Site Accelerator tries to preserve the original quality.                  | `?quality=80`                                          |
| `allow_lossy` | Allow lossy output such as JPEG or WebP when the source is lossless and the browser supports it.                                                 | `?allow_lossy=1`                                       |
| `strip`       | Control metadata. `all` strips extraneous metadata and is the default; `none` preserves Exif, IPTC, and XMP metadata.                            | `?strip=none`                                          |

## Advanced URL helper

Use `@spacefast/image` when a framework integration needs more than width and quality. It always emits `i0.wp.com` URLs instead of distributing requests across hosts. Repeated requests for the same transformed image then share one cache key.

Install it:

```bash
bun add @spacefast/image
```

```ts
import { siteAcceleratorUrl } from "@spacefast/image";

const src = siteAcceleratorUrl("https://example.com/uploads/hero.jpg", {
  resize: [1200, 630],
  quality: 80,
  strip: "all",
});
```

Or copy a small helper into any JavaScript or TypeScript space. It covers common cases; for production, prefer the package — it is the maintained source for edge-case behavior.

```ts
type SiteAcceleratorOptions = {
  w?: number;
  h?: number;
  resize?: [number, number];
  fit?: [number, number];
  quality?: number;
  strip?: "all" | "none";
};

export function siteAcceleratorUrl(src: string, options: SiteAcceleratorOptions = {}) {
  let source: URL;
  try {
    source = new URL(src);
  } catch {
    return src;
  }
  if (source.protocol !== "http:" && source.protocol !== "https:") {
    return src;
  }

  if (source.hostname === "i0.wp.com") {
    applySiteAcceleratorOptions(source.searchParams, options);
    return source.toString();
  }

  const params = new URLSearchParams();
  applySiteAcceleratorOptions(params, options);
  source.searchParams.forEach((value, key) => {
    if (!params.has(key)) {
      params.set(key, value);
    }
  });

  const query = params.toString();
  return `https://i0.wp.com/${source.host}${source.pathname}${query ? `?${query}` : ""}`;
}

function applySiteAcceleratorOptions(params: URLSearchParams, options: SiteAcceleratorOptions) {
  if (options.w !== undefined) params.set("w", String(options.w));
  if (options.h !== undefined) params.set("h", String(options.h));
  if (options.resize) params.set("resize", options.resize.join(","));
  if (options.fit) params.set("fit", options.fit.join(","));
  if (options.quality !== undefined) params.set("quality", String(options.quality));
  if (options.strip) params.set("strip", options.strip);
}
```

## Limitations

- Images must be public. Private upload protection cannot use this path, because Site Accelerator must fetch the original image.
- Site Accelerator does not upscale beyond the original image dimensions.
- Site Accelerator may not apply heavy filters such as `brightness`, `contrast`, `colorize`, and `smooth` to large images.
- Site Accelerator keys cached images by image URL. When an image changes, change the filename or the path. The edge cache then fetches the new asset. Do not rely on query-string cache busters on the original image URL.
- Site Accelerator is for images and static assets. It does not serve video, audio, or other media formats as image transforms.

## See also

- [Next.js integration](/publishing/frameworks/nextjs)
