const logger = require("./logger");

let count = 0;

// Palauttaa nykyisen arvon
function read() {
  logger.info(`[COUNTER] read ${count}`);
  return count;
}

// Lisää yhden ja palauttaa uuden arvon
function increase() {
  count += 1;
  logger.info(`[COUNTER] increase 1 ${count}`);
  return count;
}

// Nollaa ja palauttaa 0
function reset() {
  count = 0;
  logger.info(`[COUNTER] zeroed 0`);
  return count;
}

module.exports = { read, increase, reset };
