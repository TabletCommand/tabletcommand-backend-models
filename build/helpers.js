"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeMongooseConnections = exports.disconnectMongoose = exports.getMongoose = exports.conditions = exports.convertToObjectId = exports.currentDate = exports.retrieveCurrentUnixTime = exports.createSchema = exports.createSchemaDefinition = void 0;
const mongoose_1 = require("mongoose");
function createSchemaDefinition(c) {
    return c;
}
exports.createSchemaDefinition = createSchemaDefinition;
function createSchema(schemaCtor, p, o, methods) {
    const schema = new schemaCtor(p, o);
    if (methods) {
        schema.methods = methods;
    }
    return schema;
}
exports.createSchema = createSchema;
function retrieveCurrentUnixTime() {
    return Date.now() / 1000;
}
exports.retrieveCurrentUnixTime = retrieveCurrentUnixTime;
function currentDate() {
    return new Date();
}
exports.currentDate = currentDate;
function convertToObjectId(id) {
    if (id) {
        return new mongoose_1.Types.ObjectId(id);
    }
    return new mongoose_1.Types.ObjectId();
}
exports.convertToObjectId = convertToObjectId;
function conditions(items, c) {
    return c;
}
exports.conditions = conditions;
async function getMongoose() {
    return mongoose_1.default;
}
exports.getMongoose = getMongoose;
async function disconnectMongoose() {
    return mongoose_1.default.disconnect();
}
exports.disconnectMongoose = disconnectMongoose;
async function closeMongooseConnections() {
    if (mongoose_1.default.connections.length) {
        for (const connection of mongoose_1.default.connections) {
            await connection.close();
        }
    }
}
exports.closeMongooseConnections = closeMongooseConnections;
//# sourceMappingURL=helpers.js.map