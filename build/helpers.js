"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeAllMongooseConnections = exports.disconnectMongoose = exports.convertToObjectId = exports.conditions = exports.currentDate = exports.retrieveCurrentUnixTime = void 0;
const mongoose_1 = require("mongoose");
function retrieveCurrentUnixTime() {
    return Date.now() / 1000;
}
exports.retrieveCurrentUnixTime = retrieveCurrentUnixTime;
function currentDate() {
    return new Date();
}
exports.currentDate = currentDate;
function conditions(items, c) {
    return c;
}
exports.conditions = conditions;
function convertToObjectId(id) {
    if (id) {
        return new mongoose_1.Types.ObjectId(id);
    }
    return new mongoose_1.Types.ObjectId(); // fal;back if user provides empty string
}
exports.convertToObjectId = convertToObjectId;
async function disconnectMongoose() {
    return mongoose_1.default.disconnect();
}
exports.disconnectMongoose = disconnectMongoose;
async function closeAllMongooseConnections() {
    if (mongoose_1.default.connections.length) {
        for (const connection of mongoose_1.default.connections) {
            await connection.close();
        }
    }
}
exports.closeAllMongooseConnections = closeAllMongooseConnections;
//# sourceMappingURL=helpers.js.map