"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CADIncidentStreamModule = void 0;
const helpers_1 = require("../helpers");
const uuid = require("uuid");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
async function CADIncidentStreamModule(mongoose) {
    const { Schema, Types } = mongoose;
    // Simplified schema.
    // Payload should confirm to cad-incident (more or less)
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        tag: {
            type: String,
            default: uuid.v4,
        },
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        incidentNumber: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        // Partial cad-incident
        payload: {
            type: Object,
            default: {}
        },
    }, {
        autoIndex: false,
        collection: "massive_cad_incident_stream",
        toJSON: {
            virtuals: true,
            versionKey: false,
        }
    });
    modelSchema.virtual("id").get(function () {
        // tslint:disable-next-line: no-unsafe-any
        return this._id.toString();
    });
    modelSchema.plugin(mongooseLeanVirtuals);
    return (0, helpers_1.createModel)(mongoose, "CADIncidentStream", modelSchema);
}
exports.CADIncidentStreamModule = CADIncidentStreamModule;
exports.default = CADIncidentStreamModule;
//# sourceMappingURL=cad-incident-stream.js.map