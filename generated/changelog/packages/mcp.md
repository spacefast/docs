---
title: "@spacefast/mcp"
description: "Release history for @spacefast/mcp on npm."
---

Published as [`@spacefast/mcp`](https://www.npmjs.com/package/@spacefast/mcp) on npm.

## 0.10.0

#### Minor Changes

- Choose who can join a subteam. Its `joinPolicy` is `open` (anyone in the parent team joins by themselves), `request` (people in the parent team see it but can't join by themselves; an admin lets them in), or `invite_only` (only people an admin invites or adds get in, and parent-team members who aren't in it don't see it; the parent team's owners and admins still see and run it). New subteams start as `open`. Set it with `joinPolicy` on `updateSubTeam`, `updateTeamSettings`, `createSubTeam` or `POST /v1/teams`, or `sf teams subteams create --join-policy open|request|invite_only`. `GET /v1/me` lists the `request` subteams you are not in under `requestableTeams`, and `joinTeam` answers 403 `join_request_required` for them. `sf teams subteams list` shows who can join each subteam.
- MCP connections can now hold only the access they need. Hosted MCP takes a preset on its one address, `https://mcp.spacefast.com/?access=read` or `?groups=spaces,domains`. Its sign-in asks only for that access, and it narrows every request, even with a broader token. A preset connection lists only the tools it can use and never asks for more. Without a preset nothing changes: every tool is listed, and a call that needs more access asks first. `sf mcp`, `sf mcp proxy`, and `sf mcp install` take the same preset as `--read-only` or `--groups`. `sf login --read-only` is the same as `sf login --access read`.
- Agents can manage a Space's connector roles. `listSpaceConnectorBindings`, `requestSpaceConnectorServing`, and `getSpaceClient` are tools on every MCP runtime. On-Device MCP also lists `bindSpaceConnector`, `unbindSpaceConnector`, `setSpaceConnectorPublicServing`, `listVisitorConnectionUsers`, `revokeVisitorConnection`, and the serving request operations, which need the CLI login's connector access. Binding, unbinding, revoking a visitor connection, changing a role through `updateSpace`, and approving, denying, or requesting site serving pause for the user's approval. The API guide walks the flow from declaring a role to generating the client.
- Ask to join a subteam that takes requests with `sf teams join`, and review requests with `sf teams join-requests list`, `approve` and `deny`. Agents and CLI logins that act as a person can ask with `createTeamMembershipRequest` and read their own requests, and a key approved on the parent team can review a subteam's requests. An agent approved there answers them only when its person administers the subteam.
- Read and change a Space's database rows from MCP, the CLI and the API, on any runtime: `listSpaceDatabaseTables`, `listSpaceDatabaseRows`, `createSpaceDatabaseRows`, `updateSpaceDatabaseRows` and `deleteSpaceDatabaseRows`, and `sf db tables` and `sf db rows list|add|update|delete`. Rows are found by primary key and each write is one transaction. An MCP delete waits for the person's approval and `sf db rows delete` asks for confirmation; the API applies a delete directly to a caller with write access. Spacefast's own tables are refused, and secrets read as `[redacted]`.
- Let a subteam use no design system. On a subteam whose parent shares one, `changes.parentSystem: "none"` on `updateTeamDesignSystem` turns it off and keeps any system the subteam saved. `getTeamDesignSystem` reports `source.active: "none"`, agents get no design system, and saves return `team_design_system_off` until the subteam adopts the parent's or overrides with its own.
- Every member of an Enterprise or Internal parent team can read weekly publishing activity for their team and its subteams, and export it as CSV. Add the `getTeamSubteamUsage` operation.
- Teams can block share links with `blockShareLinks` on `setTeamAccessDefaults`. A parent team's block applies to every subteam. An agent that turns the block off now pauses for a person's approval, then retries the same request once it's approved.

#### Patch Changes

- MCP guidance now covers the team activity log: which operations read and export it, the `activity:read` gate on Enterprise and Internal teams, and how to read `staffAction` and `supportSession`.
- The approval card reads its approval once. A host that delivers the same result again, for example ChatGPT when its globals change, no longer starts another read or drops the read in flight.
- An operation that pauses for approval now names the exact `resume_execution` call, with its execution ID, in the result text. Agents in hosts that show only the text can open the approval instead of reporting that it never arrived.
- Explain Claude's Send step before and after an approval, and simplify the follow-up message while preserving safe execution resuming.
- Deleting a Space with Agent access now shows Spacefast's temporary-access approval as a clear second step, with an Open approval page button, instead of a "Browser needed" fallback. The delete card warns that this step may follow. When MCP knows the API's dashboard, the link opens the reusable approval page, so it still works after the first click; a custom API without a configured dashboard keeps the API's one-use link. Hosts that cannot open links show the full address to copy.
- When a host can't show the Domains App, `show_domains` now returns `checkoutUrl` for the owning team. The agent settles the team first, agrees on names with the person, and sends them to that checkout with the names, where they add owner details and pay. It used to point them at the dashboard, which no longer has an in-browser search to buy from.
- The Domains App now starts the purchase for the names you pick. It uses your saved owner details, or asks for them in the App. Your team's saved card pays when the connection can buy for the team. Otherwise you confirm the purchase on Spacefast. Hosts that support MCP events can subscribe to `domain.checkout_paid`, so the agent continues when the purchase is paid.
- When someone in several teams opens `show_domains` before choosing a team, its `dashboardUrl` now points at `/~/domains`, which opens the dashboard's team picker and then that team's Domains. It used to point at `/domains`, the public domain front door.
- `sf tags`, `sf sell` and `sf oauth-apps` show up in help again for teams that have the feature, for the command groups each CLI version ships. The CLI and MCP now read only the feature flags they need from the API, so a flag the API adds or removes no longer hides them. The commands always worked when typed by name; only their listing in help was missing.

  How a released CLI recovers once the server is updated (measured on the published 0.0.26, 0.2.2, 0.4.1, 0.5.0, 0.8.0 and 0.9.0):

  - CLI 0.5.0 and 0.8.0 ask the server during help and list the commands in plain `sf --help` again right away.
  - CLI 0.0.26, 0.2.2 and 0.4.1 also ask during help, but their plain `sf --help` shows a short list without them. `sf --help --all` lists them, and `sf help tags` works either way.
  - CLI 0.9.0 does not ask during help. A gated command run by name (for example `sf tags templates`) asks the server first unless `SPACEFAST_CLI_EARLY_ACCESS` names it or the saved list is fresh (under 24 hours) and includes it. An ordinary command such as `sf whoami` refreshes the saved list in the background when stderr is a terminal, the list is missing or older than 24 hours, and the CLI has a credential it can use. When the server's answer is rejected, the CLI keeps the grants it had and moves the list's timestamp forward. So a 0.9.0 that saved an empty list while the server answered with the full registry lists these commands in help once one of those refreshes succeeds and saves the team's grants. Running a command with `SPACEFAST_CLI_EARLY_ACCESS` set does not refresh the list.
  - A wrapper whose `SPACEFAST_CLIENT` has no version (`acme-ci`) or names the version it really runs works. One that names a version the server does not know, or a release whose feature list differs from the running one, keeps the commands out of help, though they still run by name. Drop the version from `SPACEFAST_CLIENT`, or upgrade the CLI.

  These two entries advance every package in the fixed release group (28 packages, `.changeset/config.json`), not only these two.

- Inline Functions files publish as source, and the platform builds the worker. A change to one route rebuilds the worker from the source the Space already holds.
- Guide agents through reading and editing a claimed Space's database rows with named MCP tools, approval for deletes, and safe handling of uncertain writes. Refresh the ChatGPT directory package guidance.
- The Space Library's preview read returns `status: "ready" | "pending"` and treats the API's 503 while a first capture renders as `pending`, instead of guessing from a placeholder image's size.
- Mark `getTeamJoinLink` as a write in the MCP catalog because its first call creates the link. The API keeps its existing GET contract.
- Make dropdown options in the MCP Apps readable in dark mode, and have the Domains App ask for a team before it says no names were found.
- MCP Apps now tell the host model which Space, file, table, version, domain, or comment thread is open, and give it a few read-only tools to read and move around each view. The tools also register through WebMCP for hosts that use it.
- Polish the MCP Apps. Once a publish finishes, the publish card drops its progress block and says who can open the Space under Visibility instead of repeating that it is live. A subteam's Space names its parent team ("Everyone in Acme Studios"), from the new optional `audience.parentTeamName` in the publish receipt. A running publish fills its bar with the brand green. The Space Library shows one count per team, with a little more room between rows and a plainer subtitle. Search fields clear with the product's X, link buttons use an arrow pointing up and right, and a domain row shows its setup steps only while that domain is still being set up.
- The `getPricing` tool now returns the pricing catalog. Before, secret masking changed the two claim-page durations from numbers to text, and every call failed output validation. OAuth app tools now keep `tokenEndpointAuthMethod` as its enum value for the same reason.
- On-Device MCP no longer rejects an operation result because the API added a field or an enum value since the release. Results are still checked for their required fields and types. Add the `mcp_client_upgrade_required` error, which the API returns to a released MCP build when a result can't be shown truthfully in the shape that build understands.
- A signed-out hosted MCP connection now offers only the sign-in tools its `?access=` or `?groups=` preset allows. `?access=read` no longer lists `publish` before sign-in. A preset that allows none of them, such as `?groups=domains`, gets the sign-in challenge directly.
- Review a departing team member's connections and affected Space bindings before removal. Add `sf teams members offboarding`, the shared offboarding response contract, and the `getTeamMemberOffboarding` API operation. The operation catalog exposes the review to tools, and guidance explains how to replace bindings before removal.
- `@spacefast/image` no longer builds screenshot-service URLs (`mshotsUrl`, `MShotsOptions`, `DEFAULT_MSHOTS_OPTIONS`, `MSHOTS_HOST`); the API's capture module is the only code that names a capture service. New `getPageScreenshot` (`?url=<page>&version=<served version>`) serves a public page's 1200x630 social card for its `og:image`, cacheable for a day. Any page that is not public, is not served as HTML, or whose version is not the one its hostname serves now is a miss. The Space Library preview reads say `pending` while a screenshot renders instead of probing a placeholder.
- Report who can view a newly published Space and where to change its audience, using saved sharing grants in API, MCP, and CLI receipts.
- List Spaces shared through invitations and sign-in alongside team Spaces, with access source and role. Add a team-only filter and keep management target selection within that scope.
- Telemetry stays internal: Spacefast turns it on for a team, and that team's editors can then turn tracking on per Space through the dashboard, experimental CLI API, or MCP operations.
- Zero 0.8 apps publish as Zero 0.8 again, on new Spaces too. `sf publish`, `sf build` and the MCP `publish` tool no longer convert a Zero 0.8 app, and `sf init --runtime zero` writes a Zero 0.8 starter again. Publishes no longer carry a deprecation notice. New zero.config.ts apps aren't available yet: `sf zero init`, `sf zero import` and `sf zero migrate` are hidden, `sf zero migrate app` is gone, and the API refuses a zero.config.ts app with `zero_config_unavailable` unless its Space already runs one. When Zero 0.8 publishing is turned off, the API refuses new 0.8 versions with `zero_upgrade_required`; deployed 0.8 apps keep serving.
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
  - @spacefast/common@0.10.0
  - @spacefast/sdk@0.10.0
  - @spacefast/routing@0.10.0
  - @spacefast/zero@0.10.0
  - @spacefast/zero-compile@0.10.0
  - @spacefast/builders@0.10.0

## 0.9.0

#### Minor Changes

- Links an agent hands you now open the Spacefast dashboard already signed in as you, on the exact page: approvals, domain search and checkout, and Spaces. Add the `createDashboardLink` operation to mint one.
- `askDocs` now takes one `question`, with an optional docs page `path`, at `POST /v1/docs/answer`. The docs site's Ask AI chat keeps `POST /v1/docs/ask` as `continueDocsConversation`. MCP no longer offers `continueDomainConversation`, `classifyDomainMessage` or `continueDocsConversation`; agents find domain names with `searchDomains` from one naming brief. Website capture with `sourceUrl` through an OAuth grant or the hosted MCP server needs a domain the team controls in Spacefast, and fails with `source_url_domain_unverified` otherwise.
- Taking a domain from another Space now always takes the claim's TXT record. `sf domains check --move` and the `move` body on the verify call are gone: if you manage both Spaces, remove the domain from one and add it to the other. A pending claim reserves nothing and no longer expires, so the `ownership` field on Space domains drops `expiresAt` and `moveAvailable`.
- Hosted and On-Device MCP now serve the same skills as `spacefast/plugins` through `skills/list`, `skills/get`, and standard resource reads. Clients can verify each file against the digest in its manifest. The CLI proxy now forwards the resource URI when reading skill files.
- Every tool sign-in now goes through device login. The MCP `cli_login` tool returns a one-use code for `sf login --device-code` instead of a handoff link for `sf login --handoff`; the CLI key still joins the MCP connection's grant and signs out when you disconnect. On-Device MCP (`sf mcp`, the Claude Desktop extension) gains a `sign_in` tool that shows a link and a code, replaces a revoked or expired login, and saves the approved login for the CLI on the same computer, so the extension no longer asks for a pasted API key. An API key saved in an earlier version of the extension is no longer used: ask Claude to sign you in once.
- List everyone with access across a team and its subteams, one row per person, on Enterprise and Internal plans. `sf teams people` and `listTeamExternalAccessPeople` (`GET /v1/teams/{teamId}/external-access/people`) cover members, pending team invitations, people invited to Spaces and SSO identities, and can filter by subteam, by kind of access and by people outside your company domains, with a count for each filter. Security & Access responses now include each team's `logo`. When the CLI can't find a team you name, the error now says the team may not exist or the credential may not be able to read it.
- Team-account connector roles serve only Spaces that need a sign-in by default. On a Space that is public or shared by link or password, a team role reports `needs_public_serving_ack` until a team owner or admin allows it with `setSpaceConnectorPublicServing` or `sf connectors public-serving set <role> --enable`. Anyone who can open such a Space can then read through that team account. Visitor roles are unchanged. MCP asks before running `setSpaceConnectorPublicServing`. Personal-account roles now also treat `access` set in sf.jsonc as public: on such a Space a personal role reports `forbidden`, as it already did on Spaces made public in settings. Its binding stays until the config file stops making the Space public; only access changed in settings or the API removes personal bindings. Personal roles also turn off on a Space shared by link or password, since whoever holds the link would read through that personal account. Existing bindings stay and serve again once the link or password is gone.
- Show referral Space unlocks in plan policy, publish guidance and quota recovery. Add the team-wide opt-in referral chip setting.
- Let a parent team share its design system with subteams. Parent teams turn it on with `designSystemSharedWithSubteams` in team settings. A subteam with no system of its own uses the parent's, read-only. It can adopt it or override it with `changes.parentSystem` on `updateTeamDesignSystem`, which copies the parent's system when the subteam has none, and go back later. Agents say in one line whose design system they will use, or that there is none. Agents connected through MCP alone now read team context and fetch brand files before they build, because the rule to do so moved to the top of the MCP instructions and into the publish tool.

#### Patch Changes

- Preserve existing API clients' thumbnail fields, connector scopes and owner enums. Keep the MCP operation catalog stable while the library reads thumbnail bytes through its existing App tool.
- Comment links from Spacefast's MCP Apps and agents now open the Space's comments signed in as you, on the exact thread. `createDashboardLink` gains a `comments` target. `getSpaceCommentsLink` returns the same signed-in link and stays available for older skills that call it by name.
- Check the names a user asks for against the live registry: the typed name and its instant matches (including two words joined, such as `sorta music` → `sortamusic.com`), plus selected and liked names. A stale zone-file result can no longer mark those taken. Generated suggestions keep the cheaper zone-file check, and checkout still confirms every name live.

  Explain the agent-to-browser checkout handoff before navigation: owner details and payment stay out of chat, selected domains carry over, and selection does not complete a purchase.

- Make rollback rewrite refresh explicit in MCP guidance and SDK examples. Restore saved versions exactly when API callers omit refreshRewrites, so released clients can keep waiting for the version they selected.
- Group the plugin's Space Library into labeled team sections. Add server-side team filtering for larger libraries, keep the selected team during search and pagination, and omit the filter for complete libraries with at most three teams and five Spaces per team.
- Report MCP request metadata without tool payloads or resource URIs. Gate On-Device reporting on the current CLI disclosure and bound hosted analytics identity lookup latency.
- MCP no longer lists the space-key claim operations (`claimSpace`, `exchangeSpaceClaim`, `rotateSpaceKey`, `getSpaceClaimStatus`, `createSpaceClaimReminder`, `readAnonymousPublishOperation`). A Space published anonymously is claimed in the browser through its claim link, and On-Device publish still exchanges its saved key after the claim. The CLI and API keep these operations. Hosted MCP tool descriptions, the `publish` result schema, and server instructions no longer describe the claim flow.
- Preserve upload authorization headers in immediate upload instructions while keeping saved output redacted.
- The MCP domain progress panel and domain SDK treat absent TXT challenges and successful TXT proof as completed ownership independently of pending HTTPS. Domain guidance distinguishes legacy inventory proof, native inventory status, compatibility overlays, and Space-attachment provider readiness.

  Forward TXT challenge diagnostics through the MCP tool response without turning an absent older-API field into a completed challenge. Attachment failures keep the overall MCP domain state in setup-needed even when ownership is complete or a certificate is active.

  MCP and the domain SDK still wait for Spacefast DNS zone proof when no hostname TXT challenge is required, preserving pending ownership and the zone's ownership instructions.

  An existing provider certificate does not make a pending Space attachment ready: MCP keeps checking, and the domain SDK waits for attachment readiness even after ownership completes.

- Name every feature short of general availability "Private Beta", on every surface. The Labs stage label no longer distinguishes public, private, or waitlisted previews, and a marketplace listing that is not live yet stays out of setup pages instead of showing as "Soon". A `SetupMethodCard` handed an unlisted method says "Not available yet".
- A team space's general access is now Private or Public. Private means everyone on the owning team can view it, and people, share links, passwords and machine credentials are added on top; the separate `team` preset is gone. `access: "team"` and `newSpaceGrantPreset: "team"` are still accepted as legacy spellings of `private`, and `getTeamAccessDefaults` now reports only `private` or `public`. New team spaces no longer get a durable "Open" share link in updated clients. `POST /v1/spaces` omits `access` only when the caller sends `capabilities: ["optional_access"]`; older clients retain a real Open-link receipt during rollout. Publish receipts omit `access` unless the space has a link. An anonymous space's Open link keeps its pre-claim expiry after it is claimed. `sf publish --access` takes `private` or `public`, and `sf teams defaults` takes the same.
- Space thumbnails no longer carry a link that opens a private Space. `thumbnail.sourceUrl` is removed, and `thumbnail.url` points at the new `getSpaceThumbnail` operation, which returns the image to callers who can read the Space's content.
- Keep credentials and private CLI submissions bound to the selected API provider. Verify Git exclusion before saving checkout secrets and keep partner queries within their configured scope.
- Isolate authored page compilation from host capabilities and restrict saved MCP receipts to the authority that completed them.
- Open published docs by slug or path and browse the available repository when no connection type is specified. Share links choose a permitted landing page when one is omitted. MCP error summaries now show the API problem code and session events record failed tool calls.
- Keep duplicated artifacts separate from executable project inputs, enforce local build isolation for Netlify plugins, and preserve filesystem containment while reading and writing CLI artifacts.
- Publishes stop failing for reasons that are not the author's: declared Functions compile for every server-side file publish, five-field crontab schedules run at their closest basic schedule with a warning, and a saved settings fallback the version does not ship is ignored with a warning.
- Source workspaces can import uploads larger than 4 MiB. When creating a workspace imports an upload, the import runs in the background: wait for the returned operation, then read the workspace status before editing.
- Move Telemetry into Labs with application enrollment. Approved teams can turn tracking on per Space through the dashboard, experimental CLI API, or MCP operations.
- Space previews opened from MCP Apps now use Review in new window instead of trying to nest the deployed Space in a client iframe. Stale visual reviews stop polling after a terminal access error, while transient service failures keep refreshing.
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
  - @spacefast/sdk@0.9.0
  - @spacefast/builders@0.9.0
  - @spacefast/routing@0.9.0
  - @spacefast/zero-compile@0.9.0
  - @spacefast/zero@0.9.0

## 0.8.1

#### Patch Changes

- Domain prices in MCP results are now the registrar's quote as is. Spacefast no longer adds its own 20¢ ICANN fee on top of generic TLDs.
- `search_connector_tools` takes an optional `team` on search, execute, and resume, so a login that can act for more than one team can use its connected services. The tool sends it as the Connectors API's `team` query, and the API still decides access. A paused run's resume prompt includes the same team.
- On-Device MCP publishes a local folder on macOS again. Operation tools whose request body has no required fields now accept a call without `body`, and tools with a JSON body no longer offer a `contentType` input for form encodings of the same body.
- Spacefast MCP now serves one tool per API operation, named by its operation ID, on every connection. Code mode is gone: the `?codemode=` server URL parameter, the `spacefast://skills/execute` guide, and the hidden `sf mcp --mode` flag are removed, and the `search` and `execute` tools run nothing. A client that cached them gets a message to refresh its tool list and call operation tools instead of a "tool not found" error. Read `spacefast://skills/api` for the calling guide.
- MCP keeps serving when Sell availability cannot be read: it lists Sell tools from the credential's last answer, or hides them until a read succeeds, instead of failing initialize and every tool list.
- Domain search and registration now cover 377 TLDs, up from 29. Names on extensions like `.band`, `.club` or `.cool` get a live price and can be bought instead of showing as unavailable. `.io` and `.ai` are no longer offered for new registrations.
- The Spacefast CLI and `@spacefast/mcp` now declare Node.js 22.19.0 or newer. Their dependencies already required it, so installing on Node 20 printed a wall of `EBADENGINE` warnings while the packages claimed to support it.
- @spacefast/builders@0.8.1
  - @spacefast/common@0.8.1
  - @spacefast/routing@0.8.1
  - @spacefast/sdk@0.8.1
  - @spacefast/zero@0.8.1
  - @spacefast/zero-compile@0.8.1

## 0.8.0

#### Minor Changes

- MCP now exposes one Cloudflare-style code-mode surface: `search` finds and describes Spacefast API operations without calling them, and `execute` calls them, alongside `resume_execution`, `publish`, and the MCP Apps. Simple and full modes, `SPACEFAST_MCP_MODE`, and the per-operation tools are removed. `sf mcp` and `sf mcp proxy` accept and ignore `--mode`, so agent configs written by CLI 0.7.0 keep starting. The connector gateway (`search_connector_tools`) is removed from hosted MCP, and hosted OAuth no longer grants connector scopes. On-Device MCP served by the CLI (`sf mcp` and the Claude Desktop extension) keeps the gateway and runs it on the CLI login; `sf mcp proxy` relays hosted MCP, so it does not. The hosted server ignores a `mode` query parameter, so hosted MCP URLs saved with `?mode=full` keep working when clients connect to them directly. Dashboard-only operations stay out of the agent catalog: domain purchases, registration details, owner contacts, plan codes, and the generic WordPress REST and WP-CLI passthroughs. The dashboard, the CLI, and the API keep them, and the Domains App hands registration and payment to the dashboard.

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.8.0
  - @spacefast/builders@0.8.0
  - @spacefast/routing@0.8.0
  - @spacefast/sdk@0.8.0
  - @spacefast/zero@0.8.0
  - @spacefast/zero-compile@0.8.0

## 0.7.0

#### Minor Changes

- Give agents the same domain-search conversation as the dashboard through `POST /v1/domains/search`, the SDK's `searchDomains`, and MCP's `spacefast.org.session.domains.searchDomains`.

  `sf domains search` now uses the hosted conversation by default. Pass a saved receipt with `--input` to continue it, refine the brief, or apply likes, dislikes, and selections. Use `--local` for offline suggestions.

  Responses retain the full session, stable suggestion IDs, feedback, availability provenance, ranking, and fee-inclusive display prices. If generation reaches its time budget, resume the returned session to finish the same turn. MCP callers should save the full structured result for continuation.

- Make simple mode the default for hosted MCP and `sf mcp`. Simple mode exposes individual first-party operations and disables the connected-service gateway. Use `?mode=full` for hosted connections or `sf mcp --mode full` to keep code execution and connected-service tools. Native plugin connections now select full mode explicitly, and skills, prompts, and Apps follow the selected mode.
- Simple mode now advertises only operations an agent can call, each with its own description. Operations that need a browser session, the CLI's device login, or a visitor's Frame or comment session are no longer MCP tools in either mode. Domain purchases, renewals, owner details, and plan codes continue in the Spacefast dashboard from simple mode, and the generic WordPress REST and WP-CLI passthroughs stay in full mode. The Domains App searches and hands selected names to the dashboard in simple mode.

  `getBootstrap` is now `getAccount`, `createSpaceZeroToken` is now `createSpaceRestApiToken`, and the MCP comments link helper `writeSpaceComment` is now `getSpaceCommentsLink`. Request paths are unchanged.

#### Patch Changes

- New Spacefast logo: a star followed by lowercase "spacefast", upright, in one color. `SPACEFAST_WORDMARK_PATH` and `SPACEFAST_WORDMARK_VIEW_BOX` now draw it on a tight `0 0 127 20` viewBox. The star on its own is the new mark: `SPACEFAST_MARK_PATH` on `SPACEFAST_MARK_VIEW_BOX` (`0 0 24 24`) replaces the `SPACEFAST_ICON_*` "SF" letter geometry, which is removed. `SPACEFAST_BRAND_COLORS` drops the lime `shadow`. The full-bleed icon export moves from `brand-assets/spacefast-sf-full-bleed.svg` to `brand-assets/spacefast-icon.svg`. The MCP Space library's sidebar icon is now the star.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/sdk@0.7.0
  - @spacefast/common@0.7.0
  - @spacefast/zero@0.7.0
  - @spacefast/zero-compile@0.7.0
  - @spacefast/builders@0.7.0
  - @spacefast/routing@0.7.0

## 0.6.1

#### Patch Changes

- `spacefast.org.session.domains.searchDomains` now runs one AI generation batch for a descriptive first brief, matching the dashboard and CLI. It requests up to 12 AI names instead of the previous initial and automatic enrichment batches totaling about 24. Follow-up turns grow the generated pool toward 24 available names; liked and selected names stay protected. Keyword exact matches are unchanged.
- Updated dependencies
  - @spacefast/common@0.6.1
  - @spacefast/builders@0.6.1
  - @spacefast/routing@0.6.1
  - @spacefast/sdk@0.6.1
  - @spacefast/zero@0.6.1
  - @spacefast/zero-compile@0.6.1

## 0.6.0

#### Minor Changes

- Add ChatGPT plugin entrypoints, a Space Library, an HTML file editor, local file opening, composer mentions, context attachments, chat actions, rich Space selection with previews, native settings, onboarding, and durable MCP event subscriptions. Add searchable Space lists and account-bound plugin preferences. Package the same plugin for local desktop testing.
- Show the Space Library as a grid of page previews on wide panes; narrow panes keep the list. An opened Space shows when it went live, its runtime, and its source, plus Next steps that send a ready prompt to the chat: review it visually, make a change, use your own domain, open the WordPress admin, share it, and show deployments or traffic.

#### Patch Changes

- Agents now ask once whether to send feedback to Spacefast when a task ends after an error, retry, workaround, or other friction. A yes covers later friction in the same conversation; a no stops the question. The MCP server instructions carry the same rule as the skills and setup document.
- Clear removed host presentation settings in ChatGPT Apps. Save MCP delivery with build, deployment, and domain lifecycle transitions. Search file-owned Space names and preserve existing webhook URL behavior.
- Ask your agent for an admin panel, dashboard, or CMS to manage a Space's content, and it opens the Space's WordPress dashboard for you instead of building one. The agent creates a one-use sign-in link with `createSpaceContentAdminLink`: no password, expires in 10 minutes, signs you in as the Space's administrator or editor. If your page is plain static files, the agent offers to move it to Zero: your posts go into the dashboard, the page lists them live, and dashboard edits land back in the Space's source and deploy. Nothing moves until you say yes.
- Return the Spacefast API's own error when `execute` gets a 401 or 403, instead of a generic "re-authenticate the connection" failure that pointed agents at `executor.coreTools.*` tools the MCP never provides.
- Add a Recover button to MCP App errors with the saved execution and result details. Preserve error reasons, validate publish manifests before approval, and distinguish new Spaces from updates in approval cards.
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
  - @spacefast/common@0.6.0
  - @spacefast/sdk@0.6.0
  - @spacefast/zero@0.6.0
  - @spacefast/builders@0.6.0
  - @spacefast/routing@0.6.0
  - @spacefast/zero-compile@0.6.0

## 0.5.1

#### Patch Changes

- Clarify that hosted MCP publishing requires authentication and that anonymous publishing creates private bearer previews. Remove instructions that restrict the use of other services, and require Space ownership before serving share-preview images without an access credential.
- Updated dependencies
- Updated dependencies
  - @spacefast/zero-compile@0.5.1
  - @spacefast/sdk@0.5.1
  - @spacefast/common@0.5.1
  - @spacefast/routing@0.5.1
  - @spacefast/zero@0.5.1

## 0.5.0

#### Minor Changes

- Agents see fewer, sharper MCP tools. Work mode, visual review feedback, page screenshots, and traffic rules now run inside `execute`, which also teaches agents to show screenshots as images. The build log view no longer reopens while a build runs, and the database view drops its console button: use `sf db console` or the dashboard. The prompt menu adds a tour, visual review, source browsing, and guided workflows for domains, sharing, rollbacks, and failed builds.
- Claim a hostname attached to another Space with a unique DNS TXT record, or move it directly when authorized to manage both Spaces. Expose ownership instructions and move status through the API and CLI, including `sf domains check --move`.

#### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.5.0
  - @spacefast/routing@0.5.0
  - @spacefast/zero@0.5.0
  - @spacefast/sdk@0.5.0
  - @spacefast/zero-compile@0.5.0
- Fix CLI domain and storage lists and the MCP Space domains view to read the API response shapes returned by the shared transport.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/zero-compile@0.5.0
  - @spacefast/common@0.5.0
  - @spacefast/sdk@0.5.0
  - @spacefast/zero@0.5.0
  - @spacefast/routing@0.5.0

## 0.4.1

#### Patch Changes

- Updated dependencies
  - @spacefast/zero-compile@0.4.1
  - @spacefast/common@0.4.1
  - @spacefast/routing@0.4.1
  - @spacefast/sdk@0.4.1
  - @spacefast/zero@0.4.1

## 0.4.0

#### Minor Changes

- Add hosted MCP tools to import a Claude Design HTML bundle from its URL and check a pending import.

#### Patch Changes

- Declare explicit JSON types in MCP tool outputs to fix schema portability warnings while preserving scalar, array, object, and null execution results.
- Show contextual file diffs, source commits, and build details in approval cards. Preserve the reviewed action after a decision, bind each decision to its exact pause, and connect workspace files, staged changes, history, and build logs in MCP Apps.

  Allow the authenticated MCP proxy to use local development hosts under `.localhost` and the IPv6 loopback address.

- @spacefast/common@0.4.0
  - @spacefast/routing@0.4.0
  - @spacefast/sdk@0.4.0
  - @spacefast/zero@0.4.0
  - @spacefast/zero-compile@0.4.0

## 0.3.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/zero-compile@0.3.0
  - @spacefast/sdk@0.3.0
  - @spacefast/common@0.3.0
  - @spacefast/routing@0.3.0
  - @spacefast/zero@0.3.0

## 0.2.2

#### Patch Changes

- @spacefast/common@0.2.2
  - @spacefast/routing@0.2.2
  - @spacefast/sdk@0.2.2
  - @spacefast/zero@0.2.2
  - @spacefast/zero-compile@0.2.2

## 0.2.1

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/sdk@0.2.1
  - @spacefast/common@0.2.1
  - @spacefast/routing@0.2.1
  - @spacefast/zero@0.2.1
  - @spacefast/zero-compile@0.2.1

## 0.2.0

#### Patch Changes

- Consolidate the MCP docs surface into a single `search_docs` tool: a query that is exactly one page's slug or path now returns that page in full, replacing `get_page`.
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.2.0
  - @spacefast/routing@0.2.0
  - @spacefast/sdk@0.2.0
  - @spacefast/zero@0.2.0
  - @spacefast/zero-compile@0.2.0

## 0.1.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.1.0
  - @spacefast/sdk@0.1.0
  - @spacefast/routing@0.1.0
  - @spacefast/zero@0.1.0
  - @spacefast/zero-compile@0.1.0

## 0.0.27

#### Patch Changes

- Consolidate the MCP docs surface into a single `search_docs` tool: a query that is exactly one page's slug or path now returns that page in full, replacing `get_page`.
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.0.27
  - @spacefast/routing@0.0.27
  - @spacefast/sdk@0.0.27
  - @spacefast/zero@0.0.27
  - @spacefast/zero-compile@0.0.27

## 0.0.26

#### Patch Changes

- @spacefast/common@0.0.26
- @spacefast/routing@0.0.26
- @spacefast/sdk@0.0.26
- @spacefast/zero-compile@0.0.26

## 0.0.25

#### Patch Changes

- Updated dependencies
  - @spacefast/sdk@0.0.25
  - @spacefast/common@0.0.25
  - @spacefast/routing@0.0.25
  - @spacefast/zero-compile@0.0.25

## 0.0.24

#### Patch Changes

- @spacefast/common@0.0.24
- @spacefast/routing@0.0.24
- @spacefast/sdk@0.0.24
- @spacefast/zero-compile@0.0.24

## 0.0.23

#### Patch Changes

- Pin the Effect Node runtime companion in published installs so strict npm dependency resolution succeeds.
  - @spacefast/common@0.0.23
  - @spacefast/sdk@0.0.23

## 0.0.22

#### Patch Changes

- Ship every hosted MCP import as a runtime dependency so production-only installs can start.
  - @spacefast/common@0.0.22
  - @spacefast/sdk@0.0.22

## 0.0.21

#### Patch Changes

- @spacefast/common@0.0.21

## 0.0.20

#### Patch Changes

- @spacefast/common@0.0.20
- @spacefast/sdk@0.0.20

## 0.0.19

#### Patch Changes

- @spacefast/common@0.0.19
- @spacefast/sdk@0.0.19

## 0.0.18

#### Patch Changes

- Give the clean release declaration build enough heap to complete before npm publication.
- Updated dependencies
  - @spacefast/common@0.0.18
  - @spacefast/sdk@0.0.18

## 0.0.17

#### Patch Changes

- @spacefast/common@0.0.17
- @spacefast/sdk@0.0.17

## 0.0.16

#### Patch Changes

- @spacefast/common@0.0.16
- @spacefast/sdk@0.0.16

## 0.0.15

#### Patch Changes

- @spacefast/common@0.0.15
- @spacefast/sdk@0.0.15

## 0.0.14

#### Patch Changes

- Keep MCP discovery, code-mode guidance, and demo receipts consistently branded as Spacefast.
- Wait for durable hosted MCP session closure before acknowledging DELETE requests.
- Replace Spacefast's custom code execution, durable run, and approval stack with a sandboxed QuickJS runtime and an OpenAPI-generated tool surface. Mutating calls now pause and resume through elicitation; legacy execution and approval APIs are removed.
- Make hosted MCP execution deadlines abort in-flight work, report shell failures, recover expired replay checkpoints, and expose durable execution polling.
- Add Railway-style agent setup with repeated client targeting, optional project-scoped skills, integrated auth health, safe install/update/removal, popular agent consumers, local/remote-proxy/remote-OAuth connection methods, and direct variable, domain, and repository MCP lifecycle tools.
- Add the Spacefast-native code-mode workflow, emitted files, and current approval-resume semantics.
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.0.14
  - @spacefast/sdk@0.0.14

## 0.0.13

- Various bug fixes and improvements.

## 0.0.12

- Various bug fixes and improvements.

## 0.0.11

- Various bug fixes and improvements.

## 0.0.10

- Various bug fixes and improvements.

## 0.0.9

- Simpler install guides for the agent plugins.

## 0.0.8

- Deploys now finish as soon as your update is live.

## 0.0.7

- Removed the deprecated `search` tool. Use `search_docs` instead.
- Unknown tool presets now return a clear error.

## 0.0.6

- Various bug fixes and improvements.
