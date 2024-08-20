"use strict";

const mongoUrl = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

function checkIfTestDatabase() {
  if (!/massive-test/i.exec(mongoUrl)) {
    console.log(`Not a test database: ${mongoUrl}? Expecting database: massive-test.`);
    process.exit(1);
  }
}

module.exports = {
  url: mongoUrl,
  checkIfTestDatabase,
};
