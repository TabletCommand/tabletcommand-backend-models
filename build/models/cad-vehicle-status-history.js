"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CADVehicleStatusHistoryModule = void 0;
const helpers_1 = require("../helpers");
const cad_status_option_selected_1 = require("./schema/cad-status-option-selected");
async function CADVehicleStatusHistoryModule(mongoose) {
    const { Schema } = mongoose;
    const CADStatusOptionSelected = (0, cad_status_option_selected_1.default)(mongoose);
    const modelSchemaConfig = (0, helpers_1.createSchemaDefinition)({
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        vehicleId: {
            type: String,
            default: "",
            index: true,
        },
        radioName: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            default: "",
        },
        statusCode: {
            type: String,
            default: "",
        },
        requestedAt: {
            type: Number,
            default: 0,
            min: 1,
        },
        requested: {
            type: Date,
            default: helpers_1.currentDate,
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
        // Rejection reason
        e: {
            type: String,
            default: "",
        },
        locationCurrent: {
            type: String,
            default: "",
        },
        locationDestination: {
            type: String,
            default: "",
        },
    });
    const modelSchema = (0, helpers_1.createSchema)(Schema, modelSchemaConfig, {
        collection: "massive_cad_vehicle_status_history",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "CADVehicleStatusHistory", modelSchema);
}
exports.CADVehicleStatusHistoryModule = CADVehicleStatusHistoryModule;
exports.default = CADVehicleStatusHistoryModule;
//# sourceMappingURL=cad-vehicle-status-history.js.map