"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeviceModule = void 0;
const helpers_1 = require("../helpers");
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
        ver: {
            type: String,
            default: "",
        },
        ua: {
            type: String,
            default: "",
        },
        time: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
        t: {
            type: Date,
            default: helpers_1.currentDate,
        },
        drift: {
            type: Number,
            default: 0
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
        active: {
            type: Boolean,
            default: true,
        },
    }, {
        _id: false,
    });
    const soundSchemaItem = helpers_1.createSchema(Schema, {
        sound: {
            type: String,
        },
        soundType: {
            type: String,
        },
        os: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    const soundSchema = helpers_1.createSchema(Schema, {
        ios: {
            type: soundSchemaItem,
        },
        android: {
            type: soundSchemaItem,
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
        notificationSounds: {
            type: soundSchema,
            default: {},
        },
        // When off-duty is true, the device active is flag is set to false
        offDuty: {
            type: Boolean,
            default: false,
        },
        criticalAlerts: {
            type: Boolean,
            default: false,
        }
    }, {
        collection: "massive_user_device",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "UserDevice", modelSchema);
}
exports.UserDeviceModule = UserDeviceModule;
exports.default = UserDeviceModule;
//# sourceMappingURL=user-device.js.map