"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentModule = void 0;
const uuid = require("uuid");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
const helpers_1 = require("../helpers");
const color_1 = require("./schema/color");
const pubnub_token_1 = require("./schema/pubnub-token");
async function DepartmentModule(mongoose) {
    const { Schema, Types } = mongoose;
    const PubNubToken = (0, pubnub_token_1.default)(mongoose);
    const Color = (0, color_1.default)(mongoose);
    const Mark43StatusConfig = (0, helpers_1.createSchema)(Schema, {
        TimeDispatched: {
            type: [String],
            default: []
        },
        TimeEnroute: {
            type: [String],
            default: []
        },
        TimeStaged: {
            type: [String],
            default: []
        },
        TimeCleared: {
            type: [String],
            default: []
        },
        TimeAtHospital: {
            type: [String],
            default: []
        },
        TimeTransporting: {
            type: [String],
            default: []
        },
        TimeArrived: {
            type: [String],
            default: []
        },
    }, {
        _id: false,
        id: false,
    });
    const Mark43StatusConfigDefault = {
        TimeDispatched: ["D"],
        TimeEnroute: ["EN"],
        TimeStaged: ["ST"],
        TimeCleared: ["AV", "AVF", "AOR"],
        TimeAtHospital: ["AH"],
        TimeTransporting: ["T", "EH"],
        TimeArrived: ["ATS", "A"],
    };
    const Mark43ProcessLocationConfig = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        locationUrl: {
            type: String,
            default: "",
        }
    }, {
        _id: false,
        id: false,
    });
    const Mark43ProcessCommentConfig = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        commentUrl: {
            type: String,
            default: ""
        },
        usersUrl: {
            type: String,
            default: "",
        },
        defaultUserId: {
            type: Number,
            default: 0,
        },
    }, {
        _id: false,
        id: false,
    });
    const Mark43ProcessVehicleStatusConfig = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        vehicleStatusUrl: {
            type: String,
            default: ""
        },
        vehicleStatusListUrl: {
            type: String,
            default: ""
        },
    }, {
        _id: false,
        id: false,
    });
    const Mark43ProcessConfig = (0, helpers_1.createSchema)(Schema, {
        location: {
            type: Mark43ProcessLocationConfig,
        },
        comment: {
            type: Mark43ProcessCommentConfig,
        },
        vehicleStatus: {
            type: Mark43ProcessVehicleStatusConfig,
        },
    }, {
        _id: false,
        id: false,
    });
    const Mark43Config = (0, helpers_1.createSchema)(Schema, {
        baseUrl: {
            type: String,
            default: "",
        },
        authToken: {
            type: String,
            default: "",
        },
        apiToken: {
            type: String,
            default: "",
        },
        userId: {
            type: Number,
            default: 0,
        },
        enabled: {
            type: Boolean,
            default: false,
        },
        unitStatusCodes: {
            type: Mark43StatusConfig,
            default: Mark43StatusConfigDefault,
        },
        process: {
            type: Mark43ProcessConfig,
        },
    }, {
        _id: false,
        id: false,
    });
    const IntterraFieldsDefault = [
        {
            "key": "IncidentNumber",
            "value": "incidentId",
            "required": true,
            "enabled": true,
            "transformationRequired": false,
        },
        {
            "key": "AgencyIncidentCallTypeDescription",
            "value": "incidentTypeDescription",
            "required": false,
            "enabled": true,
            "transformationRequired": false,
        },
        {
            "key": "units",
            "value": "assignedUnits",
            "required": false,
            "enabled": true,
            "transformationRequired": true,
        },
        {
            "key": "Longitude",
            "value": "longitude",
            "required": false,
            "enabled": true,
            "transformationRequired": false,
        },
        {
            "key": "Latitude",
            "value": "latitude",
            "required": false,
            "enabled": true,
            "transformationRequired": false,
        },
        {
            "key": "full_address",
            "value": "fullAddress",
            "required": false,
            "enabled": true,
            "transformationRequired": false,
        },
        {
            "key": "EntryDateTime",
            "value": "alarmDatetime",
            "required": false,
            "enabled": true,
            "transformationRequired": false,
        }
    ];
    const IntterraFields = (0, helpers_1.createSchema)(Schema, {
        key: {
            type: String,
            default: "",
        },
        value: {
            type: String,
            default: "",
        },
        transformationRequired: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        enabled: {
            type: Boolean,
            default: true,
        },
    }, {
        _id: false,
        id: false,
    });
    const IntterraConnection = (0, helpers_1.createSchema)(Schema, {
        active: {
            type: Boolean,
            default: false,
        },
        fields: {
            type: [IntterraFields],
            default: IntterraFieldsDefault,
        },
        callTypes: {
            type: [String],
            default: [],
        },
        authKey: {
            type: String,
            default: "",
        },
        authKeySecret: {
            type: String,
            default: ""
        },
        agency: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const IntterraConfig = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        connections: {
            type: [IntterraConnection],
            default: [],
        },
    }, {
        _id: false,
        id: false,
    });
    const SkymiraConfig = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        token: {
            type: String,
            default: "",
        },
        locationsUrl: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const GSTConfig = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        code: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const ReplayOption = (0, helpers_1.createSchema)(Schema, {
        departmentId: {
            type: String,
            default: "",
        },
        url: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const IncidentReplay = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        replays: {
            type: [ReplayOption],
            default: [],
        },
    }, {
        _id: false,
        id: false,
    });
    const SkytracConfig = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        licenseKey: {
            type: String,
            default: "",
        },
        username: {
            type: String,
            default: "",
        },
        secret: {
            type: String,
            default: "",
        },
        serviceUrl: {
            type: String,
            default: "",
        },
        configTag: {
            type: String,
            default: ""
        },
    }, {
        _id: false,
        id: false,
    });
    const SimpleSenseConfig = (0, helpers_1.createSchema)(Schema, {
        token: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const StatusMappingObjectConfig = (0, helpers_1.createSchema)(Schema, {
        status: {
            type: String,
            default: "",
        },
        statusCode: {
            type: String,
            default: "",
        }
    }, {
        _id: false,
        id: false,
    });
    const StatusMappingConfig = (0, helpers_1.createSchema)(Schema, {
        TimeDispatched: {
            type: StatusMappingObjectConfig,
        },
        TimeEnroute: {
            type: StatusMappingObjectConfig,
        },
        TimeStaged: {
            type: StatusMappingObjectConfig,
        },
        TimeArrived: {
            type: StatusMappingObjectConfig,
        },
        TimeCleared: {
            type: StatusMappingObjectConfig,
        },
        TimeAtHospital: {
            type: StatusMappingObjectConfig,
        },
        TimePatient: {
            type: StatusMappingObjectConfig,
        },
        TimeTransporting: {
            type: StatusMappingObjectConfig,
        },
        TimeTransportComplete: {
            type: StatusMappingObjectConfig,
        },
    }, {
        _id: false,
        id: false,
    });
    const StatusMappingConfigDefault = {
        TimeDispatched: {
            "status": "Unit Dispatched",
            "statusCode": "DSP"
        },
        TimeEnroute: {
            "status": "Unit is Enroute",
            "statusCode": "ENR"
        },
        TimeStaged: {
            "status": "Unit is Staging",
            "statusCode": "STG"
        },
        TimeArrived: {
            "status": "Unit is On Scene",
            "statusCode": "ONS"
        },
        TimeCleared: {
            "status": "Available on Radio",
            "statusCode": "AOR"
        },
        TimeAtHospital: {
            "status": "Transport Arrive",
            "statusCode": "TAR"
        },
        // added to exclusions unused
        TimePatient: {
            "status": "Available",
            "statusCode": "AV"
        },
        TimeTransporting: {
            "status": "Transporting",
            "statusCode": "TRN"
        },
        TimeTransportComplete: {
            "status": "Transport Complete",
            "statusCode": "TCM"
        }
    };
    const IncidentVehicleStatusConfig = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        statusMappings: {
            type: StatusMappingConfig,
            default: StatusMappingConfigDefault,
        },
        statusExclusions: {
            type: [String],
            default: [],
        }
    }, {
        _id: false,
        id: false,
    });
    const FirstArrivingConfig = (0, helpers_1.createSchema)(Schema, {
        token: {
            type: String,
            default: "",
        },
        apiUrl: {
            type: String,
            default: ""
        }
    }, {
        _id: false,
        id: false,
    });
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
    const AudioStream = (0, helpers_1.createSchema)(Schema, {
        // eg. Central Dispatch Talk Group or also Available on 89.5 MHz
        description: {
            type: String,
            default: "",
        },
        // e.g. B2 or CH99
        channel: {
            type: String,
            default: "",
        },
        url: {
            type: String,
            default: "",
        },
        order: {
            type: Number,
            default: 0,
        }
    }, {
        _id: false,
        id: false,
    });
    const AudioStreamGroup = (0, helpers_1.createSchema)(Schema, {
        group: {
            type: String,
            default: "",
        },
        streams: {
            type: [AudioStream],
            default: [],
        },
        order: {
            type: Number,
            default: 0,
        }
    }, {
        _id: false,
        id: false,
    });
    const RestrictedComments = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        callTypesAllowed: {
            type: [String],
            default: [],
        },
        statusesAllowed: {
            type: [String],
            default: [],
        },
        restrictedFields: {
            type: [String],
            default: [],
        },
        restrictedMessage: {
            type: String,
            default: ""
        },
    }, {
        _id: false,
        id: false,
    });
    const CustomButtons = (0, helpers_1.createSchema)(Schema, {
        name: {
            type: String,
            default: "",
        },
        url: {
            type: String,
            default: "",
        },
        order: {
            type: Number,
            default: 0,
        },
        allowExternal: {
            type: Boolean,
            default: false,
        },
        defaultExternal: {
            type: Boolean,
            default: false,
        },
        allowFloating: {
            type: Boolean,
            default: false,
        },
        color: {
            type: Color,
            default: null,
        },
    }, {
        _id: false,
        id: false,
    });
    const FireMapperLayer = (0, helpers_1.createSchema)(Schema, {
        pathname: {
            type: String,
            default: "", // Eg. /api/rest/services/features/FeatureServer/0 (including 0)
        },
        name: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const FireMapperOutline = (0, helpers_1.createSchema)(Schema, {
        uuid: {
            type: String,
            default: "",
        },
        layer: {
            type: [FireMapperLayer],
            default: [],
        },
    }, {
        _id: false,
        id: false,
    });
    const SamsaraConfiguration = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        token: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const SamsaraConfigurationDefault = {
        enabled: false,
        token: "",
    };
    const FireMapperConfiguration = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        layerRefreshInterval: {
            type: Number,
            default: 15,
        },
        // Number of available FM Pro licenses for this department
        proLicenseCount: {
            type: Number,
            default: 0,
        },
        host: {
            // when empty, portal.firefront.com.au
            // when staging, staging.firefront.com.au
            // when us, us.firemapper.app
            type: String,
            default: "",
        },
        layer: {
            type: [FireMapperLayer],
            default: [],
        },
        // A list of items that will be added to each map
        staticLayer: {
            type: [FireMapperOutline],
            default: [],
        },
    }, {
        _id: false,
        id: false,
    });
    // If any of the following fields are updated/added/deleted,
    // make sure to update the database records, before/after release (script/query)
    const FireMapperConfigurationDefault = {
        enabled: false,
        layerRefreshInterval: 15,
        proLicenseCount: 0,
        host: "",
        layer: [
            {
                name: "FireMapper - Symbols",
                pathname: "/api/rest/services/features/FeatureServer/0",
            },
            {
                name: "FireMapper - Lines",
                pathname: "/api/rest/services/features/FeatureServer/1",
            },
            {
                name: "FireMapper - Photos",
                pathname: "/api/rest/services/features/FeatureServer/2",
            },
            {
                name: "FireMapper - Areas",
                pathname: "/api/rest/services/features/FeatureServer/3",
            },
            {
                name: "FireMapper - PDFs",
                pathname: "/api/rest/services/features/FeatureServer/4",
            },
            {
                name: "FireMapper - Labels",
                pathname: "/api/rest/services/features/FeatureServer/5",
            },
        ],
        staticLayer: [],
    };
    const Licensing = (0, helpers_1.createSchema)(Schema, {
        tcPro2Way: {
            type: Number,
            default: 0,
        },
        tcPro1Way: {
            type: Number,
            default: 0,
        },
        tcMobile: {
            type: Number,
            default: 0,
        },
        tcWeb: {
            type: Number,
            default: 0,
        },
        fireMapperPro: {
            type: Number,
            default: 0,
        },
        sendToCAD: {
            type: Number,
            default: 0,
        },
        tcStreams: {
            type: Number,
            default: 0,
        },
    }, {
        _id: false,
        id: false,
    });
    const LicensingDefault = {
        "tcPro2Way": 0,
        "tcPro1Way": 0,
        "tcMobile": 0,
        "tcWeb": 0,
        "fireMapperPro": 0,
        "sendToCAD": 0,
        "tcStreams": 0
    };
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
    const FirstArrivingConfigDefault = {
        "token": "",
        "apiUrl": "",
    };
    const IntterraConfigDefault = {
        "enabled": false,
        "connections": [],
    };
    const IncidentReplayDefault = {
        "enabled": false,
        "replays": [],
    };
    const GSTConfigDefault = {
        "enabled": false,
        "code": "",
    };
    const SkymiraConfigDefault = {
        "enabled": false,
        "token": "",
        "locationsUrl": "",
    };
    const Mark43ConfigDefault = {
        "baseUrl": "",
        "authToken": "",
        "apiToken": "",
        "userId": 0,
        "enabled": false,
    };
    const SimpleSenseConfigDefault = {
        "token": "",
    };
    const WebDisclaimerDefault = {
        "message": "",
        "enabled": false
    };
    const RestrictedCommentsDefault = {
        enabled: false,
        callTypesAllowed: [],
        statusesAllowed: [],
        restrictedFields: [
            "LocationComment",
            "AgencyIncidentCallTypeDescription",
            "Comment"
        ],
        restrictedMessage: "RESTRICTED"
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
        // If true, instead of exact match (===), use title.includes(value)
        allowPartialMatch: {
            type: Boolean,
            default: false,
        },
        // For AgencyIncidentCallTypeDescription
        callTypeDescription: {
            type: [String],
            default: [],
        },
        // For AgencyIncidentCallType
        callType: {
            type: [String],
            default: [],
        }
    }, {
        _id: false,
        id: false,
    });
    const ShareIncidentRule = (0, helpers_1.createSchema)(Schema, {
        ruleType: {
            type: String,
            default: "",
        },
        departmentId: {
            type: String,
            default: "",
        },
        departmentName: {
            type: String,
            default: "",
        },
        configuration: {
            type: Object,
            default: null,
        },
    }, {
        _id: false,
        id: false,
    });
    // Main schema
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
        rosteringEnabled: {
            type: Boolean,
            default: false,
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
        cadAllowIgnoreAfterDays: {
            type: Number,
            default: 21,
        },
        // Incident History Item Type sent back to CAD
        // These correspond to IncidentHistoryType from iOS
        cadIncidentHistoryType: {
            type: [Number],
            default: [],
        },
        // Incident Event Item Type sent back to CAD
        // These correspond to IncidentEvent.type from backend/iOS
        cadIncidentEventType: {
            type: [String],
            default: [
                "userackcomment",
                "usercomment",
            ],
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
        // values: password, saml, o-google, later o-microsoft, etc
        authSource: {
            type: [String],
            default: ["password"],
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
        firstArriving: {
            type: FirstArrivingConfig,
            default: FirstArrivingConfigDefault,
        },
        simpleSenseEnabled: {
            type: Boolean,
            default: false,
        },
        simpleSense: {
            type: SimpleSenseConfig,
            default: SimpleSenseConfigDefault,
        },
        incidentVehicleStatus: {
            type: IncidentVehicleStatusConfig,
        },
        // When set to true, a vehicle update will propagate to user.vehicle using the radioName (changing the vehicleId)
        // By default (false), a vehicleId change will keep the same user.vehicle vehicleId and update the radioName
        vehicleRadioNameIsStable: {
            type: Boolean,
            default: false
        },
        // Legacy FireMapper fields, remove after migrating the endpoints/code to use the new object
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
        fireMapper: {
            type: FireMapperConfiguration,
            default: FireMapperConfigurationDefault,
        },
        // Uses ArcGIS maps, requires ArcGIS accounts
        // Set this to default=enabled until we figure out why we need the flag.
        arcGISMapsEnabled: {
            type: Boolean,
            default: true,
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
        socketIO: {
            type: PubNubToken,
            default: null,
        },
        // Move this to a different collection
        esriGeoJSONFilename: {
            type: String,
            default: ""
        },
        // Incident Type APN
        incidentTypes: {
            type: [IncidentType],
            default: [],
        },
        ackDelimiter: {
            type: String,
            default: ""
        },
        // incident. AgencyIncidentCallTypeDescription  OR AgencyIncidentCallType
        callTypeBlock: {
            type: [String],
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
            fadeZoomLevel: {
                type: Number,
                default: 45000,
            },
        },
        shareIncident: {
            enabled: {
                type: Boolean,
                default: false,
            },
            rules: {
                type: [ShareIncidentRule],
                default: [],
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
            type: Licensing,
            default: LicensingDefault,
        },
        webDisclaimer: {
            type: WebDisclaimer,
            default: WebDisclaimerDefault,
        },
        addUserInstructions: {
            type: String,
            default: "",
        },
        restrictedComments: {
            type: RestrictedComments,
            default: RestrictedCommentsDefault,
        },
        customButtons: {
            type: [CustomButtons],
            default: []
        },
        reportNumberEnabled: {
            type: Boolean,
            default: false,
        },
        audioConfiguration: {
            type: [AudioStreamGroup],
            default: [],
        },
        minPasswordLength: {
            type: Number,
            default: 8,
        },
        zonehaven: {
            enabled: {
                type: Boolean,
                default: false,
            },
            visible: {
                type: Boolean,
                default: true,
            },
            layerUrl: {
                type: String,
                default: "",
            },
            fadeZoomLevel: {
                type: Number,
                default: 45000,
            },
        },
        activeUserCount: {
            type: Number,
            default: 0,
        },
        samsara: {
            type: SamsaraConfiguration,
            default: SamsaraConfigurationDefault,
        },
        mark43: {
            type: Mark43Config,
            default: Mark43ConfigDefault
        },
        intterra: {
            type: IntterraConfig,
            default: IntterraConfigDefault,
        },
        skymira: {
            type: SkymiraConfig,
            default: SkymiraConfigDefault,
        },
        skytrac: {
            type: [SkytracConfig],
            default: [],
        },
        gst: {
            type: GSTConfig,
            default: GSTConfigDefault,
        },
        incidentReplay: {
            type: IncidentReplay,
            default: IncidentReplayDefault,
        },
    }, {
        collection: "massive_admin",
    });
    modelSchema.set("autoIndex", false);
    modelSchema.set("timestamps", {
        updatedAt: "modified",
    });
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