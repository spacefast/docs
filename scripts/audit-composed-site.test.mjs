import assert from "node:assert/strict";
import test from "node:test";

import { unexpectedAuditErrors } from "./audit-composed-site.mjs";

test("allows only exact Website-owned composition dependencies", () => {
  const diagnostics = [
    {
      code: "BLUME_AUDIT_SUBRESOURCE_MISSING",
      severity: "error",
      message: "Page references https://spacefast.com/cookie-banner.js, which is not in the build.",
    },
    {
      code: "BLUME_AUDIT_LINK_TO_BROKEN",
      severity: "error",
      message:
        "Link to https://spacefast.com/help resolves to /help, which the build does not serve.",
    },
    {
      code: "BLUME_AUDIT_LINK_TO_BROKEN",
      severity: "error",
      message:
        "Link to https://spacefast.com/missing resolves to /missing, which the build does not serve.",
    },
    {
      code: "BLUME_AUDIT_SUBRESOURCE_MISSING",
      severity: "error",
      message:
        "Page references https://spacefast.com/cookie-banner.js, which is missing deployment.base (/docs), so the deployed site does not serve it.",
    },
    {
      code: "BLUME_AUDIT_LINK_TO_BROKEN",
      severity: "error",
      message:
        "Link to https://spacefast.com/help, which is missing deployment.base (/docs), so the deployed site does not serve it.",
    },
    {
      code: "BLUME_AUDIT_LINK_TO_BROKEN",
      severity: "error",
      message: "Navigation links to /help, which the build does not serve.",
    },
    {
      code: "BLUME_AUDIT_LINK_TO_BROKEN",
      severity: "error",
      message: "Navigation links to /missing, which the build does not serve.",
    },
    {
      code: "BLUME_AUDIT_SUBRESOURCE_MISSING",
      severity: "warning",
      message: "Page references https://spacefast.com/cookie-banner.js, which is not in the build.",
    },
  ];

  assert.deepEqual(unexpectedAuditErrors(diagnostics, ["/cookie-banner.js", "/help"]), [
    diagnostics[2],
    diagnostics[6],
  ]);
});

test("allows the declared JSON Schema with Blume's direct-link diagnostic", () => {
  const diagnostic = (url) => ({
    code: "BLUME_AUDIT_LINK_TO_BROKEN",
    severity: "error",
    message: `Link to ${url} is missing deployment.base (/docs), so the deployed site does not serve it.`,
  });
  const schema = diagnostic("https://spacefast.com/schemas/sf.json");
  const missing = diagnostic("https://spacefast.com/schemas/missing.json");
  assert.deepEqual(unexpectedAuditErrors([schema, missing], ["/schemas/sf.json"]), [missing]);
});
