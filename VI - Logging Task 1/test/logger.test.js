const logger = require("../src/logger");

// Perustarkistukset loggerille

test("logger is defined", () => {
  expect(logger).toBeDefined();
});

test("logger has transports", () => {
  expect(Array.isArray(logger.transports)).toBe(true);
  expect(logger.transports.length).toBeGreaterThan(0);
});

test("logger can write without throwing", () => {
  expect(() => logger.info("test message")).not.toThrow();
});
