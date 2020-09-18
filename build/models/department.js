"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentModule = void 0;
const uuid = require("uuid");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
const helpers_1 = require("../helpers");
const esri_auth_1 = require("./schema/esri-auth");
const esri_error_1 = require("./schema/esri-error");
const esri_map_1 = require("./schema/esri-map");
const esri_token_1 = require("./schema/esri-token");
async function DepartmentModule(mongoose) {
    const { Schema, Types } = mongoose;
    const EsriAuth = esri_auth_1.default(mongoose);
    const EsriError = esri_error_1.default(mongoose);
    const EsriMap = esri_map_1.default(mongoose);
    const EsriToken = esri_token_1.default(mongoose);
    const SafetyPriorityKeyword = helpers_1.createSchema(Schema, {
        priority: {
            type: Number,
        },
        keywords: {
            type: [String],
        },
        hexColor: {
            type: String,
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
        cadBidirectionalEnabled: {
            type: Boolean,
            default: false,
        },
        cadOneWayVehiclesEnabled: {
            type: Boolean,
            default: false,
        },
        connectivity: {
            incident: {
                enabled: {
                    type: Boolean,
                    default: false,
                },
                staleMinutes: {
                    type: Number,
                    default: 30,
                },
                heartbeatMinutes: {
                    type: Number,
                    default: 5
                }
            },
            location: {
                enabled: {
                    type: Boolean,
                    default: false,
                },
                staleMinutes: {
                    type: Number,
                    default: 30,
                },
                heartbeatMinutes: {
                    type: Number,
                    default: 5
                }
            },
            status: {
                enabled: {
                    type: Boolean,
                    default: false,
                },
                staleMinutes: {
                    type: Number,
                    default: 30,
                },
                heartbeatMinutes: {
                    type: Number,
                    default: 5
                },
                ackUnitsCount: {
                    type: Number,
                    default: 3
                }
            }
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
        fireMapperRefreshInterval: {
            type: Number,
            default: 15,
        },
        beansAIEnabled: {
            type: Boolean,
            default: false,
        },
        // Other features
        pushEnabled: {
            type: Boolean,
            default: true,
        },
        // MOWS - Mobile Only Web Security
        mowsEnabled: {
            type: Boolean,
            default: false
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
        fireMapperAuth: {
            type: EsriAuth,
            default: null,
        },
        esriMaps: {
            type: [EsriMap],
            default: []
        },
        // Move this to a different collection
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
        agencyIds: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Agency",
                default: []
            }],
        // Signup
        signupKey: {
            type: String,
            default: "",
        },
        signupDomains: {
            type: [String],
            default: [],
        },
        safetyPriorityKeywords: {
            type: [SafetyPriorityKeyword],
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
    modelSchema.plugin(mongooseLeanVirtuals);
    return helpers_1.createModel(mongoose, "Department", modelSchema);
}
exports.DepartmentModule = DepartmentModule;
exports.default = DepartmentModule;
//# sourceMappingURL=department.js.map