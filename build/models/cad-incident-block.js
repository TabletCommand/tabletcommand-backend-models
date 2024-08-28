"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_incident_1 = require("./schema/shared-incident");
async function CADIncidentBlockModule(mongoose) {
    const { Schema } = mongoose;
    const ReportNumber = (0, shared_incident_1.ReportNumberSchema)(mongoose);
    // Simplified schema.
    // Payload should confirm to cad-incident (more or less)
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
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
            default: "",
        },
        ClosedDateTime: {
            type: String,
            default: "",
        },
        ReportNumber: {
            type: [ReportNumber],
            default: [],
        }
    }, {
        timestamps: true,
        autoIndex: false,
        toJSON: {
            virtuals: true,
            versionKey: false,
        }
    });
    return mongoose.model("CADIncidentBlock", modelSchema, "massive_cad_incident_block", { overwriteModels: true });
}
exports.default = CADIncidentBlockModule;
//# sourceMappingURL=cad-incident-block.js.map