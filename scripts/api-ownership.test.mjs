import assert from "node:assert/strict";
import test from "node:test";
import { duplicateOperations } from "./api-ownership.mjs";

test("canonical ownership compares referenced contracts and preserves Partner differences", () => {
  const spec = { paths: { "/v1/example": { get: { operationId: "getExample", responses: { "200": { $ref: "#/components/responses/example" } } } } }, components: { responses: { example: { description: "An example", content: { "application/json": { schema: { type: "string" } } } } } } };
  const partner = structuredClone(spec);
  assert.deepEqual([...duplicateOperations(spec, partner)], ["getexample"]);
  partner.components.responses.example.content["application/json"].schema.type = "number";
  assert.deepEqual([...duplicateOperations(spec, partner)], []);
});
