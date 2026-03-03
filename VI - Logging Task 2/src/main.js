const express = require("express");
const logger = require("./logger");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use("/", routes);

// Serverin käynnistys
const server = app.listen(port, () => {
  logger.info("[MAIN] Starting");
});

// Siisti sammutus (Ctrl+C)
process.on("SIGINT", () => {
  logger.info("[MAIN] Stopping");
  server.close(() => process.exit(0));
});
