"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentModule = void 0;
const uuid = require("uuid");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
const helpers_1 = require("../helpers");
async function DepartmentModule(mongoose) {
    const { Schema, Types } = mongoose;
    const SafetyPriorityKeyword = helpers_1.createSchema(Schema, {
        priority: {
            type: Number,
            default: 6,
        },
        keywords: {
            type: [String],
            default: [],
        },
        hexColor: {
            type: String,
        },
    }, {
        _id: false,
    });
    const SafetyPriorityKeywordDefault = [
        {
            "keywords": [],
            "priority": 0,
            "hexColor": "FF3B30"
        },
        {
            "keywords": [],
            "priority": 1,
            "hexColor": "FEC309"
        },
        {
            "keywords": [],
            "priority": 2,
            "hexColor": "0A60FF"
        }
    ];
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
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        active: {
            type: Boolean,
            default: false,
        },
        apikey: {
            type: String,
            default: "",
            select: false,
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
        cadAllowedIPAddresses: {
            type: [String],
            default: [],
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
            default: 1440, // 24h
        },
        beaconEnabled: {
            type: Boolean,
            default: false,
        },
        firstArrivingEnabled: {
            type: Boolean,
            default: false,
        },
        simpleSenseEnabled: {
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
        // Number of available FM Pro licenses for this department
        fireMapperProLicenses: {
            type: Number,
            default: 0,
        },
        beansAIEnabled: {
            type: Boolean,
            default: false,
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
            default: [],
        },
        agencyIds: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Agency",
                default: [],
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
            default: SafetyPriorityKeywordDefault,
        },
        shareLocationPhones: {
            type: Boolean,
            default: false,
        },
        shareLocationTablets: {
            type: Boolean,
            default: true,
        },
        shareAVL: {
            enabled: {
                type: Boolean,
                default: false,
            },
            opAreaName: {
                type: String,
                default: "",
            },
            opAreaCode: {
                type: String,
                default: "",
            },
        },
        accountType: {
            type: String,
            default: "production"
        },
        timeZone: {
            type: String,
            default: "America/Los_Angeles"
        },
        remoteLoggingEnabled: {
            type: Boolean,
            default: false,
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
            ret.partialApiKey = ret.apikey.slice(0, 7);
        },
    });
    // eslint-disable-next-line no-unused-vars
    modelSchema.virtual("id").get(function () {
        return this._id.toHexString();
    });
    modelSchema.virtual("partialApiKey").get(function () {
        return this.apikey.slice(0, 7);
    });
    modelSchema.plugin(mongooseLeanVirtuals);
    return helpers_1.createModel(mongoose, "Department", modelSchema);
}
exports.DepartmentModule = DepartmentModule;
exports.default = DepartmentModule;
//# sourceMappingURL=department.js.map