"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const uuid = require("uuid");
async function CADVehicleModule(mongoose) {
    const Schema = mongoose.Schema;
    const Station = helpers_1.createSchema(Schema, {
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
    });
    const modelSchema = helpers_1.createSchema(Schema, {
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
        mapHidden: {
            type: Boolean,
            default: false,
        },
        capability: {
            type: String,
            default: "",
        },
    }, {
        collection: "massive_cad_vehicle",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "CADVehicle", modelSchema);
}
exports.CADVehicleModule = CADVehicleModule;
exports.default = CADVehicleModule;
//# sourceMappingURL=cad-vehicle.js.map