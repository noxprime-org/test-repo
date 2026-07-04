import { test } from "node:test";
import assert from "node:assert/strict";

import { add, greet } from "../src/index.js";

test("add() returns the sum of two numbers", () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-1, 1), 0);
});

test("greet() uses a default when no name is given", () => {
  assert.equal(greet(), "Hello, world!");
});

test("greet() includes the provided name", () => {
  assert.equal(greet("starter"), "Hello, starter!");
});
