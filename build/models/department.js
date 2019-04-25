"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const uuid = require("uuid");
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
            default: new Date().valueOf() / 1000.0,
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
        pushEnabled: {
            type: Boolean,
            default: true,
        },
        userContributionEnabled: {
            type: Boolean,
            default: false,
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
        esriTokenDateExpiry: {
            type: Number,
            default: 0,
        },
        esriToken: {
            type: EsriToken,
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