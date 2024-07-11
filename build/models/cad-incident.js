"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cad_incident_1 = require("./schema/cad-incident");
async function CADIncidentModule(mongoose) {
    const modelSchema = (0, cad_incident_1.CADIncidentSchema)(mongoose);
    modelSchema.set("strict", false); // Because we accept all kind of data in
    // Indexes
    modelSchema.index({
        departmentId: 1,
        IncidentNumber: 1
    }, {
        name: "departmentId_1_IncidentNumber_1_unique",
        unique: true,
    });
    return mongoose.model("CADIncident", modelSchema, "massive_incident_cad", { overwriteModels: true });
}
exports.default = CADIncidentModule;
//# sourceMappingURL=cad-incident.js.map