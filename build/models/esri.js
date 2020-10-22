"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsriModule = void 0;
// import * as uuid from "uuid";
const helpers_1 = require("../helpers");
const esri_auth_1 = require("./schema/esri-auth");
const esri_error_1 = require("./schema/esri-error");
const esri_map_1 = require("./schema/esri-map");
const esri_token_1 = require("./schema/esri-token");
async function EsriModule(mongoose) {
    const { Schema, Types } = mongoose;
    const EsriAuth = esri_auth_1.default(mongoose);
    const EsriError = esri_error_1.default(mongoose);
    const EsriMap = esri_map_1.default(mongoose);
    const EsriToken = esri_token_1.default(mongoose);
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
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
            type: EsriAuth,
            default: null,
        },
        // maps
        maps: {
            type: [EsriMap],
            default: []
        },
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