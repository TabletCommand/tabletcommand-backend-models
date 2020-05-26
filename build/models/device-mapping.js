"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceMappingModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function DeviceMappingModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: String,
            default: "",
        },
        userId: {
            type: String,
            default: "",
        },
        deviceType: {
            type: String,
            default: "truck",
        },
        mapId: {
            type: String,
            default: "",
        },
        deviceId: {
            type: String,
            default: "",
        },
        location: {
            longitude: {
                type: Number,
            },
            latitude: {
                type: Number,
            },
        },
        modified_unix_date: {
            type: Number,
            default: 0,
        },
        active: {
            type: Boolean,
            default: true,
        },
        remoteAddress: {
            type: String,
            default: "0.0.0.0",
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        note: {
            type: String,
            default: "",
        },
    }, {
        collection: "massive_device_mapping",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "DeviceMapping", modelSchema);
}
exports.DeviceMappingModule = DeviceMappingModule;
exports.default = DeviceMappingModule;
//# sourceMappingURL=device-mapping.js.map