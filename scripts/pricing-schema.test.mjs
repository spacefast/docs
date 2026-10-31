import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import schema from "../schemas/pricing-document.schema.json" with { type: "json" };

test("the vendored pricing validator matches the producer's public API schema", async () => {
  const api = JSON.parse(await readFile(new URL("../generated/openapi/api.json", import.meta.url), "utf8"));
  const published = api.paths["/v1/pricing"].get.responses["200"].content["application/json"].schema.properties.data;
  const { $schema, ...contract } = schema;
  assert.deepEqual(published, contract);
});
