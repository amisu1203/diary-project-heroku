module.exports = {
  extends: ["react-app", "airbnb"],
  rules: {
    quotes: ["error", "double"],
    "no-unused-vars": "warn",
    "react/function-component-definition": "off",
    "jsx-a11y/label-has-associated-control": "warn",
    "arrow-body-style": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: "./",
      },
    ],
    "comma-dangle": "warn",
  },
};
