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
        name: "departmentId_1_IncidentNumber_1_unique",
        unique: true,
    });
    // Search index as alternative to Atlas Search
    modelSchema.index({
        departmentId: 1,
        AgencyIncidentCallTypeDescription: "text",
        CityOrLocality: "text",
        CommonPlaceName: "text",
        cross_streets: "text",
        full_address: "text",
        IncidentNumber: "text",
        LocationComment: "text",
        "units.UnitID": "text",
    }, {
        name: "departmentId_1_search_text",
    });
    return (0, helpers_1.createModel)(mongoose, "CADIncident", modelSchema);
}
exports.CADIncidentModule = CADIncidentModule;
exports.default = CADIncidentModule;
//# sourceMappingURL=cad-incident.js.map