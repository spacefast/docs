---
title: Authentication
description: Give every Zero visitor an identity and upgrade guests through hosted sign-in.
---

Every Zero visitor starts with a stable guest identity. That is enough to own
rows, return to them later, and keep anonymous users separate. Hosted sign-in
upgrades the same browser session to an authenticated WordPress.com identity.

## Client state

```tsx
import { SignInWithWpcom, SignOut, useAuth } from "@spacefast/zero/client";

function Account() {
  const auth = useAuth();
  if (auth.isLoading) return <span>Checking session…</span>;

  return auth.isGuest ? (
    <SignInWithWpcom />
  ) : (
    <>
      <span>{auth.displayName}</span>
      <SignOut />
    </>
  );
}
```

`useAuth()` returns `userId`, `displayName`, `provider`, `isGuest`,
`isAuthenticated`, `email`, and `isLoading`. `SignInWithGoogle` and
`SignInWithWpcom` currently open the same WordPress.com hosted flow; prefer the
`SignInWithWpcom` name when writing new UI because it describes the button.

## Server authorization

The same identity is available as `ctx.auth` in every server handler:

```ts
import { mutation, requireUser } from "@spacefast/zero/server";

export const createNote = mutation((ctx, body: string) => {
  const ownerId = requireUser(ctx);
  return ctx.db.notes.insert({ body, ownerId });
});
```

Guests have a `userId`, but `requireUser()` requires an authenticated caller.
Use an explicit `ctx.auth.isGuest` check when a guest identity is acceptable.

For row ownership, filter reads by `ctx.auth.userId` and use
`requireOwner(ctx, "notes", id)` before updates or deletes. Do not accept an
owner id from client arguments.

## Local development

`sf dev` supplies a local guest identity. Hosted provider redirects only make
sense on a deployed app. Authorization logic should still use `ctx.auth` in
both environments so local and hosted behavior share the same boundary.

## Storage and identity

Hosted uploads, private reads, and deletes require sign-in. Only the uploader
can delete an object. See [Storage](/apps/zero/storage) for the complete
policy.
