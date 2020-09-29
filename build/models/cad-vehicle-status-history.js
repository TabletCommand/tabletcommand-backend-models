"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CADVehicleStatusHistoryModule = void 0;
const helpers_1 = require("../helpers");
const cad_status_option_selected_1 = require("./schema/cad-status-option-selected");
async function CADVehicleStatusHistoryModule(mongoose) {
    const { Schema } = mongoose;
    const CADStatusOptionSelected = cad_status_option_selected_1.default(mongoose);
    const modelSchemaConfig = helpers_1.createSchemaDefinition({
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        vehicleId: {
            type: String,
            default: "",
            required: true,
            index: true,
            minlength: 1,
        },
        radioName: {
            type: String,
            default: "",
            required: true,
            minlength: 1,
        },
        status: {
            type: String,
            default: "",
            minlength: 1,
        },
        statusCode: {
            type: String,
            default: "",
            minlength: 1,
        },
        requestedAt: {
            type: Number,
            default: 0,
            min: 1,
        },
        requestDelay: {
            type: Number,
            default: 0,
        },
        requestedBy: {
            type: String,
            default: "",
        },
        incidentNumber: {
            type: String,
            default: "",
        },
        options: {
            type: [CADStatusOptionSelected],
            default: [],
        },
    });
    const modelSchema = helpers_1.createSchema(Schema, modelSchemaConfig, {
        collection: "massive_cad_vehicle_status_history",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "CADVehicleStatusHistory", modelSchema);
}
exports.CADVehicleStatusHistoryModule = CADVehicleStatusHistoryModule;
exports.default = CADVehicleStatusHistoryModule;
//# sourceMappingURL=cad-vehicle-status-history.js.map