import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import url from "@rollup/plugin-url";

export default {
  input: "index.ts",
  output: {
    file: "dist/index.js",
    format: "esm",
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    url({
      include: ["**/*.svg"], // Include only SVG files
      limit: 0, // Disable inlining, export file paths instead
    }),
  ],
};
