"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
async function JobLogModule(mongoose) {
    const { Schema } = mongoose;
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
            auto: true,
        },
        jobName: {
            type: String,
            default: "",
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
            default: false,
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
    return mongoose.model("JobLog", modelSchema);
}
exports.default = JobLogModule;
//# sourceMappingURL=job-log.js.map