const babel = require("@babel/core");

const defaultOptions = {
  presets: [
    [
      "@babel/env",
      {
        targets: "> 0.25%, not dead"
      }
    ]
  ],
  sourceType: "unambiguous"
};

module.exports = function transpile(code, options) {
  if (!options) options = {};
  return babel.transformSync(code, Object.assign({}, defaultOptions, options))
    .code;
};
