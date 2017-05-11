"use strict";

var config = {};

config.db = process.env.NODE_MONGO_URL || "mongodb://test:test@127.0.0.1/test";

module.exports = config;
