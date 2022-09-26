"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyModule = exports.AgencySchema = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
const agency_cron_config_1 = require("./schema/agency-cron-config");
function AgencySchema(mongoose) {
    const { Schema, Types } = mongoose;
    const AgencyCronConfig = (0, agency_cron_config_1.default)(mongoose);
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
    const LicensingDefault = {
        tcPro: 0,
        tcManager: 0,
        tcStatus: 0,
        tcMobile: 0,
        tcWeb: 0,
        fireMapperPro: 0,
        locationToCAD: 0
    };
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
            type: Types.ObjectId,
            ref: "Department",
            required: true
        },
        administrators: {
            type: [Types.ObjectId],
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
        },
        licensing: {
            type: Object,
            default: LicensingDefault,
        },
        cronConfig: {
            type: AgencyCronConfig,
            default: null,
        },
    }, {
        collection: "massive_agency",
    });
    modelSchema.set("autoIndex", false);
    return modelSchema;
}
exports.AgencySchema = AgencySchema;
async function AgencyModule(mongoose) {
    const modelSchema = AgencySchema(mongoose);
    return (0, helpers_1.createModel)(mongoose, "Agency", modelSchema);
}
exports.AgencyModule = AgencyModule;
exports.default = AgencyModule;
//# sourceMappingURL=agency.js.map