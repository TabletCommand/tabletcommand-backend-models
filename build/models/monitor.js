"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorModule = void 0;
const helpers_1 = require("../helpers");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
async function MonitorModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
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
        agencyId: {
            type: String,
            default: ""
        },
        notificationType: {
            type: String,
            default: "",
            required: true,
        },
        status: {
            type: String,
            default: "",
            required: true,
        },
        sentUnixDate: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
    }, {
        collection: "massive_monitor",
    });
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
    });
    modelSchema.virtual("id").get(function () {
        return this._id.toHexString();
    });
    modelSchema.plugin(mongooseLeanVirtuals);
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "Monitor", modelSchema);
}
exports.MonitorModule = MonitorModule;
exports.default = MonitorModule;
//# sourceMappingURL=monitor.js.map