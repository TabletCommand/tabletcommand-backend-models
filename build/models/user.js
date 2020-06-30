"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function UserModule(mongoose) {
    const Schema = mongoose.Schema;
    const vehicleSchema = helpers_1.createSchema(Schema, {
        radioName: {
            type: String,
            default: "",
        },
        vehicleId: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    const soundSchema = helpers_1.createSchema(Schema, {
        sound: {
            type: String,
        },
        soundType: {
            type: String,
        },
    }, {
        _id: false,
    });
    const Agency = (await Promise.resolve().then(() => require("./schema/cad-agency"))).CADAgency(mongoose);
    const modelSchema = helpers_1.createSchema(Schema, {
        nick: {
            type: String,
            default: "",
            index: true,
        },
        email: {
            type: String,
            default: "",
            index: true,
        },
        name: {
            type: String,
            default: "",
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        modified_date: {
            type: Date,
            default: helpers_1.currentDate,
        },
        when: {
            type: Date,
        },
        agency: {
            type: Agency,
            default: null,
        },
        agencyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Agency"
        },
        active: {
            type: Boolean,
            default: false,
        },
        admin: {
            type: Boolean,
            default: false,
        },
        superuser: {
            type: Boolean,
            default: false,
        },
        isPro: {
            type: Boolean,
            default: false,
        },
        outsider: {
            type: Boolean,
            default: false,
        },
        remoteLoggingEnabled: {
            type: Boolean,
            default: false,
        },
        // Share Phone Location
        shareLocationEnabled: {
            type: Boolean,
            default: false,
        },
        beaconEnabled: {
            type: Boolean,
            default: false,
        },
        userContributionEnabled: {
            type: Boolean,
            default: false,
        },
        syncLoggingExpireDate: {
            type: Date,
            default: null
        },
        salt: {
            type: String,
            default: "",
            select: false,
        },
        pass: {
            type: String,
            default: "",
            select: false,
        },
        mapHidden: {
            type: Boolean,
            default: true,
        },
        mapId: {
            type: String,
            default: "",
        },
        vehicle: {
            type: vehicleSchema,
            default: null,
        },
        sessionCountiPhone: {
            type: Number,
            default: 1,
        },
        sessionCountiPad: {
            type: Number,
            default: 1,
        },
        rtsAuthKey: {
            type: String,
            default: "",
        },
        token: {
            type: String,
            default: "",
        },
        tokenExpireDate: {
            type: Number,
            default: 0,
        },
        shareLocationPhone: {
            type: Boolean,
            default: false,
        },
        shareLocationTablet: {
            type: Boolean,
            default: true,
        },
        notificationSounds: {
            type: [soundSchema],
            default: []
        },
    }, {
        collection: "sys_user",
    });
    modelSchema.set("autoIndex", false);
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        transform(doc, ret) {
            ret.id = ret._id;
        },
    });
    modelSchema.virtual("id").get(function () {
        return this._id.toHexString();
    });
    return helpers_1.createModel(mongoose, "User", modelSchema);
}
exports.UserModule = UserModule;
exports.default = UserModule;
//# sourceMappingURL=user.js.map