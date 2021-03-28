"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationModule = void 0;
const _ = require("lodash");
const uuid = require("uuid");
const helpers_1 = require("../helpers");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
const geojson_point_1 = require("./schema/geojson-point");
async function LocationModule(mongoose) {
    const { Schema, Types } = mongoose;
    const GeoJSONPoint = geojson_point_1.default(mongoose);
    const modelSchemaDefinition = helpers_1.createSchemaDefinition({
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
            default: () => uuid.v4(), // Needs to be so because has a bad type for declaration generation
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
        version: {
            type: Number,
            default: 2,
        },
        session: {
            type: String,
            default: "",
        },
        heading: {
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
    });
    const modelSchema = helpers_1.createSchema(Schema, modelSchemaDefinition, {
        collection: "massive_location",
    }, {
        propagateToObject(dbItem, callback) {
            if (!_.isObject(dbItem)) {
                return callback(this);
            }
            // We keep the same value for _id, uuid, departmentId
            dbItem.userId = this.userId;
            dbItem.username = this.username;
            dbItem.device_type = this.device_type;
            dbItem.active = this.active;
            dbItem.modified_unix_date = this.modified_unix_date;
            dbItem.version = this.version;
            dbItem.session = this.session;
            dbItem.location.latitude = this.location.latitude;
            dbItem.location.longitude = this.location.longitude;
            dbItem.locationGeoJSON = this.locationGeoJSON;
            return callback(dbItem);
        },
    });
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
    });
    modelSchema.virtual("id").get(function () {
        // tslint:disable-next-line: no-unsafe-any
        return this._id.toString();
    });
    // Create GeoJSON index
    modelSchema.index({
        locationGeoJSON: "2dsphere",
        shared: 1,
        departmentId: 1,
        modified_unix_date: 1,
    });
    modelSchema.plugin(mongooseLeanVirtuals);
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "Location", modelSchema);
}
exports.LocationModule = LocationModule;
exports.default = LocationModule;
//# sourceMappingURL=location.js.map