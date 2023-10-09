"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CADIncidentModule = void 0;
const helpers_1 = require("../helpers");
const cad_incident_1 = require("./schema/cad-incident");
async function CADIncidentModule(mongoose) {
    const modelSchema = (0, cad_incident_1.CADIncidentSchema)(mongoose);
    modelSchema.set("collection", "massive_incident_cad");
    modelSchema.set("strict", false); // Because we accept all kind of data in
    // Indexes
    modelSchema.index({
        departmentId: 1,
        IncidentNumber: 1
    }, {
        unique: true,
    });
    return (0, helpers_1.createModel)(mongoose, "CADIncident", modelSchema);
}
exports.CADIncidentModule = CADIncidentModule;
exports.default = CADIncidentModule;
//# sourceMappingURL=cad-incident.js.map