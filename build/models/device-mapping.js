"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function DeviceMappingModule(mongoose) {
    const { Schema } = mongoose;
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
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
            trim: true,
            default: "",
        },
        deviceId: {
            type: String,
            trim: true,
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
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        active: {
            type: Boolean,
            default: true,
        },
        remoteAddress: {
            type: String,
            trim: true,
            default: "0.0.0.0",
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        note: {
            type: String,
            trim: true,
            default: "",
        },
        mapHidden: {
            type: Boolean,
            default: false,
        },
    }, {});
    modelSchema.set("autoIndex", false);
    return mongoose.model("DeviceMapping", modelSchema, "massive_device_mapping", { overwriteModels: true });
}
exports.default = DeviceMappingModule;
//# sourceMappingURL=device-mapping.js.map