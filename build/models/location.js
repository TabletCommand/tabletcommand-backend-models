"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
const color_1 = require("./schema/color");
const geojson_point_1 = require("./schema/geojson-point");
async function LocationModule(mongoose) {
    const { Schema, Types } = mongoose;
    const Color = (0, color_1.default)(mongoose);
    const GeoJSONPoint = (0, geojson_point_1.default)(mongoose);
    const modelSchemaDefinition = (0, helpers_1.createSchemaDefinition)({
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        userId: {
            type: String,
            default: "",
            required: true,
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        username: {
            type: String,
            default: "",
            required: true,
        },
        device_type: {
            type: String,
            required: true,
        },
        active: {
            type: Boolean,
            default: false,
        },
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        // Date provided by CAD
        movedAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        version: {
            type: Number,
            default: 2,
        },
        session: {
            type: String,
            default: "",
        },
        // in meters
        altitude: {
            type: Number,
            default: 0,
        },
        // in degrees
        heading: {
            type: Number,
            default: 0,
        },
        // meters/sec (* 2.237 to convert to MPH)
        speed: {
            type: Number,
            default: 0,
        },
        // Unsigned 32 Int that gets exposed as OBJECTID to ArcGIS Feature Services
        esriId: {
            type: Number,
            default: 0,
        },
        location: {
            longitude: {
                type: Number,
                required: true,
                default: 0,
            },
            latitude: {
                type: Number,
                required: true,
                default: 0,
            },
        },
        // Shared AVL
        locationGeoJSON: {
            type: GeoJSONPoint,
            default: null,
        },
        // opAreaCode for shared AVL unit
        opAreaCode: {
            type: String,
            default: "",
        },
        opAreaName: {
            type: String,
            default: "",
        },
        // Copied from the department setting
        shared: {
            type: Boolean,
            default: false,
        },
        state: {
            type: String,
            default: "",
        },
        sendToCAD: {
            type: Boolean,
            default: false,
        },
        // Status color:
        color: {
            type: Color,
            default: null,
        },
    });
    const modelSchema = (0, helpers_1.createSchema)(Schema, modelSchemaDefinition, {
        collection: "massive_location",
    });
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
    });
    modelSchema.virtual("id").get(function () {
        return this._id.toHexString();
    });
    // Create GeoJSON index
    modelSchema.index({
        locationGeoJSON: "2dsphere",
        shared: 1,
        departmentId: 1,
        modified_unix_date: 1,
    });
    modelSchema.index({
        locationGeoJSON: "2dsphere",
        shared: 1,
        departmentId: 1,
        modified: 1,
    });
    modelSchema.plugin(mongooseLeanVirtuals);
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "Location", modelSchema);
}
exports.LocationModule = LocationModule;
exports.default = LocationModule;
//# sourceMappingURL=location.js.map