"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createSchemaDefinition(c) {
    return c;
}
exports.createSchemaDefinition = createSchemaDefinition;
function createSchema(schemaCtor, p, o, methods) {
    var schema = new schemaCtor(p, o);
    if (methods) {
        schema.methods = methods;
    }
    return schema;
}
exports.createSchema = createSchema;
function createModel(mongoose, name, schema, collection, skipInit) {
    if (mongoose.models[name]) {
        return mongoose.model(name);
    }
    else {
        return mongoose.model(name, schema);
    }
}
exports.createModel = createModel;
