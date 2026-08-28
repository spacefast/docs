---
search:
  tags: [glossary, terminology, definitions, vocabulary, jargon, deployment, site, project]
title: Glossary
description: Plain definitions for the words these docs use, from space and version to control plane and principal.
---

Every term Spacefast's docs rely on, in one alphabetical list. Six nouns carry
most of the product, and [How Spacefast works](/start/how-it-works) introduces
them in order. This page is the long tail, plus the general web vocabulary the
rest of the docs assume.

### Access page

The page a private space serves instead of its content. It offers only the
methods that space's Grants allow: Spacefast sign-in, company single sign-on,
a password, or a request to be let in. Theme it through `sf.jsonc`, or replace
it on a paid plan. See [Control who can visit](/share).

### Access request

A visitor asking to be let into a private space, from the access page. Approving
one creates a Person Grant for that visitor and nothing more, so the space stays
private to everyone else. Identifiers start with `arq_`.

### API key

The credential you create to authenticate the API and the CLI. Keys carry a
policy that names which actions they may take. See [API keys](/account/api-keys).

Not the same as an OAuth access token, which is protocol vocabulary, or a space
key, which belongs to one unclaimed space.

### Audience

The *who* dimension of a Grant: public, team, person, link, password, machine, or
an external identity you connect. One of the five dimensions that define a
Grant. See [Control who can visit](/share).

### Branch alias

A hostname that follows one Git branch's latest version, in the form
`br-<branch>--<space-host>`. Deleting the branch removes the alias. This is how
you reach a branch preview, and it is a hostname pointing at a version rather
than a second channel. See [Build from Git](/publish/git).

### Build

Turning source code into the finished files a browser can read. Spacefast can
run your build for you, from a Git push or on demand, and a successful build
produces a version through the same path a direct publish uses. Identifiers
start with `bld_`. See [Build from Git](/publish/git).

### Capsule

One Zero app: a schema plus its queries, mutations, actions, and endpoints,
compiled into a single artifact. Everything in a capsule runs inside one
database transaction, which is what separates Zero from Functions. See
[Zero](/zero-runtime).

### CDN

A content delivery network: copies of your files held on servers around the
world, so a visitor is served from somewhere near them rather than from one
origin. A general web term. See also [Edge](#edge).

### Channel

A pointer from a space to one version. Every space has exactly one channel,
`live`, created by its first publish. Publishing and rollback move the pointer,
and nothing is rebuilt or re-uploaded. See
[Versions, channels, and rollback](/publish/versions).

The serving side calls the same pointer `production`, and that name surfaces in
Git deployment environments and build-time variable scopes. It is not a channel
name. Promoting to any name but `live` returns `channel_unsupported`.

### Claim

Taking ownership of a space that was published without an account. The publish
receipt carries a claim link, and claiming within six hours keeps the space.
Each anonymous update resets that deadline. See
[Publish without an account](/publish/anonymous).

Also a field inside a signed token, which the docs write in backticks to keep
the two apart.

### Comments

Annotations left directly on a space's pages, on previews or on live content.
Comments depend on page enhancements being on for the space. See
[Comments](/share/comments).

### Constraints

The optional limits on a Grant: time, use count, email, network range, country,
or user agent. Constraints narrow their own Grant and never deny access that a
different matching Grant allows. See [Control who can visit](/share).

### Control plane

The part of Spacefast that takes orders and decides what should happen: who you
are, which team, whether you are over a limit, which files to accept, which
version goes live. It does not serve your site to visitors. That split is
deliberate, and it means published sites keep serving even when nobody can
publish.

### Cron

A schedule declared in `sf.jsonc` that asks Spacefast to request a path on your
space at a set time. The config file is the only writer, so a rollback restores
the previous schedules along with everything else. See
[Scheduled jobs](/serve/crons).

### Deploy

Deploying is publishing: a deployment is a version, and the canonical nouns are
version, channel, and build.

`sf deploy` and `sf deployments` exist as exact aliases of `sf publish` and
`sf versions`, and Git integrations speak "deployment" because GitHub does. In
these docs, prefer publish and version.

### Domain

A hostname you own, attached to a space. Registration, DNS hosting, and serving
are separate concerns: you can register a name elsewhere and still serve it
here, or host DNS at Spacefast for a name bought elsewhere. Identifiers start
with `dom_`. See [Custom domains](/domains).

### Edge

The layer of servers closest to your visitors, where public responses are
cached. A general web term. Private and credential-bearing responses are never
held in the public cache. See also [CDN](#cdn).

### Entitlement

A limit or feature your team is allowed to use. Spacefast resolves entitlements
per team as plan limits plus any additive grants, so a limit can change without
a plan change. Read the resolved entitlements rather than hard-coding numbers.
See [Plans, limits, and usage](/account/plans).

### Functions

A single Web-standard `fetch` handler running beside a space's static files, on
the same hostname. Files are served first, and only requests no file answers
reach the worker. Code and files publish as one version and roll back together.
See [Functions](/functions).

### Grant

The single access rule in Spacefast. Five dimensions define one: audience,
paths, role, target, and constraints. Access is additive, so a request is
allowed when one active Grant matches every dimension. Identifiers start with
`grt_`. See [Control who can visit](/share).

A second, unrelated sense appears in billing: an entitlement grant raises a plan
limit for one team. See [Entitlement](#entitlement).

### Idempotent

Running the same request twice has the same effect as running it once. Spacefast
honors an `Idempotency-Key` on mutations, which matters because agents retry.
A general web term.

### Image acceleration

Resizing, cropping, filtering, and re-encoding public images from a URL, with no
build step. See [Image acceleration](/serve/images).

### Link

A revocable credential for visitors, backed by one Grant, that works by being
passed on. A Link can cover several paths, allow comments, expire, or limit how
many times it is used. Identifiers start with `lnk_`. See
[Control who can visit](/share).

Capital-L Link means this credential. A lowercase link is an ordinary URL.

### Live URL

A space's stable address. Its content changes when you publish or roll back. The
URL identifies content and grants no access on its own. See
[How Spacefast works](/start/how-it-works).

### Machine token

A header-only bearer credential for scripts and services, carrying a role up to
`manager`. Unlike a Link, it never works by pasting it into a browser.
Identifiers start with `mch_`. See [Control who can visit](/share).

### Open

A link that gets you into your own private space. There are two kinds, and they
behave differently.

On a space published without an account, an Open link is reusable and lasts as
long as the claim window. On a claimed space, Spacefast mints a short-lived,
single-use handoff instead, and each request returns a new URL. Either way an
Open link grants access to published bytes and is never proof of ownership.
Compare [Claim](#claim).

### Plan

A team's commercial tier. The plans are Free, Plus, Pro, and Enterprise. API
responses carry a `planCode` whose values are deliberately stable rather than
matching the names: Plus is `personal` and Pro is `work`. Branch on the code.
See [Plans, limits, and usage](/account/plans).

### Preview

A version that is not live. A preview build publishes a version and promotes
nothing, so you reach it by its version URL or, for a connected repository, by
its branch alias. Preview is not a channel. See
[Versions, channels, and rollback](/publish/versions).

### Principal

The customer a Platform API call acts for. Platform tenants name an external
principal in the request body, and Spacefast attributes the resource, its
quotas, and its audit history to that customer. See [Platforms](/platforms).

### Private beta

Spacefast itself is in private beta, so an account needs enrollment before it
can do anything. Join the waitlist, or accept a team invitation. Your account's
state is on `GET /v1/capabilities`.

Individual features can also be limited to some teams, and the docs badge those
pages. The two senses are separate: enrollment gets you into Spacefast, and a
badged feature may still be off for your team.

### Project

Not a Spacefast noun. The thing you publish to is a [space](#space).

### Publish

Sending new output to a space. A publish uploads files and then finalizes:
Spacefast validates the whole snapshot, compiles its serving rules, and promotes
it in one step, so a visitor never sees half a release. Every publish that
changes content produces a version, and publishing identical content records a
no-op instead. See [How publishing works](/publish).

### Quota

A limit you can reach. Reaching one blocks new work and never takes the live
site down: storage exhaustion stops new publishes while the current version
keeps serving. Each quota has its own error code, so a script can react to the
specific one. See [Plans, limits, and usage](/account/plans).

### Receipt

The response body from a mutation, and the thing to treat as the source of
truth. A publish receipt carries the version, both of its addresses, and, for an
anonymous space, the space key and claim link. See
[Publish as an agent](/agents/publishing).

### Role

A named set of capabilities: `viewer`, `commenter`, `editor`, or `manager`. The
capabilities themselves are `page.view`, `comments.read`, `comments.write`,
`content.publish`, and `access.manage`. Roles are the *what they can do*
dimension of a Grant. See [Control who can visit](/share).

### Runtime

Two related uses. Generally, the program on a server that decides what to do
with an incoming request. In Spacefast, a `runtime` block in `sf.jsonc` is what
makes a space run code at all: a space serves files and nothing else until you
declare [Zero](/zero-runtime) or [Functions](/functions).

### Runtime site

The isolated place a space's code runs. Every space owns its own, on every plan.
See [Plans, limits, and usage](/account/plans).

### Serverless

Code that runs only when a request arrives, with no server for you to manage. A
general web term. Spacefast's Functions are the example, and the word is why
"how many servers do I need" has no answer here.

### Serving layer

The part of Spacefast that answers a visitor's request and returns your page. It
runs separately from the [control plane](#control-plane), which is why an outage
that stops publishing does not take live sites down.

### Site

Not a separate thing you own. A space **is** a site, and there is no second
resource behind it. The word survives in API-key action names such as
`sites:read` and `sites:write`, and in some authorization copy, where it means
your space. See [Space](#space).

### Site Accelerator

WordPress.com's image content delivery network, which is what powers Spacefast's
[image acceleration](#image-acceleration). Transformed images are served from
`i0.wp.com` rather than from your space.

### Space

The durable resource behind a site, with one stable live URL. A space holds
versions, domains, variables, access rules, and, when it runs code, a database
and stored objects. Identifiers start with `spc_`. See
[How Spacefast works](/start/how-it-works).

### Space key

The one credential for a space published without an account, starting with
`sfc_`. It opens the space, and it doubles as the Git password for pushing to
it. Spacefast returns it once. See
[Publish without an account](/publish/anonymous).

### Space slug

The lowercase, dash-separated public name of a space, and the left-hand label of
its managed hostname. Up to 55 characters of letters, numbers, and dashes, and
it cannot contain a double dash, because that separates a version or branch from
the space in a hostname. See [Manage spaces](/operate/spaces).

### SSR

Server-side rendering: building a page's HTML fresh on the server for each
visit, rather than once ahead of time. A general web term, and the opposite of
[static](#static). Needed when a page depends on data that changes between
visits.

### Static

Files built once at publish time, then handed to visitors unchanged. A general
web term, and Spacefast's default: a space serves everything as inert static
content until you declare a runtime.

### Superpowers

The `sf.jsonc` block controlling every script Spacefast injects into your served
pages: Google Analytics, Google Tag Manager, your own snippets, released tags,
and the comments script. `enabled` is the master switch. The dashboard calls
this **Page enhancements**, under General settings. See
[Space settings](/serve/settings).

### Target

The *which content* dimension of a Grant: live content, all versions, one
version, or one branch. See [Control who can visit](/share).

Not the same as a build target, which selects whether a build promotes to `live`
or publishes a preview.

### Team

The ownership and billing boundary for spaces, domains, and API keys. Members
hold one of three roles, and plan limits apply per team. See
[Teams](/account/teams).

### Tenant

The account boundary that owns everything else. Consumer accounts all sit in one
tenant, so the word matters mostly to Platform API callers, where a tenant is
your platform and the boundary for its keys, principals, quotas, and billing. A
tenant with an unpaid balance keeps serving while Spacefast rejects changes. See
[Platforms](/platforms).

### Variable

A config value scoped to a space, readable by its build or its runtime. Secrets
are write-only: you can replace one, but never read it back. See
[Variables](/publish/variables).

### Version

An immutable snapshot of a publish, with its own permanent URL. A version
carries more than files: it holds the space config, routing and header rules,
visitor pages, and runtime code, and a rollback restores all of it. Identifiers
start with `ver_` and the readable form is `v1`, `v2`, and so on. See
[Versions, channels, and rollback](/publish/versions).

### Version URL

The permanent address of one version, which serves exactly the bytes you
published, forever. It survives renames and transfers. Unlike the live URL, its
content never changes. See [How Spacefast works](/start/how-it-works).

### Zero

Spacefast's full-stack runtime, for apps where the data is the point. A Zero app
is one capsule with its own database, authentication, and storage, running on
the space's own runtime site. Available on every plan. See [Zero](/zero-runtime).
