---
title: Control who can visit
description: Keep a space private, then grant access to people, links, passwords, machines, or the public.
---

Claimed spaces start private with an owning-team Grant. A URL identifies
content; it does not grant access. Create a Grant to admit a person or a
machine.

## Grants

A Grant combines 5 dimensions:

- **Audience**: Public, Team, Person, Link, Password, Machine, or an external
  identity.
- **Paths**: Exact or wildcard paths, with optional exclusions.
- **Capabilities**: View, Comment, Publish, or Manage.
- **Target**: Live, all versions, one version, or one branch.
- **Constraints**: Optional time, use-count, email, IP, country, or user-agent
  limits.

Access is additive: Spacefast allows a request when one active Grant matches
every required dimension, and an exclusion applies only to its own Grant.

Let the owning team view a subtree:

```bash
sf share grant --to team --can view --path '/docs/**'
```

Make the whole live space public; add `--target all-versions` to make
immutable version URLs public too:

```bash
sf share grant --to public --can view --path '/**'
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

List, edit, or remove people:

```bash
sf share people ls
sf share people edit person@example.com --grant /docs=commenter
sf share people remove person@example.com
```

Visitors can request access from the private-space access page. List pending
requests, then approve or deny:

```bash
sf share request ls
sf share request approve req_123
sf share request deny req_123
```

- Approval creates a Person Grant; it does not make the space public.
- Responses do not reveal whether an unknown private space exists.

## Links

A Link is a revocable browser credential backed by one Grant; it can cover
multiple paths, allow comments, expire, limit uses, or target live content or
versions.

```bash
sf share link create --name "Client review" --landing /proposal --path '/proposal/**' --exclude '/proposal/internal/**' --can comment --expires 7d
```

List Links and copy a credential URL:

```bash
sf share link ls
sf share link copy lnk_123 --show-secret
```

Revoke a Link and every session it admitted:

```bash
sf share link revoke lnk_123
```

## Passwords and machine credentials

Passwords can grant View or Comment access without a user account:

```bash
sf share password create --name "Launch review" --password-from-stdin --can comment --path '/launch/**'
```

Rotate one:

```bash
sf share password rotate pwd_123 --password-from-stdin
```

Machine tokens are header-only bearer credentials that can also grant Publish
or Manage access:

```bash
sf share token create --name "Docs publisher" --can publish --path '/docs/**'
```

Rotate a compromised token:

```bash
sf share token rotate mch_123 --show-secret
```

- Treat password proofs, Link URLs, and machine tokens as secrets.
- CLI JSON and non-interactive output mask them unless you explicitly use
  `--show-secret`.

## Script reads of a private space

[`sf fetch`](/cli#sf-fetch-path) fetches private space content through the
same central exchange and host-only cookie flow as a browser. The path
defaults to `/`, and the required `--output` flag names the file that receives
the response body:

```bash
sf fetch /docs --output ./docs.html
```

For header-only bearer access, create a machine token instead.

## External identity

Connect an OpenID Connect (OIDC) provider or a white-label Ed25519 signer,
then create Grants for the external subjects it proves.

```bash
sf share identity create --type oidc --name "Company login" --issuer https://login.example.com --client-id your_client_id --client-secret your_client_secret
```

```bash
sf share identity grant --connection con_123 --subject user@example.com --name "Docs reviewer" --can comment --path '/docs/**'
```

- Signer rotation can overlap old and new keys.
- Revoking a connection revokes its external Grants and admitted sessions.

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

Public responses are cacheable; Spacefast never stores private or
credential-bearing responses in the public cache, and a change to access
purges the affected entries.

## URL types

| URL       | Purpose                                       |
| --------- | --------------------------------------------- |
| **Live**  | Stable content address. Grants no access.     |
| **Open**  | Temporary author access.                      |
| **Link**  | Visitor access backed by one revocable Grant. |
| **Claim** | Ownership recovery for an anonymous space.    |

Open, Link, and Claim secrets begin in a URL fragment on
`access.spacefast.com`; the broker exchanges the secret for a short-lived,
host-bound handoff, and the serving host sets a `__Host-` cookie before
redirecting to the clean live URL.

## The access page

A private page renders its access page on the space's own domain, offering
only the methods that the space's Grants allow: Spacefast sign-in, company
single sign-on (SSO), a password, or an invite request. If only one SSO lane
exists, Spacefast can go straight to that provider.

Theme the page with the `theme` section of `sf.jsonc`, or replace it with
`_pages/access.html`. See [Customization](/spaces/customization).

## Network constraints and logout

Network limits apply to one Grant; they do not deny access that another
matching Grant allows.

```bash
sf share grant --to public --can view --path '/partner/**' --network 203.0.113.0/24 --country NL --exclude-user-agent bad-crawler
```

To invalidate every browser session without changing Grants:

```bash
sf access logout-all
```
