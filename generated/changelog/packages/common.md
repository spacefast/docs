---
title: "@spacefast/common"
description: "Release history for @spacefast/common on npm."
---

Published as [`@spacefast/common`](https://www.npmjs.com/package/@spacefast/common) on npm.

## 0.10.0

#### Minor Changes

- Honor Retry-After during file uploads and return structured failures for oversized inline requests within the API transport limit. New team-owned Spaces can hide from search engines from their first publication with the initial noindex setting.

  Keep usage current after transfers, accept receiving team addresses without requiring sender membership, and make compact navigation and Plan easier to find. Connection instructions lead with expiry, prerequisites, and the existing publication destination. Error examples show the relevant publishing recovery status.

- Add feature-flagged domain registration transfers. Use `sf domains registration transfer-in` for paid inbound transfers, `transfer-out` to unlock a domain and request its authorization email, and `relock` to restore the transfer lock. Inbound transfers keep the nameservers the registry lists and are priced at one renewal year using the registrar's `reseller_renewal_fee` for the exact name; a missing or unusable quote refuses the transfer before charging. A transfer in completes once the registrar confirms the name is in Spacefast's reseller account; a rejected transfer is refunded only after its window and two clean not-held/not-pending checks at least an hour apart. A transfer out's completion notice marks the transfer `needs_attention` and releases nothing until Spacefast support confirms the move and releases the registration. Relocking remains available when new transfers are disabled. Unlocking now goes only through `transfer_out`: `updateDomainRegistration` accepts `transferLock: true` and refuses `false`, so a team without `domains.transfers` cannot unlock a domain through the API. Inbound transfers are charged like any team purchase: the saved card with an agreed total, or a confirm link.

  An inbound transfer retry cannot reuse a held authorization code. Settle or cancel the original purchase before starting another transfer.

- The superadmin feedback contract replaces its Intercom delivery fields with the Linear issue link and delivery status.
- Choose who can join a subteam. Its `joinPolicy` is `open` (anyone in the parent team joins by themselves), `request` (people in the parent team see it but can't join by themselves; an admin lets them in), or `invite_only` (only people an admin invites or adds get in, and parent-team members who aren't in it don't see it; the parent team's owners and admins still see and run it). New subteams start as `open`. Set it with `joinPolicy` on `updateSubTeam`, `updateTeamSettings`, `createSubTeam` or `POST /v1/teams`, or `sf teams subteams create --join-policy open|request|invite_only`. `GET /v1/me` lists the `request` subteams you are not in under `requestableTeams`, and `joinTeam` answers 403 `join_request_required` for them. `sf teams subteams list` shows who can join each subteam.
- MCP connections can now hold only the access they need. Hosted MCP takes a preset on its one address, `https://mcp.spacefast.com/?access=read` or `?groups=spaces,domains`. Its sign-in asks only for that access, and it narrows every request, even with a broader token. A preset connection lists only the tools it can use and never asks for more. Without a preset nothing changes: every tool is listed, and a call that needs more access asks first. `sf mcp`, `sf mcp proxy`, and `sf mcp install` take the same preset as `--read-only` or `--groups`. `sf login --read-only` is the same as `sf login --access read`.
- Review a departing team member's connections and affected Space bindings before removal. Add `sf teams members offboarding`, the shared offboarding response contract, and the `getTeamMemberOffboarding` API operation. The operation catalog exposes the review to tools, and guidance explains how to replace bindings before removal.
- Ask to join a subteam that takes requests with `sf teams join`, and review requests with `sf teams join-requests list`, `approve` and `deny`. Agents and CLI logins that act as a person can ask with `createTeamMembershipRequest` and read their own requests, and a key approved on the parent team can review a subteam's requests. An agent approved there answers them only when its person administers the subteam.
- The agent registry is now the one agent catalog. `AGENT_IDS` is the order every surface lists agents in, and `agentsForSurface()` says which agents a surface shows (`featured`, `dashboard-start`, `docs`, `cli`). `CONNECTION_METHODS` names every way to connect, each with a docs page at `connectionDocsUrl()`, and every method carries its `connection`. Entries gain `limits` (plan limits with a source and checked date), `status`, and `deprecation`. `renderAgentManifest()` returns the whole catalog as JSON, and `@spacefast/common/contracts/agent-manifest` describes it for the public `GET /v1/agents`.

  New entries: Any MCP client, Claude Cowork, ChatGPT Work, dots and ChatGPT Space, Instinct, Perplexity, Microsoft Copilot, and T3 Chat. Gemini CLI, Continue, Windsurf, Roo Code, and Jules are deprecated: they keep their ids and pages, which point to a supported agent, and have no setup methods. Claude Code, Hermes, OpenClaw, and Pi lead with the stdio MCP server (`npx -y spacefast mcp`), Codex offers it next to the hosted server, and Grok Bot leads with a prompt link that asks the Bot to add the Spacefast connector.

  `tier` is removed from `AgentEntry` and from `@spacefast/setup-ui`'s `AgentSetupView`; use `isAgentOnSurface(id, "featured")`. `sf setup agent` no longer offers Gemini CLI or Continue.

- Add the "Open in" catalog (`@spacefast/common/agents/open-in`): one row per company, with the apps that take a prompt in a link and each one's documented length limit. An app whose only prompt link sends the prompt on load, like T3 Chat's, isn't included. Add `@spacefast/common/docs/prompt-templates`, the setup, handoff and claim prompts written once.
- `sf open --panel share|comments` opens the Space with that Space bar panel waiting. The Space bar's mark is the Spacefast S, it comes in three sizes, wears the Space's accent, remembers its place and size for each person, and can be hidden for now or on one Space.
- Read and change a Space's database rows from MCP, the CLI and the API, on any runtime: `listSpaceDatabaseTables`, `listSpaceDatabaseRows`, `createSpaceDatabaseRows`, `updateSpaceDatabaseRows` and `deleteSpaceDatabaseRows`, and `sf db tables` and `sf db rows list|add|update|delete`. Rows are found by primary key and each write is one transaction. An MCP delete waits for the person's approval and `sf db rows delete` asks for confirmation; the API applies a delete directly to a caller with write access. Spacefast's own tables are refused, and secrets read as `[redacted]`.
- Add optional Space primary contacts for Enterprise and Internal teams. Read the contact on Space resources, choose eligible accounts from the People response, and assign or clear it through the existing Space PATCH operation. Contacts grant no access and clear when their qualifying access or plan ends.
- Let a subteam use no design system. On a subteam whose parent shares one, `changes.parentSystem: "none"` on `updateTeamDesignSystem` turns it off and keeps any system the subteam saved. `getTeamDesignSystem` reports `source.active: "none"`, agents get no design system, and saves return `team_design_system_off` until the subteam adopts the parent's or overrides with its own.
- Every member of an Enterprise or Internal parent team can read weekly publishing activity for their team and its subteams, and export it as CSV. Add the `getTeamSubteamUsage` operation.
- Add `GET /v1/resolve` (`resolveResource`) and `sf resolve`: send any id, hostname, Space, dashboard, or API URL, Git repository, or slug, and get back everything it names that you can read, most specific first, with each match's ids and URLs. Shared contract: `@spacefast/common/contracts/resolve`.
- Expose Space email readiness, required setup steps, signing records and recipient limits. Sending now requires a verified custom primary domain, including when DNS is hosted outside Spacefast.

#### Patch Changes

- Add the `createTeamActivityExport` and `downloadTeamActivityExport` contracts for a team activity CSV export that is built in the background and emailed to the person who asked, the `activity_export_person_required` error, and the `security.activity_exported` and `security.activity_export_downloaded` events.
- MCP guidance now covers the team activity log: which operations read and export it, the `activity:read` gate on Enterprise and Internal teams, and how to read `staffAction` and `supportSession`.
- Answer every lock and lease wait timeout with the retryable `resource_busy` code, retiring `upload_busy` and `runtime_delivery_lock_timeout`, and answer thumbnail misses with the retryable `thumbnail_unavailable` code.
- Explain how to recover an expired anonymous Space before starting a new publish.
- Expose optional SSO routing, which names the company's team, and bounded member-session lengths independently of Space visitor sessions.
- Publishing and `listSpaceConnectorBindings` now say who can read through a connector role when that reaches further than it looks. A ready team role on a Space anyone can open without signing in, or a team or personal role with `tools: "*"`, carries a `reach` sentence, such as "Anyone who can open this Space can read through your team's hubspot account, without signing in." The publish result lists these roles in `connectorReach`, `sf publish` and `sf connectors bindings` print the sentence, and the dashboard shows it on the role.
- Connectors is now a Private Beta in Settings → Labs. A team owner or admin applies with a note, and Spacefast approves each request. Teams that already have Connectors keep it.
- Space reads include `thumbnailUrls`: the card and hero thumbnail for light and dark color schemes, as API URLs to use unchanged.
- When a host can't show the Domains App, `show_domains` now returns `checkoutUrl` for the owning team. The agent settles the team first, agrees on names with the person, and sends them to that checkout with the names, where they add owner details and pay. It used to point them at the dashboard, which no longer has an in-browser search to buy from.
- The Domains App now starts the purchase for the names you pick. It uses your saved owner details, or asks for them in the App. Your team's saved card pays when the connection can buy for the team. Otherwise you confirm the purchase on Spacefast. Hosts that support MCP events can subscribe to `domain.checkout_paid`, so the agent continues when the purchase is paid.
- Only team owners and admins can transfer a domain out, and an agent asks the person first. Registrar refusals name the 60-day transfer lock and its end date, and domain settings changes write activity events.
- Support conditional campaign email copy based on whether an earlier campaign was sent.
- Expose the latest WordPress.com staff verification outcome so clients can explain failed checks and how to regain team access.
- The favicon is now the brand's "S" symbol on its tile instead of the star. `brand-assets/spacefast-favicon.svg` and the `SPACEFAST_FAVICON_*` constants in `@spacefast/common/brand-assets` carry the new artwork, framed in a 280-unit square; their names are unchanged.
- Team invitation acceptance and self-join responses include optional first-membership and parent-team information, allowing dashboards to offer subteam selection after a person's first company invitation.
- Add `writeFirstVisitCookie`, `clearFirstVisitCookie` and `readFirstVisitFromCookies` in `@spacefast/common/utils/first-visit`. The website uses them to keep a visitor's first page in the `sf_visit` cookie until sign-up.
- Add the `functions_build_unavailable` error code. A publish refuses with it when it needs the platform to build a Functions worker and the Space's runtime can't take a built worker yet. Publish with `sf publish`, which builds the worker locally, or publish again once the runtime updates.
- `sf share grant` and `sf share grant update` warn with `grant_pattern_single_segment` when a `--path` ends in `/*`, which matches one path segment, and name the `/**` pattern that covers the whole tree. The Zero v2 refusal codes (`zero_v2_source_layout` and ten more) get error docs pages, and the Functions docs say that `env.DB` runs MySQL-compatible SQL (MariaDB or MySQL) behind a D1-shaped API.
- Guide agents through reading and editing a claimed Space's database rows with named MCP tools, approval for deletes, and safe handling of uncertain writes. Refresh the ChatGPT directory package guidance.
- Add the `injection_setting_conflict` error and refuse an injection write whose `superpowers.injection` and an older key disagree, with a pointer to that key.
- `listTeamSpaces` accepts `archived=true` to list a team's archived Spaces instead of its live ones. Without it, the list is unchanged.
- Polish the MCP Apps. Once a publish finishes, the publish card drops its progress block and says who can open the Space under Visibility instead of repeating that it is live. A subteam's Space names its parent team ("Everyone in Acme Studios"), from the new optional `audience.parentTeamName` in the publish receipt. A running publish fills its bar with the brand green. The Space Library shows one count per team, with a little more room between rows and a plainer subtitle. Search fields clear with the product's X, link buttons use an arrow pointing up and right, and a domain row shows its setup steps only while that domain is still being set up.
- On-Device MCP no longer rejects an operation result because the API added a field or an enum value since the release. Results are still checked for their required fields and types. Add the `mcp_client_upgrade_required` error, which the API returns to a released MCP build when a result can't be shown truthfully in the shape that build understands.
- Agents can manage a Space's connector roles. `listSpaceConnectorBindings`, `requestSpaceConnectorServing`, and `getSpaceClient` are tools on every MCP runtime. On-Device MCP also lists `bindSpaceConnector`, `unbindSpaceConnector`, `setSpaceConnectorPublicServing`, `listVisitorConnectionUsers`, `revokeVisitorConnection`, and the serving request operations, which need the CLI login's connector access. Binding, unbinding, revoking a visitor connection, changing a role through `updateSpace`, and approving, denying, or requesting site serving pause for the user's approval. The API guide walks the flow from declaring a role to generating the client.
- Member sign-in keeps its own IdP settings. `PUT /v1/teams/{teamId}/member-sign-in` sets it up with `issuer`, `clientId` and `clientSecret` instead of an identity connection, and later replaces the client ID or secret without changing the return address. `connectionId` is optional and ignored. The member sign-in read adds `issuer` and `clientId`, and `sf teams sign-in inspect` prints the issuer. Updating or revoking an identity connection no longer changes member sign-in, and `sso_connection_not_oidc` is no longer returned. `enabled: false` turns member sign-in off and keeps its setup and return address, and `enabled: true` turns it on again. The read adds `enabled`, `sf teams sign-in inspect` prints its status, and `DELETE` now removes the setup.
- Member sign-in can be set up with a SAML IdP. `PUT /v1/teams/{teamId}/member-sign-in` takes the IdP's entity ID as `issuer`, its `ssoUrl` and one or two signing `certificates` (PEM or base64), and later replaces the sign-on URL or the whole certificate list. The read adds `ssoUrl` and `certificates`, each with its fingerprint and expiry, and its `callbackUrl` is the ACS URL, which is also Spacefast's entity ID. Its `samlMetadataUrl` serves Spacefast's SAML metadata, for an IdP that imports it. `sf teams sign-in inspect` prints the sign-on URL, the certificates, the ACS URL and the metadata URL.
- Add the `contact` filter to the external access list (`contact=none` keeps Spaces with no named primary contact, where the team admins are the contact, and combines with `access`) and the `noContactSpaces` count to its summary.
- Plan codes can hand out Pro with a chosen number of editor seats, and carry an inviter name. `getPlanCode` is readable before sign-in and returns `seats` and `inviterName`; team billing returns `seatBilling.includedSeats`.
- Report who can view a newly published Space and where to change its audience, using saved sharing grants in API, MCP, and CLI receipts.
- Recognize AI agent hosts in one place, add Google Antigravity to the agent registry, and return the recognized agent on grants as `agentId`.
- Add Require SSO for company teams. Member sign-in settings gain `required` and `membersWithoutTwoFactor`, with a paged list of the members it would block. Team lists mark with `ssoRequired` the teams whose CLI logins, AI tools and agents this sign-in can't approve. A `team_sso_required` refusal can carry `details` with the company's `providerId`, its `teamName` and `primaryEmailOnDomain`, which says whether SSO can sign in the account. Email routing answers `ssoRequiredBy` when someone skips a company's required SSO, and the session's `breakGlass` names the company an owner signed in without. New error codes: `team_sso_required`, `sso_required`, `sso_required_on`, `sso_session_required` and `invitation_outside_sso_domains`. New Activity codes: `team.sso_required`, `team.sso_requirement_removed`, `team.sso_grants_revoked` and `team.sso_break_glass_sign_in`.
- Add the `activity:read` action for reading team and Space logs, reading edge logs and writing webhooks where logs are restricted.
- Keep released MCP clients' feature checks and connector search working, and document rollback in the SDK README. Rollback refreshes rewrites by default again; send `refreshRewrites: false` to restore the saved version exactly.
- Include company and selected-subteam context in private agent setup instructions, with explicit creation destinations for existing connections.
- Add the Share OAuth runtime capability and optional consented profile email to the access contract.
- List Spaces shared through invitations and sign-in alongside team Spaces, with access source and role. Add a team-only filter and keep management target selection within that scope.
- Add `chatgpt` to the sign-in providers: `AUTH_LOGIN_PROVIDER_IDS` and the `providers` map in `GET /v1/auth/methods`.
- Add the `space.visited` activity event: one row each time a visitor gets a new session for a Space, saying how they got in.
- Add `staffAction` to activity events, `true` when Spacefast staff did it, and `supportSession`, `true` when they did it in a support session.
- Reopening a restricted subteam requires a recently confirmed administrator session. Both team update routes return `session_not_fresh` when that session needs confirmation and `interactive_session_required` for non-session credentials.
- Escape every value a tag template writes into inline script with the new `inlineScriptString`. Add `GOOGLE_ANALYTICS_MEASUREMENT_ID_PATTERN` (Google tag IDs gtag.js accepts: `G-`, `GT-`, `AW-`, `DC-`, `UA-`), `GOOGLE_TAG_MANAGER_CONTAINER_ID_PATTERN`, `tagTemplateFieldIssue` and `spaceTagSettingsIssues`, which check a GA/GTM ID or tag id only when a write changes it.
- Add team invitation created and revoked events to the shared activity contract.
- Add subteam membership requests, a team-wide Space request inbox, administrator decisions, and request outcome notifications.
- Domain purchases and renewals now charge the team's saved card instead of opening a payment page. `sf domains registration purchase --expect-total` charges right away when you have purchasing power; without it you get the exact `sf purchases confirm` command or a dashboard link to hand to a person. New: `sf purchases inspect|confirm|cancel` and `sf billing card`.

  CLIs before 0.9.0 keep working: the server holds their purchases for a person to confirm and returns the pay link they expect, so nothing is charged from their `--expect-total`.

  The saved-card migration (`team_payment_method`) runs after the row-retention and internal-subscription migrations, preserving historical purchase receipts and soft-deleted rows.

  Saved-card confirmations carry the displayed card's identity. A changed default requires renewed confirmation, and interrupted charges retain the selected card.

  Domain Checkout sessions opened by the preceding release still settle or release their held names during rollout; their paid lines remain refundable. Purchase receipts show saved-card details only to callers with billing access. Changing a card after a failed purchase returns to billing instead of a purchase that cannot be retried.

  SDK callers: the `checkout` object on purchase and renewal responses is now optional and `checkoutUnavailable` is gone; read `purchase.confirmUrl`, which is null when nothing needs confirming. `includeCheckout` is still accepted on registration reads and ignored. The team billing response no longer has the top-level `stripeCustomerId` and `subscription` fields.

  Auto-renew and operator guidance share the notice window and refunded-term eligibility. An expiring domain that cannot be charged automatically names the customer as the next actor.

- Add `tag_review_person_required` and `tag_review_required` error codes. A team's tag revision now follows the review of every Space that inherits it. Under review, tag code goes live only with two people behind it: release and rollback re-check a revision's recorded approval, a credential with no person behind it counts as nobody, and turning team tag inheritance on checks the team's released tags. MCP asks before approving, releasing or rolling back team tags, and before a tag apply that also releases. `sf mcp` lists tools even when the checkout's `.spacefast/state.json` is unreadable.
- Telemetry stays internal: Spacefast turns it on for a team, and that team's editors can then turn tracking on per Space through the dashboard, experimental CLI API, or MCP operations.
- Keep the selected team in copied terminal setup and publish commands.
- `sf setup agent` now names the agent accounts page as `/~/agents`, a path that opens, instead of the `/{team}/agents` placeholder. The agent setup guide links a Space's Builds page as `https://my.spacefast.com/~/<space>/builds`, so the reader only fills in the Space.
- Publish TypedPress apps with `sf publish`, for teams in the TypedPress Labs program. The CLI captures a `typedpress.config.ts` project, and a box whose engine supports TypedPress compiles and serves it, with its own runtime generation. A box gets the engine and Two Factor before its first TypedPress publish goes live; the publish waits, retryably. Existing Zero projects keep their runtime.
- The published Workers bundle size is now the 24 MiB that publishing accepts on every plan. It no longer lists 64 MB, 128 MB or a 250 MB Boost value that builds refused, and Enterprise is no longer listed as unlimited.
- Zero 0.8 apps publish as Zero 0.8 again, on new Spaces too. `sf publish`, `sf build` and the MCP `publish` tool no longer convert a Zero 0.8 app, and `sf init --runtime zero` writes a Zero 0.8 starter again. Publishes no longer carry a deprecation notice. New zero.config.ts apps aren't available yet: `sf zero init`, `sf zero import` and `sf zero migrate` are hidden, `sf zero migrate app` is gone, and the API refuses a zero.config.ts app with `zero_config_unavailable` unless its Space already runs one. When Zero 0.8 publishing is turned off, the API refuses new 0.8 versions with `zero_upgrade_required`; deployed 0.8 apps keep serving.

## 0.9.0

#### Minor Changes

- Links an agent hands you now open the Spacefast dashboard already signed in as you, on the exact page: approvals, domain search and checkout, and Spaces. Add the `createDashboardLink` operation to mint one.
- Comment links from Spacefast's MCP Apps and agents now open the Space's comments signed in as you, on the exact thread. `createDashboardLink` gains a `comments` target. `getSpaceCommentsLink` returns the same signed-in link and stays available for older skills that call it by name.
- Taking a domain from another Space now always takes the claim's TXT record. `sf domains check --move` and the `move` body on the verify call are gone: if you manage both Spaces, remove the domain from one and add it to the other. A pending claim reserves nothing and no longer expires, so the `ownership` field on Space domains drops `expiresAt` and `moveAvailable`.
- Registrant contacts now belong to the person who saved them. Each contact reports `viewerOwns`, and only its owner can change its name, company, or email, buy a domain with it, or move a domain to another of their contacts. `sf domains registration purchase` without `--contact` uses your newest own contact, and `sf domains contacts ls` shows which are yours. Team API keys can no longer save contacts or buy domains; sign in with `sf login`. `updateDomainRegistration` no longer accepts `contactId: null` from any caller, partner keys included.
- Join offers in `GET /v1/me` carry an optional `invitedBy` on invitations: who sent the newest one, by name, or by email when they have no name. `sf teams join` shows it in its WHY column.
- Export the limits catalog (`@spacefast/common/contracts/limits`): every customer-facing limit with its published value on each plan, today's value where it differs, what an unclaimed Space gets, and what Boost changes. The public pricing document serves the new plans (Personal, Go, Pro, Business coming soon, Enterprise): it gains `offers`, `rates`, `notCharged`, `limits` and `boost.effects`, and existing fields keep their shape. Plan limits gain `pendingTeamInvitations`. Share links and pending Space invitations have no limit on any plan; invitation emails per person, pending access requests per Space and pending team invitations are abuse ceilings, the same on every plan.
- Let subteam spaces on Enterprise and Internal plans be shared with everyone in the parent team. Its members can view and comment on the live space without joining the subteam. Support the same access level in publishing, share grants, and new-space defaults, and let a root team start new subteams with it (`sf teams defaults --new-subteams parent_team`).
- Let parent teams choose whether subteam transfer requests notify all administrators or prefer directly assigned subteam administrators with parent-administrator fallback.
- Space thumbnails no longer carry a link that opens a private Space. `thumbnail.sourceUrl` is removed, and `thumbnail.url` points at the new `getSpaceThumbnail` operation, which returns the image to callers who can read the Space's content.
- Export the public pricing document schema and catalog projection, including plan seats, usage rates and anonymous retention rules.
- Team-account connector roles serve only Spaces that need a sign-in by default. On a Space that is public or shared by link or password, a team role reports `needs_public_serving_ack` until a team owner or admin allows it with `setSpaceConnectorPublicServing` or `sf connectors public-serving set <role> --enable`. Anyone who can open such a Space can then read through that team account. Visitor roles are unchanged. MCP asks before running `setSpaceConnectorPublicServing`. Personal-account roles now also treat `access` set in sf.jsonc as public: on such a Space a personal role reports `forbidden`, as it already did on Spaces made public in settings. Its binding stays until the config file stops making the Space public; only access changed in settings or the API removes personal bindings. Personal roles also turn off on a Space shared by link or password, since whoever holds the link would read through that personal account. Existing bindings stay and serve again once the link or password is gone.
- Show referral Space unlocks in plan policy, publish guidance and quota recovery. Add the team-wide opt-in referral chip setting.
- Add the `feature_retired` error (422). A new version or settings change that asks for a retired feature now fails with `pointer`, `details.feature` and `details.fix`. Versions already live keep serving, and republishing them keeps working.
- Let a parent team share its design system with subteams. Parent teams turn it on with `designSystemSharedWithSubteams` in team settings. A subteam with no system of its own uses the parent's, read-only. It can adopt it or override it with `changes.parentSystem` on `updateTeamDesignSystem`, which copies the parent's system when the subteam has none, and go back later. Agents say in one line whose design system they will use, or that there is none. Agents connected through MCP alone now read team context and fetch brand files before they build, because the rule to do so moved to the top of the MCP instructions and into the publish tool.
- App sign-in's Spacefast part is now named Sign in with Spacefast; "Access" now means sharing (Spacefast Share). In the Users settings API and SDK, `access.spacefastAccess` and `accessAvailability.spacefastAccess` are now `signInWithSpacefast`, and `sf users settings --spacefast-access` is now `--sign-in-with-spacefast`. The flat `settings` and `availability` fields that released CLIs read and send are unchanged.
- Expose primary-domain email setup and DNS readiness through the API catalog. Custom primary domains on Spacefast DNS are configured automatically through durable operations; sending is enabled after authentication verifies.
- Space Users settings have one stored shape again. `config.users` is always the flat `{ enabled, providers }` shape that released CLIs read. In the Users settings API, `access.signInWithSpacefast` on now needs `access.zeroUsers.enabled`. The two-part stored-config schema and its helpers are removed from `@spacefast/common/contracts/space-users`.
- Removed the internal Superadmin and operator contracts (`contracts/superadmin*`, `contracts/operator-*`, `contracts/founder-email`). They described private admin APIs and are no longer published. `contracts/common` gains `PagePaginationSchema`, which the feedback and plan code lists use.
- Add team email-domain management, resettable join links, and self-service joining to the CLI and API contracts. Join links guide teammates through verifying a work email or enabling two-factor authentication while preserving the team's existing join permissions.
- Retail measurement follows wp.cloud's PHP/SQL CPU, PHP requests, email, and unified file/database storage, excluding each Space's first GB. SQL, storage and email remain complimentary. Canonical pricing retains revision 2026-11-09, paid cached fair use, $0.04/GB uncached traffic with 10/100/500 GB included, $0.0055/build minute with 100/500/2,000 minutes included, and 1/3/10 million PHP requests included on Free/Go/Pro. PHP compute remains $0.1188/CPU-hour and Workers $0.30/million with 100,000 included on Free. Free's $1 credit stops new builds and Workers requests, while PHP, delivery and email continue without overage billing. Functions admission reports the shared credit and total rated usage rather than the paid Workers-only budget. Provider meter IDs replace legacy runtime, SQL, request, email and split-storage IDs; Workers CPU and spam leave the rate card. Pricing retains offers, rates, notCharged, limits, Boost, and historical usage metadata (`freePeriod`/`freePool`); canonical rates remain authoritative. Complimentary email prices use the released `million` unit for messages. Usage summaries expose measured storage seconds, credit exhaustion and allowance review flags, and preserve storage totals beyond PostgreSQL bigint range.
- Add version-bound HTML tags and refresh rewrites by default when rolling back. Use `--no-refresh-rewrites` to restore a saved version exactly. Rollback receipts and waits follow the new version returned by the API.
- Add parent-managed recipient settings for Space access-change emails and a personal opt-in for other team Spaces' access changes.

#### Patch Changes

- Carry identity session deadlines in signed runtime handoffs.
- Add account merge and restoration events to the shared activity contract.
- Preserve existing API clients' thumbnail fields, connector scopes and owner enums. Keep the MCP operation catalog stable while the library reads thumbnail bytes through its existing App tool.
- Keep normalized dashboard return paths on the same origin and redact invitation proofs from analytics URLs.

  Retire CLI-only request-client policy conditions while preserving fail-closed behavior for stored policies.

- Expose whether a billing plan change is immediate or scheduled so clients confirm the server-selected subscription without announcing a scheduled downgrade as active.
- Keep generated labels and theme fonts within their syntax boundaries, resolve content policies from the exported capsule, and refuse unsupported group access rules.
- Validate canonical runtime upload destinations before preparing transfer data.
- Keep framework artifact metadata and immutable asset prefixes out of configuration-only version requests. Server validation identifies the offending field and retains CLI upgrade guidance for older clients. Current CLI flag conflicts name the incompatible flag locally without advising a CLI update.
- Copied prompts and the HTTP publishing skill now offer the official Spacefast plugin or MCP server when the agent picks up a task. ChatGPT and Codex can show a native install card or share the official listing. Users can still publish through the no-install flow.
- Export `normalizeAddress` from `utils/dns-instructions` so callers compare IPv4 and IPv6 addresses in one canonical form.
- Domain diagnostics include optional per-resolver A/AAAA TTLs in seconds, including the system resolver and public DNS-over-HTTPS observers. Plain CLI output shows available remaining answer TTLs without treating them as propagation deadlines, followed by one line of advice for the worst answer shown. IPv6 comparisons use canonical addresses so equivalent spellings no longer produce false stale-cache warnings; older servers without TTL fields remain supported.
- Check the names a user asks for against the live registry: the typed name and its instant matches (including two words joined, such as `sorta music` → `sortamusic.com`), plus selected and liked names. A stale zone-file result can no longer mark those taken. Generated suggestions keep the cheaper zone-file check, and checkout still confirms every name live.

  Explain the agent-to-browser checkout handoff before navigation: owner details and payment stay out of chat, selected domains carry over, and selection does not complete a purchase.

- Expose uncapped domain suggestions for full extension search, using the existing domain hacks, name variations, and ranking. Validate the bundled extension catalog against ICANN public suffixes, including internationalized and numeric suffixes, while keeping purchase support separate from searchability.
- `sf domains diagnostics` suggests `sf domains check <domain> --retry-ssl` only after a certificate attempt failed and every observed resolver already points the hostname at Spacefast with no stray address left. Each resolver is judged on its own answer: one that returns no address (for example NXDOMAIN), lacks an address family Spacefast serves, or still answers another host holds back the retry even while another resolver already answers Spacefast. While DNS still answers elsewhere, it lists the DNS fixes and the next automatic attempt instead. A certificate that is still being issued asks for a plain `sf domains check <domain>`, not a forced retry.
- Make rollback rewrite refresh explicit in MCP guidance and SDK examples. Restore saved versions exactly when API callers omit refreshRewrites, so released clients can keep waiting for the version they selected.
- Document the account-access refusal for fork pull request previews so clients can explain why these pages open anonymously.
- Report environment access truthfully for new Functions artifacts: version variables are always available to worker code. This changes reporting only, not runtime injection or broker capability grants.
- Git URL and source-sharing errors now say "team" instead of "organization", and the remix field's example URL is `team/space`.
- Preserve middleware routing before static responses and block imports of unsupported access restrictions. Keep private files and unregistered handlers out of local development responses.
- The copied handoff prompt now approves running the Spacefast CLI from npm, so coding agents with permission checks (such as Claude Code's auto mode) run the handoff's `npx` step instead of refusing it as external code. When a permission check still denies the CLI, the handoff document sends the agent to the HTTP exchange.
- The skill's cloud sandbox guidance now names where claude.ai keeps its domain allowlist: Settings → Capabilities.
- Join link previews name the parent team of a subteam and report `parent_membership_required` or `subteams_unavailable` when a matching company email still cannot join.
- Document the hostname PATCH behavior for legacy apex/www pairs: explicitly selecting the canonical hostname configures both stored rows and returns the selected domain identity, without changing existing routing until requested. CLI domain updates now wait on that returned identity, so choosing the counterpart does not poll the old redirecting row.
- Muse joins the personal agents, set up with one copied prompt. Indent moves to the coding agents, and Pi shows its own logo.
- Setup guides, the skill, and CLI hints now link to Spacefast's official listings: Claude's connector directory, the ChatGPT plugin, and the Grok Bot plugin. The custom-connector and custom-MCP-server steps for those apps are gone.
- Document `sf promote <version>` for making a ready version live and reserve rollback guidance for returning to an earlier version.
- Expand offline documentation with `_headers` syntax and crawler-challenge troubleshooting, including the limits of user-agent-only tests. Make Functions runtime environment documentation discoverable by name.
- Advertise the runtime capability for read-only retained-version evidence access.
- Preserve authored preview images and use direct mShots URLs for pages without one. Remove request-time image rewriting, host-routed share images, and screenshot-warming jobs.
- Explain how to inspect compiled header rules before promotion and why private preview responses cannot demonstrate public live edge caching.
- The MCP domain progress panel and domain SDK treat absent TXT challenges and successful TXT proof as completed ownership independently of pending HTTPS. Domain guidance distinguishes legacy inventory proof, native inventory status, compatibility overlays, and Space-attachment provider readiness.

  Forward TXT challenge diagnostics through the MCP tool response without turning an absent older-API field into a completed challenge. Attachment failures keep the overall MCP domain state in setup-needed even when ownership is complete or a certificate is active.

  MCP and the domain SDK still wait for Spacefast DNS zone proof when no hostname TXT challenge is required, preserving pending ownership and the zone's ownership instructions.

  An existing provider certificate does not make a pending Space attachment ready: MCP keeps checking, and the domain SDK waits for attachment readiness even after ownership completes.

- Name every feature short of general availability "Private Beta", on every surface. The Labs stage label no longer distinguishes public, private, or waitlisted previews, and a marketplace listing that is not live yet stays out of setup pages instead of showing as "Soon". A `SetupMethodCard` handed an unlisted method says "Not available yet".
- Keep credentials and private CLI submissions bound to the selected API provider. Verify Git exclusion before saving checkout secrets and keep partner queries within their configured scope.
- Functions bundles and Zero client bundles can now be up to 24 MiB, up from 8 MiB.
- Open published docs by slug or path and browse the available repository when no connection type is specified. Share links choose a permitted landing page when one is omitted. MCP error summaries now show the API problem code and session events record failed tool calls.
- Preserve owner_binding_requires_private_space for released connector clients and restore its error reference. Personal connector roles still require a private Space and the caller's own connection.
- Remove the `@spacefast/common/og-template` export. The dashboard's link previews are drawn from its own card list now.
- Point Show & Tell agent guidance to spacefast.com/discover for browsing featured Spaces.
- `getApproval` now returns `rollback` for a version rollback approval: the Space and the `ref` of the version that was live and the version it goes back to. It is `null` for every other approval, and when the Space is not in one of your teams. `@spacefast/common` exports `VERSION_ROLLBACK_PURPOSE_CODE`.
- Keep duplicated artifacts separate from executable project inputs, enforce local build isolation for Netlify plugins, and preserve filesystem containment while reading and writing CLI artifacts.
- Add metadata-only security observation contracts and activity codes for Space access exchanges, managed outbound requests, and runtime session lifecycle changes.
- Search every documentation tier from `sf docs` and the docs index API. Keep tier filters for listings, apply category filters before the search result limit, and link catalog topics to published documentation pages.
- Recognize `security.sessions_revoked` activity events from operator session revocations.
- Share the existing settings publication owner identity so dashboards retain progress when reading an older API response.
- Guide Show & Tell reviewers to inspect live submissions, favor approval, escalate serious policy concerns, and submit clear creator feedback through the moderation tools.
- Source workspaces can import uploads larger than 4 MiB. When creating a workspace imports an upload, the import runs in the background: wait for the returned operation, then read the workspace status before editing.
- Publishing now infers the SPA fallback for every app build, from any client: a root `200.html`, `_shell.html`, or `index.html` beside a JS bundle with no root `404.html`. `fallback` accepts `false` to turn that off. `sf publish --spa false` now writes `"fallback": false`, so the opt-out sticks, and `--spa auto` no longer patches the Space. `@spacefast/common` no longer exports `utils/publish-detection`.
- Spaces carry `visitedByHuman30d` and `lastHumanVisitAt`: whether a person (a request the host does not classify as a bot, with platform requests left out) visited in the last 30 UTC days, and the end of the newest such day. Both are null when the Space is not metered. Usage records and period totals can carry the new `human_requests` dimension, which is display only and never rated.
- Add ownership conflict errors and an ownership revision to runtime route configuration.
- Keep access scopes stable across repeated validation and bound recursive wildcard matching work.
- Add the `teams.audit_log` flag for the team audit log page, and reserve `audit-log` as a dashboard route.
- Report `team_knowledge_storage_unavailable` as a non-retryable `ask_owner` refusal, so agents stop retrying while a team's context Space is archived or removed.
- Move Telemetry into Labs with application enrollment. Approved teams can turn tracking on per Space through the dashboard, experimental CLI API, or MCP operations.
- Usage records and period totals can carry new dimensions: `file_stored_byte_hours`, `database_stored_byte_hours`, `backup_stored_byte_hours`, `php_cpu_milliseconds`, `sql_cpu_milliseconds`, `cached_requests`, `uncached_requests`, `cached_transfer_bytes`, `uncached_transfer_bytes`, `php_requests`, and `emails_sent`.

  Capture these provider measurements for team Spaces under their billing root without adding retail charges. Respect Space creation, deletion, and usage-period finalization boundaries; team build billing continues to use retail `build_milliseconds`.

- Space previews opened from MCP Apps now use Review in new window instead of trying to nest the deployed Space in a client iframe. Stale visual reviews stop polling after a terminal access error, while transient service failures keep refreshing.
- Choose an implicit creation destination only when exactly one team allows the caller to create Spaces, including the team creation setting. Expose complete live destination IDs on demand through `GET /v1/teams/access/spaces/create`, keeping identity and bootstrap reads independent. Keep explicit destinations and saved CLI defaults authoritative.
- Zero apps now start from `zero.config.ts`, and Spacefast hosts them.

  - `sf init --runtime zero` and `sf zero init` scaffold a `zero.config.ts` app. `sf publish` uploads its source and the host compiles it with a pinned compiler. The CLI checks and captures it on its bundled wasm compiler, so no native download is needed.
  - Hosted MCP can publish raw Zero source without npm imports.
  - Spaces running the older Zero app format keep publishing and serving as before. New Spaces can't start in that format.
  - Write now creates `zero.config.ts` apps. Synced posts are seeded on publish.

## Unreleased

- Report the server's immediate or scheduled plan-change outcome so billing confirmation follows the updated Stripe subscription rather than stale client state.

## 0.8.1

#### Patch Changes

- Operator domain expiry guidance now uses canonical automatic-charge eligibility, including notice lead time and refused/refunded terms, rather than the saved auto-renew preference alone. Operator lists only load renewal history for expiring names, with bounded concurrency.

## 0.8.0

#### Minor Changes

- Hosted MCP no longer asks for connector scopes. `OAUTH_MCP_RESOURCE_SCOPES` is now the shared API set without `connectors:read`, `connectors:write`, and `connectors:execute`. The new `OAUTH_CONNECTOR_SCOPES` names those three, and the API resource keeps them for the Connectors REST API. MCP's default scopes, protected-resource metadata, and consent screen all drop them, and an MCP consent for the narrower set still counts as Agent access. Grants issued with the connector scopes keep refreshing; their new tokens just leave those scopes out.

## 0.7.0

#### Minor Changes

- New Spacefast logo: a star followed by lowercase "spacefast", upright, in one color. `SPACEFAST_WORDMARK_PATH` and `SPACEFAST_WORDMARK_VIEW_BOX` now draw it on a tight `0 0 127 20` viewBox. The star on its own is the new mark: `SPACEFAST_MARK_PATH` on `SPACEFAST_MARK_VIEW_BOX` (`0 0 24 24`) replaces the `SPACEFAST_ICON_*` "SF" letter geometry, which is removed. `SPACEFAST_BRAND_COLORS` drops the lime `shadow`. The full-bleed icon export moves from `brand-assets/spacefast-sf-full-bleed.svg` to `brand-assets/spacefast-icon.svg`. The MCP Space library's sidebar icon is now the star.
- Add a context starter: one Space is one Gutenberg document, with Save at the top
  right and the Space's existing access settings controlling viewing and editing.
  WordPress stores blocks and native revisions. A lossless `.blocks` source binding
  uses the existing source writeback pipeline so committed content can travel with
  source remixes. Markdown remains available for supported agent handoffs. Revision
  tokens protect human edits from stale saves.

#### Patch Changes

- Keep existing website content and runtime declarations when publishing configuration only. Configuration-only publishes stage the evaluated configuration without scanning local content and use the server's retaining version lifecycle.
- Retire the URL capture rollout flag. Website migration and URL Build retries now use normal public publishing admission.

## 0.6.1

#### Patch Changes

- Align `sf domains search` with the dashboard in normal and interactive modes. Search uses live keyword matches, Luna typing previews, Sol submissions and refinements, fee-inclusive quotes, and Jev ranking. Saved sessions preserve feedback and selections, and interrupted searches remain resumable.
- The shared workflow runs one AI generation batch for a descriptive first brief. API and MCP first turns therefore request up to 12 AI names instead of the previous two batches totaling about 24. Follow-up turns grow the generated pool toward 24 available names, then retire the lowest-ranked unprotected names after checks and scoring. Keyword exact matches are unchanged.

## 0.6.0

#### Minor Changes

- Add ChatGPT plugin entrypoints, a Space Library, an HTML file editor, local file opening, composer mentions, context attachments, chat actions, rich Space selection with previews, native settings, onboarding, and durable MCP event subscriptions. Add searchable Space lists and account-bound plugin preferences. Package the same plugin for local desktop testing.
- Add feature-gated `sourceUrl` publishing through WordPress.com, with durable URL Build receipts and capture progress/evidence. Existing file and archive publishing contracts remain supported.

#### Patch Changes

- Agents that arrive through a handoff link, and any API key a team member created, can now open a Space's content dashboard: the one-use sign-in link signs in the person who created the key. `sf content dashboard` opens the dashboard in your browser, or prints the sign-in link with `--show-secret --json` for an agent to hand you. The handoff document teaches both the CLI and the direct HTTP lane.
- `contentRestRequestSchema` accepts a media upload whose path carries a query, such as the `?_locale=user` WordPress's apiFetch adds to every request. The upload rule now compares the route, as the runtime already does, so uploads from the dashboard's Content editor are no longer refused before they reach WordPress.
- Add a Recover button to MCP App errors with the saved execution and result details. Preserve error reasons, validate publish manifests before approval, and distinguish new Spaces from updates in approval cards.
- List pending Space transfers with `sf transfers ls --team <team>` and inspect one with `sf transfers get <id>`. Transfer guidance now names receiving team owners and admins, explains credential visibility when a target team cannot be resolved, and distinguishes transfer authority from Space read/write access.

## 0.5.1

_No noted changes in this release._

## 0.5.0

#### Minor Changes

- Claim a hostname attached to another Space with a unique DNS TXT record, or move it directly when authorized to manage both Spaces. Expose ownership instructions and move status through the API and CLI, including `sf domains check --move`.
- Add numeric and optional database fields, user references, indexed counts, application sign-in policies, and transactional guest upgrades to Zero. Query hooks now distinguish loading from empty or null results. Uploads are private by default, with explicit public sharing.

  Add local development identities, multiple isolated dev servers, query inspection, storage transfers, and retained Space archive and restore commands. Newly compiled apps require an engine that implements these contracts before publication.

#### Patch Changes

- One hostname rule everywhere: `normalizeHostname` now lives in `@spacefast/common/utils/hostname` (`@spacefast/routing/hostname` still re-exports it). It folds ASCII case and trims ASCII whitespace only, as DNS does, so a non-ASCII host like `K.example` (Kelvin sign) no longer collapses into a different ASCII name. `verifyVisitorToken` in `@spacefast/zero` compares hosts with the same rule, so `example.com.` and `example.com` are one host.
- Build CLI commands as self-contained entry bundles with declared package dependencies resolved by Node. Keep the canonical WordPress block serializer private to the compiler so CLI installation does not inherit editor peer dependencies, and publish the browser API declarations.
- Framework builds and Zero compose in one project. `sf build` and `sf publish` run the framework build, compile the capsule from the project root, and publish the build output at `/` with the runtime beside it; a Zero project whose build script renders into the project root publishes the root. Sources, lockfiles, `tsconfig*.json`, TypeScript files, and `tools/` stay out of the published files. The `build` settings in `sf.jsonc` apply to local builds too, `sf publish --remote` takes the build lane when the project has a build, and a host project's `tsconfig.json` no longer rebinds the JSX runtime of Zero pages.

  Local Zero previews also accept source-backed Markdown and HTML documents. Their source preview escapes author markup instead of requiring compiled HTML or executing the source.

  Prebuilt publishes reuse compiled Zero and Functions metadata from the build archive's sidecar instead of recompiling sources removed during packaging. Invalid runtime metadata fails before upload.

## 0.4.1

#### Patch Changes

- Build CLI commands as self-contained entry bundles with declared package dependencies resolved by Node. Keep the canonical WordPress block serializer private to the compiler so CLI installation does not inherit editor peer dependencies, and publish the browser API declarations.

## 0.4.0

_No noted changes in this release._

## 0.3.0

_No noted changes in this release._

## 0.2.2

_No noted changes in this release._

## 0.2.1

_No noted changes in this release._

## 0.2.0

#### Patch Changes

- Consolidate the MCP docs surface into a single `search_docs` tool: a query that is exactly one page's slug or path now returns that page in full, replacing `get_page`.

## 0.1.0

#### Patch Changes

- Repair the documentation URLs in the feature lifecycle registry and the bundled docs catalog, which broke when the documentation site reorganized its routes. `sf docs` and `GET /v1/docs` served six URLs that 404 or land on the wrong page, and every `public` docs slug in the feature registry pointed at a route that no longer exists.

## 0.0.27

#### Patch Changes

- Consolidate the MCP docs surface into a single `search_docs` tool: a query that is exactly one page's slug or path now returns that page in full, replacing `get_page`.
- Publish the agent integration registry at `agents/registry/core` (browser-safe) and `agents/registry/node` (paths and MCP config mechanics) as the single source for all 24 agent setup surfaces. The website and the public docs exporter render from it, replacing their hand-maintained agent lists.

## 0.0.26

_No noted changes in this release._

## 0.0.25

_No noted changes in this release._

## 0.0.24

_No noted changes in this release._

## 0.0.23

_No noted changes in this release._

## 0.0.22

_No noted changes in this release._

## 0.0.21

_No noted changes in this release._

## 0.0.20

_No noted changes in this release._

## 0.0.19

_No noted changes in this release._

## 0.0.18

#### Patch Changes

- Give the clean release declaration build enough heap to complete before npm publication.

## 0.0.17

_No noted changes in this release._

## 0.0.16

_No noted changes in this release._

## 0.0.15

_No noted changes in this release._

## 0.0.14

#### Patch Changes

- Make Zero generally available on every plan, including local development, hosted execution, and Cast-backed realtime updates.
- Add Railway-style agent setup with repeated client targeting, optional project-scoped skills, integrated auth health, safe install/update/removal, popular agent consumers, local/remote-proxy/remote-OAuth connection methods, and direct variable, domain, and repository MCP lifecycle tools.

## 0.0.13

- Reserved response headers are now caught early with a clear error.

## 0.0.12

_No noted changes in this release._

## 0.0.11

_No noted changes in this release._

## 0.0.10

_No noted changes in this release._

## 0.0.9

_No noted changes in this release._

## 0.0.8

_No noted changes in this release._

## 0.0.7

- Consistent naming rules for spaces and teams.

## 0.0.6

_No noted changes in this release._
