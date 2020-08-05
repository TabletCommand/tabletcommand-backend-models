"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CADVehicleStatusModule = void 0;
const uuid = require("uuid");
const _ = require("lodash");
const helpers_1 = require("../helpers");
async function CADVehicleStatusModule(mongoose) {
    const Schema = mongoose.Schema;
    const CADStatusOptionSelected = helpers_1.createSchema(Schema, {
        name: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "string",
        },
        value: {
            type: String,
            default: "",
        },
        key: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    const modelSchemaConfig = helpers_1.createSchemaDefinition({
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
    }, {
        propagateToObject(dbItem, callback) {
            if (!_.isObject(dbItem)) {
                return callback(this);
            }
            // We keep the same value for _id, uuid, departmentId
            dbItem.vehicleId = this.vehicleId;
            dbItem.radioName = this.radioName;
            dbItem.requestTime = this.requestTime;
            dbItem.responseTime = this.responseTime;
            dbItem.status = this.status;
            dbItem.statusCode = this.statusCode;
            dbItem.modifiedDate = this.modifiedDate;
            dbItem.requestStatus = this.requestStatus;
            dbItem.owner = this.owner;
            dbItem.incidentNumber = this.incidentNumber;
            dbItem.options = this.options;
            return callback(dbItem);
        },
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "CADVehicleStatus", modelSchema);
}
exports.CADVehicleStatusModule = CADVehicleStatusModule;
exports.default = CADVehicleStatusModule;
//# sourceMappingURL=cad-vehicle-status.js.map