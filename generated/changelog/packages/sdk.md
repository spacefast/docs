---
title: "@spacefast/sdk"
description: "Release history for @spacefast/sdk on npm."
---

Published as [`@spacefast/sdk`](https://www.npmjs.com/package/@spacefast/sdk) on npm.

## 0.10.0

#### Minor Changes

- Honor Retry-After during file uploads and return structured failures for oversized inline requests within the API transport limit. New team-owned Spaces can hide from search engines from their first publication with the initial noindex setting.

  Keep usage current after transfers, accept receiving team addresses without requiring sender membership, and make compact navigation and Plan easier to find. Connection instructions lead with expiry, prerequisites, and the existing publication destination. Error examples show the relevant publishing recovery status.

- Choose who can join a subteam. Its `joinPolicy` is `open` (anyone in the parent team joins by themselves), `request` (people in the parent team see it but can't join by themselves; an admin lets them in), or `invite_only` (only people an admin invites or adds get in, and parent-team members who aren't in it don't see it; the parent team's owners and admins still see and run it). New subteams start as `open`. Set it with `joinPolicy` on `updateSubTeam`, `updateTeamSettings`, `createSubTeam` or `POST /v1/teams`, or `sf teams subteams create --join-policy open|request|invite_only`. `GET /v1/me` lists the `request` subteams you are not in under `requestableTeams`, and `joinTeam` answers 403 `join_request_required` for them. `sf teams subteams list` shows who can join each subteam.
- Review a departing team member's connections and affected Space bindings before removal. Add `sf teams members offboarding`, the shared offboarding response contract, and the `getTeamMemberOffboarding` API operation. The operation catalog exposes the review to tools, and guidance explains how to replace bindings before removal.
- Ask to join a subteam that takes requests with `sf teams join`, and review requests with `sf teams join-requests list`, `approve` and `deny`. Agents and CLI logins that act as a person can ask with `createTeamMembershipRequest` and read their own requests, and a key approved on the parent team can review a subteam's requests. An agent approved there answers them only when its person administers the subteam.
- The seven source and comparison lists (`listSpaceSourceCommits`, `listSpaceSourceTags`, `listSpaceSourceBranches`, `listSpaceSourceNotesRefs`, `listSpaceSourceWorkspaces`, `searchSpaceSourceFiles`, `compareSpaceDeploymentVersions`) answer the standard page, `{ data, pagination }`, when a request sends `Accept: application/json; spacefast-list-page=1`. Without that, they answer as before, with the cursor at `data.pagination`. Responses send `Vary: Accept`. The SDK's typed client and generated queries, the CLI (including `sf api`, so `--paginate` follows these lists), MCP, and the dashboard send it; released 0.9.0 builds keep the shape they read.

  `listWebhooks` takes an optional `teamId` (id or slug) to list one team's webhooks. A team the credential cannot reach answers 404, and a member without webhook access gets an empty list, as without the filter. The dashboard's webhooks page reads through it instead of filtering every webhook in the browser.

- Add optional Space primary contacts for Enterprise and Internal teams. Read the contact on Space resources, choose eligible accounts from the People response, and assign or clear it through the existing Space PATCH operation. Contacts grant no access and clear when their qualifying access or plan ends.
- Let a subteam use no design system. On a subteam whose parent shares one, `changes.parentSystem: "none"` on `updateTeamDesignSystem` turns it off and keeps any system the subteam saved. `getTeamDesignSystem` reports `source.active: "none"`, agents get no design system, and saves return `team_design_system_off` until the subteam adopts the parent's or overrides with its own.
- Every member of an Enterprise or Internal parent team can read weekly publishing activity for their team and its subteams, and export it as CSV. Add the `getTeamSubteamUsage` operation.
- Domain purchases and renewals now charge the team's saved card instead of opening a payment page. `sf domains registration purchase --expect-total` charges right away when you have purchasing power; without it you get the exact `sf purchases confirm` command or a dashboard link to hand to a person. New: `sf purchases inspect|confirm|cancel` and `sf billing card`.

  CLIs before 0.9.0 keep working: the server holds their purchases for a person to confirm and returns the pay link they expect, so nothing is charged from their `--expect-total`.

  The saved-card migration (`team_payment_method`) runs after the row-retention and internal-subscription migrations, preserving historical purchase receipts and soft-deleted rows.

  Saved-card confirmations carry the displayed card's identity. A changed default requires renewed confirmation, and interrupted charges retain the selected card.

  Domain Checkout sessions opened by the preceding release still settle or release their held names during rollout; their paid lines remain refundable. Purchase receipts show saved-card details only to callers with billing access. Changing a card after a failed purchase returns to billing instead of a purchase that cannot be retried.

  SDK callers: the `checkout` object on purchase and renewal responses is now optional and `checkoutUnavailable` is gone; read `purchase.confirmUrl`, which is null when nothing needs confirming. `includeCheckout` is still accepted on registration reads and ignored. The team billing response no longer has the top-level `stripeCustomerId` and `subscription` fields.

  Auto-renew and operator guidance share the notice window and refunded-term eligibility. An expiring domain that cannot be charged automatically names the customer as the next actor.

- Add `GET /v1/resolve` (`resolveResource`) and `sf resolve`: send any id, hostname, Space, dashboard, or API URL, Git repository, or slug, and get back everything it names that you can read, most specific first, with each match's ids and URLs. Shared contract: `@spacefast/common/contracts/resolve`.
- Expose Space email readiness, required setup steps, signing records and recipient limits. Sending now requires a verified custom primary domain, including when DNS is hosted outside Spacefast.

#### Patch Changes

- `getSpaceThumbnail` accepts a Space's default hostname as well as its id, adds a `gallery` size, and answers a public Space's live version without a credential, with cache headers any cache may follow. Show & Tell `screenshotUrl` is that thumbnail URL, or a moderator's `coverUrl` when one is set. Moderators can set `coverUrl` when they edit an entry.
- Expose optional SSO routing, which names the company's team, and bounded member-session lengths independently of Space visitor sessions.
- Publishing and `listSpaceConnectorBindings` now say who can read through a connector role when that reaches further than it looks. A ready team role on a Space anyone can open without signing in, or a team or personal role with `tools: "*"`, carries a `reach` sentence, such as "Anyone who can open this Space can read through your team's hubspot account, without signing in." The publish result lists these roles in `connectorReach`, `sf publish` and `sf connectors bindings` print the sentence, and the dashboard shows it on the role.
- Space reads include `thumbnailUrls`: the card and hero thumbnail for light and dark color schemes, as API URLs to use unchanged.
- Expose the latest WordPress.com staff verification outcome so clients can explain failed checks and how to regain team access.
- Team invitation acceptance and self-join responses include optional first-membership and parent-team information, allowing dashboards to offer subteam selection after a person's first company invitation.
- Member sign-in keeps its own IdP settings. `PUT /v1/teams/{teamId}/member-sign-in` sets it up with `issuer`, `clientId` and `clientSecret` instead of an identity connection, and later replaces the client ID or secret without changing the return address. `connectionId` is optional and ignored. The member sign-in read adds `issuer` and `clientId`, and `sf teams sign-in inspect` prints the issuer. Updating or revoking an identity connection no longer changes member sign-in, and `sso_connection_not_oidc` is no longer returned. `enabled: false` turns member sign-in off and keeps its setup and return address, and `enabled: true` turns it on again. The read adds `enabled`, `sf teams sign-in inspect` prints its status, and `DELETE` now removes the setup.
- Member sign-in can be set up with a SAML IdP. `PUT /v1/teams/{teamId}/member-sign-in` takes the IdP's entity ID as `issuer`, its `ssoUrl` and one or two signing `certificates` (PEM or base64), and later replaces the sign-on URL or the whole certificate list. The read adds `ssoUrl` and `certificates`, each with its fingerprint and expiry, and its `callbackUrl` is the ACS URL, which is also Spacefast's entity ID. Its `samlMetadataUrl` serves Spacefast's SAML metadata, for an IdP that imports it. `sf teams sign-in inspect` prints the sign-on URL, the certificates, the ACS URL and the metadata URL.
- `@spacefast/image` no longer builds screenshot-service URLs (`mshotsUrl`, `MShotsOptions`, `DEFAULT_MSHOTS_OPTIONS`, `MSHOTS_HOST`); the API's capture module is the only code that names a capture service. New `getPageScreenshot` (`?url=<page>&version=<served version>`) serves a public page's 1200x630 social card for its `og:image`, cacheable for a day. Any page that is not public, is not served as HTML, or whose version is not the one its hostname serves now is a miss. The Space Library preview reads say `pending` while a screenshot renders instead of probing a placeholder.
- Add Require SSO for company teams. Member sign-in settings gain `required` and `membersWithoutTwoFactor`, with a paged list of the members it would block. Team lists mark with `ssoRequired` the teams whose CLI logins, AI tools and agents this sign-in can't approve. A `team_sso_required` refusal can carry `details` with the company's `providerId`, its `teamName` and `primaryEmailOnDomain`, which says whether SSO can sign in the account. Email routing answers `ssoRequiredBy` when someone skips a company's required SSO, and the session's `breakGlass` names the company an owner signed in without. New error codes: `team_sso_required`, `sso_required`, `sso_required_on`, `sso_session_required` and `invitation_outside_sso_domains`. New Activity codes: `team.sso_required`, `team.sso_requirement_removed`, `team.sso_grants_revoked` and `team.sso_break_glass_sign_in`.
- Keep released MCP clients' feature checks and connector search working, and document rollback in the SDK README. Rollback refreshes rewrites by default again; send `refreshRewrites: false` to restore the saved version exactly.
- List Spaces shared through invitations and sign-in alongside team Spaces, with access source and role. Add a team-only filter and keep management target selection within that scope.
- Add `chatgpt` to the sign-in providers: `AUTH_LOGIN_PROVIDER_IDS` and the `providers` map in `GET /v1/auth/methods`.
- Reopening a restricted subteam requires a recently confirmed administrator session. Both team update routes return `session_not_fresh` when that session needs confirmation and `interactive_session_required` for non-session credentials.
- Add subteam membership requests, a team-wide Space request inbox, administrator decisions, and request outcome notifications.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.10.0

## 0.9.0

#### Minor Changes

- `askDocs` now takes one `question`, with an optional docs page `path`, at `POST /v1/docs/answer`. The docs site's Ask AI chat keeps `POST /v1/docs/ask` as `continueDocsConversation`. MCP no longer offers `continueDomainConversation`, `classifyDomainMessage` or `continueDocsConversation`; agents find domain names with `searchDomains` from one naming brief. Website capture with `sourceUrl` through an OAuth grant or the hosted MCP server needs a domain the team controls in Spacefast, and fails with `source_url_domain_unverified` otherwise.
- Connect with Spacefast: register OAuth apps so a site can offer "Sign in with Spacefast" (`sf oauth-apps`, `createOAuthApp` and friends, and the `workflow/sign-in-with-spacefast` guide).
- List and revoke your own credentials in one place: `listCredentials` returns your live sessions, agent connections and unbound API keys, and `revokeCredential` ends one of them. Both need a browser session.
- Taking a domain from another Space now always takes the claim's TXT record. `sf domains check --move` and the `move` body on the verify call are gone: if you manage both Spaces, remove the domain from one and add it to the other. A pending claim reserves nothing and no longer expires, so the `ownership` field on Space domains drops `expiresAt` and `moveAvailable`.
- Team owners and admins can find Spaces nobody is using. `sf spaces ls --inactive-for <days>` lists the team's Spaces with no publish or change in that many days, oldest first, through the new `GET /v1/teams/{teamId}/inactive-spaces` (SDK `listTeamInactiveSpaces`, 90 days by default). Pinned and archived Spaces are left out. `sf spaces archive` accepts `--space` more than once to archive several Spaces in one run. When someone archives a Space they did not create, the creator gets an email that says how to restore it.
- Join offers in `GET /v1/me` carry an optional `invitedBy` on invitations: who sent the newest one, by name, or by email when they have no name. `sf teams join` shows it in its WHY column.
- Let subteam spaces on Enterprise and Internal plans be shared with everyone in the parent team. Its members can view and comment on the live space without joining the subteam. Support the same access level in publishing, share grants, and new-space defaults, and let a root team start new subteams with it (`sf teams defaults --new-subteams parent_team`).
- Let parent teams choose whether subteam transfer requests notify all administrators or prefer directly assigned subteam administrators with parent-administrator fallback.
- List everyone with access across a team and its subteams, one row per person, on Enterprise and Internal plans. `sf teams people` and `listTeamExternalAccessPeople` (`GET /v1/teams/{teamId}/external-access/people`) cover members, pending team invitations, people invited to Spaces and SSO identities, and can filter by subteam, by kind of access and by people outside your company domains, with a count for each filter. Security & Access responses now include each team's `logo`. When the CLI can't find a team you name, the error now says the team may not exist or the credential may not be able to read it.
- Space thumbnails no longer carry a link that opens a private Space. `thumbnail.sourceUrl` is removed, and `thumbnail.url` points at the new `getSpaceThumbnail` operation, which returns the image to callers who can read the Space's content.
- Add `getIpRanges`, which returns the shared WordPress VIP IPv4 and IPv6 prefixes for Spacefast's API and worker region. Integrations can use them as a network filter alongside request authentication.
- Team-account connector roles serve only Spaces that need a sign-in by default. On a Space that is public or shared by link or password, a team role reports `needs_public_serving_ack` until a team owner or admin allows it with `setSpaceConnectorPublicServing` or `sf connectors public-serving set <role> --enable`. Anyone who can open such a Space can then read through that team account. Visitor roles are unchanged. MCP asks before running `setSpaceConnectorPublicServing`. Personal-account roles now also treat `access` set in sf.jsonc as public: on such a Space a personal role reports `forbidden`, as it already did on Spaces made public in settings. Its binding stays until the config file stops making the Space public; only access changed in settings or the API removes personal bindings. Personal roles also turn off on a Space shared by link or password, since whoever holds the link would read through that personal account. Existing bindings stay and serve again once the link or password is gone.
- Show referral Space unlocks in plan policy, publish guidance and quota recovery. Add the team-wide opt-in referral chip setting.
- Let a parent team share its design system with subteams. Parent teams turn it on with `designSystemSharedWithSubteams` in team settings. A subteam with no system of its own uses the parent's, read-only. It can adopt it or override it with `changes.parentSystem` on `updateTeamDesignSystem`, which copies the parent's system when the subteam has none, and go back later. Agents say in one line whose design system they will use, or that there is none. Agents connected through MCP alone now read team context and fetch brand files before they build, because the rule to do so moved to the top of the MCP instructions and into the publish tool.
- App sign-in's Spacefast part is now named Sign in with Spacefast; "Access" now means sharing (Spacefast Share). In the Users settings API and SDK, `access.spacefastAccess` and `accessAvailability.spacefastAccess` are now `signInWithSpacefast`, and `sf users settings --spacefast-access` is now `--sign-in-with-spacefast`. The flat `settings` and `availability` fields that released CLIs read and send are unchanged.
- Expose primary-domain email setup and DNS readiness through the API catalog. Custom primary domains on Spacefast DNS are configured automatically through durable operations; sending is enabled after authentication verifies.
- Space Users settings have one stored shape again. `config.users` is always the flat `{ enabled, providers }` shape that released CLIs read. In the Users settings API, `access.signInWithSpacefast` on now needs `access.zeroUsers.enabled`. The two-part stored-config schema and its helpers are removed from `@spacefast/common/contracts/space-users`.
- Add team email-domain management, resettable join links, and self-service joining to the CLI and API contracts. Join links guide teammates through verifying a work email or enabling two-factor authentication while preserving the team's existing join permissions.
- Add parent-managed recipient settings for Space access-change emails and a personal opt-in for other team Spaces' access changes.

#### Patch Changes

- Preserve existing API clients' thumbnail fields, connector scopes and owner enums. Keep the MCP operation catalog stable while the library reads thumbnail bytes through its existing App tool.
- Keep normalized dashboard return paths on the same origin and redact invitation proofs from analytics URLs.

  Retire CLI-only request-client policy conditions while preserving fail-closed behavior for stored policies.

- Keep build logs updating after reconnect when the server reuses positions in its rolling log window. Suppress retained log sequences in CLI replays, including entries that shifted positions, while position-based views receive the full current window.

  Cancel the response and release its reader when a stream callback fails, preserving the callback error even if transport cleanup fails.

- Make rollback rewrite refresh explicit in MCP guidance and SDK examples. Restore saved versions exactly when API callers omit refreshRewrites, so released clients can keep waiting for the version they selected.
- Join link previews name the parent team of a subteam and report `parent_membership_required` or `subteams_unavailable` when a matching company email still cannot join.
- A team space's general access is now Private or Public. Private means everyone on the owning team can view it, and people, share links, passwords and machine credentials are added on top; the separate `team` preset is gone. `access: "team"` and `newSpaceGrantPreset: "team"` are still accepted as legacy spellings of `private`, and `getTeamAccessDefaults` now reports only `private` or `public`. New team spaces no longer get a durable "Open" share link in updated clients. `POST /v1/spaces` omits `access` only when the caller sends `capabilities: ["optional_access"]`; older clients retain a real Open-link receipt during rollout. Publish receipts omit `access` unless the space has a link. An anonymous space's Open link keeps its pre-claim expiry after it is claimed. `sf publish --access` takes `private` or `public`, and `sf teams defaults` takes the same.
- Teams can allow private spaces only and hide every space from search engines. `getTeamAccessDefaults` reports `privateSpacesOnly`, `noindex` and `publicSpaceCount`; `setTeamAccessDefaults` changes only the fields sent, and the two team switches change only from a dashboard session (other credentials get `interactive_session_required`). While a team is private only, public Grants, `access: "public"` creates and public new-space defaults fail with `team_private_spaces_only`, and turning it on makes the team's public spaces private. Spaces report `teamAccessPolicy`, and their `noindex` is true whenever the team hides its spaces; turning it off for such a space fails with `team_requires_noindex`. `sf teams defaults` shows both switches and the public-space count.
- Keep credentials and private CLI submissions bound to the selected API provider. Verify Git exclusion before saving checkout secrets and keep partner queries within their configured scope.
- Open published docs by slug or path and browse the available repository when no connection type is specified. Share links choose a permitted landing page when one is omitted. MCP error summaries now show the API problem code and session events record failed tool calls.
- `getApproval` now returns `rollback` for a version rollback approval: the Space and the `ref` of the version that was live and the version it goes back to. It is `null` for every other approval, and when the Space is not in one of your teams. `@spacefast/common` exports `VERSION_ROLLBACK_PURPOSE_CODE`.
- Keep duplicated artifacts separate from executable project inputs, enforce local build isolation for Netlify plugins, and preserve filesystem containment while reading and writing CLI artifacts.
- Add Show & Tell contracts for submission, discovery, moderation and creator withdrawal through the canonical agent catalog. Approved listings follow the current live Space and respect its sharing permissions. The last approved version is a review baseline only; ordinary retention and deletion stay unchanged. Moderation uses edit, approve, decline and unlist. Customer and moderator skills document these workflows. The feature stays disabled until explicitly enabled.

  Keep optional Sell discovery compatible with APIs that do not yet know newer feature flags.

- Publishing now infers the SPA fallback for every app build, from any client: a root `200.html`, `_shell.html`, or `index.html` beside a JS bundle with no root `404.html`. `fallback` accepts `false` to turn that off. `sf publish --spa false` now writes `"fallback": false`, so the opt-out sticks, and `--spa auto` no longer patches the Space. `@spacefast/common` no longer exports `utils/publish-detection`.
- Uploads now slow down when the upload host resets connections (for example HTTP/2 `NGHTTP2_ENHANCE_YOUR_CALM`), and the reduction applies to the files still in flight instead of only the next page. A failed upload's `upload_transport_error` now names the underlying network error, such as `ERR_HTTP2_STREAM_ERROR`.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.9.0

## 0.8.1

#### Patch Changes

- @spacefast/common@0.8.1

## 0.8.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.8.0

## 0.7.0

#### Minor Changes

- Give agents the same domain-search conversation as the dashboard through `POST /v1/domains/search`, the SDK's `searchDomains`, and MCP's `spacefast.org.session.domains.searchDomains`.

  `sf domains search` now uses the hosted conversation by default. Pass a saved receipt with `--input` to continue it, refine the brief, or apply likes, dislikes, and selections. Use `--local` for offline suggestions.

  Responses retain the full session, stable suggestion IDs, feedback, availability provenance, ranking, and fee-inclusive display prices. If generation reaches its time budget, resume the returned session to finish the same turn. MCP callers should save the full structured result for continuation.

- Simple mode now advertises only operations an agent can call, each with its own description. Operations that need a browser session, the CLI's device login, or a visitor's Frame or comment session are no longer MCP tools in either mode. Domain purchases, renewals, owner details, and plan codes continue in the Spacefast dashboard from simple mode, and the generic WordPress REST and WP-CLI passthroughs stay in full mode. The Domains App searches and hands selected names to the dashboard in simple mode.

  `getBootstrap` is now `getAccount`, `createSpaceZeroToken` is now `createSpaceRestApiToken`, and the MCP comments link helper `writeSpaceComment` is now `getSpaceCommentsLink`. Request paths are unchanged.

#### Patch Changes

- Keep existing website content and runtime declarations when publishing configuration only. Configuration-only publishes stage the evaluated configuration without scanning local content and use the server's retaining version lifecycle.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.7.0

## 0.6.1

#### Patch Changes

- `searchDomains` (`POST /v1/domains/search`) now runs one AI generation batch for a descriptive first brief, matching the dashboard and CLI. It requests up to 12 AI names instead of the previous initial and automatic enrichment batches totaling about 24. Follow-up turns grow the generated pool toward 24 available names; liked and selected names stay protected. Keyword exact matches are unchanged.
- Updated dependencies
  - @spacefast/common@0.6.1

## 0.6.0

#### Minor Changes

- Add ChatGPT plugin entrypoints, a Space Library, an HTML file editor, local file opening, composer mentions, context attachments, chat actions, rich Space selection with previews, native settings, onboarding, and durable MCP event subscriptions. Add searchable Space lists and account-bound plugin preferences. Package the same plugin for local desktop testing.
- Add feature-gated `sourceUrl` publishing through WordPress.com, with durable URL Build receipts and capture progress/evidence. Existing file and archive publishing contracts remain supported.

#### Patch Changes

- Agents that arrive through a handoff link, and any API key a team member created, can now open a Space's content dashboard: the one-use sign-in link signs in the person who created the key. `sf content dashboard` opens the dashboard in your browser, or prints the sign-in link with `--show-secret --json` for an agent to hand you. The handoff document teaches both the CLI and the direct HTTP lane.
- `@spacefast/sdk/query` keeps request bodies in Firefox when it sends to a configured request origin. Firefox has no `Request.body`, so a mutation sent through `setSpacefastQueryRequestOrigin` used to arrive with a JSON content type and no body, and the API answered "Request body must be valid JSON."
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.6.0

## 0.5.1

#### Patch Changes

- Regenerate the Partner API client and TanStack Query bindings from the current Partner API contract. This updates the Atomic API paths and removes account-only operations from the partner client.
- @spacefast/common@0.5.1

## 0.5.0

#### Minor Changes

- Claim a hostname attached to another Space with a unique DNS TXT record, or move it directly when authorized to manage both Spaces. Expose ownership instructions and move status through the API and CLI, including `sf domains check --move`.
- Bind every upload to the API the caller selected, and to the session response
  that API returned. `uploadSessionFiles` now requires `apiUrl`: it is the origin
  a relative target resolves against, and the only non-runtime origin an upload
  may reach. Previously any HTTPS target the session response named was accepted,
  so a substituted target received the caller's bytes and session headers.

  An upload destination now has to satisfy two independent facts, and route shape
  is neither. Its host must be one the session response named (or the selected
  API origin), and it must be a runtime upload endpoint naming the caller's own
  Space or upload session — anything else has to be verbatim a destination that
  session issued. Matching `/spaces/<id>/blobs/<sha>` no longer admits a host: the
  Space id is already in every legitimate target, so it is not a secret and cannot
  establish who receives the bytes. Reaching a trusted origin is likewise not
  enough to reach an arbitrary resource on it.

  This is a breaking change for direct callers of `uploadSessionFiles` from
  `@spacefast/sdk/publish`. Pass the API base URL you already configured for the
  transport; never read it back out of the upload session. Direct callers of
  `assertUploadDestination` in `@spacefast/common/utils/upload-session` must now
  supply `named` — use `uploadSessionDestinations(session)`.

#### Patch Changes

- Reject an unreadable tracked publish operation instead of reporting a completed wait.
- Updated dependencies
  - @spacefast/common@0.5.0
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.5.0

## 0.4.1

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.4.1

## 0.4.0

#### Patch Changes

- @spacefast/common@0.4.0

## 0.3.0

#### Minor Changes

- Add the complete Partner API client, generated schema, OpenAPI document, and
  per-principal TanStack Query family. Partner applications can use all partner
  operations without local code generation, while sharing the SDK's transport,
  errors, retries, envelopes, and publish helpers.

#### Patch Changes

- @spacefast/common@0.3.0

## 0.2.2

#### Patch Changes

- @spacefast/common@0.2.2

## 0.2.1

#### Patch Changes

- Recover a committed finalize instead of reporting failure. When the finalize POST died in flight — a gateway failure, a socket drop, a client deadline — the SDK went straight to observing the version, so a finalize the runtime had already committed but the control plane never recorded left the publish reporting failure over a site that was already live. Finalize is idempotent on both server hops (the control plane answers a repeat call for a ready version with its receipt, and the runtime box holds a ready receipt for a version it committed), so an ambiguous outcome now gets one bounded re-POST first: a committed finalize comes back as the ordinary success receipt in one round trip, and one that never committed is re-driven. Everything the replay cannot settle still falls through to the existing readiness poll.
- Skip uploading blobs the runtime already holds. Before a page of upload targets goes out, the publish driver asks the box which of the declared sha256s it is missing and PUTs only those; the rest are credited to the publish session server-side, so the version still finalizes complete. Pages smaller than eight files skip the negotiation, and any failure falls back to a full upload.
- @spacefast/common@0.2.1

## 0.2.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.2.0

## 0.1.0

#### Minor Changes

- Add the `@spacefast/sdk/query` subpath: a TanStack Query layer generated from the same `openapi.json` that types the rest of the package. Every operation gets `<operationId>Options()`, `<operationId>QueryKey()`, `<operationId>InfiniteOptions()` and `<operationId>Mutation()` factories, alongside a small policy vocabulary (`bySpace`, `byTeam`, `byOperation`, `byTag`, `STALE_TIME_MS`, `cursorPages`) for hierarchical invalidation and cache tiers. Failed calls throw the same `SpacefastApiError` as the hand-written client. `@tanstack/react-query` is an optional peer dependency and only this subpath imports it.

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.1.0

## 0.0.27

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.0.27

## 0.0.26

#### Patch Changes

- @spacefast/common@0.0.26

## 0.0.25

#### Patch Changes

- Use provider-neutral API values: the space database backend is `mysql`, the
  database console provider is `phpmyadmin`, diagnostics attribute infra-origin
  failures to `infra`, team settings expose `infraCapabilities`, and the capsule
  runner compatibility profile is `linux-x86_64-gnu-v1`.
  - @spacefast/common@0.0.25

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

_No noted changes in this release._

## 0.0.13

_No noted changes in this release._

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

_No noted changes in this release._

## 0.0.6

_No noted changes in this release._
