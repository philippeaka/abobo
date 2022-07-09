module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-abobo`
  extends: ["abobo"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
