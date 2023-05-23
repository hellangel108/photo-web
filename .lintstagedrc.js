const path = require("path");

const buildEslintCommand = (filenames) =>
  `yarn lint-staged:eslint --file ${filenames
    .map((f) => path.relative(__dirname, f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,md,json}": "yarn lint-staged:prettier",
  "*.{js,jsx}": [buildEslintCommand],
  "*.{scss,css}": "yarn lint-staged:style"
};
