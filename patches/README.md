# Blume patches

Blume 1.6.0 hyphenates camelCase operation IDs when generating reference URLs.
Spacefast's published reference URLs are stable contracts, so this patch keeps
the previous OpenAPI slug behavior in both the source model and bundled CLI.

`bun run validate` checks authored links. `bun run verify:routes` checks the built
pages and every generated compatibility redirect. Keep both checks passing when
upgrading or removing the patch.
