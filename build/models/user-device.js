"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
async function UserDeviceModule(mongoose) {
    const { Schema, Types } = mongoose;
    const deviceSchema = helpers_1.createSchema(Schema, {
        token: {
            type: String,
            default: "",
        },
        env: {
            type: String,
            default: "",
        },
        ua: {
            type: String,
            default: "",
        },
        time: {
            type: Number,
            default: new Date().valueOf() / 1000.0,
        },
        bundleIdentifier: {
            type: String,
            default: "",
        },
        silentEnabled: {
            type: Boolean,
            default: false,
        },
        richEnabled: {
            type: Boolean,
            default: false,
        },
        session: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        userId: {
            type: String,
        },
        departmentId: {
            type: String,
        },
        devices: {
            type: [deviceSchema],
            default: [],
        },
        notificationCount: {
            type: Number,
            default: 0,
        },
        notificationUnits: {
            type: [String],
            default: [],
        },
        notificationIncidentTypes: {
            type: [String],
            default: [],
        },
    }, {
        collection: "massive_user_device",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "UserDevice", modelSchema);
}
exports.UserDeviceModule = UserDeviceModule;
exports.default = UserDeviceModule;
//# sourceMappingURL=user-device.js.map