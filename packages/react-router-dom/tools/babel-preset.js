const babelEnv = process.env.BABEL_ENV;
const building = babelEnv != undefined && babelEnv !== "cjs";

const transformImports = require("babel-plugin-transform-imports");

module.exports = {
  plugins: [
    "dev-expression",
    [
      transformImports,
      {
        "react-router": {
          transform: building
            ? "react-router/es/${member}"
            : "react-router/${member}",
          preventFullImport: true
        }
      }
    ]
  ],
  presets: [
    [
      "es2015",
      {
        loose: true,
        modules: building ? false : "commonjs"
      }
    ],
    "stage-1",
    "react"
  ]
};
