"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
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
        autoIndex: false,
        toJSON: {
            versionKey: false,
        }
    });
    return mongoose.model("JobLog", modelSchema, "massive_job_log", { overwriteModels: true });
}
exports.default = JobLogModule;
//# sourceMappingURL=job-log.js.map