"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function GSTMappingModule(mongoose) {
    const { Schema } = mongoose;
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
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
        modified: {
            type: Date,
            default: helpers_1.currentDate,
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
    }, {});
    modelSchema.set("autoIndex", false);
    return mongoose.model("GSTMapping", modelSchema, "massive_gst_mapping", { overwriteModels: true });
}
exports.default = GSTMappingModule;
//# sourceMappingURL=gst-mapping.js.map