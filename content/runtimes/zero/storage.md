---
title: Storage
description: Upload public or private objects from a Zero app with built-in identity checks.
---

Zero client storage handles browser uploads without exposing a separate storage
credential. Objects are private by default; public objects can be read by
anyone with the URL.

## Upload

```tsx
import { storage } from "@spacefast/zero/client";

const uploaded = await storage.upload(file);
console.log(uploaded.key, uploaded.url, uploaded.contentType, uploaded.size);
```

Create a public object explicitly:

```tsx
const uploaded = await storage.upload(file, { public: true });
```

Hosted uploads require an authenticated identity. Local development permits
the local guest so the flow can be tested with `sf dev`.

## Read

Use the returned `url` in an image, download link, or `fetch()` call. Public
objects need no session. Private object reads require sign-in.

Keys have one of these forms:

```text
public/0123456789abcdef0123456789abcdef
private/0123456789abcdef0123456789abcdef
```

Persist the key or URL in your database when the object belongs to a record.

## Delete

```tsx
await storage.delete(uploaded.key);
```

Deletion requires sign-in and is limited to the identity that uploaded the
object. Deleting a database row does not automatically delete its object.

## Safety and limits

- Maximum object size: 5 MiB.
- Maximum stored object data per space: 100 MiB.
- Empty uploads are rejected.
- Executable and active web content is blocked, including HTML, JavaScript,
  PHP, and executable binaries.
- Public or private visibility is fixed when the object is uploaded. Upload a
  replacement to change it.

These rules apply to the browser-facing `storage` client. The capsule's
`ctx.blob` API is the server-side object capability for mutations and
endpoints; keep server workflows there rather than relaying browser tokens.
