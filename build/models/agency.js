"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function AgencyModule(mongoose) {
    const { Schema, Types } = mongoose;
    const CrossStaffedUnit = (0, helpers_1.createSchema)(Schema, {
        radioName: {
            type: String,
            default: "",
        },
        crossStaffedUnits: {
            type: [String],
            default: [],
        },
        alwaysCrossStaff: {
            type: Boolean,
            default: true,
        },
    }, {
        _id: false,
        id: false,
    });
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        code: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        domain: {
            type: String,
            default: "",
        },
        personnelApiKey: {
            type: String,
            default: "",
            select: false,
        },
        agencyApiKey: {
            type: String,
            default: "",
            select: false,
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
        active: {
            type: Boolean,
            default: false,
        },
        departmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department",
            required: true
        },
        administrators: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "User",
            default: []
        },
        personnelIntegration: {
            type: Boolean,
            default: false
        },
        personnelMonitorHours: {
            type: Number,
            default: 12
        },
        crossStaffing: {
            type: [CrossStaffedUnit],
            default: []
        }
    }, {
        collection: "massive_agency",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "Agency", modelSchema);
}
exports.AgencyModule = AgencyModule;
exports.default = AgencyModule;
//# sourceMappingURL=agency.js.map