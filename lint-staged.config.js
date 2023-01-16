module.exports = {
  "**/*.ts?(x)": () => [
    "npm run format",
    "npm run typecheck",
    "npm run test:q",
  ],
  "*.{json, js}": () => ["npm run format", "npm run test:q"],
};
