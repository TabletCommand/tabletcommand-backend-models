"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsriModule = void 0;
// import * as uuid from "uuid";
const helpers_1 = require("../helpers");
const esri_auth_1 = require("./schema/esri-auth");
const esri_error_1 = require("./schema/esri-error");
const esri_map_1 = require("./schema/esri-map");
const esri_token_1 = require("./schema/esri-token");
const firemapper_auth_1 = require("./schema/firemapper-auth");
async function EsriModule(mongoose) {
    const { Schema, Types } = mongoose;
    const EsriAuth = esri_auth_1.default(mongoose);
    const EsriError = esri_error_1.default(mongoose);
    const EsriMap = esri_map_1.default(mongoose);
    const EsriToken = esri_token_1.default(mongoose);
    const FireMapperAuth = firemapper_auth_1.default(mongoose);
    const MapProperties = helpers_1.createSchema(Schema, {
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
    });
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
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
        }
    }, {
        collection: "massive_esri",
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
    return helpers_1.createModel(mongoose, "Esri", modelSchema);
}
exports.EsriModule = EsriModule;
exports.default = EsriModule;
//# sourceMappingURL=esri.js.map