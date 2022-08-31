"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LoginKit = require("./LoginKit");

Object.keys(_LoginKit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _LoginKit[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _LoginKit[key];
    }
  });
});

var _CreativeKit = require("./CreativeKit");

Object.keys(_CreativeKit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CreativeKit[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CreativeKit[key];
    }
  });
});
//# sourceMappingURL=index.js.map