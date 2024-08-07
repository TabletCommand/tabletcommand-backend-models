"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const helpers_1 = require("../helpers");
const cad_status_option_selected_1 = require("./schema/cad-status-option-selected");
async function CADVehicleStatusModule(mongoose) {
    const { Schema } = mongoose;
    const CADStatusOptionSelected = (0, cad_status_option_selected_1.default)(mongoose);
    const Destination = new Schema({
        // eg 1234 Main St
        address: {
            type: String,
            default: "",
        },
        // eg General Hospital
        name: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const modelSchema = new Schema({
        uuid: {
            type: String,
            index: true,
            default: uuid.v4,
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
        // Max of requestTime/responseTime
        changedAt: {
            type: Date,
            default: new Date("2000-01-02T03:04:06.789Z"), // Date in the past
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
        ownerId: {
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
        locationCurrent: {
            type: String,
            default: "",
        },
        locationDestination: {
            type: String,
            default: "",
        },
        // parsed from `locationDestination`
        destination: {
            type: Destination,
            default: null,
        },
        // Used by frontend
        assignableByUser: {
            type: Boolean,
            default: false,
        },
        backupDate: {
            type: Date,
        },
    }, {});
    modelSchema.set("autoIndex", false);
    return mongoose.model("CADVehicleStatus", modelSchema, "massive_cad_vehicle_status", { overwriteModels: true });
}
exports.default = CADVehicleStatusModule;
//# sourceMappingURL=cad-vehicle-status.js.map