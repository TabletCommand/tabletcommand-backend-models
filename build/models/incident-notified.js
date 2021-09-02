"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotifiedModule = void 0;
const helpers_1 = require("../helpers");
async function IncidentNotifiedModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
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
        IncidentNumber: {
            type: String,
            required: true,
        },
        incidentTypes: {
            type: [String],
            default: [],
        },
        units: {
            type: [String],
            default: [],
        },
        date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
    }, {
        collection: "massive_incident_notified",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "IncidentNotified", modelSchema);
}
exports.IncidentNotifiedModule = IncidentNotifiedModule;
exports.default = IncidentNotifiedModule;
//# sourceMappingURL=incident-notified.js.map