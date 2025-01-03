"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedIncidentPriorityDefault = exports.ManagedIncidentPriorityItemsDefault = exports.ManagedIncidentModeDefault = exports.ManagedIncidentModeItemsDefault = exports.OrientationMarkerColorDefault = exports.SamsaraConfigurationDefault = exports.VehicleStatusWebhookFieldsDefault = exports.ForwardFieldsDefault = exports.StatusMappingConfigDefault = exports.RestrictedCommentsDefault = exports.WebDisclaimerDefault = exports.SimpleSenseConfigDefault = exports.Mark43ConfigDefault = exports.SkymiraConfigDefault = exports.GSTConfigDefault = exports.SomewearDefault = exports.IncidentReplayDefault = exports.VehicleStatusWebhookConfigDefault = exports.ForwardingConfigDefault = exports.IntterraConfigDefault = exports.FirstArrivingConfigDefault = exports.SafetyPriorityKeywordDefault = exports.LicensingDefault = exports.FireMapperConfigurationDefault = exports.IntterraFieldsDefault = exports.Mark43StatusConfigDefault = void 0;
const uuid = require("uuid");
const mongoose_lean_virtuals_1 = require("mongoose-lean-virtuals");
const constants_1 = require("../constants");
const helpers_1 = require("../helpers");
const color_1 = require("./schema/color");
const pubnub_token_1 = require("./schema/pubnub-token");
exports.Mark43StatusConfigDefault = {
    TimeDispatched: ["D"],
    TimeEnroute: ["EN"],
    TimeStaged: ["ST"],
    TimeCleared: ["AV", "AVF", "AOR"],
    TimeAtHospital: ["AH"],
    TimeTransporting: ["T", "EH"],
    TimeArrived: ["ATS", "A"],
};
exports.IntterraFieldsDefault = [
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
// If any of the following fields are updated/added/deleted,
// make sure to update the database records, before/after release (script/query)
exports.FireMapperConfigurationDefault = {
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
exports.LicensingDefault = {
    "tcPro2Way": 0,
    "tcPro1Way": 0,
    "tcMobile": 0,
    "tcWeb": 0,
    "fireMapperPro": 0,
    "sendToCAD": 0,
    "tcStreams": 0
};
exports.SafetyPriorityKeywordDefault = [
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
exports.FirstArrivingConfigDefault = {
    "token": "",
    "apiUrl": "",
};
exports.IntterraConfigDefault = {
    "enabled": false,
    "connections": [],
    "incidentWebhookEnabled": false,
};
exports.ForwardingConfigDefault = {
    "enabled": false,
    "connections": [],
    "incidentWebhookEnabled": false,
};
exports.VehicleStatusWebhookConfigDefault = {
    "enabled": false,
    "connections": [],
};
exports.IncidentReplayDefault = {
    "enabled": false,
    "replays": [],
};
exports.SomewearDefault = {
    "enabled": false,
};
exports.GSTConfigDefault = {
    "enabled": false,
    "code": "",
};
exports.SkymiraConfigDefault = {
    "enabled": false,
    "token": "",
    "locationsUrl": "",
};
exports.Mark43ConfigDefault = {
    "baseUrl": "",
    "authToken": "",
    "apiToken": "",
    "userId": 0,
    "enabled": false,
};
exports.SimpleSenseConfigDefault = {
    "token": "",
};
exports.WebDisclaimerDefault = {
    "message": "",
    "enabled": false
};
exports.RestrictedCommentsDefault = {
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
exports.StatusMappingConfigDefault = {
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
exports.ForwardFieldsDefault = [
    {
        "key": "IncidentNumber",
        "value": "IncidentNumber",
        "required": true,
        "enabled": true,
        "transformationRequired": false,
    },
    {
        "key": "AgencyIncidentCallTypeDescription",
        "value": "AgencyIncidentCallTypeDescription",
        "required": false,
        "enabled": true,
        "transformationRequired": false,
    },
    {
        "key": "units",
        "value": "units",
        "required": false,
        "enabled": true,
        "transformationRequired": true,
    },
    {
        "key": "Longitude",
        "value": "Longitude",
        "required": false,
        "enabled": true,
        "transformationRequired": false,
    },
    {
        "key": "Latitude",
        "value": "Latitude",
        "required": false,
        "enabled": true,
        "transformationRequired": false,
    },
    {
        "key": "full_address",
        "value": "full_address",
        "required": false,
        "enabled": true,
        "transformationRequired": false,
    },
    {
        "key": "EntryDateTime",
        "value": "EntryDateTime",
        "required": false,
        "enabled": true,
        "transformationRequired": false,
    }
];
exports.VehicleStatusWebhookFieldsDefault = [
    {
        "key": "responseTime",
        "value": "responseTime",
        "required": true,
        "enabled": true,
        "transformationRequired": false,
    },
    {
        "key": "responseTimeAt",
        "value": "responseTimeAt",
        "required": true,
        "enabled": true,
        "transformationRequired": false,
    },
    {
        "key": "radioName",
        "value": "radioName",
        "required": true,
        "enabled": true,
        "transformationRequired": false,
    },
    {
        "key": "vehicleId",
        "value": "vehicleId",
        "required": true,
        "enabled": true,
        "transformationRequired": false,
    },
    {
        "key": "statusCode",
        "value": "statusCode",
        "required": true,
        "enabled": true,
        "transformationRequired": false,
    },
    {
        "key": "status",
        "value": "status",
        "required": true,
        "enabled": true,
        "transformationRequired": false,
    }
];
exports.SamsaraConfigurationDefault = {
    enabled: false,
    token: "",
};
exports.OrientationMarkerColorDefault = {
    background: "#FC2125",
    text: "#FFFFFF",
};
exports.ManagedIncidentModeItemsDefault = [
    { title: "Investigative", color: { background: "#283593", text: "#F5F5F5" }, position: 1 },
    { title: "Offensive", color: { background: "#00695C", text: "#F5F5F5" }, position: 2 },
    { title: "Defensive", color: { background: "#827717", text: "#F5F5F5" }, position: 3 },
    { title: "Combination", color: { background: "#F57F17", text: "#F5F5F5" }, position: 4 },
    { title: "Marginal", color: { background: "#1B5E20", text: "#F5F5F5" }, position: 5 },
    { title: "Transitional", color: { background: "#4E342E", text: "#F3E5F5" }, position: 6 },
];
exports.ManagedIncidentModeDefault = {
    label: "Incident Mode",
    items: [
        { title: "Investigative", color: { background: "#283593", text: "#F5F5F5" }, position: 1 },
        { title: "Offensive", color: { background: "#00695C", text: "#F5F5F5" }, position: 2 },
        { title: "Defensive", color: { background: "#827717", text: "#F5F5F5" }, position: 3 },
        { title: "Combination", color: { background: "#F57F17", text: "#F5F5F5" }, position: 4 },
        { title: "Marginal", color: { background: "#1B5E20", text: "#F5F5F5" }, position: 5 },
        { title: "Transitional", color: { background: "#4E342E", text: "#F3E5F5" }, position: 6 },
    ],
};
exports.ManagedIncidentPriorityItemsDefault = [
    { title: "Life", color: { background: "#6A1B9A", text: "#F5F5F5" }, position: 1 },
    { title: "Stabilization", color: { background: "#EDE7F6", text: "#00695C" }, position: 2 },
    { title: "Property", color: { background: "#FFF3E0", text: "#BF360C" }, position: 3 },
    { title: "Environment", color: { background: "#DCEDC8", text: "#424242" }, position: 4 },
];
exports.ManagedIncidentPriorityDefault = {
    label: "Incident Priority",
    items: [
        { title: "Life", color: { background: "#6A1B9A", text: "#F5F5F5" }, position: 1 },
        { title: "Stabilization", color: { background: "#EDE7F6", text: "#00695C" }, position: 2 },
        { title: "Property", color: { background: "#FFF3E0", text: "#BF360C" }, position: 3 },
        { title: "Environment", color: { background: "#DCEDC8", text: "#424242" }, position: 4 }
    ],
};
async function DepartmentModule(mongoose) {
    const { Schema } = mongoose;
    const PubNubToken = (0, pubnub_token_1.default)(mongoose);
    const Color = (0, color_1.default)(mongoose);
    const Mark43StatusConfig = new Schema({
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
    const Mark43ProcessLocationConfig = new Schema({
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
    const Mark43ProcessCommentConfig = new Schema({
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
    const Mark43ProcessVehicleStatusConfig = new Schema({
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
    const Mark43ProcessConfig = new Schema({
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
    const Mark43Config = new Schema({
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
            default: exports.Mark43StatusConfigDefault,
        },
        process: {
            type: Mark43ProcessConfig,
        },
    }, {
        _id: false,
        id: false,
    });
    const IntterraFields = new Schema({
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
    const IntterraConnection = new Schema({
        active: {
            type: Boolean,
            default: false,
        },
        fields: {
            type: [IntterraFields],
            default: exports.IntterraFieldsDefault,
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
    const ForwardFields = new Schema({
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
    const ForwardingConnection = new Schema({
        active: {
            type: Boolean,
            default: false,
        },
        connectionType: {
            type: String,
            default: "",
        },
        fields: {
            type: [ForwardFields],
            default: exports.ForwardFieldsDefault,
        },
        callTypes: {
            type: [String],
            default: [],
        },
        forwardAll: {
            type: Boolean,
            default: false,
        },
        apiUrl: {
            type: String,
            default: "",
        },
        authType: {
            type: String,
            default: "",
        },
        authUser: {
            type: String,
            default: "",
        },
        authKey: {
            type: String,
            default: "",
        },
        authKeySecret: {
            type: String,
            default: ""
        },
        label: {
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
    const VehicleStatusWebhookConnection = new Schema({
        active: {
            type: Boolean,
            default: false,
        },
        connectionType: {
            type: String,
            default: "",
        },
        fields: {
            type: [ForwardFields],
            default: exports.VehicleStatusWebhookFieldsDefault,
        },
        apiUrl: {
            type: String,
            default: "",
        },
        apiKey: {
            type: String,
            default: "",
        },
        authType: {
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
    const IntterraConfig = new Schema({
        enabled: {
            type: Boolean,
            default: false,
        },
        connections: {
            type: [IntterraConnection],
            default: [],
        },
        incidentWebhookEnabled: {
            type: Boolean,
            default: false,
        },
    }, {
        _id: false,
        id: false,
    });
    const ForwardingConfig = new Schema({
        enabled: {
            type: Boolean,
            default: false,
        },
        connections: {
            type: [ForwardingConnection],
            default: [],
        },
    }, {
        _id: false,
        id: false,
    });
    const VehicleStatusWebhookConfig = new Schema({
        enabled: {
            type: Boolean,
            default: false,
        },
        connections: {
            type: [VehicleStatusWebhookConnection],
            default: [],
        },
    }, {
        _id: false,
        id: false,
    });
    const SkymiraConfig = new Schema({
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
    const GSTConfig = new Schema({
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
    const ReplayOption = new Schema({
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
    const IncidentReplay = new Schema({
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
    const Somewear = new Schema({
        enabled: {
            type: Boolean,
            default: false,
        },
    }, {
        _id: false,
        id: false,
    });
    const SkytracConfig = new Schema({
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
    const SimpleSenseConfig = new Schema({
        token: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const StatusMappingObjectConfig = new Schema({
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
    const StatusMappingConfig = new Schema({
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
    const IncidentVehicleStatusConfig = new Schema({
        enabled: {
            type: Boolean,
            default: false,
        },
        statusMappings: {
            type: StatusMappingConfig,
            default: exports.StatusMappingConfigDefault,
        },
        statusExclusions: {
            type: [String],
            default: [],
        }
    }, {
        _id: false,
        id: false,
    });
    const FirstArrivingConfig = new Schema({
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
    const SafetyPriorityKeyword = new Schema({
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
    const WebDisclaimer = new Schema({
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
    const AudioStream = new Schema({
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
    const AudioStreamGroup = new Schema({
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
    const RestrictedComments = new Schema({
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
    const CustomButtons = new Schema({
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
    const FireMapperLayer = new Schema({
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
    const FireMapperOutline = new Schema({
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
    const SamsaraConfiguration = new Schema({
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
    const FireMapperConfiguration = new Schema({
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
    const Licensing = new Schema({
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
    const IncidentType = new Schema({
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
    const ShareIncidentRule = new Schema({
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
    const ManagedIncidentModeItemSchema = new Schema({
        title: {
            type: String,
        },
        color: {
            type: Color,
        },
        position: {
            type: Number,
            default: 1,
        }
    }, {
        _id: false,
        id: false,
    });
    const ManagedIncidentModeSchema = new Schema({
        label: {
            type: String,
        },
        items: {
            type: [ManagedIncidentModeItemSchema],
            default: [],
        }
    }, {
        _id: false,
        id: false,
    });
    const ManagedIncidentPriorityItemSchema = new Schema({
        title: {
            type: String,
        },
        color: {
            type: Color,
        },
        position: {
            type: Number,
            default: 1,
        },
    }, {
        _id: false,
        id: false,
    });
    const ManagedIncidentPrioritySchema = new Schema({
        label: {
            type: String,
        },
        items: {
            type: [ManagedIncidentPriorityItemSchema],
            default: [],
        },
    }, {
        _id: false,
        id: false,
    });
    // Main schema
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
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
        orientationMarkerColor: {
            type: Color,
            default: exports.OrientationMarkerColorDefault,
        },
        rosteringEnabled: {
            type: Boolean,
            default: false,
        },
        rosteringShiftDefault: {
            type: Number,
            default: 777600,
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
        cadBidirectionalException: {
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
            default: exports.FirstArrivingConfigDefault,
        },
        simpleSenseEnabled: {
            type: Boolean,
            default: false,
        },
        simpleSense: {
            type: SimpleSenseConfig,
            default: exports.SimpleSenseConfigDefault,
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
            default: exports.FireMapperConfigurationDefault,
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
            default: exports.SafetyPriorityKeywordDefault,
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
            default: exports.LicensingDefault,
        },
        webDisclaimer: {
            type: WebDisclaimer,
            default: exports.WebDisclaimerDefault,
        },
        addUserInstructions: {
            type: String,
            default: "",
        },
        // Other values, status, comment, status-comment
        reportOdometer: {
            type: String,
            default: "",
        },
        restrictedComments: {
            type: RestrictedComments,
            default: exports.RestrictedCommentsDefault,
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
            default: exports.SamsaraConfigurationDefault,
        },
        mark43: {
            type: Mark43Config,
            default: exports.Mark43ConfigDefault
        },
        intterra: {
            type: IntterraConfig,
            default: exports.IntterraConfigDefault,
        },
        skymira: {
            type: SkymiraConfig,
            default: exports.SkymiraConfigDefault,
        },
        skytrac: {
            type: [SkytracConfig],
            default: [],
        },
        gst: {
            type: GSTConfig,
            default: exports.GSTConfigDefault,
        },
        incidentReplay: {
            type: IncidentReplay,
            default: exports.IncidentReplayDefault,
        },
        somewear: {
            type: Somewear,
            default: exports.SomewearDefault,
        },
        forwarding: {
            type: ForwardingConfig,
            default: exports.ForwardingConfigDefault,
        },
        vehicleStatusWebhook: {
            type: VehicleStatusWebhookConfig,
            default: exports.VehicleStatusWebhookConfigDefault,
        },
        managedIncidentMode: {
            type: ManagedIncidentModeSchema,
            default: exports.ManagedIncidentModeDefault,
        },
        managedIncidentPriority: {
            type: ManagedIncidentPrioritySchema,
            default: exports.ManagedIncidentPriorityDefault,
        },
        industry: {
            type: String,
            default: constants_1.AccountIndustry.Fire,
        },
    }, {
        autoIndex: false,
        timestamps: {
            updatedAt: "modified",
        },
        toJSON: {
            virtuals: true,
            versionKey: false,
        }
    });
    modelSchema.index({
        apikey: 1,
    }, {
        name: "apikey_1",
        unique: true,
    });
    modelSchema.index({
        department: 1,
    }, {
        name: "department_1_unique",
        unique: true,
    });
    modelSchema.index({
        rtsChannelPrefix: 1,
    }, {
        name: "rtsChannelPrefix_1_unique",
        unique: true,
    });
    // TODO: Create this
    // modelSchema.index({
    //   uuid: 1,
    // }, {
    //   name: "uuid_1_unique",
    //   unique: true,
    // });
    modelSchema.virtual("id").get(function () {
        return this._id.toHexString();
    });
    modelSchema.plugin(mongoose_lean_virtuals_1.mongooseLeanVirtuals);
    return mongoose.model("Department", modelSchema, "massive_admin", { overwriteModels: true });
}
exports.default = DepartmentModule;
//# sourceMappingURL=department.js.map