"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
async function IncidentNotifiedModule(mongoose) {
    const { Schema } = mongoose;
    const SentItem = new Schema({
        name: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "",
        },
        date: {
            type: Date,
            default: helpers_1.currentDate,
        },
    }, {
        _id: false,
        id: false,
    });
    const Unit = new Schema({
        UnitID: {
            type: String,
            default: "",
        },
        UnitDispatchNumber: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
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
        unitsByDispatch: {
            type: [Unit],
            default: []
        },
        sent: {
            type: [SentItem],
            default: [],
        },
        updated: {
            type: Date,
            default: helpers_1.currentDate,
        },
    }, {});
    modelSchema.set("autoIndex", false);
    return mongoose.model("IncidentNotified", modelSchema, "massive_incident_notified", { overwriteModels: true });
}
exports.default = IncidentNotifiedModule;
//# sourceMappingURL=incident-notified.js.map