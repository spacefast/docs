# Blume patches

Blume 2 hyphenates camelCase operation IDs when generating reference URLs.
Spacefast's published reference URLs are stable contracts, so this patch keeps
the previous OpenAPI slug behavior in both the source model and bundled CLI.
Blume has no setting for this, so the patch stays until it does.

`bun run validate` checks authored links. `bun run verify:routes` checks the built
pages and every generated compatibility redirect. Keep both checks passing when
upgrading or removing the patch.

The font patch retains every configured Unicode face while preloading only the
Latin subset for English pages. The hooks patch loads shared navigation only
when an island requests the site snapshot; `scripts/finalize-site.mjs` extracts
that navigation from page HTML into one cacheable file.

The finalizer also normalizes directory URLs across HTML and agent exports,
relocates catalogs out of the forbidden nested dot-directory, and gives exact
REST/Partner contract duplicates one canonical owner. It derives breadcrumb
schema from the visible trail. `verify:routes` verifies the built result.

`scripts/prepare-generated.mjs` copies the verified snapshot and gives history
pages descriptive titles, correctly nested headings, and a concise list of
publications without separate change notes. It never changes `generated/`.
`emit-headers.mjs` adds catalog media types, CORS, and image sandbox rules.
