"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeLocationVisibility = void 0;
const uuid = require("uuid");
const lodash_1 = require("lodash");
const helpers_1 = require("../helpers");
const mongoose_lean_virtuals_1 = require("mongoose-lean-virtuals");
const color_1 = require("./schema/color");
const geojson_point_1 = require("./schema/geojson-point");
const constants_1 = require("../constants");
async function LocationModule(mongoose) {
    const { Schema } = mongoose;
    const Color = (0, color_1.default)(mongoose);
    const GeoJSONPoint = (0, geojson_point_1.default)(mongoose);
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
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
        // Legacy (?) - android, android-tc, cad, ipad, iphone, phone, truck
        device_type: {
            type: String,
            required: true,
        },
        // GST, SkyTrack, SkyMira, FleetComplete, Samsara, Somewear, 
        // CAD, Vehicle Modem (Truck), TC, TC Mobile (iOS/Android)
        source: {
            type: String,
        },
        // person, vehicle, fixed-wing, helicopter, marine
        kindType: {
            type: String,
            default: "vehicle",
        },
        // Unstructured, type: "engine", "kind": 1, rego: "FF-1123"
        typeDetails: {
            type: Object,
        },
        active: {
            type: Boolean,
            default: false,
        },
        // TC/TCMobile create duplicate records, with unique session id
        // If a session is closed, this record should be deletable after 
        // the record TTL - department.locationStaleMinutes
        // Any update, active or inactive, would set deleteAfterDate to now + locationStaleMinutes
        // If date is set, and in the past, the record can be deleted
        // A better implementation would have been to use a flag for visible and a flag for active
        // with the clients deleting items not sent via sync
        deleteAfterDate: {
            type: Date,
            default: new Date("2222-01-02T03:04:06.789Z"), // Date in the far future
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
        // Used by sync v4 to mark that any of the properties that are changing rarely were updated
        // active, agencyCode, agencyName, deviceType, opAreaCode, opAreaName, radioName, shared, state
        // When any of them are changed, propsChangedAt will be set to now.
        propsChangedAt: {
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
            default: -9999,
        },
        // in degrees
        heading: {
            type: Number,
            default: 0,
        },
        // meters/sec (* 2.237 to convert to MPH)
        speed: {
            type: Number,
            default: -1,
        },
        // Unsigned 32 Int that gets exposed as OBJECTID to ArcGIS Feature Services
        esriId: {
            type: Number,
            default: 0,
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
        // agency code for shared AVL unit
        agencyCode: {
            type: String,
            default: "",
        },
        agencyName: {
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
        // See propsChangedAt
        colorChangedAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        // combines .sendToCAD, .active, .shared as LocationVisibility[]
        visibility: {
            type: [String],
            default: [],
        },
    }, {});
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
    });
    modelSchema.virtual("id").get(function () {
        return this._id.toHexString();
    });
    modelSchema.virtual("location").get(function () {
        const location = {
            latitude: 0,
            longitude: 0
        };
        if (this && this.locationGeoJSON &&
            this.locationGeoJSON.coordinates &&
            this.locationGeoJSON.coordinates[0] &&
            Number.isFinite(this.locationGeoJSON.coordinates[0]) &&
            this.locationGeoJSON.coordinates[1] &&
            Number.isFinite(this.locationGeoJSON.coordinates[1])) {
            location.longitude = this.locationGeoJSON.coordinates[0];
            location.latitude = this.locationGeoJSON.coordinates[1];
        }
        return location;
    });
    // Create GeoJSON index
    modelSchema.index({
        locationGeoJSON: "2dsphere",
        shared: 1,
        departmentId: 1,
        modified: 1,
    });
    modelSchema.plugin(mongoose_lean_virtuals_1.default);
    modelSchema.set("autoIndex", false);
    return mongoose.model("Location", modelSchema, "massive_location", { overwriteModels: true });
}
exports.default = LocationModule;
function decodeLocationVisibility(str) {
    const out = [];
    if (!(0, lodash_1.isArray)(str)) {
        return out;
    }
    str.forEach((elem) => {
        if (!(0, lodash_1.isString)(elem)) {
            return;
        }
        switch (elem.toLowerCase()) {
            case constants_1.LocationVisibility.Hidden.toLowerCase():
                out.push(constants_1.LocationVisibility.Hidden);
                break;
            case constants_1.LocationVisibility.Visible.toLowerCase():
                out.push(constants_1.LocationVisibility.Visible);
                break;
            case constants_1.LocationVisibility.CAD.toLowerCase():
                out.push(constants_1.LocationVisibility.CAD);
                break;
            case constants_1.LocationVisibility.Shared.toLowerCase():
                out.push(constants_1.LocationVisibility.Shared);
                break;
        }
    });
    return out;
}
exports.decodeLocationVisibility = decodeLocationVisibility;
//# sourceMappingURL=location.js.map