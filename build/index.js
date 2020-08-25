"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
async function wireModels(mongoose) {
    async function getModel(m) {
        const module = await m;
        return module.default(mongoose);
    }
    return {
        ActionLog: await getModel(Promise.resolve().then(() => require("./models/action-log"))),
        Agency: await getModel(Promise.resolve().then(() => require("./models/agency"))),
        Assignment: await getModel(Promise.resolve().then(() => require("./models/assignment"))),
        BeaconLog: await getModel(Promise.resolve().then(() => require("./models/beacon-log"))),
        CADIncident: await getModel(Promise.resolve().then(() => require("./models/cad-incident"))),
        CADStatus: await getModel(Promise.resolve().then(() => require("./models/cad-status"))),
        CADStatusMap: await getModel(Promise.resolve().then(() => require("./models/cad-status-map"))),
        CADVehicle: await getModel(Promise.resolve().then(() => require("./models/cad-vehicle"))),
        CADVehicleStatus: await getModel(Promise.resolve().then(() => require("./models/cad-vehicle-status"))),
        CADVehicleStatusHistory: await getModel(Promise.resolve().then(() => require("./models/cad-vehicle-status-history"))),
        Department: await getModel(Promise.resolve().then(() => require("./models/department"))),
        DeviceMapping: await getModel(Promise.resolve().then(() => require("./models/device-mapping"))),
        Esri: await getModel(Promise.resolve().then(() => require("./models/esri"))),
        IncidentEvent: await getModel(Promise.resolve().then(() => require("./models/incident-event"))),
        IncidentTakeover: await getModel(Promise.resolve().then(() => require("./models/incident-takeover"))),
        Location: await getModel(Promise.resolve().then(() => require("./models/location"))),
        MailLog: await getModel(Promise.resolve().then(() => require("./models/mail-log"))),
        ManagedIncident: await getModel(Promise.resolve().then(() => require("./models/managed-incident"))),
        PersonnelImport: await getModel(Promise.resolve().then(() => require("./models/personnel-import"))),
        RateLimit: await getModel(Promise.resolve().then(() => require("./models/rate-limit"))),
        Session: await getModel(Promise.resolve().then(() => require("./models/session"))),
        User: await getModel(Promise.resolve().then(() => require("./models/user"))),
        UserDevice: await getModel(Promise.resolve().then(() => require("./models/user-device"))),
        UserRegistration: await getModel(Promise.resolve().then(() => require("./models/user-registration"))),
    };
}
__exportStar(require("./helpers"), exports);
async function connect(url) {
    const mongoose = await Promise.resolve().then(() => require("mongoose"));
    mongoose.Promise = await Promise.resolve().then(() => require("bluebird"));
    const models = await wireModels(mongoose);
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    const connection = await mongoose.connect(url, opts);
    return { mongoose, connection, models };
}
exports.connect = connect;
exports.default = connect;
//# sourceMappingURL=index.js.map