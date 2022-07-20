import assert from "assert";
import { func } from "../build/debug.js";
var result = func();

console.log(result);
assert.strictEqual(result, 3);
console.log("ok");
