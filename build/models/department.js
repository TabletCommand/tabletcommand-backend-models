"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentModule = void 0;
const uuid = require("uuid");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
const helpers_1 = require("../helpers");
const pubnub_token_1 = require("./schema/pubnub-token");
async function DepartmentModule(mongoose) {
    const { Schema, Types } = mongoose;
    const PubNubToken = (0, pubnub_token_1.default)(mongoose);
    const SafetyPriorityKeyword = (0, helpers_1.createSchema)(Schema, {
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
        id: false,
    });
    const WebDisclaimer = (0, helpers_1.createSchema)(Schema, {
        message: {
            type: String,
            default: "",
        },
        enabled: {
            type: Boolean,
            default: false,
        },
    }, {
        _id: false,
        id: false,
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
    const LicensingDefault = {
        "tcPro2Way": 0,
        "tcPro1Way": 0,
        "tcMobile": 0,
        "tcWeb": 0,
        "fireMapperPro": 0,
        "sendToCAD": 0
    };
    const WebDisclaimerDefault = {
        "message": "",
        "enabled": false
    };
    const IncidentType = (0, helpers_1.createSchema)(Schema, {
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
        id: false,
    });
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
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
        addressDetails: {
            address: {
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
            zipCode: {
                type: String,
                default: "",
            },
            country: {
                type: String,
                default: "",
            },
        },
        address: {
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
        zipCode: {
            type: String,
        },
        country: {
            type: String,
            default: "",
        },
        contact: {
            department: {
                type: String,
                default: "",
            },
            name: {
                type: String,
                default: "",
            },
            phone: {
                type: String,
                default: "",
            },
            email: {
                type: String,
                default: "",
            },
        },
        contact_department: {
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
        partialApiKey: {
            type: String,
            default: "",
        },
        cadEmailUsername: {
            type: String,
            default: "",
        },
        notificationEmails: {
            type: [String],
            default: []
        },
        externalNotificationsEnabled: {
            type: Boolean,
            default: false
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
        cadGetLocationEnabled: {
            type: Boolean,
            default: false
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
        pubNubV3: {
            type: PubNubToken,
            default: null,
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
        speedReportingEnabled: {
            type: Boolean,
            default: false,
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
        logOffEnabled: {
            type: Boolean,
            default: false,
        },
        licensing: {
            type: Object,
            default: LicensingDefault,
        },
        webDisclaimer: {
            type: WebDisclaimer,
            default: WebDisclaimerDefault,
        },
        addUserInstructions: {
            type: String,
            default: ""
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
    return (0, helpers_1.createModel)(mongoose, "Department", modelSchema);
}
exports.DepartmentModule = DepartmentModule;
exports.default = DepartmentModule;
//# sourceMappingURL=department.js.map