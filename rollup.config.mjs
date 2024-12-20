import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import url from "@rollup/plugin-url";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "index.ts", // Your entry file
  output: {
    file: "dist/index.js",
    format: "esm", // ES Module format
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    url({
      include: ["**/*.svg"],
      limit: 0, // Export SVG file paths
    }),
    typescript(),
  ],
};
