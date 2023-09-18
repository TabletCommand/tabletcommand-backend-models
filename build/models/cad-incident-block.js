"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CADIncidentBlockModule = void 0;
const helpers_1 = require("../helpers");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
async function CADIncidentBlockModule(mongoose) {
    const { Schema, Types } = mongoose;
    // Simplified schema.
    // Payload should confirm to cad-incident (more or less)
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: String,
            required: true,
            index: true,
        },
        // callType or admin email
        source: {
            type: String,
            required: true,
        },
        IncidentNumber: {
            type: String,
            required: true,
        },
        AgencyIncidentCallTypeDescription: {
            type: String,
            required: true,
        },
        EntryDateTime: {
            type: String,
        },
        ClosedDateTime: {
            type: String,
        },
    }, {
        collection: "massive_cad_incident_block",
        timestamps: true,
        autoIndex: false,
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
    return (0, helpers_1.createModel)(mongoose, "CADIncidentBlock", modelSchema);
}
exports.CADIncidentBlockModule = CADIncidentBlockModule;
exports.default = CADIncidentBlockModule;
//# sourceMappingURL=cad-incident-block.js.map