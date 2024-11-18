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
        // person, vehicle, fixed-wing, helicopter, vessel
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
    }, {
        autoIndex: false,
        toJSON: {
            virtuals: true,
            versionKey: false,
        }
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
    modelSchema.index({
        active: 1,
        shared: 1,
        departmentId: 1,
        movedAt: 1
    }, {
        name: "active_1_shared_1_departmentId_1_movedAt_1",
    });
    modelSchema.index({
        departmentId: 1,
        active: 1,
        movedAt: 1
    }, {
        name: "departmentId_1_active_1_movedAt_1",
    });
    modelSchema.index({
        departmentId: 1,
        agencyCode: 1,
        agencyName: 1,
        modified: 1
    }, {
        name: "departmentId_1_agencyCode_1_agencyName_1_modified_1",
    });
    modelSchema.index({
        departmentId: 1,
        modified: 1,
    }, {
        name: "departmentId_1_modified_1",
    });
    modelSchema.index({
        departmentId: 1,
        modified: 1,
        movedAt: 1,
    }, {
        name: "departmentId_1_modified_1_movedAt_1",
    });
    modelSchema.index({
        departmentId: 1,
        opAreaCode: 1
    }, {
        name: "departmentId_1_opAreaCode_1",
    });
    modelSchema.index({
        departmentId: 1,
        opAreaName: 1
    }, {
        name: "departmentId_1_opAreaName_1",
    });
    modelSchema.index({
        departmentId: 1,
        session: 1,
        device_type: 1
    }, {
        name: "departmentId_1_session_1_deviceType_1_unique",
        unique: true,
    });
    modelSchema.index({
        departmentId: 1,
        shared: 1
    }, {
        name: "departmentId_1_shared_1",
    });
    modelSchema.index({
        departmentId: 1,
        state: 1
    }, {
        name: "departmentId_1_state_1",
    });
    modelSchema.index({
        departmentId: 1,
        username: 1
    }, {
        name: "departmentId_1_username_1",
    });
    modelSchema.index({
        departmentId: 1,
        device_type: 1,
        userId: 1,
        active: 1
    }, {
        name: "departmentId_deviceType_userId_active",
    });
    modelSchema.index({
        esriId: 1,
        modified: 1
    }, {
        name: "esriId_1_modified_1",
    });
    modelSchema.index({
        session: 1,
        userId: 1
    }, {
        name: "session_1_userId_1",
    });
    // Create GeoJSON index
    modelSchema.index({
        // This seems to need to be the first position, otherwise the query plan selects the wrong index (?)
        locationGeoJSON: "2dsphere",
        shared: 1,
        modified: 1,
        movedAt: 1,
        // departmentId: 1,
    }, {
        name: "shared_1_modified_1_movedAt_1_locationGeoJSON_2dsphere",
        "2dsphereIndexVersion": 3
    });
    // Expire data after 45d
    modelSchema.index({
        movedAt: -1,
    }, {
        name: "ttl_45d_movedAt_-1",
        expireAfterSeconds: 3888000,
    });
    modelSchema.index({
        uuid: 1,
    }, {
        name: "uuid_1_unique",
        unique: true,
    });
    modelSchema.plugin(mongoose_lean_virtuals_1.mongooseLeanVirtuals);
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