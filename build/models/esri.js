"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsriSchema = void 0;
const esri_auth_1 = require("./schema/esri-auth");
const esri_error_1 = require("./schema/esri-error");
const esri_map_1 = require("./schema/esri-map");
const firemapper_auth_1 = require("./schema/firemapper-auth");
function EsriSchema(mongoose) {
    const { Schema } = mongoose;
    const EsriAuth = (0, esri_auth_1.default)(mongoose);
    const EsriError = (0, esri_error_1.default)(mongoose);
    const EsriMap = (0, esri_map_1.default)(mongoose);
    const FireMapperAuth = (0, firemapper_auth_1.default)(mongoose);
    const MapProperties = new Schema({
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
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
            auto: true,
        },
        // last time when cron updated maps
        runAt: {
            type: Date,
            default: new Date("1970-01-01T00:00:00.000Z"),
        },
        departmentId: {
            type: Schema.Types.ObjectId,
            ref: "Department",
            required: true
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
        // For new accounts, set the default value to true
        arcGISMigrated: {
            type: Boolean,
            default: true,
        },
        review: {
            type: Object,
            default: null,
        },
        // last time when review cron was run
        // if date is in the past, we should refresh this
        // at run success, update this date to a date in the future
        reviewRunAt: {
            type: Date,
            default: null,
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
            default: new Date("1970-01-01T00:00:00.000Z"),
        },
    }, {});
    modelSchema.set("autoIndex", false);
    // Deprecated. Check which apps rely on .id instead of using ._id.
    modelSchema.virtual("id").get(function () {
        return this._id.toHexString();
    });
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
    });
    return modelSchema;
}
exports.EsriSchema = EsriSchema;
async function EsriModule(mongoose) {
    const modelSchema = EsriSchema(mongoose);
    return mongoose.model("Esri", modelSchema, "massive_esri", { overwriteModels: true });
}
exports.default = EsriModule;
//# sourceMappingURL=esri.js.map