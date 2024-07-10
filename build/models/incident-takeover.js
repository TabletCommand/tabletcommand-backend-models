"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
async function IncidentTakeoverModule(mongoose) {
    const { Schema } = mongoose;
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
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
        incident_number: {
            type: String,
            default: "",
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
    }, {});
    modelSchema.set("autoIndex", false);
    return mongoose.model("IncidentTakeover", modelSchema, "massive_incident_takeover", { overwriteModels: true });
}
exports.default = IncidentTakeoverModule;
//# sourceMappingURL=incident-takeover.js.map