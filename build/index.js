"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.LocationSource = exports.LocationKindType = void 0;
const _ = require("lodash");
const constants_1 = require("./constants");
Object.defineProperty(exports, "LocationKindType", { enumerable: true, get: function () { return constants_1.LocationKindType; } });
Object.defineProperty(exports, "LocationSource", { enumerable: true, get: function () { return constants_1.LocationSource; } });
async function wireModels(mongoose) {
    async function getModel(m) {
        const module = await m;
        return module.default(mongoose);
    }
    return {
        ActionLog: await getModel(Promise.resolve().then(() => require("./models/action-log"))),
        Agency: await getModel(Promise.resolve().then(() => require("./models/agency"))),
        ArcGISGroup: await getModel(Promise.resolve().then(() => require("./models/arcgis-group"))),
        Assignment: await getModel(Promise.resolve().then(() => require("./models/assignment"))),
        Battalion: await getModel(Promise.resolve().then(() => require("./models/battalion"))),
        BeaconLog: await getModel(Promise.resolve().then(() => require("./models/beacon-log"))),
        CADIncident: await getModel(Promise.resolve().then(() => require("./models/cad-incident"))),
        CADIncidentBlock: await getModel(Promise.resolve().then(() => require("./models/cad-incident-block"))),
        CADIncidentStream: await getModel(Promise.resolve().then(() => require("./models/cad-incident-stream"))),
        CADSimulation: await getModel(Promise.resolve().then(() => require("./models/cad-simulation"))),
        CADStatus: await getModel(Promise.resolve().then(() => require("./models/cad-status"))),
        CADStatusMap: await getModel(Promise.resolve().then(() => require("./models/cad-status-map"))),
        CADVehicle: await getModel(Promise.resolve().then(() => require("./models/cad-vehicle"))),
        CADVehicleStatus: await getModel(Promise.resolve().then(() => require("./models/cad-vehicle-status"))),
        CADVehicleStatusHistory: await getModel(Promise.resolve().then(() => require("./models/cad-vehicle-status-history"))),
        ChartDeviceStats: await getModel(Promise.resolve().then(() => require("./models/chart-device-stats"))),
        ChartIncident: await getModel(Promise.resolve().then(() => require("./models/chart-incident"))),
        ChartManagedIncident: await getModel(Promise.resolve().then(() => require("./models/chart-managed-incident"))),
        ChartUser: await getModel(Promise.resolve().then(() => require("./models/chart-user"))),
        Checklist: await getModel(Promise.resolve().then(() => require("./models/checklist"))),
        ChecklistItem: await getModel(Promise.resolve().then(() => require("./models/checklist-item"))),
        CSVImport: await getModel(Promise.resolve().then(() => require("./models/csv-import"))),
        Department: await getModel(Promise.resolve().then(() => require("./models/department"))),
        DeviceMapping: await getModel(Promise.resolve().then(() => require("./models/device-mapping"))),
        Esri: await getModel(Promise.resolve().then(() => require("./models/esri"))),
        GSTMapping: await getModel(Promise.resolve().then(() => require("./models/gst-mapping"))),
        IncidentEvent: await getModel(Promise.resolve().then(() => require("./models/incident-event"))),
        IncidentNotified: await getModel(Promise.resolve().then(() => require("./models/incident-notified"))),
        IncidentTakeover: await getModel(Promise.resolve().then(() => require("./models/incident-takeover"))),
        JobLog: await getModel(Promise.resolve().then(() => require("./models/job-log"))),
        Location: await getModel(Promise.resolve().then(() => require("./models/location"))),
        MailLog: await getModel(Promise.resolve().then(() => require("./models/mail-log"))),
        ManagedIncident: await getModel(Promise.resolve().then(() => require("./models/managed-incident"))),
        Mark43IncidentRetry: await getModel(Promise.resolve().then(() => require("./models/mark43-incident-retry"))),
        Message: await getModel(Promise.resolve().then(() => require("./models/message"))),
        Monitor: await getModel(Promise.resolve().then(() => require("./models/monitor"))),
        PersonnelImport: await getModel(Promise.resolve().then(() => require("./models/personnel-import"))),
        PersonnelKnown: await getModel(Promise.resolve().then(() => require("./models/personnel-known"))),
        PersonnelRoster: await getModel(Promise.resolve().then(() => require("./models/personnel-roster"))),
        RateLimit: await getModel(Promise.resolve().then(() => require("./models/rate-limit"))),
        ReleaseNote: await getModel(Promise.resolve().then(() => require("./models/release-note"))),
        RemoteLog: await getModel(Promise.resolve().then(() => require("./models/remote-log"))),
        RemoteLogStream: await getModel(Promise.resolve().then(() => require("./models/remote-log-stream"))),
        Session: await getModel(Promise.resolve().then(() => require("./models/session"))),
        SMTPUnhandled: await getModel(Promise.resolve().then(() => require("./models/smtp-unhandled"))),
        Template: await getModel(Promise.resolve().then(() => require("./models/template"))),
        User: await getModel(Promise.resolve().then(() => require("./models/user"))),
        UserDevice: await getModel(Promise.resolve().then(() => require("./models/user-device"))),
        UserRegistration: await getModel(Promise.resolve().then(() => require("./models/user-registration"))),
        ValidationReport: await getModel(Promise.resolve().then(() => require("./models/validation-report"))),
    };
}
__exportStar(require("./helpers"), exports);
async function connect(url, overwriteOpts) {
    const mongoose = await Promise.resolve().then(() => require("mongoose"));
    mongoose.Promise = await Promise.resolve().then(() => require("bluebird"));
    const models = await wireModels(mongoose);
    const defaultOpts = {
        autoIndex: false,
        readPreference: "primaryPreferred",
    };
    // If present, overwrite options
    const opts = _.assign({}, defaultOpts, overwriteOpts);
    const connection = await mongoose.connect(url, opts);
    return { mongoose, connection, models };
}
exports.connect = connect;
exports.default = connect;
//# sourceMappingURL=index.js.map