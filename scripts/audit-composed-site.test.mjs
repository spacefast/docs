import { expect, test } from "bun:test";

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
      severity: "warning",
      message: "Page references https://spacefast.com/cookie-banner.js, which is not in the build.",
    },
  ];

  expect(unexpectedAuditErrors(diagnostics, ["/cookie-banner.js", "/help"])).toEqual([
    diagnostics[2],
  ]);
});
