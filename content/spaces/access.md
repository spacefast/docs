---
title: Control who can visit
description: Keep a space private, then grant access to people, links, passwords, machines, or the public.
---

Claimed spaces start private with an owning-team Grant. A URL identifies
content; it does not grant access to it. Create a Grant when somebody or
something should be admitted.

## Grants

A Grant combines 5 dimensions:

- **Audience:** Public, Team, Person, Link, Password, Machine, or an external
  identity.
- **Paths:** Exact or wildcard paths, with optional exclusions.
- **Capabilities:** View, Comment, Publish, or Manage.
- **Target:** Live, all versions, one version, or one branch.
- **Constraints:** Optional time, use-count, email, IP, country, or user-agent
  limits.

Access is additive. Spacefast allows a request when one active Grant matches
every required dimension. An exclusion applies only to its own Grant.

Let the owning team view a subtree:

```bash
sf share grant --to team --can view --path '/docs/**'
```

Make the whole live space public:

```bash
sf share grant --to public --can view --path '/**'
```

Make immutable version URLs public too:

```bash
sf share grant --to public --can view --path '/**' --target all-versions
```

Explain the effective result for one route and audience:

```bash
sf share check --as public --path /docs/start
```

`sf share` lists every active Grant and where it came from.

## People and access requests

Invite a person to a scoped role:

```bash
sf share people invite person@example.com --role viewer --scope /docs
```

List people:

```bash
sf share people ls
```

Change one person's access:

```bash
sf share people edit '<person-id>' --grant /docs=commenter
```

Remove them:

```bash
sf share people remove '<person-id>'
```

Visitors can request access from the private-space access page. List pending
requests:

```bash
sf share request ls
```

Approve one:

```bash
sf share request approve '<request-id>'
```

Deny one:

```bash
sf share request deny '<request-id>'
```

Approval creates a Person Grant. It does not make the space public. Responses
do not reveal whether an unknown private space exists.

## Links

A Link is a revocable browser credential backed by one Grant. It can cover
multiple paths, allow comments, expire, limit uses, or target live content or
versions.

```bash
sf share link create --name "Client review" --landing /proposal --path '/proposal/**' --exclude '/proposal/internal/**' --can comment --expires 7d
```

List Links:

```bash
sf share link ls
```

Copy the credential URL:

```bash
sf share link copy '<link-id>' --show-secret
```

Revoke it and every session it admitted:

```bash
sf share link revoke '<link-id>'
```

Spacefast shows the secret URL only when you create or explicitly copy it.

## Passwords and machine credentials

Passwords can grant View or Comment access without a user account:

```bash
sf share password create --name "Launch review" --password-from-stdin --can comment --path '/launch/**'
```

Rotate one:

```bash
sf share password rotate '<password-id>' --password-from-stdin
```

Machine tokens are header-only bearer credentials. They can also grant Publish
or Manage access:

```bash
sf share token create --name "Docs publisher" --can publish --path '/docs/**'
```

Rotate a compromised token:

```bash
sf share token rotate '<machine-id>' --show-secret
```

Treat password proofs, Link URLs, and machine tokens as secrets. CLI JSON and
non-interactive output mask them unless you explicitly use `--show-secret`.

## External identity

Connect an OIDC provider or white-label Ed25519 signer, then create Grants for
the external subjects it proves.

```bash
sf share identity create --type oidc --name "Company login" --issuer https://login.example.com --client-id '<client-id>' --client-secret '<client-secret>'
```

```bash
sf share identity grant --connection '<connection-id>' --subject user@example.com --name "Docs reviewer" --can comment --path '/docs/**'
```

Signer rotation can overlap old and new keys. Revoking a connection revokes its
external Grants and admitted sessions.

## Public paths in sf.jsonc

Make only assets public:

```jsonc
{
  "access": {
    "public": ["/assets/**", "/favicon.ico", "!/assets/private/**"],
  },
}
```

Make the whole space public:

```jsonc
{ "access": "public" }
```

Public responses are cacheable. Spacefast never stores private or
credential-bearing responses in the public cache. Access changes purge the
affected entries.

## URL types

| URL       | Purpose                                       |
| --------- | --------------------------------------------- |
| **Live**  | Stable content address. Grants no access.     |
| **Open**  | Temporary author access.                      |
| **Link**  | Visitor access backed by one revocable Grant. |
| **Claim** | Ownership recovery for an anonymous space.    |

Open, Link, and Claim secrets begin in a URL fragment on
`access.spacefast.com`. The broker exchanges the secret for a short-lived,
host-bound handoff, then the serving host sets a `__Host-` cookie and redirects
to the clean live URL.

## The access page

A private page renders its access page on the space's own domain. It offers
only the methods allowed by the space's Grants: Spacefast sign-in, company SSO,
a password, or an invite request. If only one SSO lane exists, Spacefast can go
straight to that provider.

Retheme the page with the `theme` section of `sf.jsonc`, or take it over with
`_pages/access.html`. See [Customization](/spaces/customization).

## Network constraints and logout

Network limits apply to one Grant. They do not deny access granted by another
matching Grant.

```bash
sf share grant --to public --can view --path '/partner/**' --network 203.0.113.0/24 --country NL --exclude-user-agent bad-crawler
```

To invalidate every browser session without changing Grants:

```bash
sf access logout-all
```
