const { createLogger, transports, format } = require("winston");

//yhteinen logger-konfig koko sovellukselle
const logger = createLogger({
  level: "info", // info, warn ja error tallentuu
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console(), // näkyy kehitysvaiheessa terminaalissa
    new transports.File({ filename: "logs/error.log", level: "error" }), // vain virheet
    new transports.File({ filename: "logs/combined.log" }), // kaikki lokit
  ],
});

module.exports = logger;
