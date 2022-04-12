"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsriModule = exports.EsriSchema = void 0;
// import * as uuid from "uuid";
const helpers_1 = require("../helpers");
const esri_auth_1 = require("./schema/esri-auth");
const esri_error_1 = require("./schema/esri-error");
const esri_map_1 = require("./schema/esri-map");
const esri_token_1 = require("./schema/esri-token");
const firemapper_auth_1 = require("./schema/firemapper-auth");
function EsriSchema(mongoose) {
    const { Schema, Types } = mongoose;
    const EsriAuth = (0, esri_auth_1.default)(mongoose);
    const EsriError = (0, esri_error_1.default)(mongoose);
    const EsriMap = (0, esri_map_1.default)(mongoose);
    const EsriToken = (0, esri_token_1.default)(mongoose);
    const FireMapperAuth = (0, firemapper_auth_1.default)(mongoose);
    const MapProperties = (0, helpers_1.createSchema)(Schema, {
        // ArcGIS Item id
        itemId: {
            type: String,
            default: "",
        },
        download: {
            type: Boolean,
            default: false,
        },
    }, {
        _id: false,
        id: false,
    });
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        // last time when cron updated maps
        runAt: {
            type: Date,
            default: "",
        },
        departmentId: {
            type: Types.ObjectId,
            ref: "Department",
            required: true
        },
        tokenDateExpiry: {
            type: Number,
            default: 0,
        },
        tokenExpiry: {
            type: Date,
            default: "",
        },
        token: {
            type: EsriToken,
            default: null,
        },
        tokenError: {
            type: EsriError,
            default: null,
        },
        auth: {
            type: EsriAuth,
            default: null,
        },
        authError: {
            type: EsriError,
            default: null,
        },
        fireMapperAuth: {
            type: FireMapperAuth,
            default: null,
        },
        // Link to ArcGISGroup
        arcGISGroupIds: {
            type: [String],
            default: [],
        },
        // ArcGIS user used for fallback when a new user has no ArcGIS account yet
        arcGISAuth: {
            type: EsriAuth,
            default: null,
        },
        arcGISMigrated: {
            type: Boolean,
            default: false,
        },
        review: {
            type: Object,
            default: {},
        },
        // last time when review cron was run
        // if date is in the past, we should refresh this
        // at run success, update this date to a date in the future
        reviewRunAt: {
            type: Date,
            default: "",
        },
        // maps
        maps: {
            type: [EsriMap],
            default: []
        },
        // Properties set by user.
        // These are applied by the sync on top of the EsriMap properties
        // saved as { itemId, download, ... }
        mapsProperties: {
            type: [MapProperties],
            default: [],
        },
        // newest modified for EsriMap
        mapLastUpdated: {
            type: Date,
            default: "",
        },
    }, {
        collection: "massive_esri",
    });
    modelSchema.set("autoIndex", false);
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        // Deprecated. Check which apps rely on .id instead of using ._id.
        transform(doc, ret) {
            ret.id = ret._id;
        },
    });
    // Deprecated. Check which apps rely on .id instead of using ._id.
    modelSchema.virtual("id").get(function () {
        return this._id.toHexString();
    });
    return modelSchema;
}
exports.EsriSchema = EsriSchema;
async function EsriModule(mongoose) {
    const modelSchema = EsriSchema(mongoose);
    return (0, helpers_1.createModel)(mongoose, "Esri", modelSchema);
}
exports.EsriModule = EsriModule;
exports.default = EsriModule;
//# sourceMappingURL=esri.js.map