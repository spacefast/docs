// Canonicalize only identical public contracts, including referenced schemas.
const sorted = (value) => Array.isArray(value) ? value.map(sorted) : value && typeof value === "object" ? Object.fromEntries(Object.keys(value).sort().map((key) => [key, sorted(value[key])])) : value;
const expand = (value, spec, seen = new Set()) => {
  if (Array.isArray(value)) return value.map((item) => expand(item, spec, seen));
  if (!value || typeof value !== "object") return value;
  if (typeof value.$ref === "string" && value.$ref.startsWith("#/")) {
    if (seen.has(value.$ref)) return value;
    const target = value.$ref.slice(2).split("/").reduce((node, key) => node[key.replaceAll("~1", "/").replaceAll("~0", "~")], spec);
    return expand({ ...target, ...Object.fromEntries(Object.entries(value).filter(([key]) => key !== "$ref")) }, spec, new Set([...seen, value.$ref]));
  }
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, expand(item, spec, seen)]));
};
const operations = (spec) => new Map(Object.entries(spec.paths).flatMap(([path, item]) => Object.entries(item).filter(([, operation]) => operation?.operationId).map(([method, operation]) => [operation.operationId.toLowerCase(), { path, method, operation, parameters: item.parameters, security: operation.security ?? spec.security }])));
export function duplicateOperations(api, partner) {
  const primary = operations(api);
  const duplicates = new Set();
  for (const [id, operation] of operations(partner)) {
    if (primary.has(id) && JSON.stringify(sorted(expand(operation, partner))) === JSON.stringify(sorted(expand(primary.get(id), api)))) duplicates.add(id);
  }
  return duplicates;
}
