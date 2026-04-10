// Canvas shim: re-exports @napi-rs/canvas to provide canvas functionality
// in environments where the native 'canvas' package cannot be compiled.
// This allows jsdom (used in jest tests) to support canvas operations.
module.exports = require("@napi-rs/canvas");
