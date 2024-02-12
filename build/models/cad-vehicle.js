"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CADVehicleModule = void 0;
const helpers_1 = require("../helpers");
const uuid = require("uuid");
async function CADVehicleModule(mongoose) {
    const Schema = mongoose.Schema;
    const Station = (0, helpers_1.createSchema)(Schema, {
        code: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        // Internal
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
        modifiedDate: {
            type: Number,
            default: 0,
            min: 1,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        // Provided by CAD
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
        station: {
            type: Station,
            default: null,
        },
        capability: {
            type: String,
            default: "",
        },
        // Internal
        mapHidden: {
            type: Boolean,
            default: false,
        },
        locationToCAD: {
            type: Boolean,
            default: false
        },
        backupDate: {
            type: Date,
        },
    }, {
        collection: "massive_cad_vehicle",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "CADVehicle", modelSchema);
}
exports.CADVehicleModule = CADVehicleModule;
exports.default = CADVehicleModule;
//# sourceMappingURL=cad-vehicle.js.map