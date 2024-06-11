"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfTestDatabase = exports.url = void 0;
exports.url = process.env.NODE_MONGO_URL || "mongodb://192.168.0.103/massive-test-models";
function checkIfTestDatabase() {
    if (!/massive-test/i.exec(exports.url)) {
        console.log(`Not a test database: ${exports.url}? Expecting database: massive-test.`);
        process.exit(1);
    }
}
exports.checkIfTestDatabase = checkIfTestDatabase;
//# sourceMappingURL=config.js.map