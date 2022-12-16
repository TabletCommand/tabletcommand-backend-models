"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CADIncidentDeltaModule = void 0;
const helpers_1 = require("../helpers");
// Temporary collection to incident delta
async function CADIncidentDeltaModule(mongoose) {
    const { Schema } = mongoose;
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        incidentNumber: {
            type: String,
            default: "",
            required: true,
        },
        createdAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        toLegacy: {
            type: Object,
        },
        toFlat: {
            type: Object,
        },
    }, {
        collection: "massive_cad_incident_delta",
    });
    return (0, helpers_1.createModel)(mongoose, "CADIncidentDelta", modelSchema);
}
exports.CADIncidentDeltaModule = CADIncidentDeltaModule;
exports.default = CADIncidentDeltaModule;
//# sourceMappingURL=cad-incident-delta.js.map