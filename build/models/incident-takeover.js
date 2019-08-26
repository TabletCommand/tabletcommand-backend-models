"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function IncidentTakeoverModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        incident_id: {
            type: String,
            required: true,
        },
        incident_name: {
            type: String,
            required: true,
        },
        old_owner: {
            type: String,
            required: true,
        },
        new_owner: {
            type: String,
            required: true,
        },
        owner: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            required: true,
            default: "request",
        },
        request_time: {
            type: Number,
            required: true,
            default: 0,
            min: 1,
        },
        last_response_time: {
            type: Number,
            default: 0,
        },
        response_time: {
            type: Number,
            default: 0,
        },
    }, {
        collection: "massive_incident_takeover",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "IncidentTakeover", modelSchema);
}
exports.IncidentTakeoverModule = IncidentTakeoverModule;
exports.default = IncidentTakeoverModule;
//# sourceMappingURL=incident-takeover.js.map