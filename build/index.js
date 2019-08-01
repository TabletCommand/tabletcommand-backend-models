"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
async function wireModels(mongoose) {
    async function getModel(m) {
        const module = await m;
        return module.default(mongoose);
    }
    return {
        ActionLog: await getModel(Promise.resolve().then(() => require("./models/action-log"))),
        CADIncident: await getModel(Promise.resolve().then(() => require("./models/cad-incident"))),
        CADStatusMap: await getModel(Promise.resolve().then(() => require("./models/cad-status-map"))),
        CADStatus: await getModel(Promise.resolve().then(() => require("./models/cad-status"))),
        CADVehicle: await getModel(Promise.resolve().then(() => require("./models/cad-vehicle"))),
        CADVehicleStatus: await getModel(Promise.resolve().then(() => require("./models/cad-vehicle-status"))),
        Department: await getModel(Promise.resolve().then(() => require("./models/department"))),
        DeviceMapping: await getModel(Promise.resolve().then(() => require("./models/device-mapping"))),
        IncidentEvent: await getModel(Promise.resolve().then(() => require("./models/incident-event"))),
        IncidentTakeover: await getModel(Promise.resolve().then(() => require("./models/incident-takeover"))),
        Location: await getModel(Promise.resolve().then(() => require("./models/location"))),
        ManagedIncident: await getModel(Promise.resolve().then(() => require("./models/managed-incident"))),
        RateLimit: await getModel(Promise.resolve().then(() => require("./models/rate-limit"))),
        Session: await getModel(Promise.resolve().then(() => require("./models/session"))),
        User: await getModel(Promise.resolve().then(() => require("./models/user"))),
        UserRegistration: await getModel(Promise.resolve().then(() => require("./models/user-registration"))),
        UserDevice: await getModel(Promise.resolve().then(() => require("./models/user-device"))),
        PersonnelImport: await getModel(Promise.resolve().then(() => require("./models/personnel-import"))),
    };
}
__export(require("./models/helpers"));
async function connect(url) {
    const mongoose = await Promise.resolve().then(() => require("mongoose"));
    mongoose.Promise = await Promise.resolve().then(() => require("bluebird"));
    const models = await wireModels(mongoose);
    const opts = {
        useNewUrlParser: true,
    };
    const connection = await mongoose.connect(url, opts);
    return { mongoose, connection, models };
}
exports.connect = connect;
exports.default = connect;
//# sourceMappingURL=index.js.map