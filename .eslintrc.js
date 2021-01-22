module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["prettier"],
  extends: [
    "prettier",
    "airbnb-typescript-prettier",
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "no-shadow": "off",
    "no-use-before-define": "off",
    /** doesn't enforce whether or not the "I" prefix is required for interface names */
    "@typescript-eslint/interface-name-prefix": "off",
    /** doesn't aim to ensure that the values returned from functions are of the expected type */
    "@typescript-eslint/explicit-function-return-type": "off",
    /** allows any types to be defined */
    "@typescript-eslint/no-explicit-any": "off", // TODO turn it on and fix all the explicit any uses
    "no-useless-constructor": "off", // turned off for the nestjs constructors
    "class-methods-use-this": "off", // turned off for the nestjs constructors
    /** doesn't ensure an imported module can be resolved to a module on the local filesystem */
    "import/no-unresolved": "off",
    "import/order": "error",
    "max-classes-per-file": ["error", 3],
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
  },
};
