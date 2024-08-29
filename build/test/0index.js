"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
// Check for a mocha config file where we can import those
const chai_1 = require("chai");
const m = require("../index");
const config = require("./config");
describe(" Models", function () {
    let models, mongoose;
    beforeEach(async function () {
        const c = await m.connect(config.url);
        models = c.models;
        mongoose = c.mongoose;
    });
    afterEach(async function () {
        await mongoose.disconnect();
    });
    it("are wired", function () {
        // These should match index.js
        chai_1.assert.isFunction(models.ActionLog, "Missing ActionLog");
        chai_1.assert.isFunction(models.Agency, "Missing Agency");
        chai_1.assert.isFunction(models.ArcGISGroup, "Missing ArcGISGroup");
        chai_1.assert.isFunction(models.Assignment, "Missing Assignment");
        chai_1.assert.isFunction(models.Battalion, "Missing Battalion");
        chai_1.assert.isFunction(models.BeaconLog, "Missing BeaconLog");
        chai_1.assert.isFunction(models.CADIncident, "Missing CADIncident");
        chai_1.assert.isFunction(models.CADIncidentBlock, "Missing CADIncidentBlock");
        chai_1.assert.isFunction(models.CADIncidentStream, "Missing CADIncidentStream");
        chai_1.assert.isFunction(models.CADSimulation, "Missing CADSimulation");
        chai_1.assert.isFunction(models.CADStatus, "Missing CADStatus");
        chai_1.assert.isFunction(models.CADStatusMap, "Missing CADStatusMap");
        chai_1.assert.isFunction(models.CADVehicle, "Missing CADVehicle");
        chai_1.assert.isFunction(models.CADVehicleStatus, "Missing CADVehicleStatus");
        chai_1.assert.isFunction(models.CADVehicleStatusHistory, "Missing CADVehicleStatusHistory");
        chai_1.assert.isFunction(models.ChartDeviceStats, "Missing ChartDeviceStats");
        chai_1.assert.isFunction(models.ChartIncident, "Missing ChartIncident");
        chai_1.assert.isFunction(models.ChartManagedIncident, "Missing ChartManagedIncident");
        chai_1.assert.isFunction(models.ChartUser, "Missing ChartUser");
        chai_1.assert.isFunction(models.Checklist, "Missing Checklist");
        chai_1.assert.isFunction(models.ChecklistItem, "Missing ChecklistItem");
        chai_1.assert.isFunction(models.CSVImport, "Missing CSVImport");
        chai_1.assert.isFunction(models.Department, "Missing Department");
        chai_1.assert.isFunction(models.DeviceMapping, "Missing DeviceMapping");
        chai_1.assert.isFunction(models.Esri, "Missing Esri");
        chai_1.assert.isFunction(models.GSTMapping, "Missing GSTMapping");
        chai_1.assert.isFunction(models.IncidentEvent, "Missing IncidentEvent");
        chai_1.assert.isFunction(models.IncidentNotified, "Missing IncidentNotified");
        chai_1.assert.isFunction(models.IncidentTakeover, "Missing IncidentTakeover");
        chai_1.assert.isFunction(models.JobLog, "Missing JobLog");
        chai_1.assert.isFunction(models.Location, "Missing Location");
        chai_1.assert.isFunction(models.MailLog, "Missing MailLog");
        chai_1.assert.isFunction(models.ManagedIncident, "Missing ManagedIncident");
        chai_1.assert.isFunction(models.Mark43IncidentRetry, "Missing Mark43IncidentRetry");
        chai_1.assert.isFunction(models.Message, "Missing Message");
        chai_1.assert.isFunction(models.Monitor, "Missing Monitor");
        chai_1.assert.isFunction(models.PersonnelImport, "Missing PersonnelImport");
        chai_1.assert.isFunction(models.PersonnelKnown, "Missing PersonnelKnown");
        chai_1.assert.isFunction(models.PersonnelRoster, "Missing PersonnelRoster");
        chai_1.assert.isFunction(models.RateLimit, "Missing RateLimit");
        chai_1.assert.isFunction(models.ReleaseNote, "Missing ReleaseNote");
        chai_1.assert.isFunction(models.RemoteLog, "Missing RemoteLog");
        chai_1.assert.isFunction(models.RemoteLogStream, "Missing RemoteLogStream");
        chai_1.assert.isFunction(models.Session, "Missing Session");
        chai_1.assert.isFunction(models.SMTPUnhandled, "Missing SMTPUnhandled");
        chai_1.assert.isFunction(models.Template, "Missing Template");
        chai_1.assert.isFunction(models.User, "Missing User");
        chai_1.assert.isFunction(models.UserDevice, "Missing UserDevice");
        chai_1.assert.isFunction(models.UserRegistration, "Missing UserRegistration");
        chai_1.assert.isFunction(models.ValidationReport, "Missing ValidationReport");
    });
});
//# sourceMappingURL=0index.js.map