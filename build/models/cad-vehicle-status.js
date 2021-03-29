"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CADVehicleStatusModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
const cad_status_option_selected_1 = require("./schema/cad-status-option-selected");
async function CADVehicleStatusModule(mongoose) {
    const { Schema } = mongoose;
    const CADStatusOptionSelected = cad_status_option_selected_1.default(mongoose);
    const modelSchemaConfig = helpers_1.createSchemaDefinition({
        uuid: {
            type: String,
            index: true,
            default: () => uuid.v4(), // Needs to be so because has a bad type for declaration generation
        },
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
            minlength: 1,
        },
        radioName: {
            type: String,
            default: "",
            required: true,
            minlength: 1,
        },
        requestTime: {
            type: Number,
            default: 0,
        },
        responseTime: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            default: "",
            required: true,
            minlength: 1,
        },
        statusCode: {
            type: String,
            default: "",
            required: true,
            minlength: 1,
        },
        modifiedDate: {
            type: Number,
            default: 0,
            min: 1,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        requestStatus: {
            type: Number,
            default: 0,
        },
        owner: {
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
        capability: {
            type: String,
            default: "",
        },
    });
    const modelSchema = helpers_1.createSchema(Schema, modelSchemaConfig, {
        collection: "massive_cad_vehicle_status",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "CADVehicleStatus", modelSchema);
}
exports.CADVehicleStatusModule = CADVehicleStatusModule;
exports.default = CADVehicleStatusModule;
//# sourceMappingURL=cad-vehicle-status.js.map