"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GSTMappingModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function GSTMappingModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: String,
            default: "",
        },
        gstAgency: {
            type: String,
            default: "",
        },
        deviceType: {
            type: String,
            default: "gst",
        },
        unitId: {
            type: String,
            default: "",
        },
        location: {
            longitude: {
                type: Number,
            },
            latitude: {
                type: Number,
            },
        },
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
        active: {
            type: Boolean,
            default: true,
        },
        mapHidden: {
            type: Boolean,
            default: false,
        },
        remoteAddress: {
            type: String,
            default: "0.0.0.0",
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        note: {
            type: String,
            default: "",
        },
    }, {
        collection: "massive_gst_mapping",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "GSTMapping", modelSchema);
}
exports.GSTMappingModule = GSTMappingModule;
exports.default = GSTMappingModule;
//# sourceMappingURL=gst-mapping.js.map