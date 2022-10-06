"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobLogModule = void 0;
const helpers_1 = require("../helpers");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
async function JobLogModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        host: {
            type: String,
            default: "",
        },
        bidDate: {
            type: Date,
            default: helpers_1.currentDate,
        },
        startDate: {
            type: Date,
        },
        completedDate: {
            type: Date,
        },
        state: {
            type: String,
        },
        forceClosed: {
            type: Boolean,
        },
    }, {
        collection: "massive_job_log",
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
    return (0, helpers_1.createModel)(mongoose, "JobLog", modelSchema);
}
exports.JobLogModule = JobLogModule;
exports.default = JobLogModule;
//# sourceMappingURL=job-log.js.map