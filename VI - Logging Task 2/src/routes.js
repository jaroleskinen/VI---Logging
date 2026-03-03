const express = require("express");
const logger = require("./logger");
const counter = require("./counter");

const router = express.Router();

// GET /counter-increase
// Kasvata laskuria
router.get("/counter-increase", (req, res) => {
  logger.info(`[ENDPOINT] GET '${req.originalUrl}'`);
  const value = counter.increase();
  res.json({ count: value });
});

// GET /counter-read
// Lue laskurin arvo
router.get("/counter-read", (req, res) => {
  logger.info(`[ENDPOINT] GET '${req.originalUrl}'`);
  const value = counter.read();
  res.json({ count: value });
});

// GET /counter-reset
// Nollaa laskuri
router.get("/counter-reset", (req, res) => {
  logger.info(`[ENDPOINT] GET '${req.originalUrl}'`);
  const value = counter.reset();
  res.json({ count: value });
});

module.exports = router;
