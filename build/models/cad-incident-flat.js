"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CADIncidentFlatModule = void 0;
const helpers_1 = require("../helpers");
const cad_incident_1 = require("./schema/cad-incident");
async function CADIncidentFlatModule(mongoose) {
    const modelSchema = (0, cad_incident_1.CADIncidentSchema)(mongoose);
    modelSchema.set("collection", "massive_cad_incident_flat");
    modelSchema.set("strict", true);
    return (0, helpers_1.createModel)(mongoose, "CADIncidentFlat", modelSchema);
}
exports.CADIncidentFlatModule = CADIncidentFlatModule;
exports.default = CADIncidentFlatModule;
//# sourceMappingURL=cad-incident-flat.js.map