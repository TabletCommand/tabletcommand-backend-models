"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
const esri_auth_1 = require("./schema/esri-auth");
const esri_error_1 = require("./schema/esri-error");
const pubnub_token_1 = require("./schema/pubnub-token");
const mongoose_1 = require("mongoose");
function UserSchema(mongoose) {
    const { Schema } = mongoose;
    const EsriAuth = (0, esri_auth_1.default)(mongoose);
    const EsriError = (0, esri_error_1.default)(mongoose);
    const PubNubToken = (0, pubnub_token_1.default)(mongoose);
    const VehicleSchema = new Schema({
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
        id: false,
    });
    const modelSchema = new Schema({
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
        agencyId: {
            type: Schema.Types.ObjectId,
            ref: "Agency",
            default: null,
        },
        managedAgencies: {
            type: [mongoose_1.Types.ObjectId],
            ref: "Agency",
            default: []
        },
        active: {
            type: Boolean,
            default: false,
        },
        // These should go to roles
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
        // Allows the user to manage incidents
        isIncidentManager: {
            type: Boolean,
            default: false,
        },
        mobileAccess: {
            type: Boolean,
            default: true,
        },
        webAccess: {
            type: Boolean,
            default: false,
        },
        cadSimulatorAccess: {
            type: Boolean,
            default: false,
        },
        // End fake roles
        // If allowed, a user can add(select)/remove their own vehicle
        // A user can change vehicle regardless of the value of this flag
        canAddRemoveVehicle: {
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
        beacons: {
            type: [String],
            default: [],
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
        auth: {
            type: [String],
            default: ["password"], // password, saml, o-google, o-microsoft
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
            type: VehicleSchema,
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
        // PubNub - should go to a different collection
        rtsAuthKey: {
            type: String,
            default: "",
        },
        pubNubV2: {
            type: PubNubToken,
            default: null,
        },
        pubNubV3: {
            type: PubNubToken,
            default: null,
        },
        socketIO: {
            type: PubNubToken,
            default: null,
        },
        // Password Reset
        token: {
            type: String,
            default: "",
        },
        tokenExpireAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        // Share Phone Location
        shareLocationPhone: {
            type: Boolean,
            default: false,
        },
        shareLocationTablet: {
            type: Boolean,
            default: true,
        },
        offlineMapsEnabled: {
            type: Boolean,
            default: false,
        },
        fireMapperProEnabled: {
            type: Boolean,
            default: false,
        },
        // ArcGIS Auth. These fields is named auth/authError in the main collection
        // These store the users' arcGISAuth (new account)
        arcGISAuth: {
            type: EsriAuth,
            default: null,
        },
        arcGISAuthError: {
            type: EsriError,
            default: null,
        },
        // Off Duty Allowed for this user
        offDutyEnabled: {
            type: Boolean,
            default: false,
        },
        webMapSettings: {
            defaultZoomLevel: {
                type: Number,
            },
            defaultCenter: {
                type: [Number],
                default: [],
            },
            defaultMap: {
                type: String
            },
        },
        locationToCAD: {
            type: Boolean,
            default: false
        },
        logOffEnabled: {
            type: Boolean,
            default: false
        },
        restrictedCommentsEnabled: {
            type: Boolean,
            default: false,
        }
    }, {
        autoIndex: false,
    });
    // NO _id on User schema?
    modelSchema.virtual("id").get(function () {
        return this._id.toHexString();
    });
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
    });
    return modelSchema;
}
exports.UserSchema = UserSchema;
async function UserModule(mongoose) {
    const modelSchema = UserSchema(mongoose);
    return mongoose.model("User", modelSchema, "sys_user", { overwriteModels: true });
}
exports.default = UserModule;
//# sourceMappingURL=user.js.map