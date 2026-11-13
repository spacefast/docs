// Only the Spacefast origin or a root-relative /docs path at a path boundary:
// never the /docs inside https://docs.github.com or ./docs-backup.json. Escaped
// whitespace counts as a boundary because built JSON is rewritten as text.
export const docsUrlPattern = /(?:https:\/\/spacefast\.com|(?<=\\[nrt])|(?<![\w.:/-]))\/docs(?![\w.-])(?:\/[^\s,"'<>`\\)\]}]*)?(?:#[^\s,"'<>`\\)\]}]*)?/gu;
