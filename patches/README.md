# Blume patches

Blume 2 hyphenates camelCase operation IDs when generating reference URLs.
Spacefast's published reference URLs are stable contracts, so this patch keeps
the previous OpenAPI slug behavior in both the source model and bundled CLI.

`bun run validate` checks authored links. `bun run verify:routes` checks the built
pages and every generated compatibility redirect. Keep both checks passing when
upgrading or removing the patch.

The patch also drops the **Edit on GitHub** action from pages whose source is
not a file Git tracks. The CLI, error, changelog, and setup references are
materialized from `generated/` at build time, so a link to their overlay path
would be a 404.

`scripts/prepare-generated.mjs` keeps the generated snapshot as it is and
updates provider links that have moved in its overlay copy, so every rendition
(HTML, Markdown, MDX, page JSON, and LLM exports) links to the current page.
Remove an entry once the snapshot carries the new address; the build fails on
an entry no generated page uses. `scripts/emit-headers.mjs` writes the
content-image sandbox rules for their whole directory, because Spacefast
header rules match whole path segments.
