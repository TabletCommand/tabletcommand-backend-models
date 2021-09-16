"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeviceModule = void 0;
const helpers_1 = require("../helpers");
async function UserDeviceModule(mongoose) {
    const { Schema, Types } = mongoose;
    const UnitSetting = (0, helpers_1.createSchema)(Schema, {
        radioName: {
            type: String,
            default: "",
        },
        notificationType: {
            type: String,
            default: "",
        },
        notificationMode: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    const IncidentSetting = (0, helpers_1.createSchema)(Schema, {
        incidentType: {
            type: String,
            default: "",
        },
        notificationType: {
            type: String,
            default: "",
        },
        notificationMode: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    const deviceSchema = (0, helpers_1.createSchema)(Schema, {
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
        criticalAlertsEnabled: {
            type: Boolean,
            default: false,
        },
        session: {
            type: String,
            default: "",
        },
        // Remove this after all the code is updated to use the device.offDuty flag
        active: {
            type: Boolean,
            default: true,
        },
        // Rename active to offDuty, to match the userDevice.offDuty flag
        offDuty: {
            type: Boolean,
            default: false,
        },
    }, {
        _id: false,
    });
    const soundSchemaItem = (0, helpers_1.createSchema)(Schema, {
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
    const soundSchema = (0, helpers_1.createSchema)(Schema, {
        ios: {
            type: soundSchemaItem,
        },
        android: {
            type: soundSchemaItem,
        },
    }, {
        _id: false,
    });
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
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
        // Legacy settings, will be removed when release is complete
        notificationUnits: {
            type: [String],
            default: [],
        },
        notificationIncidentTypes: {
            type: [String],
            default: [],
        },
        notificationUnitSettings: {
            type: [UnitSetting],
            default: []
        },
        notificationIncidentSettings: {
            type: [IncidentSetting],
            default: []
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
        criticalAlertsVolume: {
            type: String,
            default: "MED",
        },
    }, {
        collection: "massive_user_device",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "UserDevice", modelSchema);
}
exports.UserDeviceModule = UserDeviceModule;
exports.default = UserDeviceModule;
//# sourceMappingURL=user-device.js.map