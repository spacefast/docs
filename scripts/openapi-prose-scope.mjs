export function openapiProseScope(pointer) {
  return pointer.startsWith("/paths/~1v0~1atomic-api~1") ||
    /^\/components\/securitySchemes\/atomicApiKey\/(?:description|summary)$/u.test(pointer)
    ? "compatibility"
    : "public";
}

export function openapiProseForChecking(text, pointer) {
  if (openapiProseScope(pointer) !== "compatibility") return text;
  // The provider compatibility contract names these external protocol terms.
  // Mark only those terms as identifiers in the checker input; preserve the
  // exporter-owned public snapshot and every other prose check verbatim.
  return text.replace(/\bwp\.cloud(?:-compatible)?\b|\bweb server\b/giu, (term) => `\`${term}\``);
}
