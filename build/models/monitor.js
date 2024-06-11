"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
async function MonitorModule(mongoose) {
    const { Schema } = mongoose;
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
        sentAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        ticketId: {
            type: String,
            default: "",
        },
        // Manually incremented when a certain failure has occurred (status = "active")
        // Currently, has no effect for "restored".
        count: {
            type: Number,
            default: 1,
        },
    }, {
        collection: "massive_monitor",
    });
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
    });
    modelSchema.plugin(mongooseLeanVirtuals);
    modelSchema.set("autoIndex", false);
    return mongoose.model("Monitor", modelSchema);
}
exports.default = MonitorModule;
//# sourceMappingURL=monitor.js.map