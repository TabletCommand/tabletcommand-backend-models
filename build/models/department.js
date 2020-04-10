"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function DepartmentModule(mongoose) {
    const { Schema, Types } = mongoose;
    const Agency = (await Promise.resolve().then(() => require("./schema/cad-agency"))).CADAgency(mongoose);
    const EsriToken = helpers_1.createSchema(Schema, {
        access_token: {
            type: String,
            default: "",
        },
        refresh_token: {
            type: String,
            default: "",
        },
        username: {
            type: String,
            default: "",
        },
        ssl: {
            type: Boolean,
            default: true,
        },
        expires_in: {
            type: Number,
            default: 1800,
        },
    }, {
        _id: false,
    });
    const EsriError = helpers_1.createSchema(Schema, {
        code: {
            type: Number,
            default: 1,
        },
        error: {
            type: String,
            default: "",
        },
        error_description: {
            type: String,
            default: "",
        },
        message: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    const EsriAuthPassword = helpers_1.createSchema(Schema, {
        iv: {
            type: String,
            default: "",
        },
        encryptedData: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    const EsriAuth = helpers_1.createSchema(Schema, {
        username: {
            type: String,
            default: "",
        },
        encrypted: {
            type: EsriAuthPassword,
            default: null,
        },
    }, {
        _id: false,
    });
    const IncidentType = helpers_1.createSchema(Schema, {
        name: {
            type: String,
            default: "Any",
        },
        value: {
            type: String,
            default: "any",
        },
    }, {
        _id: false,
    });
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        department: {
            type: String,
            default: "",
        },
        fdid: {
            type: String,
            default: "",
        },
        city: {
            type: String,
            default: "",
        },
        state: {
            type: String,
            default: "",
        },
        contact_name: {
            type: String,
            default: "",
        },
        contact_phone: {
            type: String,
            default: "",
        },
        contact_email: {
            type: String,
            default: "",
        },
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
        active: {
            type: Boolean,
            default: false,
        },
        pager_number: {
            type: String,
            default: "",
        },
        apikey: {
            type: String,
            default: "",
        },
        cadEmailUsername: {
            type: String,
            default: "",
        },
        // CAD Features
        cadMonitorEnabled: {
            type: Boolean,
            default: false,
        },
        cadMonitorMinutes: {
            type: Number,
            default: 30,
        },
        cadBidirectionalEnabled: {
            type: Boolean,
            default: false,
        },
        heartbeatEnabled: {
            type: Boolean,
            default: false,
        },
        heartbeatMinutes: {
            type: Number,
            default: 5,
        },
        selfAssignmentEnabled: {
            type: Boolean,
            default: false,
        },
        userContributionEnabled: {
            type: Boolean,
            default: false,
        },
        vehicleSwapEnabled: {
            type: Boolean,
            default: false,
        },
        personnelStaffingEnabled: {
            type: Boolean,
            default: false,
        },
        defaultMapPosition: {
            longitude: {
                type: Number,
                default: 0,
            },
            latitude: {
                type: Number,
                default: 0,
            },
        },
        fireMapPDFReader: {
            type: String,
            default: "",
        },
        locationStaleMinutes: {
            type: Number,
            default: 1440,
        },
        beaconEnabled: {
            type: Boolean,
            default: false,
        },
        fireMapperEnabled: {
            type: Boolean,
            default: false,
        },
        // Other features
        pushEnabled: {
            type: Boolean,
            default: true,
        },
        // RTS
        rtsEnabled: {
            type: Boolean,
            default: true,
        },
        rtsChannelPrefix: {
            type: String,
            default: "",
        },
        rtsAuthKey: {
            type: String,
            default: "",
        },
        // ESRI
        esriTokenDateExpiry: {
            type: Number,
            default: 0,
        },
        esriToken: {
            type: EsriToken,
        },
        error: {
            type: EsriError,
            default: null,
        },
        esriAuth: {
            type: EsriAuth,
            default: null,
        },
        esriGeoJSONFilename: {
            type: String,
            default: ""
        },
        // Custom Button
        customWebUrl: {
            type: String,
            default: "",
        },
        customWebName: {
            type: String,
            default: "",
        },
        // Incident Type APN
        incidentTypes: {
            type: [IncidentType],
        },
        agencies: {
            type: [Agency],
            default: [],
        },
        // Signup
        signupKey: {
            type: String,
            default: "",
        },
        signupDomains: {
            type: [String],
            default: [],
        },
        shareLocationPhones: {
            type: Boolean,
            default: false,
        },
        shareLocationTablets: {
            type: Boolean,
            default: true,
        },
    }, {
        collection: "massive_admin",
    });
    modelSchema.set("autoIndex", false);
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        transform(doc, ret) {
            ret.id = ret._id;
        },
    });
    modelSchema.virtual("id").get(function () {
        return this._id.toHexString();
    });
    return helpers_1.createModel(mongoose, "Department", modelSchema);
}
exports.DepartmentModule = DepartmentModule;
exports.default = DepartmentModule;
//# sourceMappingURL=department.js.map